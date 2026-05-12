"use client";

import { Reveal, Tag } from "@/components/shared";
import { Pill } from "@/components/shared/Pill";
import { cn } from "@/lib/utils";

function FeatureCalendar() {
  const days = Array.from({ length: 35 }, (_, i) => i);
  const posts: Record<number, string> = {
    3: "cyan",
    6: "violet",
    9: "lime",
    12: "cyan",
    15: "pink",
    18: "violet",
    20: "cyan",
    22: "lime",
    25: "violet",
    28: "cyan",
    31: "pink",
  };
  return (
    <div className="p-7.5 relative h-full">
      <div className="font-mono text-[11px] text-muted mb-3.5">
        OCT 2026 · 11 posts scheduled
      </div>
      <div className="grid grid-cols-7 gap-1.5">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
          <div key={d} className="font-mono text-[9px] text-dim text-center">
            {d}
          </div>
        ))}
        {days.map((d) => (
          <div
            key={d}
            className={cn(
              "aspect-square rounded-md border border-line flex items-start justify-end p-1 text-[9px] font-mono",
              posts[d]
                ? "opacity-90 font-semibold text-[#0a0e1a]"
                : "text-dim bg-white/4",
            )}
            style={posts[d] ? { background: `var(--${posts[d]})` } : undefined}
          >
            {d + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureHooks() {
  const hooks = [
    {
      txt: "I rebuilt our pricing page in 30 minutes — here's what changed.",
      score: 94,
      on: true,
    },
    {
      txt: "Most pricing pages are wrong. Here's a fix that took us 30 min.",
      score: 88,
    },
    {
      txt: "The 30-minute pricing page rewrite that doubled trials.",
      score: 81,
    },
  ];
  return (
    <div className="p-6 relative h-full flex flex-col gap-3 justify-between">
      <div className="font-mono text-[11px] text-muted">HOOK SCORE</div>
      <div className="flex flex-col gap-2">
        {hooks.map((h, i) => (
          <div
            key={i}
            className={cn(
              "p-3 rounded-[10px] text-[12px] leading-[1.4] border",
              h.on ? "bg-cyan/8 border-cyan/35" : "bg-white/3 border-line",
            )}
          >
            <div className={cn("mb-1.5", h.on ? "text-ink" : "text-ink-soft")}>
              {h.txt}
            </div>
            <div className="flex justify-between items-center font-mono text-[10px]">
              <span className={h.score > 90 ? "text-lime" : "text-muted"}>
                ● {h.score}/100
              </span>
              <span className="text-dim">{h.on ? "use this" : "try"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureMatch() {
  return (
    <div className="p-6 h-full flex flex-col gap-3 justify-between">
      <div className="font-mono text-[11px] text-muted">3 NEW MATCHES</div>
      <div className="flex flex-col gap-2">
        {[
          { brand: "Linear", fit: 96, fee: "$3.2k", cat: "Dev tools" },
          { brand: "Cal.com", fit: 91, fee: "$2.4k", cat: "Productivity" },
          { brand: "Resend", fit: 88, fee: "$1.8k", cat: "Dev tools" },
        ].map((m, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-[10px_12px] bg-white/3 border border-line rounded-[10px]"
          >
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-grad text-[#0a0e1a] font-mono text-[11px] font-bold flex items-center justify-center">
                {m.brand[0]}
              </div>
              <div>
                <div className="text-[13px] font-medium">{m.brand}</div>
                <div className="text-[10px] text-muted font-mono">{m.cat}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-mono text-[11px] text-lime">
                {m.fit}% fit
              </div>
              <div className="font-mono text-[11px] text-muted">{m.fee}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureSignals() {
  const points = [10, 28, 22, 38, 32, 48, 42, 58, 64, 56, 72, 88];
  const w = 100,
    h = 60;
  const max = Math.max(...points);
  const path = points
    .map(
      (p, i) =>
        `${i === 0 ? "M" : "L"} ${(i / (points.length - 1)) * w} ${h - (p / max) * h}`,
    )
    .join(" ");

  return (
    <div className="p-7.5 h-full flex flex-col gap-4 justify-between">
      <div className="flex justify-between items-center">
        <div className="font-mono text-[11px] text-muted">
          WEEKLY BRIEF · OCT 21
        </div>
        <Pill>ready</Pill>
      </div>
      <div className="flex flex-col gap-2 max-w-95">
        <div className="text-[14px] text-ink-soft">
          <span className="text-lime">+38%</span> reach lift from your Tue/Thu
          posts. Audience leans toward
          <span className="text-cyan"> &quot;build-in-public&quot;</span>{" "}
          threads over tutorials this month.
        </div>
        <div className="text-[12.5px] text-muted">
          Recommend: 2× build-in-public · 1× contrarian take · drop
          &quot;how-to&quot; series.
        </div>
      </div>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="none"
        className="w-full h-20"
      >
        <defs>
          <linearGradient id="sig-grad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`${path} L ${w} ${h} L 0 ${h} Z`} fill="url(#sig-grad)" />
        <path d={path} fill="none" stroke="var(--cyan)" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

const items = [
  {
    span: "wide" as const,
    tag: "Strategy" as const,
    tagColor: "cyan" as const,
    title: "Plan a quarter\nin an afternoon.",
    copy: "Your hooks, pillars, and posting cadence — generated from your voice & top performers, edited by you.",
    visual: <FeatureCalendar />,
  },
  {
    tag: "Hook bank" as const,
    tagColor: "violet" as const,
    title: "Hooks that travel.",
    copy: "Score every opener against 4M+ viral posts. Reroll until it lands.",
    visual: <FeatureHooks />,
  },
  {
    tag: "Matchmaking" as const,
    tagColor: "lime" as const,
    title: "Brands that fit\nyour audience.",
    copy: "No mass-outreach. We surface 3 high-fit opportunities a week — only if they match.",
    visual: <FeatureMatch />,
  },
  {
    span: "wide" as const,
    tag: "Signals" as const,
    tagColor: "pink" as const,
    title: "Know what to post next.",
    copy: "Cross-platform analytics, voice-of-audience extraction, and a weekly brief that reads itself.",
    visual: <FeatureSignals />,
  },
];

export function Features() {
  return (
    <section id="features" className="py-section-y">
      <div className="container mx-auto md:px-gutter px-6">
        <Reveal className="mb-14">
          <div className="font-mono text-[12px] tracking-[0.08em] text-dim mb-4">
            <b className="text-cyan font-medium">[01]</b> / PLATFORM
          </div>
          <h2 className="font-display text-section-title font-medium tracking-[-0.03em] leading-[0.96] mt-0 mb-4">
            One stack. Ten layers of leverage.
          </h2>
          <p className="text-ink-soft text-[18px] max-w-155 m-0">
            Tenstack collapses your spreadsheet, your inbox, your analytics
            tabs, and your DM pile into a workflow that actually ships content.
          </p>
        </Reveal>

        <Reveal
          stagger
          className="md:grid flex md:overflow-x-hidden styled-scroll hide-scroll md:snap-none scroll-smooth max-[820px]:overflow-x-auto grid-cols-2 gap-5 max-[820px]:grid-cols-1"
        >
          {items.map((f, i) => (
            <article
              key={i}
              className={cn(
                "bg-bg-card md:col-span-1 flex-1 snap-start border border-line rounded-(--radius) overflow-hidden flex transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-line-strong",
                f.span === "wide"
                  ? "col-span-2 flex-row min-h-90 max-[820px]:col-span-1 max-[820px]:flex-col max-[820px]:min-h-105 "
                  : "flex-col min-h-105 ",
              )}
            >
              <div
                className={cn(
                  "bg-bg-soft relative overflow-hidden",
                  f.span === "wide"
                    ? "flex-[1.1] border-r border-r-line max-[820px]:border-r-0 max-[820px]:border-b max-[820px]:border-b-line"
                    : "flex-1 border-b border-b-line min-h-55",
                )}
              >
                {f.visual}
              </div>
              <div
                className={cn(
                  "p-[28px_30px_30px]",
                  f.span === "wide" && "flex-[0.9] max-w-120",
                )}
              >
                <Tag color={f.tagColor}>{f.tag}</Tag>
                <h3 className="font-display text-[28px] font-medium tracking-[-0.03em] leading-[0.96] my-3 mb-2 whitespace-pre-line">
                  {f.title}
                </h3>
                <p className="text-ink-soft text-[14.5px] m-0">{f.copy}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
