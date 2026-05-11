"use client";

import { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
  dot?: boolean;
}

export function Pill({ children, dot = true }: PillProps) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line bg-foreground/4 font-mono text-[11px] leading-none tracking-[0.04em] text-ink-soft">
      {dot && (
        <i className="block w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_12px_var(--cyan)]" />
      )}
      <span className="flex items-center">{children}</span>
    </span>
  );
}
