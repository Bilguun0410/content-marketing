"use client";

import { Reveal, Tag, ArrowRight } from "@/components/shared";

const posts = [
  {
    tag: "Playbook" as const,
    tagColor: "cyan" as const,
    read: "8 min",
    title: "The 10-layer organic content stack we built tenstack on",
    date: "Oct 14",
    gradFrom: "oklch(0.65 0.18 200)",
    gradTo: "oklch(0.55 0.20 280)",
  },
  {
    tag: "Field notes" as const,
    tagColor: "violet" as const,
    read: "5 min",
    title: 'What "build-in-public" actually rewards in 2026',
    date: "Oct 09",
    gradFrom: "oklch(0.7 0.18 80)",
    gradTo: "oklch(0.6 0.18 320)",
  },
  {
    tag: "Research" as const,
    tagColor: "lime" as const,
    read: "12 min",
    title: "Hook patterns from 4.2M viral posts (with data)",
    date: "Sep 28",
    gradFrom: "oklch(0.5 0.18 280)",
    gradTo: "oklch(0.55 0.18 200)",
  },
];

export function Resources() {
  return (
    <section id="blog" className="md:py-section-y py-10">
      <div className="container mx-auto md:px-gutter px-6">
        <Reveal className="flex justify-between items-end mb-12 flex-wrap gap-6">
          <div className="flex flex-col gap-4 max-w-155">
            <div className="font-mono text-[12px] tracking-[0.08em] text-dim">
              <b className="text-cyan font-medium">[06]</b> / RESOURCES
            </div>
            <h2 className="font-display text-[clamp(36px,4.5vw,56px)] font-medium tracking-[-0.03em] leading-[0.96] m-0">
              The field guide for organic growth.
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-cyan border-b border-b-cyan pb-0.5"
          >
            All posts <ArrowRight />
          </a>
        </Reveal>

        <Reveal stagger className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
          {posts.map((p, i) => (
            <article
              key={i}
              className="bg-bg-card border border-line rounded-(--radius) overflow-hidden cursor-pointer transition-[transform,border-color] duration-200 hover:-translate-y-0.75 hover:border-cyan"
            >
              {/* Thumbnail */}
              <div
                className="aspect-16/10 relative border-b border-b-line"
                style={{ background: `linear-gradient(135deg, ${p.gradFrom}, ${p.gradTo})` }}
              >
                <div className="font-mono text-[10px] text-[rgba(10,14,26,0.7)] absolute top-3.5 left-4 tracking-[0.08em]">
                  TENSTACK · {String(i + 1).padStart(3, "0")}
                </div>
              </div>
              <div className="p-5.5">
                <div className="flex items-center gap-3 mb-3">
                  <Tag color={p.tagColor}>{p.tag}</Tag>
                  <span className="font-mono text-[11px] text-muted">
                    {p.read} · {p.date}
                  </span>
                </div>
                <div className="font-display text-[20px] font-medium leading-[1.2]">
                  {p.title}
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
