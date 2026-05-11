"use client";

import { Reveal, Btn, ArrowRight } from "@/components/shared";

export function FinalCTA() {
  return (
    <section className="py-25 relative overflow-hidden">
      {/* Background blob */}
      <div
        className="absolute w-175 h-175 rounded-full pointer-events-none opacity-35"
        style={{
          background: "radial-gradient(circle, var(--violet), transparent)",
          filter: "blur(80px)",
          top: "-30%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <div className="container  mx-auto px-gutter relative z-2">
        <Reveal>
          <div className="p-[clamp(40px,6vw,80px)] text-center bg-[linear-gradient(135deg,var(--bg-card),var(--bg-soft))] border border-line-strong rounded-[var(--radius-lg)]">
            <h2 className="font-display text-[clamp(40px,6vw,84px)] font-medium tracking-[-0.03em] leading-[0.96] m-0 max-w-225 mx-auto">
              Stop juggling tabs.
              <br />
              Start{" "}
              <span className="text-grad">shipping</span>.
            </h2>
            <p className="text-ink-soft text-[18px] max-w-140 mx-auto mt-5 mb-0">
              14-day Pro trial. No card. Cancel anytime.
            </p>
            <div className="flex items-center gap-3 justify-center mt-8 flex-wrap">
              <Btn kind="grad">
                <span>Start free trial</span>
                <ArrowRight />
              </Btn>
              <Btn kind="ghost">Book a demo</Btn>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
