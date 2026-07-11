"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RotatingWordProps {
  words: string[];
  /** Milliseconds each word stays on screen */
  interval?: number;
  className?: string;
}

/**
 * Cycles through words with a per-character flip. Reserves the width of
 * the longest word so the surrounding line never jumps.
 */
export function RotatingWord({ words, interval = 2400, className }: RotatingWordProps) {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval, reduced]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a));
  const word = words[index];

  return (
    <span
      className={cn("relative inline-flex overflow-hidden align-baseline", className)}
      style={{ minWidth: `${longest.length * 0.68}em` }}
      aria-label={words.join(" / ")}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span key={word} className="inline-flex" aria-hidden>
          {word.split("").map((char, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="inline-block will-change-transform"
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-105%" }}
              transition={{
                duration: 0.45,
                delay: i * 0.035,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
