"use client";

const logos = [
  "Notion", "Linear", "Vercel", "Raycast", "Loops",
  "Cal.com", "Resend", "Framer", "Supabase", "Arc",
  "Plain", "Mintlify", "Highlight",
];

const row = [...logos, ...logos];

export function LogosBand() {
  return (
    <section className="py-15 border-t border-t-line">
      <div className="container mx-auto px-gutter">
        <div className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-muted text-center mb-8">
          Trusted by creators &amp; brands at
        </div>
        <div className="flex overflow-hidden logos-mask">
          <div className="flex gap-14 animate-marquee shrink-0 pr-14 items-center">
            {row.map((l, i) => (
              <span
                key={i}
                className="font-display text-[22px] font-medium text-muted tracking-[-0.02em] whitespace-nowrap opacity-75"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
