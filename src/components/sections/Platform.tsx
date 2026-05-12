"use client";

import { Reveal } from "@/components/shared";
import { Eyebrow } from "../shared/Eyebrow";

export function Platform() {
  return (
    <section id="platform" className="md:py-section-y">
      <div className="container mx-auto md:px-gutter px-6">
        <Reveal className="flex flex-col items-start text-left gap-4 mb-14">
          <Eyebrow title="platform" order={1} />
          <h2 className="font-display text-section-title font-medium tracking-title leading-title m-0">
            Learn the craft.
            <br />
            Or sell what you've mastered.
          </h2>
          <p className="text-ink-soft m-0 max-w-135 text-[1.0625rem]">
            Tenstack is two-sided. Brand teams and solo creators come to learn.
            Top creators come to teach — and get paid for it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
