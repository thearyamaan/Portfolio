"use client";

import { contact, identity } from "@/data/profile";
import { Reveal, Rule } from "@/components/ui";
import { openResumePicker } from "@/components/ResumePicker";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 px-6 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-shell">
        <Rule />
        <Reveal>
          <div className="grid gap-12 pt-14 md:grid-cols-[1.3fr_1fr] md:gap-16">
            <div>
              <p className="label">Contact</p>
              <p className="mt-5 max-w-prose font-serif text-[28px] leading-[1.3] text-ivory sm:text-[34px]">
                Open to research collaborations, summer analyst roles and engineering{" "}
                <span className="italic text-brass">internships</span>.
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="link-underline mt-7 inline-block text-[16px] text-brass"
              >
                {contact.email}
              </a>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1">
              <div>
                <p className="label">Reach</p>
                <p className="num mt-3 text-[14px] text-muted">{contact.phone}</p>
                <p className="text-[14px] text-muted">{contact.location}</p>
              </div>
              <div>
                <p className="label">Elsewhere</p>
                <ul className="mt-3 space-y-1.5">
                  <li>
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline text-[14px] text-muted"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href={contact.github}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline text-[14px] text-muted"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={openResumePicker}
                      className="link-underline text-[14px] text-muted"
                    >
                      Resume
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-20 text-[12px] text-dim">
            © {new Date().getFullYear()} {identity.name}
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
