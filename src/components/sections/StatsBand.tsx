"use client";

import { Reveal } from "@/components/shared";
import { Counter } from "@/components/shared/Counter";
import { cn } from "@/lib/utils";

const stats = [
  { num: 12400, suffix: "+", label: "creators on platform", sub: "across 47 countries" },
  { num: 480, prefix: "$", suffix: "M", label: "creator earnings unlocked", sub: "in the last 12 months" },
  { num: 38.4, suffix: "%", label: "avg engagement lift", sub: "after 90 days", decimals: 1 },
  { num: 92, suffix: "%", label: "brand match precision", sub: "on first 3 picks" },
];

export function StatsBand() {
  return (
    <section className="md:py-section-y relative">
      <div className="container mx-auto md:px-gutter">
        <Reveal
          stagger
          className="stats-grid grid grid-cols-4 max-[920px]:grid-cols-2 max-[560px]:grid-cols-1"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className={cn(
                "py-8 px-7",
                i !== 0 && "border-l border-l-line",
              )}
            >
              <div className="font-display text-section-title font-medium tracking-[-0.03em] leading-[0.96] text-ink mb-3 tabular-nums">
                <Counter
                  to={s.num}
                  prefix={s.prefix || ""}
                  suffix={s.suffix || ""}
                  decimals={s.decimals || 0}
                />
              </div>
              <div className="text-ink text-[15px] font-medium mb-1">{s.label}</div>
              <div className="text-muted text-[13px]">{s.sub}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
