"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface CounterProps {
  to: number;
  suffix?: string;
  className?: string;
}

/** Counts up from 0 when scrolled into view. */
export function Counter({ to, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView || !ref.current) return;
    if (reduced) {
      ref.current.textContent = `${to}${suffix}`;
      return;
    }
    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, reduced]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
