"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experience } from "@/data/profile";
import { Section, Tag } from "@/components/ui";

export default function Experience() {
  const [active, setActive] = useState(experience[0].id);
  const current = experience.find((e) => e.id === active) || experience[0];

  return (
    <Section id="experience" index="02" title="Experience">
      <div className="grid gap-8 md:grid-cols-[230px_1fr] md:gap-14">
        <div role="tablist" aria-label="Roles" className="flex gap-2 md:flex-col">
          {experience.map((e) => {
            const on = e.id === active;
            return (
              <button
                key={e.id}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(e.id)}
                className="relative w-full px-4 py-3 text-left transition-colors"
              >
                {on && (
                  <motion.span
                    layoutId="exp-active"
                    className="absolute inset-0 -z-10 rounded-sm bg-raised"
                    transition={{ type: "spring", stiffness: 340, damping: 32 }}
                  />
                )}
                <span
                  className={`block font-serif text-[17px] transition-colors ${
                    on ? "text-brass" : "text-muted"
                  }`}
                >
                  {e.org}
                </span>
                <span className="mt-1 block text-[12px] text-dim">{e.period}</span>
              </button>
            );
          })}
        </div>

        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="font-serif text-[21px] text-ivory">{current.role}</h3>
            <span className="text-[12px] text-dim">{current.mode}</span>
          </div>

          <ul className="mt-6 max-w-prose space-y-4">
            {current.points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.06 * i }}
                className="border-l border-line pl-5 text-[14.5px] leading-[1.75] text-muted"
              >
                {p}
              </motion.li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-1.5">
            {current.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
