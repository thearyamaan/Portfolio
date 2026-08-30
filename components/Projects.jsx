"use client";

import { projects } from "@/data/profile";
import { Section, Reveal, Tag, Spotlight } from "@/components/ui";

export default function Projects() {
  return (
    <Section id="projects" index="03" title="Projects">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.07} className="h-full">
            <Spotlight className="h-full rounded-sm">
              <div className="flex h-full flex-col p-6 sm:p-7">
                <p className="label">{p.context}</p>
                <h3 className="mt-3.5 font-serif text-[21px] leading-snug text-ivory">{p.name}</h3>
                <p className="mt-3.5 text-[14px] leading-[1.75] text-muted">{p.description}</p>

                {p.architecture ? (
                  <ul className="mt-5 space-y-2">
                    {p.architecture.map((a) => (
                      <li key={a} className="flex gap-2.5 text-[12.5px] leading-relaxed text-dim">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brass/70" />
                        {a}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
