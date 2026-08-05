"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { CONTENT_WIDTH, FAQS, SECTION_PADDING } from "./constants";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className={`${CONTENT_WIDTH} ${SECTION_PADDING}`}>
      <div className="grid items-start gap-[clamp(28px,4vw,56px)] [grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr))]">
        <div className="min-w-0">
          <div className="mb-3 font-mono text-[11px] font-semibold tracking-[.1em] text-text-tertiary uppercase">
            FAQ
          </div>
          <h2 className="m-0 mb-[14px] text-[clamp(28px,3.6vw,38px)] leading-[1.12] font-semibold tracking-[-.028em] text-balance">
            The questions people actually ask
          </h2>
          <p className="m-0 text-[16px] leading-[1.6] text-text-secondary">
            Still stuck? <a href="#contact">Email us</a> — a person answers.
          </p>
        </div>

        <div className="min-w-0 overflow-hidden rounded-[12px] border border-border-subtle bg-surface">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = isOpen ? Minus : Plus;
            return (
              <div key={faq.q} className="border-b border-border-subtle last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center gap-3 px-[18px] py-4 text-left transition-colors duration-140 ease-standard hover:bg-subtle"
                >
                  <span className="flex-1 text-[14.5px] leading-[1.4] font-medium text-text-primary">
                    {faq.q}
                  </span>
                  <Icon
                    size={16}
                    strokeWidth={1.75}
                    className="flex-none text-text-tertiary"
                  />
                </button>
                {isOpen && (
                  <p className="m-0 -mt-1.5 animate-hb-rise pr-7 pb-4 pl-[18px] text-[13.5px] leading-[1.65] text-text-secondary">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
