"use client";

import { leadership } from "@/data/profile";
import { Section, Reveal } from "@/components/ui";

export default function Leadership() {
  return (
    <Section
      id="leadership"
      index="06"
      title="Leadership"
      lede="Committees, editorial work and festivals. The common thread is being responsible for what goes out under someone else's name."
    >
      <ul className="divide-y divide-line border-y border-line">
        {leadership.map((l, i) => (
          <Reveal key={`${l.role}-${l.org}`} delay={i * 0.04}>
            <li className="group grid gap-2 py-5 md:grid-cols-[1fr_1.2fr] md:gap-10">
              <div>
                <p className="font-serif text-[19px] text-ivory transition-colors group-hover:text-brass">
                  {l.role}
                </p>
                <p className="mt-1 text-[13px] text-dim">{l.org}</p>
              </div>
              <p className="text-[14px] leading-relaxed text-muted">{l.note}</p>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
