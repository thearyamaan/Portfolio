"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { research } from "@/data/profile";
import { Section, Reveal, Tag } from "@/components/ui";
import MicmacPlot from "@/components/MicmacPlot";
import IsmDiagram from "@/components/IsmDiagram";

function PaperEntry({ item, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <Reveal delay={index * 0.06}>
      <article className="border-b border-line">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="group flex w-full items-start gap-6 py-7 text-left"
        >
          <div className="min-w-0 flex-1">
            <p className="label">
              {item.role} · {item.venue} · {item.period}
            </p>
            <h3 className="mt-3 max-w-3xl font-serif text-[22px] font-normal leading-snug text-ivory transition-colors group-hover:text-brass sm:text-[26px]">
              {item.title}
            </h3>
            <p className="mt-2.5 text-[13px] text-sage">{item.status}</p>
          </div>
          <span className="mt-2 shrink-0 text-[13px] text-dim transition-colors group-hover:text-brass">
            {open ? "Close" : "Read"}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="grid gap-10 pb-10 md:grid-cols-[1.4fr_1fr] md:gap-14">
                <div>
                  <p className="max-w-prose text-[15px] leading-[1.8] text-muted">
                    {item.abstract}
                  </p>

                  {item.finding ? (
                    <blockquote className="mt-7 max-w-prose border-l border-brass/60 pl-6">
                      <p className="font-serif text-[18px] leading-[1.65] text-ivory">
                        {item.finding}
                      </p>
                    </blockquote>
                  ) : null}
                </div>

                <div>
                  <p className="label">Method</p>
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {item.methods.map((m) => (
                      <Tag key={m}>{m}</Tag>
                    ))}
                  </div>

                  {item.contributions.length ? (
                    <>
                      <p className="label mt-8">Contribution</p>
                      <ul className="mt-3.5 space-y-3">
                        {item.contributions.map((c) => (
                          <li
                            key={c}
                            className="border-l border-line pl-4 text-[13.5px] leading-relaxed text-muted"
                          >
                            {c}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </Reveal>
  );
}

export default function Research() {
  return (
    <Section
      id="research"
      index="01"
      title="Research"
      lede="Of the six things India needs for deepfake governance to work, which has to come first? Eleven screened experts, fifteen pairwise judgements, one hierarchy."
    >
      <div className="border-t border-line">
        {research.map((item, i) => (
          <PaperEntry key={item.id} item={item} index={i} />
        ))}
      </div>

      <Reveal delay={0.08} className="mt-14">
        <MicmacPlot />
      </Reveal>

      <Reveal delay={0.08} className="mt-16">
        <IsmDiagram />
      </Reveal>
    </Section>
  );
}
