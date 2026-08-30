"use client";

import { useMemo, useState } from "react";
import {
  CartesianGrid,
  Cell,
  LabelList,
  ReferenceArea,
  ReferenceLine,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import { micmac, ismLevels, consensusLinks } from "@/data/profile";

const FILL = {
  independent: "#C9A55C",
  linkage: "#B9764F",
  dependent: "#7FA08A",
  autonomous: "#786F62",
};

const QUADRANTS = [
  { key: "independent", label: "Independent", hint: "High drive, low dependence — the levers." },
  { key: "dependent", label: "Dependent", hint: "Outcomes that move once something upstream does." },
  { key: "autonomous", label: "Autonomous", hint: "Driven from above, detached from its peers." },
  { key: "linkage", label: "Linkage", hint: "Unstable. Empty in this model." },
];

function quadrantOf(driving, dependence, mid) {
  const driver = driving > mid;
  const dependent = dependence > mid;
  if (driver && dependent) return "linkage";
  if (driver) return "independent";
  if (dependent) return "dependent";
  return "autonomous";
}

function ChartTip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;
  const p = payload[0].payload;
  return (
    <div className="max-w-[240px] border border-line bg-raised px-3 py-2 shadow-xl">
      <ul className="space-y-0.5">
        {p.members.map((m) => (
          <li key={m.code} className="text-[12.5px] leading-snug text-ivory">
            {m.name}
          </li>
        ))}
      </ul>
      <p className="num mt-1.5 text-[11px] text-dim">
        driving {p.driving} · dependence {p.dependence}
      </p>
    </div>
  );
}

export default function MicmacPlot() {
  const mid = micmac.axisMax / 2;
  const [focus, setFocus] = useState([]);

  const points = useMemo(() => {
    const bucket = new Map();
    for (const f of micmac.factors) {
      const key = `${f.dependence}:${f.driving}`;
      if (!bucket.has(key)) {
        bucket.set(key, { driving: f.driving, dependence: f.dependence, members: [], z: 100 });
      }
      bucket.get(key).members.push(f);
    }
    return [...bucket.values()].map((p) => ({
      ...p,
      label: p.members.map((m) => m.code).join(" · "),
      codes: p.members.map((m) => m.code),
      quadrant: quadrantOf(p.driving, p.dependence, mid),
    }));
  }, [mid]);

  const axisStyle = { stroke: "#302A21", tick: { fill: "#786F62", fontSize: 11 } };

  return (
    <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
      <div className="lg:col-span-3">
        <p className="label">Driving power against dependence</p>

        <div className="mt-5 h-[300px] w-full sm:h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 16, right: 24, bottom: 24, left: 0 }}>
              <ReferenceArea
                x1={0}
                x2={mid}
                y1={mid}
                y2={micmac.axisMax}
                fill="#C9A55C"
                fillOpacity={0.05}
              />
              <CartesianGrid stroke="#241F19" />
              <XAxis
                type="number"
                dataKey="dependence"
                domain={[0, micmac.axisMax]}
                tickCount={micmac.axisMax + 1}
                {...axisStyle}
              />
              <YAxis
                type="number"
                dataKey="driving"
                domain={[0, micmac.axisMax]}
                tickCount={micmac.axisMax + 1}
                width={28}
                {...axisStyle}
              />
              <ZAxis dataKey="z" range={[120, 120]} />
              <ReferenceLine x={mid} stroke="#3A332A" />
              <ReferenceLine y={mid} stroke="#3A332A" />
              <Tooltip content={<ChartTip />} cursor={false} />
              <Scatter
                data={points}
                shape="circle"
                animationDuration={800}
                onMouseEnter={(p) => setFocus(p.codes || [])}
                onMouseLeave={() => setFocus([])}
              >
                <LabelList
                  dataKey="label"
                  position="top"
                  offset={12}
                  style={{ fill: "#A89E8E", fontSize: 11 }}
                />
                {points.map((p) => (
                  <Cell key={p.label} fill={FILL[p.quadrant]} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-5 grid gap-x-8 gap-y-2 border-t border-line pt-5 sm:grid-cols-2">
          {QUADRANTS.map((q) => (
            <div key={q.key} className="flex items-start gap-2.5">
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: FILL[q.key] }}
              />
              <p className="text-[12px] leading-snug text-dim">
                <span className="text-muted">{q.label}.</span> {q.hint}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[12px] leading-relaxed text-dim">
          {micmac.caption}. {micmac.note}
        </p>
      </div>

      <div className="lg:col-span-2">
        <p className="label">Level partition</p>
        <ol className="mt-4 divide-y divide-line border-y border-line">
          {ismLevels.map((lvl) => (
            <li key={lvl.level} className="flex gap-5 py-4">
              <span className="num w-7 shrink-0 font-serif text-[15px] text-brass">
                {lvl.level}
              </span>
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-[0.14em] text-dim">{lvl.role}</p>
                <p className="mt-1.5 text-[14px] leading-relaxed">
                  {lvl.items.map((code, i) => {
                    const f = micmac.factors.find((x) => x.code === code);
                    const on = focus.includes(code);
                    return (
                      <span
                        key={code}
                        className={`transition-colors ${on ? "text-brass" : "text-ivory"}`}
                      >
                        {f ? f.name : code}
                        {i < lvl.items.length - 1 ? <span className="text-dim">, </span> : null}
                      </span>
                    );
                  })}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="label mt-8">Strongest consensus</p>
        <ul className="mt-4 space-y-2.5">
          {consensusLinks.map((c) => (
            <li key={c.link} className="flex items-baseline justify-between gap-4 text-[13px]">
              <span className="text-ivory">{c.link}</span>
              <span className="flex items-baseline gap-3">
                {c.note ? <span className="text-[12px] text-dim">{c.note}</span> : null}
                <span className="num text-brass">{c.votes}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
