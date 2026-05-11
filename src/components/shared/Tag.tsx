"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TagColor = "cyan" | "violet" | "lime" | "pink" | "muted";

interface TagProps {
  children: ReactNode;
  color?: TagColor;
}

const colorClasses: Record<TagColor, string> = {
  cyan: "text-cyan bg-cyan/[14%] border-cyan/30",
  violet: "text-violet bg-violet/[14%] border-violet/30",
  lime: "text-lime bg-lime/[14%] border-lime/30",
  pink: "text-pink bg-pink/[14%] border-pink/30",
  muted: "text-muted bg-muted/[14%] border-muted/30",
};

export function Tag({ children, color = "cyan" }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.25 py-0.75 rounded-full font-mono text-[10.5px] tracking-[0.06em] uppercase border",
        colorClasses[color],
      )}
    >
      {children}
    </span>
  );
}
