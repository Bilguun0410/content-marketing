"use client";

import { useState } from "react";
import { Logo, Reveal, Tag } from "@/components/shared";
import { cn } from "@/lib/utils";

function DashContent() {
  const posts = [
    { day: "Mon · Oct 13", plat: "YT", title: "Why we ditched our 12-tab workflow", state: "live", perf: "+18.4%" },
    { day: "Tue · Oct 14", plat: "X", title: "The 30-minute pricing page rewrite that doubled trials", state: "scheduled", perf: "—" },
    { day: "Wed · Oct 15", plat: "IG", title: "Build-in-public week 14: what I shipped", state: "draft", perf: "—" },
    { day: "Thu · Oct 16", plat: "TT", title: "Hooks I stole from the top 0.1% of posts", state: "ready", perf: "—" },
    { day: "Fri · Oct 17", plat: "SS", title: "Sunday brief #28 — the contrarian take", state: "scheduled", perf: "—" },
  ];
  const stateColors: Record<string, "lime" | "cyan" | "muted" | "violet"> = {
    live: "lime", scheduled: "cyan", draft: "muted", ready: "violet",
  };

  return (
    <div className="flex-1 flex flex-col gap-4">
      <div className="flex gap-3 flex-wrap">
        {[
          { lbl: "This week", val: "8 posts", color: "var(--cyan)" },
          { lbl: "Reach 7d", val: "184.2k", color: "var(--lime)", delta: "+24%" },
          { lbl: "Engagement", val: "4.8%", color: "var(--violet)", delta: "+0.6pt" },
          { lbl: "In drafts", val: "12", color: "var(--pink)" },
        ].map((m) => (
          <div
            key={m.lbl}
            className="flex-[1_1_140px] p-3.5 bg-bg-soft border border-line rounded-[10px]"
          >
            <div className="font-mono text-[10px] text-muted tracking-[0.08em]">
              {m.lbl.toUpperCase()}
            </div>
            <div className="font-display text-[22px] mt-1 font-medium">{m.val}</div>
            {m.delta && (
              <div className="font-mono text-[10px]" style={{ color: m.color }}>{m.delta}</div>
            )}
          </div>
        ))}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-3">
          <div className="text-[13px] font-medium">This week</div>
          <div className="font-mono text-[11px] text-muted">5 of 8 ready</div>
        </div>
        <div className="border border-line rounded-[10px] overflow-hidden">
          {posts.map((p, i) => (
            <div
              key={i}
              className={cn(
                "flex justify-between items-center px-4 py-3 text-[13px]",
                i !== 0 && "border-t border-t-line",
                i % 2 !== 0 && "bg-white/1.5",
              )}
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <span className="font-mono text-[11px] text-dim w-22.5 shrink-0">{p.day}</span>
                <span className="w-6.5 h-6.5 rounded-[7px] bg-bg-soft border border-line flex items-center justify-center font-mono text-[10px] text-ink-soft font-semibold shrink-0">
                  {p.plat}
                </span>
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">{p.title}</span>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <span className="font-mono text-[11px] text-lime">{p.perf}</span>
                <Tag color={stateColors[p.state]}>{p.state}</Tag>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashSignals() {
  const bars = [22, 28, 24, 38, 32, 48, 42, 58, 64, 56, 72, 88, 82, 96];
  const max = Math.max(...bars);
  return (
    <div className="flex-1 flex flex-col gap-4">
      <div className="p-5 bg-bg-soft border border-line rounded-xl">
        <div className="flex justify-between items-center mb-3">
          <div>
            <div className="font-mono text-[11px] text-muted">WEEKLY REACH · 14d</div>
            <div className="font-display text-[36px] font-medium">2.48M</div>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-mono text-[11px] text-lime">▲ 38.4%</span>
            <span className="font-mono text-[10px] text-muted">vs prev period</span>
          </div>
        </div>
        <div className="flex items-end gap-1 h-27.5">
          {bars.map((b, i) => (
            <div
              key={i}
              className="flex-1 rounded-[3px]"
              style={{
                height: `${(b / max) * 100}%`,
                background:
                  i >= bars.length - 3
                    ? "linear-gradient(180deg, var(--cyan), var(--violet))"
                    : "rgba(167,139,250,0.3)",
              }}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4.5 bg-bg-soft border border-line rounded-xl">
          <div className="font-mono text-[11px] text-muted mb-3">AUDIENCE THEMES</div>
          {[
            ["Build-in-public", 38, "lime"],
            ["Dev productivity", 24, "cyan"],
            ["Founder lessons", 18, "violet"],
            ["Tutorials", 12, "pink"],
          ].map(([l, p, c]) => (
            <div key={String(l)} className="flex flex-col gap-1 mb-2.5">
              <div className="flex justify-between text-[12px]">
                <span>{l}</span>
                <span className="font-mono text-muted">{p}%</span>
              </div>
              <div className="h-1 bg-white/6 rounded-full">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${p}%`, background: `var(--${c})` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="p-4.5 bg-bg-soft border border-line rounded-xl">
          <div className="font-mono text-[11px] text-muted mb-3">RECOMMEND</div>
          <ul className="p-0 m-0 list-none flex flex-col gap-3">
            {[
              ["Post Tue 9:15am — your reach window peaks here.", "cyan"],
              ["Lean harder into build-in-public, dial back tutorials.", "lime"],
              ["Carousel format is outperforming video 2.4× this week.", "violet"],
            ].map(([t, c], i) => (
              <li key={i} className="flex gap-3 text-[12.5px] text-ink-soft">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.75 shrink-0"
                  style={{ background: `var(--${c})` }}
                />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function DashMatches() {
  const matches = [
    { brand: "Linear", cat: "Dev tools", fit: 96, fee: "$3,200", term: "3 posts · 30d", hot: true },
    { brand: "Cal.com", cat: "Productivity", fit: 91, fee: "$2,400", term: "2 posts · 14d", hot: true },
    { brand: "Resend", cat: "Dev tools", fit: 88, fee: "$1,800", term: "1 post · 7d" },
    { brand: "Mintlify", cat: "Docs", fit: 84, fee: "$2,200", term: "2 posts · 21d" },
    { brand: "Plain", cat: "Support", fit: 79, fee: "$1,500", term: "1 post · 14d" },
  ];
  return (
    <div className="flex-1 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="text-[13px]">
          <span className="text-ink font-medium">5 new matches</span>
          <span className="text-muted ml-2">· this week</span>
        </div>
        <div className="font-mono text-[11px] text-muted">filter: all categories</div>
      </div>
      <div className="border border-line rounded-[10px] overflow-hidden">
        <div className="flex px-4 py-2.5 bg-bg-soft border-b border-b-line font-mono text-[10px] text-dim tracking-[0.08em]">
          <span className="flex-2">BRAND</span>
          <span className="flex-1">FIT</span>
          <span className="flex-1">FEE</span>
          <span className="flex-[1.2]">TERM</span>
          <span className="w-25 text-right">STATUS</span>
        </div>
        {matches.map((m) => (
          <div
            key={m.brand}
            className="flex items-center px-4 py-3.5 border-t border-t-line text-[13px]"
          >
            <div className="flex-2 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-grad text-[#0a0e1a] font-mono text-[12px] font-bold flex items-center justify-center">
                {m.brand[0]}
              </div>
              <div>
                <div className="font-medium">{m.brand}</div>
                <div className="text-[11px] text-muted font-mono">{m.cat}</div>
              </div>
            </div>
            <div className={cn("flex-1 font-mono text-[12px]", m.fit > 90 ? "text-lime" : "text-cyan")}>
              {m.fit}%
            </div>
            <div className="flex-1 font-mono">{m.fee}</div>
            <div className="flex-[1.2] text-muted font-mono text-[12px]">{m.term}</div>
            <div className="w-25 text-right">
              {m.hot ? <Tag color="lime">apply →</Tag> : <Tag color="violet">view</Tag>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<"content" | "analytics" | "matches">("content");
  const tabs = [
    { id: "content" as const, label: "Content" },
    { id: "analytics" as const, label: "Signals" },
    { id: "matches" as const, label: "Brand matches" },
  ];

  return (
    <section id="dashboard" className="bg-bg-soft md:py-section-y py-10">
      <div className="container mx-auto md:px-gutter px-6">
        <Reveal className="flex flex-col items-center text-center gap-4 mb-14">
          <div className="font-mono text-[12px] tracking-[0.08em] text-dim">
            <b className="text-cyan font-medium">[02]</b> / WORKSPACE
          </div>
          <h2 className="font-display text-section-title font-medium tracking-[-0.03em] leading-[0.96] m-0 max-w-225">
            Your whole workflow,
            <br />
            on a single canvas.
          </h2>
          <p className="text-ink-soft text-[18px] max-w-140 m-0">
            No more 14 tabs. Plan, draft, score, schedule, and close brand
            deals from one screen.
          </p>
        </Reveal>

        <Reveal>
          {/* Browser chrome */}
          <div
            className="bg-bg-card border border-line-strong rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 30px 90px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)" }}
          >
            {/* Title bar */}
            <div className="flex items-center justify-between px-3.5 py-2.5 bg-bg-soft border-b border-b-line">
              <div className="flex items-center gap-2">
                <span className="w-2.75 h-2.75 rounded-full bg-[#ff5f57] block" />
                <span className="w-2.75 h-2.75 rounded-full bg-[#febc2e] block" />
                <span className="w-2.75 h-2.75 rounded-full bg-[#28c840] block" />
              </div>
              <div className="flex-1 mx-4 font-mono text-[12px] text-center px-2.5 py-1 bg-bg rounded-md">
                <span className="text-dim">tenstack.app /</span>
                <span className="text-ink-soft ml-1">workspace</span>
              </div>
              <div className="w-15" />
            </div>

            {/* Body */}
            <div className="grid grid-cols-[220px_1fr] min-h-145 max-[820px]:grid-cols-1">
              {/* Sidebar */}
              <aside className="bg-bg-soft border-r border-r-line flex flex-col min-h-145 max-[820px]:hidden">
                <div className="p-3.5 px-4 border-b border-b-line">
                  <Logo size={20} />
                </div>
                <div className="p-3 flex flex-col gap-1">
                  {[
                    { label: "Home", icon: "◆", on: false },
                    { label: "Content", icon: "✎", on: true },
                    { label: "Signals", icon: "∿", on: false },
                    { label: "Matches", icon: "⬢", on: false, badge: 3 },
                    { label: "Library", icon: "☰", on: false },
                    { label: "Settings", icon: "◌", on: false },
                  ].map((it) => (
                    <div
                      key={it.label}
                      className={cn(
                        "flex justify-between items-center px-2.5 py-2 rounded-lg text-[13px]",
                        it.on ? "bg-cyan/10 text-cyan" : "bg-transparent text-ink-soft",
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono w-3.5 text-center opacity-70">{it.icon}</span>
                        <span>{it.label}</span>
                      </span>
                      {it.badge && (
                        <span className="bg-violet text-[#0a0e1a] text-[10px] font-mono font-bold px-1.5 py-px rounded-full">
                          {it.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-auto p-4 border-t border-t-line">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-7 h-7 rounded-full font-mono text-[11px] font-bold text-[#0a0e1a] flex items-center justify-center"
                      style={{ background: "oklch(0.7 0.15 220)" }}
                    >
                      MR
                    </div>
                    <div className="min-w-0">
                      <div className="text-[12px] font-medium">Maya Reyes</div>
                      <div className="text-[10px] text-muted font-mono">pro plan</div>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main content */}
              <div className="p-[24px_28px] flex flex-col gap-5 overflow-hidden">
                {/* Tab toolbar */}
                <div className="flex justify-between items-center border-b border-b-line pb-4">
                  <div className="flex items-center gap-3">
                    {tabs.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setActiveTab(t.id)}
                        className={cn(
                          "bg-transparent border-none py-1.5 text-[14px] cursor-pointer transition-colors duration-150 border-b-2",
                          activeTab === t.id
                            ? "text-ink font-medium border-b-cyan"
                            : "text-muted font-normal border-b-transparent",
                        )}
                        style={{ paddingLeft: 0, paddingRight: 0 }}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-muted">
                    <span>⌘K</span>
                    <div className="px-2.5 py-1 bg-bg border border-line rounded-md cursor-pointer">
                      + New post
                    </div>
                  </div>
                </div>

                {activeTab === "content" && <DashContent />}
                {activeTab === "analytics" && <DashSignals />}
                {activeTab === "matches" && <DashMatches />}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
