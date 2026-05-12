"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, Btn, ArrowRight, Pill } from "@/components/shared";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import Link from "next/link";

function CreatorsPanel() {
  const creators = [
    {
      name: "Maya Reyes",
      niche: "Dev productivity",
      reach: "142k",
      plat: "YT · X",
      accent: 200,
    },
    {
      name: "Ari Tanaka",
      niche: "Design systems",
      reach: "88k",
      plat: "IG · SS",
      accent: 320,
    },
    {
      name: "Sam Khoury",
      niche: "AI tooling",
      reach: "210k",
      plat: "X · LI",
      accent: 80,
    },
    {
      name: "Jules Lin",
      niche: "Indie SaaS",
      reach: "64k",
      plat: "TT · YT",
      accent: 260,
    },
  ];
  const benefits = [
    [
      "Hook lab",
      "Score every opener against 4M+ viral posts. Reroll till it lands.",
    ],
    [
      "Cross-platform",
      "Plan, schedule, and analyse YouTube, X, TT, IG, Substack & LinkedIn from one canvas.",
    ],
    [
      "Brand inbox",
      "Stop chasing deals. Get matched only with brands that fit your audience.",
    ],
    [
      "Audience signal",
      "A weekly brief that tells you exactly what to make next.",
    ],
  ];

  return (
    <div className="grid grid-cols-2 gap-16 items-start max-[920px]:grid-cols-1 max-[920px]:gap-12">
      <div className="flex flex-col gap-6">
        {benefits.map(([t, d], i) => (
          <div
            key={i}
            className={cn(
              "flex gap-4 py-5",
              i !== 0 && "border-t border-t-line",
            )}
          >
            <div className="w-9 h-9 rounded-[10px] shrink-0 bg-grad-soft border border-line-strong flex items-center justify-center font-mono text-[13px] font-semibold text-cyan">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-display text-[22px] font-medium">{t}</div>
              <div className="text-ink-soft text-[14.5px]">{d}</div>
            </div>
          </div>
        ))}
        <Button size={"lg"} className="self-start mt-3" role="link">
          <Link href="#pricing" className="flex items-center gap-2">
            <span>Join as a creator</span>
            <ArrowRight />
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        {creators.map((c, i) => (
          <motion.div
            key={c.name}
            whileHover={{
              rotate: 0,
              translateY: -4,
              borderColor: "var(--cyan)",
            }}
            initial={{ rotate: (i - 1.5) * 1.5 }}
            className="p-5 bg-bg-card border border-line rounded-(--radius) transition-[border-color] duration-200"
            style={{ transformOrigin: "center" }}
          >
            <div className="flex items-center gap-4 mb-3.5">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-[#0a0e1a]"
                style={{ background: `oklch(0.75 0.16 ${c.accent})` }}
              >
                {c.name
                  .split(" ")
                  .map((s) => s[0])
                  .join("")}
              </div>
              <div className="flex-1">
                <div className="font-medium text-[15px]">{c.name}</div>
                <div className="font-mono text-[11px] text-muted">
                  {c.niche}
                </div>
              </div>
              <Pill dot={false}>{c.plat}</Pill>
            </div>
            <div className="flex justify-between py-2.5 border-t border-t-line text-[12px]">
              <span className="text-muted">Reach</span>
              <span className="font-mono">{c.reach}</span>
            </div>
            <div className="flex justify-between text-[12px]">
              <span className="text-muted">This month</span>
              <span className="font-mono text-lime">+24%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function BrandsPanel() {
  const benefits = [
    [
      "Precision matching",
      "Filter 12,400+ vetted creators by audience fit, not follower count.",
    ],
    [
      "Briefs that ship",
      "Send one brief. Get drafts back from creators in 48h.",
    ],
    [
      "Performance pricing",
      "Pay per verified result. Roll budget into the next wave.",
    ],
    [
      "Compliance built-in",
      "FTC disclosures, contracts, and approvals — without a single email.",
    ],
  ];

  return (
    <div className="grid grid-cols-2 gap-16 items-start max-[920px]:grid-cols-1 max-[920px]:gap-12">
      <div className="flex flex-col gap-6">
        {benefits.map(([t, d], i) => (
          <div
            key={i}
            className={cn(
              "flex gap-4 py-5",
              i !== 0 && "border-t border-t-line",
            )}
          >
            <div className="w-9 h-9 rounded-[10px] shrink-0 bg-grad-soft border border-line-strong flex items-center justify-center font-mono text-[13px] font-semibold text-violet">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-display text-[22px] font-medium">{t}</div>
              <div className="text-ink-soft text-[14.5px]">{d}</div>
            </div>
          </div>
        ))}
        <Button size={"lg"} className="self-start mt-3" role="link">
          <Link href="#pricing" className="flex items-center gap-2">
            <span>Talk to brand sales</span>
            <ArrowRight />
          </Link>
        </Button>
      </div>

      {/* Brand brief preview card */}
      <div className="p-6 bg-bg-card border border-line rounded-(--radius)">
        <div className="flex justify-between items-center mb-4">
          <Pill>● live brief</Pill>
          <span className="font-mono text-[11px] text-muted">BRF-2046</span>
        </div>
        <div className="font-display text-[24px] font-medium mb-1.5">
          Linear · Cycles launch
        </div>
        <div className="text-muted text-[13px] mb-5">
          3 creators · 7-day window · $9.6k pool
        </div>
        <div className="flex flex-col gap-2 mb-4">
          {[
            ["Audience", "Engineering managers, IC engineers, founders"],
            ["Format", "Long-form thread + carousel"],
            ["Tone", "Tactical, not promotional"],
            ["Deliverable", "Draft in 48h · live in 7d"],
          ].map(([k, v]) => (
            <div key={String(k)} className="flex justify-between text-[13px]">
              <span className="text-muted font-mono text-[11px] tracking-[0.06em]">
                {String(k).toUpperCase()}
              </span>
              <span className="text-ink-soft">{v}</span>
            </div>
          ))}
        </div>
        <div className="p-3.5 bg-bg-soft rounded-[10px] text-[13px] text-ink-soft">
          <div className="font-mono text-[10px] text-muted mb-2">
            3 CREATORS MATCHED
          </div>
          <div className="flex gap-2 flex-wrap">
            {["Maya Reyes", "Sam Khoury", "Jules Lin"].map((n) => (
              <span
                key={n}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/4 border border-line font-mono text-[11px] text-ink-soft"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CreatorsBrands() {
  const [tab, setTab] = useState<"creators" | "brands">("creators");

  return (
    <section id="creators" className="py-section-y relative overflow-hidden">
      <div className="container mx-auto md:px-gutter px-6">
        <Reveal className="flex justify-between items-end mb-14 flex-wrap gap-6">
          <div className="flex flex-col gap-4 max-w-160">
            <div className="font-mono text-[12px] tracking-[0.08em] text-dim">
              <b className="text-cyan font-medium">[03]</b> / TWO SIDES
            </div>
            <h2 className="font-display text-section-title font-medium tracking-[-0.03em] leading-[0.96] m-0">
              Built for both <br />
              sides of the table.
            </h2>
          </div>

          {/* Segmented control */}
          <div className="relative inline-flex p-1 bg-bg-soft border border-line rounded-full">
            <motion.div
              layoutId="seg-thumb"
              className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-grad rounded-full z-1"
              animate={{ x: tab === "creators" ? 0 : "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 35 }}
            />
            {(["creators", "brands"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  "relative z-2 bg-transparent border-none px-5.5 py-2.5 text-sm font-medium cursor-pointer rounded-full transition-colors duration-200",
                  tab === t ? "text-[#0a0e1a]" : "text-muted",
                )}
              >
                {t === "creators" ? "For creators" : "For brands"}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {tab === "creators" ? <CreatorsPanel /> : <BrandsPanel />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
