"use client";

import { ComponentPropsWithoutRef, FC } from "react";
import { cn } from "@/lib/utils";

type Props = {
  order: number;
  title: string;
};

export const Eyebrow: FC<Props & ComponentPropsWithoutRef<"div">> = ({
  order,
  title,
  className,
  ...props
}) => {
  return (
    <div
      className={cn("font-mono text-xs tracking-[0.08em] text-dim", className)}
    >
      <b className="text-cyan font-medium">
        [{order.toString().padStart(2, "0")}]
      </b>{" "}
      / <span className="uppercase">{title}</span>
    </div>
  );
};
