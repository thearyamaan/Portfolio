"use client";

import { useMemo, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { analytics } from "@/data/profile";
import { Section, Reveal } from "@/components/ui";

/* --------------------------------- money --------------------------------- */

function inrCompact(v) {
  if (!isFinite(v)) return "—";
  if (v >= 1e7) return `₹${(v / 1e7).toFixed(2)} Cr`;
  if (v >= 1e5) return `₹${(v / 1e5).toFixed(2)} L`;
  if (v >= 1e3) return `₹${(v / 1e3).toFixed(1)} K`;
  return `₹${Math.round(v)}`;
}

const inrFull = (v) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(v));

/* ---------------------------------- math --------------------------------- */

// Annuity due: A = P · [((1+i)^n − 1) / i] · (1+i)
function sipFutureValue(monthly, annualRatePct, months) {
  const i = annualRatePct / 12 / 100;
  if (i === 0) return monthly * months;
  return monthly * ((Math.pow(1 + i, months) - 1) / i) * (1 + i);
}

const lumpFutureValue = (p, r, t) => p * Math.pow(1 + r / 100, t);
const fdFutureValue = (p, r, t) => p * Math.pow(1 + r / 400, 4 * t);

/* -------------------------------- controls ------------------------------- */

function Slider({ label, value, onChange, min, max, step, display }) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between">
        <span className="text-[13px] text-muted">{label}</span>
        <span className="num text-[14px] text-ivory">{display}</span>
      </span>
      <input
        type="range"
        className="mt-3"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
      />
    </label>
  );
}

function ChartTip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="border border-line bg-raised px-3 py-2 shadow-xl">
      <p className="num text-[11px] text-dim">Year {label}</p>
      {payload.map((p) => (
        <p key={p.name} className="num mt-1 text-[12.5px] text-ivory">
          {p.name} {inrCompact(p.value)}
        </p>
      ))}
    </div>
  );
}

