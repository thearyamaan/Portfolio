"use client";

import { writing } from "@/data/profile";
import { Section, Reveal } from "@/components/ui";

export default function Writing() {
  return (
    <Section id="writing" index="07" title="Writing" lede={writing.lede}>
      <Reveal>
        <figure className="border-y border-line py-10 text-center sm:py-12">
          <p className="label">{writing.award.prize}</p>
          <blockquote className="mt-5">
            <p className="font-serif text-[30px] italic leading-tight text-brass sm:text-[40px]">
              {writing.award.title}
            </p>
          </blockquote>
          <figcaption className="mt-5 text-[13px] leading-relaxed text-dim">
            {writing.award.venue}
            <span className="mx-2" aria-hidden>
              ·
            </span>
            Theme: {writing.award.theme}
          </figcaption>
        </figure>
      </Reveal>

      <ul className="mt-12 divide-y divide-line border-y border-line">
        {writing.roles.map((r, i) => (
          <Reveal key={`${r.role}-${r.org}`} delay={i * 0.05}>
            <li className="group grid gap-2 py-6 md:grid-cols-[1fr_1.4fr] md:gap-10">
              <div>
                <p className="font-serif text-[19px] text-ivory transition-colors group-hover:text-brass">
                  {r.role}
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-dim">{r.org}</p>
              </div>
              <p className="max-w-prose text-[14px] leading-[1.75] text-muted">{r.note}</p>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.08}>
        <div className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <p className="label">Hosted</p>
          {writing.hosted.map((h) => (
            <p key={h} className="text-[14px] text-muted">
              {h}
            </p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
