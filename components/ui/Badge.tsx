"use client";

import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "primary" | "secondary" | "accent" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  default: "border-ink/30 text-ink",
  primary: "border-ultra text-ultra",
  secondary: "border-ink text-ink",
  accent: "border-ultra text-ultra",
  outline: "border-line text-graphite",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center",
        "px-3 py-1",
        "font-mono text-[11px] uppercase tracking-[0.14em]",
        "rounded-full border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
