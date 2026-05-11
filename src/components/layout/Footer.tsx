"use client";

import { Logo } from "@/components/shared";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

const cols = [
  {
    title: "Platform",
    links: [
      "Features",
      "Workspace",
      "Hook lab",
      "Matchmaking",
      "Signals",
      "API",
    ],
  },
  {
    title: "Solutions",
    links: [
      "For creators",
      "For brands",
      "For agencies",
      "For YouTube",
      "For X",
      "For Substack",
    ],
  },
  {
    title: "Resources",
    links: [
      "Blog",
      "Playbooks",
      "Research",
      "Changelog",
      "Help center",
      "Status",
    ],
  },
  {
    title: "Company",
    links: [
      "About",
      "Careers · 12",
      "Press",
      "Customers",
      "Security",
      "Contact",
    ],
  },
];

const socials = [
  {
    title: "X",
    Icon: IconBrandX,
  },
  {
    title: "Youtube",
    Icon: IconBrandYoutube,
  },
  {
    title: "Linkedin",
    Icon: IconBrandLinkedin,
  },
  {
    title: "Instagram",
    Icon: IconBrandInstagram,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-t-line pt-20 pb-10 bg-bg-soft">
      <div className="container mx-auto px-gutter">
        <div className="grid grid-cols-[1.4fr_repeat(4,1fr)] gap-10 max-[900px]:grid-cols-2 max-[540px]:grid-cols-1">
          <div className="flex flex-col gap-4 max-w-70">
            <Logo size={28} />
            <p className="text-muted text-[13px] m-0 leading-[1.6]">
              The growth stack for creators &amp; brands. Backed by Sequoia and
              a16z.
            </p>
            <div className="flex gap-2 mt-2">
              {socials.map((s) => {
                const Icon = s.Icon;
                return (
                  <Button
                    key={s.title}
                    variant={"ghost"}
                    className={cn({
                      "hover:bg-sky-700/30": s.title === "Linkedin",
                      "hover:bg-destructive/30": s.title === "Youtube",
                      "hover:bg-pink/30": s.title === "Instagram",
                    })}
                    size={"icon"}
                  >
                    <Icon />
                  </Button>
                );
              })}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="flex flex-col gap-3">
              <div className="font-mono text-[11px] tracking-[0.08em] text-muted uppercase">
                {c.title}
              </div>
              {c.links.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-ink-soft text-sm transition-colors duration-150 hover:text-ink"
                >
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-16 pt-6 border-t border-t-line font-mono text-[11px] text-muted flex-wrap gap-3 max-[540px]:flex-col max-[540px]:items-start">
          <div>© 2026 Tenstack Labs, Inc. · SOC 2 Type II · GDPR</div>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-muted transition-colors duration-150 hover:text-ink"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
