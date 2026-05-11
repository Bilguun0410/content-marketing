"use client";

import { Reveal } from "@/components/shared";

const stories = [
  {
    stat: "4.2×",
    label: "engagement lift in 90 days",
    quote: "I stopped guessing what to post on Tuesday. The weekly brief is genuinely the only product I open before coffee.",
    author: "Maya Reyes",
    role: "Indie dev · 142k",
    accent: 200,
  },
  {
    stat: "$48k",
    label: "brand revenue in Q1",
    quote: "Three brand matches in week one. Zero cold pitches. Two of them are still running 8 months later.",
    author: "Ari Tanaka",
    role: "Design educator · 88k",
    accent: 320,
  },
  {
    stat: "38%",
    label: "CAC reduction",
    quote: "We shifted half our paid budget into tenstack creators. CAC dropped 38%, retention went up. Easy reallocation.",
    author: "Liana Park",
    role: "Head of Growth, Linear",
    accent: 80,
  },
];

export function Stories() {
  return (
    <section id="stories" className="bg-bg-soft py-section-y relative">
      {/* Background blob */}
      <div
        className="absolute w-125 h-125 rounded-full pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, var(--cyan), transparent)",
          filter: "blur(80px)",
          bottom: -200,
          left: -100,
        }}
      />

      <div className="container mx-auto px-gutter relative z-1">
        <Reveal className="flex flex-col items-center text-center gap-4 mb-14">
          <div className="font-mono text-[12px] tracking-[0.08em] text-dim">
            <b className="text-cyan font-medium">[04]</b> / IN PRODUCTION
          </div>
          <h2 className="font-display text-section-title font-medium tracking-[-0.03em] leading-[0.96] m-0 max-w-225">
            Receipts, not promises.
          </h2>
        </Reveal>

        <Reveal stagger className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
          {stories.map((s, i) => (
            <article
              key={i}
              className="p-8 bg-bg-card border border-line rounded-(--radius) flex flex-col transition-[border-color,transform] duration-200 hover:border-line-strong hover:-translate-y-0.5"
            >
              <div className="font-display text-[56px] leading-none font-medium text-grad mb-1">
                {s.stat}
              </div>
              <div className="font-mono text-[11px] text-muted tracking-[0.08em] uppercase">
                {s.label}
              </div>
              <p className="text-[16px] leading-normal text-ink flex-1 mt-6 mb-6">
                &ldquo;{s.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto pt-5 border-t border-t-line">
                <div
                  className="w-9 h-9 rounded-full font-mono font-bold text-[#0a0e1a] text-[12px] flex items-center justify-center"
                  style={{ background: `oklch(0.75 0.16 ${s.accent})` }}
                >
                  {s.author.split(" ").map((p) => p[0]).join("")}
                </div>
                <div>
                  <div className="font-medium text-[14px]">{s.author}</div>
                  <div className="text-[12px] text-muted">{s.role}</div>
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
