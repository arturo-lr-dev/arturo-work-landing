"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface MagneticProps {
  children: React.ReactNode;
  /** How strongly the element chases the cursor (0–1) */
  strength?: number;
  className?: string;
}

/** Wrapper that pulls its child toward the cursor while hovered. */
export function Magnetic({ children, strength = 0.35, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.1 });

  const handleMove = (e: React.PointerEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY, display: "inline-block" }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}
