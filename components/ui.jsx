"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export function Section({ id, index, title, lede, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 px-6 py-16 sm:px-8 md:py-24 ${className}`}>
      <div className="mx-auto max-w-shell">
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <div className="flex items-baseline gap-4">
            {index ? <span className="num label pt-1">{index}</span> : null}
            <h2 className="font-serif text-[32px] font-normal leading-tight tracking-[-0.015em] text-ivory sm:text-[40px]">
              {title}
            </h2>
          </div>
          {lede ? (
            <p className="mt-4 max-w-prose text-[15px] leading-[1.75] text-muted">{lede}</p>
          ) : null}
          <Rule className="mt-7" />
        </motion.header>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

/** Hairline that draws itself in when scrolled into view. */
export function Rule({ className = "" }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: EASE }}
      className={`h-px origin-left bg-line ${className}`}
    />
  );
}

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function Tag({ children, tone = "quiet" }) {
  const tones = {
    quiet: "border-line text-muted",
    brass: "border-brass/35 text-brass",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[12px] transition-colors ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/** Card that tracks the cursor for a soft highlight. */
export function Spotlight({ children, className = "", as: Tag_ = "div" }) {
  const ref = useRef(null);

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <Tag_ ref={ref} onMouseMove={onMove} className={`spot ${className}`}>
      <div className="relative z-10 h-full">{children}</div>
    </Tag_>
  );
}

/** Counts a number up once it enters the viewport. */
export function CountUp({ value, duration = 1100 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return <span ref={ref}>{shown}</span>;
}
