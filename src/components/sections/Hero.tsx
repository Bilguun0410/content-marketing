"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Pill, Btn, ArrowRight, Reveal } from "@/components/shared";
import { Counter } from "@/components/shared/Counter";

type HeroVariant = "stack" | "metric" | "network";

function HeroShowcaseStack() {
  const [hover, setHover] = useState<number | null>(null);
  const layers = [
    {
      label: "STRATEGY",
      color: "var(--lime)",
      y: 0,
      items: [
        "Hook bank · 142",
        "Content calendar · 28 posts",
        "Pillar: Build in public",
      ],
    },
    {
      label: "CONTENT",
      color: "var(--cyan)",
      y: 38,
      items: ["Drafts · 12", "Scheduled · 8", "Ready to ship · 3"],
    },
    {
      label: "GROWTH",
      color: "var(--violet)",
      y: 76,
      items: [
        "+24.8% engagement",
        "+1.2k followers / wk",
        "Best post: Tuesday 9am",
      ],
    },
    {
      label: "MATCH",
      color: "var(--pink)",
      y: 114,
      items: ["3 brand offers", "$8.2k pending", "Notion · Linear · Vercel"],
    },
  ];

  return (
    <div className="relative w-full aspect-square max-w-140 mx-auto">
      {/* glow */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          inset: "-10%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.18), transparent 60%)",
          filter: "blur(40px)",
        }}
      />
      {layers.map((l, i) => (
        <motion.div
          key={l.label}
          onHoverStart={() => setHover(i)}
          onHoverEnd={() => setHover(null)}
          animate={{
            y:
              hover === i
                ? l.y - 8
                : hover !== null && i > hover
                  ? l.y + 12
                  : l.y,
            rotate: (i - 1.5) * 1.2,
            scale: hover === i ? 1.02 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute top-0 left-1/2 w-[94%] bg-bg-card border border-line-strong rounded-[18px] p-[20px_22px] cursor-pointer"
          style={{
            translateX: "-50%",
            boxShadow:
              hover === i
                ? `0 20px 60px -10px ${l.color}55, 0 0 0 1px ${l.color}66`
                : "0 10px 40px -20px rgba(0,0,0,0.6)",
            zIndex: 10 + i,
          }}
        >
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-[#0a0e1a] font-bold text-[11px] font-mono"
                style={{
                  background: `linear-gradient(135deg, ${l.color}, ${l.color}66)`,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <span
                className="font-mono text-[11px] tracking-widest"
                style={{ color: l.color }}
              >
                {l.label}
              </span>
            </div>
            <span className="text-muted text-[12px]">· · ·</span>
          </div>
          <div className="flex flex-col gap-2">
            {l.items.map((it, j) => (
              <div key={j} className="flex items-center gap-3 text-[13.5px]">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0 opacity-60"
                  style={{ background: l.color }}
                />
                <span className="text-ink-soft">{it}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Floating mini cards */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute right-[-8%] top-[8%] bg-bg-card border border-line-strong rounded-xl p-[10px_14px] font-mono text-[11px] z-30"
        style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
      >
        <div className="text-lime">+312 views/hr</div>
        <div className="text-muted text-[10px]">last 60 min</div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 6.5,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute left-[-6%] bottom-[14%] bg-bg-card border border-line-strong rounded-xl p-[10px_14px] font-mono text-[11px] z-30"
        style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
      >
        <div className="text-cyan">● Brand match</div>
        <div className="text-muted text-[10px]">Notion · 92% fit</div>
      </motion.div>
    </div>
  );
}

function HeroShowcaseMetric() {
  const bars = [12, 18, 14, 22, 28, 24, 36, 42, 38, 52, 60, 68];
  return (
    <div className="relative w-full max-w-140 mx-auto aspect-square">
      <div className="relative h-full p-7 bg-bg-card border border-line-strong rounded-[22px]">
        <div className="flex justify-between items-center mb-6">
          <Pill>● live performance</Pill>
          <span className="font-mono text-[11px] text-muted">30d ↗</span>
        </div>
        <div className="font-mono text-[11px] text-muted tracking-widest">
          TOTAL REACH
        </div>
        <div className="font-display text-[clamp(48px,6vw,72px)] font-medium tracking-[-0.03em] leading-[0.96] mt-1 mb-2">
          <Counter to={2480000} />
        </div>
        <div className="flex items-center gap-2 text-[13px] text-lime mb-6">
          ▲ 38.4% <span className="text-muted">vs last month</span>
        </div>
        <div className="flex items-end gap-1.5 h-35 mt-auto">
          {bars.map((b, i) => (
            <motion.div
              key={i}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: `${b}%`, opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex-1 rounded-sm"
              style={{
                background:
                  i >= bars.length - 3
                    ? "linear-gradient(180deg, var(--cyan), var(--violet))"
                    : "rgba(167,139,250,0.25)",
              }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-3 font-mono text-[10px] text-dim">
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
        </div>
      </div>
    </div>
  );
}

function HeroShowcaseNetwork() {
  const nodes = [
    { x: 50, y: 50, r: 28, type: "you", label: "you", color: "var(--cyan)" },
    { x: 18, y: 22, r: 14, type: "brand", label: "Notion" },
    { x: 82, y: 24, r: 14, type: "brand", label: "Linear" },
    { x: 88, y: 62, r: 12, type: "creator", label: "Maya R." },
    { x: 16, y: 70, r: 14, type: "brand", label: "Vercel" },
    { x: 50, y: 88, r: 12, type: "creator", label: "Sam K." },
    { x: 35, y: 14, r: 10, type: "creator", label: "Ari T." },
    { x: 70, y: 82, r: 10, type: "brand", label: "Raycast" },
  ];

  return (
    <div className="relative w-full max-w-140 mx-auto aspect-square">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        {nodes.slice(1).map((n, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            stroke={
              i % 2 === 0 ? "rgba(34,211,238,0.35)" : "rgba(167,139,250,0.3)"
            }
            strokeWidth="0.3"
            strokeDasharray="0.5 0.6"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-10"
              dur={`${4 + i}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}
      </svg>
      {nodes.map((n, i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
          className="absolute rounded-full border border-line-strong flex items-center justify-center font-mono font-semibold"
          style={{
            left: `${n.x}%`,
            top: `${n.y}%`,
            width: n.r * 2,
            height: n.r * 2,
            marginLeft: -n.r,
            marginTop: -n.r,
            background:
              n.type === "you"
                ? "var(--grad)"
                : n.type === "brand"
                  ? "var(--bg-card)"
                  : "var(--bg-soft)",
            fontSize: n.r > 20 ? 11 : 9,
            color: n.type === "you" ? "#0a0e1a" : "var(--ink)",
            boxShadow:
              n.type === "you"
                ? "0 0 40px rgba(34,211,238,0.4)"
                : "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          {n.label}
        </motion.div>
      ))}
    </div>
  );
}

interface HeroProps {
  variant?: HeroVariant;
}

export function Hero({ variant = "stack" }: HeroProps) {
  return (
    <section id="top" className="pt-35 pb-20 relative overflow-hidden">
      {/* Background blobs */}
      <motion.div
        className="absolute w-150 h-150 rounded-full pointer-events-none opacity-45"
        style={{
          background: "radial-gradient(circle, var(--violet), transparent)",
          filter: "blur(80px)",
          top: -200,
          left: -200,
        }}
        animate={{ x: [0, 32, -22, 14, 0], y: [0, -26, 18, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-125 h-125 rounded-full pointer-events-none opacity-45"
        style={{
          background: "radial-gradient(circle, var(--cyan), transparent)",
          filter: "blur(80px)",
          top: 100,
          right: -150,
        }}
        animate={{ x: [0, -28, 18, -14, 0], y: [0, 22, -18, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto md:px-gutter px-6 relative z-2">
        <div className="grid grid-cols-[1.1fr_1fr] gap-16 items-center max-[980px]:grid-cols-1 max-[980px]:gap-14">
          <Reveal stagger className="flex flex-col gap-8">
            <Pill>● Series A · backed by Sequoia &amp; a16z</Pill>
            <h1 className="font-display text-[clamp(48px,7vw,96px)] font-medium tracking-[-0.03em] leading-[0.96] m-0">
              The growth stack <br />
              for <span className="text-grad">creators</span> &amp; brands.
            </h1>
            <p className="text-[clamp(17px,1.4vw,20px)] text-ink-soft max-w-135 leading-normal m-0">
              Plan organic content that performs. Match with brands that
              actually fit. Ship a quarter&apos;s worth of posts in an afternoon
              — without losing your voice.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Btn kind="grad" href="#pricing">
                <span>Start free · 14 days</span>
                <ArrowRight />
              </Btn>
              <Btn kind="ghost" href="#features">
                Watch the tour →
              </Btn>
            </div>
            <div className="flex items-center gap-6 mt-2 flex-wrap">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-bg font-mono text-[10px] font-semibold text-[#0a0e1a] flex items-center justify-center"
                    style={{
                      background: `oklch(0.7 0.15 ${i * 60 + 30})`,
                      marginLeft: i === 0 ? 0 : -8,
                    }}
                  >
                    {["MK", "AT", "RS", "JL", "+"][i]}
                  </div>
                ))}
              </div>
              <div className="text-[13px] text-muted">
                <div className="text-ink font-medium">12,400+ creators</div>
                <div>shipping with tenstack today</div>
              </div>
            </div>
          </Reveal>

          <div className="max-[980px]:order-2">
            {variant === "stack" && <HeroShowcaseStack />}
            {variant === "metric" && <HeroShowcaseMetric />}
            {variant === "network" && <HeroShowcaseNetwork />}
          </div>
        </div>
      </div>
    </section>
  );
}
