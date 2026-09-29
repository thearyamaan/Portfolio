"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { resumes } from "@/data/profile";

/**
 * Resume picker.
 *
 * There are three tailored resumes, so "Resume" opens a chooser rather than a
 * single file. Any link anywhere on the page opens it by calling
 * openResumePicker(); the dialog itself is mounted once, in app/page.jsx.
 */

const EVENT = "resume:open";

export function openResumePicker() {
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent(EVENT));
}

const EASE = [0.22, 1, 0.36, 1];

export default function ResumePicker() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const returnFocusRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onOpen = () => {
      returnFocusRef.current = document.activeElement;
      setOpen(true);
    };
    window.addEventListener(EVENT, onOpen);
    return () => window.removeEventListener(EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) {
      // Send focus back to whatever opened the dialog.
      if (returnFocusRef.current instanceof HTMLElement) returnFocusRef.current.focus();
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;

      // Keep tabbing inside the panel while it is open.
      const focusable = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled])'
      );
      if (!focusable || !focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    const raf = requestAnimationFrame(() => {
      panelRef.current?.querySelector("a[href], button")?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      cancelAnimationFrame(raf);
    };
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          <div
            className="absolute inset-0 bg-base/85 backdrop-blur-sm"
            onClick={close}
            aria-hidden
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-picker-title"
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.99 }}
            transition={{ duration: 0.34, ease: EASE }}
            className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto border border-line bg-surface p-6 shadow-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="label">Three versions</p>
                <h2
                  id="resume-picker-title"
                  className="mt-3 font-serif text-[26px] leading-tight text-ivory sm:text-[30px]"
                >
                  Which resume would you like?
                </h2>
                <p className="mt-3 max-w-prose text-[14px] leading-relaxed text-muted">
                  Same person, different emphasis. Pick whichever is closest to what you are
                  reading for.
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                className="shrink-0 text-[13px] text-dim transition-colors hover:text-brass"
              >
                Close
              </button>
            </div>

            <ul className="mt-8 space-y-3">
              {resumes.map((r, i) => (
                <motion.li
                  key={r.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.06 + i * 0.06, ease: EASE }}
                >
                  <div className="group border border-line p-5 transition-colors hover:border-brass/40 sm:p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <h3 className="font-serif text-[20px] text-ivory transition-colors group-hover:text-brass">
                        {r.label}
                      </h3>
                      <p className="text-[12.5px] text-dim">{r.tagline}</p>
                    </div>

                    <ul className="mt-4 space-y-1.5">
                      {r.focus.map((f) => (
                        <li key={f} className="flex gap-2.5 text-[13px] leading-relaxed text-muted">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brass/70" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                      <a
                        href={r.file}
                        target="_blank"
                        rel="noreferrer"
                        onClick={close}
                        className="rounded-full border border-brass/40 px-4 py-1.5 text-[13px] text-brass transition-colors hover:bg-brass/10"
                      >
                        Open
                      </a>
                      <a
                        href={r.file}
                        download
                        onClick={close}
                        className="link-underline text-[13px] text-muted"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
