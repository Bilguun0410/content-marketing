"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, Tag } from "@/components/shared";
import { Eyebrow } from "../shared/Eyebrow";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Solo",
    tag: "For new creators",
    monthly: 0,
    annual: 0,
    cta: "Start free",
    features: [
      "Plan 1 platform",
      "20 hook lab credits / month",
      "Weekly audience brief",
      "Community access",
    ],
  },
  {
    name: "Pro",
    tag: "Most creators pick this",
    monthly: 49,
    annual: 39,
    cta: "Start 14-day trial",
    featured: true,
    features: [
      "Unlimited platforms",
      "Unlimited hook lab",
      "Brand matchmaking inbox",
      "Cross-platform analytics",
      "Priority brief delivery",
      "2 teammate seats",
    ],
  },
  {
    name: "Studio",
    tag: "For agencies & teams",
    monthly: 199,
    annual: 159,
    cta: "Talk to sales",
    features: [
      "Everything in Pro",
      "Multi-creator workspaces",
      "White-label reporting",
      "API & webhooks",
      "Compliance vault",
      "Dedicated success lead",
    ],
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-section-y">
      <div className="container mx-auto px-gutter">
        <Reveal className="flex flex-col items-center text-center gap-4 mb-14">
          <Eyebrow title="pricing" order={5} />
          <h2 className="font-display text-section-title font-medium tracking-[-0.03em] leading-[0.96] m-0">
            Pricing that scales
            <br />
            with what you ship.
          </h2>
          <p className="text-ink-soft text-[17px] max-w-135 m-0">
            14-day Pro trial. No card. Brands pay per match — not per seat.
          </p>

          {/* Billing toggle */}
          <div className="relative inline-flex p-1 bg-bg-soft border border-line rounded-full mt-3">
            <motion.div
              className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-grad rounded-full z-1"
              animate={{ x: annual ? "100%" : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 35 }}
            />
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                "relative z-2 bg-transparent border-none px-5.5 py-2.5 text-sm font-medium cursor-pointer rounded-full transition-colors duration-200",
                !annual ? "text-[#0a0e1a]" : "text-muted",
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                "relative z-2 bg-transparent border-none px-5.5 py-2.5 text-sm font-medium cursor-pointer rounded-full transition-colors duration-200 flex items-center gap-1.5",
                annual ? "text-[#0a0e1a]" : "text-muted",
              )}
            >
              Annual{" "}
              <span className="font-mono text-[10px] opacity-70">−20%</span>
            </button>
          </div>
        </Reveal>

        <Reveal stagger className="grid grid-cols-3 gap-5 items-stretch max-[900px]:grid-cols-1">
          {tiers.map((t) => {
            const price = annual ? t.annual : t.monthly;
            return (
              <div
                key={t.name}
                className={cn(
                  "relative bg-bg-card rounded-(--radius) transition-[border-color,transform] duration-200 hover:border-line-strong",
                  t.featured
                    ? "border border-line-strong -translate-y-2 max-[900px]:translate-y-0"
                    : "border border-line",
                )}
                style={t.featured ? { boxShadow: "0 20px 60px -20px rgba(34,211,238,0.25)" } : undefined}
              >
                {t.featured && (
                  <div className="absolute -top-px -left-px -right-px h-1 bg-grad rounded-tl-(--radius) rounded-tr-(--radius)" />
                )}
                <div className="p-7">
                  <div className="flex justify-between items-center mb-1">
                    <div className="font-display text-[24px] font-medium">{t.name}</div>
                    {t.featured && <Tag color="cyan">popular</Tag>}
                  </div>
                  <div className="text-muted text-[13px] mb-6">{t.tag}</div>

                  <div className="flex items-baseline gap-2 mb-1">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={price}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="font-display text-[56px] font-medium leading-none tracking-[-0.03em]"
                      >
                        {price === 0 ? "Free" : `$${price}`}
                      </motion.span>
                    </AnimatePresence>
                    {price > 0 && <span className="text-muted text-sm">/ mo</span>}
                  </div>
                  <div className="text-dim text-[12px] font-mono mb-6">
                    {price === 0
                      ? "free forever · 1 creator"
                      : annual
                        ? "billed annually"
                        : "billed monthly"}
                  </div>

                  <button
                    className={cn(
                      "flex items-center justify-center w-full px-5 py-3 rounded-full text-sm cursor-pointer transition-[transform,opacity] duration-150 hover:opacity-85",
                      t.featured
                        ? "bg-grad text-[#0a0e1a] font-semibold border-none"
                        : "bg-transparent text-ink font-medium border border-line-strong",
                    )}
                  >
                    {t.cta}
                  </button>

                  <ul className="list-none p-0 mt-6 mb-0 flex flex-col gap-3">
                    {t.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm text-ink-soft">
                        <svg width="16" height="16" viewBox="0 0 16 16" className="shrink-0 mt-0.5">
                          <path
                            d="M3 8.5l3 3 7-7"
                            fill="none"
                            stroke="var(--cyan)"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </Reveal>

        <Reveal className="mt-14 text-center text-muted text-sm">
          Need enterprise compliance, SSO, or volume pricing?{" "}
          <a href="#" className="text-cyan border-b border-b-current">
            Talk to sales →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