function Figure({ label, value, emphasis }) {
  return (
    <div>
      <p className="label">{label}</p>
      <p
        className={`num mt-2 font-serif text-[24px] leading-none sm:text-[27px] ${
          emphasis ? "text-brass" : "text-ivory"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

/* -------------------------------- component ------------------------------ */

export default function Finance() {
  const [mode, setMode] = useState("sip");
  const [monthly, setMonthly] = useState(10000);
  const [lumpsum, setLumpsum] = useState(500000);
  const [years, setYears] = useState(15);
  const [fundRate, setFundRate] = useState(12);
  const [fdRate, setFdRate] = useState(7);

  const sip = useMemo(() => {
    const months = years * 12;
    const value = sipFutureValue(monthly, fundRate, months);
    const invested = monthly * months;
    const series = Array.from({ length: years + 1 }, (_, y) => ({
      year: y,
      Invested: monthly * y * 12,
      Value: sipFutureValue(monthly, fundRate, y * 12),
    }));
    return { value, invested, gain: value - invested, series };
  }, [monthly, years, fundRate]);

  const lump = useMemo(() => {
    const fund = lumpFutureValue(lumpsum, fundRate, years);
    const fd = fdFutureValue(lumpsum, fdRate, years);
    const series = Array.from({ length: years + 1 }, (_, y) => ({
      year: y,
      Fund: lumpFutureValue(lumpsum, fundRate, y),
      Deposit: fdFutureValue(lumpsum, fdRate, y),
    }));
    return { fund, fd, spread: fund - fd, series };
  }, [lumpsum, years, fundRate, fdRate]);

  const axisStyle = { stroke: "#302A21", tick: { fill: "#786F62", fontSize: 11 } };
  const isSip = mode === "sip";

  return (
    <Section
      id="finance"
      index="04"
      title="Analysis"
      lede="The engine behind FinCalc, running in the page. Move a slider and the compounding recalculates."
    >
      <Reveal>
        <div className="grid gap-10 border-t border-line pt-10 lg:grid-cols-[300px_1fr] lg:gap-16">
          <div>
            <div className="flex gap-6 border-b border-line pb-3">
              {[
                { id: "sip", label: "Monthly plan" },
                { id: "lumpsum", label: "Lump sum vs deposit" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setMode(t.id)}
                  className={`text-[13px] transition-colors ${
                    mode === t.id ? "text-brass" : "text-dim hover:text-ivory"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="mt-7 space-y-7">
              {isSip ? (
                <Slider
                  label="Monthly investment"
                  value={monthly}
                  onChange={setMonthly}
                  min={1000}
                  max={200000}
                  step={1000}
                  display={inrFull(monthly)}
                />
              ) : (
                <Slider
                  label="Principal"
                  value={lumpsum}
                  onChange={setLumpsum}
                  min={25000}
                  max={10000000}
                  step={25000}
                  display={inrFull(lumpsum)}
                />
              )}

              <Slider
                label="Tenure"
                value={years}
                onChange={setYears}
                min={1}
                max={40}
                step={1}
                display={`${years} years`}
              />
              <Slider
                label="Expected fund return"
                value={fundRate}
                onChange={setFundRate}
                min={1}
                max={25}
                step={0.5}
                display={`${fundRate.toFixed(1)}%`}
              />
              {!isSip && (
                <Slider
                  label="Deposit rate"
                  value={fdRate}
                  onChange={setFdRate}
                  min={1}
                  max={12}
                  step={0.25}
                  display={`${fdRate.toFixed(2)}%`}
                />
              )}
            </div>

            <p className="mt-8 border-t border-line pt-5 text-[12px] leading-relaxed text-dim">
              {isSip
                ? "Annuity due, compounded monthly."
                : "Fund compounded annually, deposit quarterly."}
            </p>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-6">
              {isSip ? (
                <>
                  <Figure label="Invested" value={inrCompact(sip.invested)} />
                  <Figure label="Returns" value={inrCompact(sip.gain)} />
                  <Figure label="Corpus" value={inrCompact(sip.value)} emphasis />
                </>
              ) : (
                <>
                  <Figure label="Deposit" value={inrCompact(lump.fd)} />
                  <Figure label="Fund" value={inrCompact(lump.fund)} emphasis />
                  <Figure label="Spread" value={inrCompact(Math.abs(lump.spread))} />
                </>
              )}
            </div>

            <div className="mt-8 h-[260px] w-full sm:h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={isSip ? sip.series : lump.series}
                  margin={{ top: 8, right: 12, bottom: 0, left: 0 }}
                >
                  <CartesianGrid stroke="#241F19" vertical={false} />
                  <XAxis dataKey="year" {...axisStyle} />
                  <YAxis tickFormatter={inrCompact} width={64} {...axisStyle} />
                  <Tooltip content={<ChartTip />} cursor={{ stroke: "#3A332A" }} />
                  {isSip ? (
                    <>
                      <Line
                        type="monotone"
                        dataKey="Value"
                        stroke="#C9A55C"
                        strokeWidth={1.75}
                        dot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="Invested"
                        stroke="#786F62"
                        strokeWidth={1.25}
                        dot={false}
                      />
                    </>
                  ) : (
                    <>
                      <Line
                        type="monotone"
                        dataKey="Fund"
                        stroke="#C9A55C"
                        strokeWidth={1.75}
                        dot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="Deposit"
                        stroke="#7FA08A"
                        strokeWidth={1.5}
                        dot={false}
                      />
                    </>
                  )}
                </LineChart>
              </ResponsiveContainer>
            </div>

            <p className="mt-3 text-[12px] text-dim">
              {isSip
                ? "Gold: corpus. Grey: capital invested."
                : "Gold: fund. Green: fixed deposit."}
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08} className="mt-16">
        <div className="grid gap-6 border-t border-line pt-8 md:grid-cols-[200px_1fr] md:gap-10">
          <div>
            <p className="font-serif text-[19px] leading-tight text-ivory">{analytics.programme}</p>
            <p className="mt-1.5 text-[13px] text-dim">{analytics.period}</p>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {analytics.applications.map((a) => (
              <li key={a.area} className="flex flex-wrap gap-x-8 gap-y-1 py-3">
                <span className="w-24 shrink-0 text-[14px] text-brass">{a.area}</span>
                <span className="text-[14px] text-muted">{a.method}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
