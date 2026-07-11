"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before the line slides up */
  delay?: number;
  /** Animate on mount instead of on scroll into view */
  immediate?: boolean;
}

/**
 * Masked line reveal: content slides up from behind an overflow-hidden
 * clip, the signature move of the page's type choreography.
 */
export function Reveal({ children, className, delay = 0, immediate = false }: RevealProps) {
  const reduced = useReducedMotion();

  const hidden = reduced ? { opacity: 0 } : { y: "110%" };
  const visible = reduced ? { opacity: 1 } : { y: "0%" };

  return (
    <span className={cn("block overflow-hidden", className)}>
      <motion.span
        className="block will-change-transform"
        initial={hidden}
        {...(immediate
          ? { animate: visible }
          : { whileInView: visible, viewport: { once: true, margin: "-10% 0px" } })}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
