"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BtnKind = "primary" | "ghost" | "grad";

interface BtnProps {
  children: ReactNode;
  kind?: BtnKind;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const kindClasses: Record<BtnKind, string> = {
  primary: "bg-ink text-bg",
  ghost: "bg-transparent text-ink border-line-strong",
  grad: "bg-grad text-[#0a0e1a] font-semibold",
};

const base =
  "inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium tracking-[-0.005em] border border-transparent cursor-pointer whitespace-nowrap transition-[transform,background,border-color] duration-150 hover:-translate-y-px";

export function Btn({ children, kind = "primary", href, onClick, className }: BtnProps) {
  const cls = cn(base, kindClasses[kind], className);

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
