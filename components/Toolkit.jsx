"use client";

import { skills, credentials } from "@/data/profile";
import { Section, Reveal, Tag } from "@/components/ui";

export default function Toolkit() {
  return (
    <Section id="toolkit" index="05" title="Toolkit">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="divide-y divide-line border-y border-line">
            {skills.map((s) => (
              <div key={s.group} className="grid gap-3 py-5 sm:grid-cols-[110px_1fr] sm:gap-6">
                <p className="label pt-1.5">{s.group}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="label">Credentials</p>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {credentials.map((c) => (
              <li
                key={c.name}
                className="group flex items-baseline justify-between gap-6 py-3.5"
              >
                <span className="text-[14.5px] text-ivory transition-colors group-hover:text-brass">
                  {c.name}
                </span>
                <span className="shrink-0 text-right text-[12px] text-dim">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
