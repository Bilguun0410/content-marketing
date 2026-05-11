"use client";

interface LogoProps {
  size?: number;
}

export function Logo({ size = 28 }: LogoProps) {
  return (
    <div className="flex items-center gap-3 font-display">
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect x="2" y="20" width="28" height="6" rx="1" fill="var(--violet)" />
        <rect x="5" y="13" width="22" height="6" rx="1" fill="var(--cyan)" />
        <rect x="8" y="6" width="16" height="6" rx="1" fill="var(--lime)" />
      </svg>
      <span
        className="font-semibold tracking-[-0.04em]"
        style={{ fontSize: size * 0.72 }}
      >
        tenstack
      </span>
    </div>
  );
}
