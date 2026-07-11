"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  /** Seconds for a full loop */
  duration?: number;
  className?: string;
  separator?: string;
  /** Tilt the ticker with scroll velocity */
  skewOnScroll?: boolean;
}

/** Infinite horizontal ticker. Pauses under prefers-reduced-motion. */
export function Marquee({
  items,
  duration = 32,
  className,
  separator = "*",
  skewOnScroll = false,
}: MarqueeProps) {
  const reduced = useReducedMotion();

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { stiffness: 100, damping: 30 });
  const skewX = useTransform(smoothVelocity, [-1500, 1500], [-8, 8]);

  const row = (ariaHidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center whitespace-nowrap">
          <span className="px-6">{item}</span>
          <span className="text-ultra" aria-hidden>
            {separator}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      style={skewOnScroll && !reduced ? { skewX } : undefined}
    >
      <div
        className="marquee-track"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {row(false)}
        {row(true)}
      </div>
    </motion.div>
  );
}
