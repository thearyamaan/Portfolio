"use client";

import { motion } from "framer-motion";
import { micmac } from "@/data/profile";

/**
 * The three-level ISM digraph (Figure 3 of the paper), drawn to scale and
 * animated on scroll. Edges draw themselves in; the unanimous LFS -> IGP link
 * is weighted heavier than the rest.
 */

const BOX_W = 130;
const BOX_H = 44;
const ROW = { outcomes: 64, mediator: 200, driver: 310 };
const TOP_X = [110, 268, 426, 584]; // left edges of the four outcome nodes
const CENTER = 412;

const OUTCOMES = ["IACM", "CBE", "PAML", "WCT"];

const EASE = [0.22, 1, 0.36, 1];

function Node({ x, y, code, accent = false, delay = 0 }) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      <rect
        x={x}
        y={y}
        width={BOX_W}
        height={BOX_H}
        rx={3}
        fill={accent ? "rgba(201,165,92,0.12)" : "#191510"}
        stroke={accent ? "#C9A55C" : "#302A21"}
        strokeWidth={1}
      />
      <text
        x={x + BOX_W / 2}
        y={y + BOX_H / 2 + 5}
        textAnchor="middle"
        fill={accent ? "#E2C384" : "#F4EFE6"}
        fontSize="14"
        letterSpacing="0.06em"
      >
        {code}
      </text>
    </motion.g>
  );
}

function Edge({ d, weight = 1, accent = false, delay = 0, marker = "url(#arrow)" }) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={accent ? "#C9A55C" : "#4A4136"}
      strokeWidth={weight}
      markerEnd={marker}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    />
  );
}

export default function IsmDiagram() {
  const rowLabel = (y, text) => (
    <text x={96} y={y + BOX_H / 2 + 4} textAnchor="end" fill="#786F62" fontSize="11">
      {text}
    </text>
  );

  return (
    <div>
      <p className="label">Interpretive structural model</p>

      <div className="mt-5 overflow-x-auto">
        <svg
          viewBox="0 0 760 400"
          className="h-auto w-full min-w-[620px]"
          role="img"
          aria-label="Three-level interpretive structural model: Legal Framework Strength drives Institutional Governance Protocols, which drives four operational factors."
        >
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#4A4136" />
            </marker>
            <marker
              id="arrow-brass"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#C9A55C" />
            </marker>
          </defs>

          {rowLabel(ROW.outcomes, "Outcomes")}
          {rowLabel(ROW.mediator, "Mediator")}
          {rowLabel(ROW.driver, "Driver")}

          {/* Driver to mediator: the one unanimous link, drawn heaviest. */}
          <Edge
            d={`M ${CENTER} ${ROW.driver} L ${CENTER} ${ROW.mediator + BOX_H + 2}`}
            weight={2}
            accent
            marker="url(#arrow-brass)"
            delay={0.1}
          />

          {/* Mediator to each operational factor. */}
          {TOP_X.map((x, i) => {
            const cx = x + BOX_W / 2;
            return (
              <Edge
                key={OUTCOMES[i]}
                d={`M ${CENTER} ${ROW.mediator} C ${CENTER} ${ROW.mediator - 50}, ${cx} ${
                  ROW.outcomes + BOX_H + 50
                }, ${cx} ${ROW.outcomes + BOX_H + 2}`}
                delay={0.35 + i * 0.08}
              />
            );
          })}

          {/* IACM and PAML reinforce each other: the strongest mutual judgement. */}
          <Edge
            d={`M ${TOP_X[0] + BOX_W / 2} ${ROW.outcomes} C ${TOP_X[0] + BOX_W / 2} 18, ${
              TOP_X[2] + BOX_W / 2
            } 18, ${TOP_X[2] + BOX_W / 2} ${ROW.outcomes}`}
            delay={0.75}
          />

          {OUTCOMES.map((code, i) => (
            <Node key={code} x={TOP_X[i]} y={ROW.outcomes} code={code} delay={0.5 + i * 0.06} />
          ))}
          <Node x={CENTER - BOX_W / 2} y={ROW.mediator} code="IGP" delay={0.25} />
          <Node x={CENTER - BOX_W / 2} y={ROW.driver} code="LFS" accent delay={0.05} />
        </svg>
      </div>

      <dl className="mt-6 grid gap-x-8 gap-y-2 border-t border-line pt-5 sm:grid-cols-2">
        {micmac.factors.map((f) => (
          <div key={f.code} className="flex gap-3 text-[13px]">
            <dt className="w-12 shrink-0 text-brass">{f.code}</dt>
            <dd className="text-muted">{f.name}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
