"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type BadgeVariant = "default" | "primary" | "secondary" | "accent" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  default: "bg-white/10 text-text-primary",
  primary: "bg-primary/20 text-primary border border-primary/30",
  secondary: "bg-secondary/20 text-secondary border border-secondary/30",
  accent: "bg-accent/20 text-accent border border-accent/30",
  outline: "border border-white/20 text-text-secondary",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <motion.span
      className={cn(
        "inline-flex items-center",
        "px-3 py-1",
        "text-sm font-medium",
        "rounded-full",
        variants[variant],
        className
      )}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.span>
  );
}
