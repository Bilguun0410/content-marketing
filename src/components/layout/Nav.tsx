"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared";
import { Button } from "@/components/ui";
import DarkMode from "./dark-mode";
import { IconArrowRight } from "@tabler/icons-react";

const links = [
  { label: "Platform", href: "#features" },
  { label: "Creators", href: "#creators" },
  { label: "Brands", href: "#brands" },
  { label: "Pricing", href: "#pricing" },
  { label: "Stories", href: "#stories" },
  { label: "Resources", href: "#blog" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-100 transition-all duration-250",
        scrolled
          ? "py-2.5 bg-bg/78 backdrop-nav border-b border-b-line"
          : "py-5 bg-transparent border-b border-b-transparent",
      )}
    >
      <div className="container mx-auto px-gutter flex items-center justify-between">
        <a href="#top">
          <Logo size={26} />
        </a>

        {/* Desktop links */}
        <div className="flex items-center gap-8 text-sm max-[920px]:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-ink-soft hover:text-ink transition-colors duration-150"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 max-[640px]:hidden">
          <span className="text-xs text-muted-foreground">⌘J</span>
          <DarkMode />
          <a href="#" className="text-sm text-ink-soft max-[920px]:hidden">
            Log in
          </a>
          <Button>
            <span>Get started</span>
            <IconArrowRight />
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="hidden max-[640px]:flex items-center justify-center w-9.5 h-9.5 rounded-[10px] border border-line-strong bg-transparent text-ink cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              d="M2 4h12M2 8h12M2 12h12"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="container mx-auto px-gutter flex flex-col gap-4 py-5 border-t border-t-line mt-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-[18px] font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
