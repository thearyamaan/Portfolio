"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sections, identity } from "@/data/profile";

export default function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.3, 0.6, 1] }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        scrolled ? "border-b border-line bg-base/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-shell items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="group flex items-baseline gap-2.5">
          <span className="font-serif text-[18px] tracking-[-0.01em] text-ivory">Aryamaan</span>
          <span className="font-serif text-[18px] italic text-brass">Upadhyay</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <li key={s.id} className="relative">
              <a
                href={`#${s.id}`}
                className={`relative block px-3 py-2 text-[13px] transition-colors ${
                  active === s.id ? "text-ivory" : "text-dim hover:text-muted"
                }`}
              >
                {active === s.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-raised"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={identity.resume}
              className="ml-3 rounded-full border border-brass/40 px-3.5 py-1.5 text-[13px] text-brass transition-colors hover:bg-brass/10"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-[13px] text-muted md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-base px-6 pb-5 pt-3 md:hidden">
          <ul className="space-y-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={`block py-2 text-[15px] ${
                    active === s.id ? "text-brass" : "text-muted"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a href={identity.resume} className="block py-2 text-[15px] text-brass">
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
