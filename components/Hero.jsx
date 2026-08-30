"use client";

import { motion } from "framer-motion";
import { identity, metrics, education, contact } from "@/data/profile";
import { CountUp } from "@/components/ui";

const EASE = [0.22, 1, 0.36, 1];

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 * i, ease: EASE },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="px-6 pb-16 pt-16 sm:px-8 md:pb-24 md:pt-24">
      <div className="mx-auto max-w-shell">
        <motion.div
          variants={rise}
          initial="hidden"
          animate="show"
          custom={0}
          className="flex items-center gap-3"
        >
          <span className="h-px w-10 bg-brass/60" />
          <p className="label">{identity.role}</p>
        </motion.div>

        <h1 className="mt-7 max-w-4xl font-serif text-[13.5vw] font-normal leading-[0.98] tracking-[-0.025em] text-ivory sm:text-6xl md:text-[5.25rem]">
          <motion.span variants={rise} initial="hidden" animate="show" custom={1} className="block">
            Aryamaan
          </motion.span>
          <motion.span
            variants={rise}
            initial="hidden"
            animate="show"
            custom={2}
            className="block italic text-brass"
          >
            Upadhyay
          </motion.span>
        </h1>

        <motion.p
          variants={rise}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-9 max-w-prose text-[16.5px] leading-[1.75] text-muted"
        >
          {identity.summary}
        </motion.p>

        <motion.div
          variants={rise}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-[14px]"
        >
          <a href="#research" className="link-underline text-brass">
            Read the research
          </a>
          <a href="#finance" className="link-underline text-brass">
            Try the calculator
          </a>
          <a href={identity.resume} className="link-underline text-brass">
            Resume
          </a>
          <a href={`mailto:${contact.email}`} className="link-underline text-brass">
            Email
          </a>
        </motion.div>

        <motion.dl
          variants={rise}
          initial="hidden"
          animate="show"
          custom={5}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-9 border-t border-line pt-9 sm:grid-cols-4"
        >
          {metrics.map((m) => (
            <div key={m.label}>
              <dd className="num font-serif text-[30px] leading-none text-ivory sm:text-[34px]">
                {m.prefix}
                <CountUp value={m.value} />
                {m.suffix}
              </dd>
              <dt className="label mt-3 leading-relaxed">{m.label}</dt>
            </div>
          ))}
        </motion.dl>

        <motion.p
          variants={rise}
          initial="hidden"
          animate="show"
          custom={6}
          className="mt-9 text-[13px] text-dim"
        >
          {education.degree}, {education.institute} ·{" "}
          {education.marks.map((m) => `${m.label} ${m.value}`).join(", ")}
        </motion.p>
      </div>
    </section>
  );
}
