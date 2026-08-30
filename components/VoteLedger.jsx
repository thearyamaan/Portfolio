"use client";

import { voteLedger } from "@/data/profile";

/**
 * A slow horizontal band of the paper's actual pairwise vote counts, used to
 * break up the stack of sections. Reads as texture at a glance and as data on
 * inspection. Pauses on hover; static under prefers-reduced-motion.
 *
 * dir "V" is a one-way consensus link, "X" mutual, "O" below the two-thirds
 * threshold — the below-threshold entries are dimmed so the band still shows
 * where agreement broke down.
 */

const TONE = {
  V: "text-muted",
  X: "text-brass",
  O: "text-dim",
};

function Item({ entry }) {
  return (
    <span className="flex shrink-0 items-baseline gap-2.5 px-6">
      <span className={`text-[12.5px] ${TONE[entry.dir]}`}>{entry.pair}</span>
      <span
        className={`num text-[12.5px] ${
          entry.dir === "O" ? "text-dim/70" : "text-ivory/70"
        }`}
      >
        {entry.votes}
      </span>
      <span className="text-line" aria-hidden>
        /
      </span>
    </span>
  );
}

export default function VoteLedger({ caption, direction = "normal" }) {
  return (
    <div className="px-0 py-6">
      <div className="border-y border-line/70 py-3.5">
        <div className="marquee overflow-hidden">
          <div className="marquee-track" data-direction={direction}>
            {voteLedger.map((entry) => (
              <Item key={entry.pair} entry={entry} />
            ))}
            <span aria-hidden className="flex">
              {voteLedger.map((entry) => (
                <Item key={`dup-${entry.pair}`} entry={entry} />
              ))}
            </span>
          </div>
        </div>
      </div>

      {caption ? (
        <div className="mx-auto max-w-shell px-6 sm:px-8">
          <p className="label mt-3.5">{caption}</p>
        </div>
      ) : null}
    </div>
  );
}
