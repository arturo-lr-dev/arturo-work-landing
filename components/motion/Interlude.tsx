"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";

type Mode = "drift" | "pan" | "expand";

interface InterludeProps {
  src: string;
  alt: string;
  caption?: string;
  /** drift: vertical parallax · pan: horizontal sweep · expand: opens to full bleed */
  mode?: Mode;
}

/** Full-bleed image band between sections, choreographed by scroll. */
export function Interlude({ src, alt, caption, mode = "drift" }: InterludeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["-9%", "0%"]);
  const inset = useTransform(scrollYProgress, [0, 0.45], [14, 0]);
  const clipPath = useMotionTemplate`inset(0% ${inset}% 0% ${inset}%)`;

  const imageStyle = reduced
    ? undefined
    : mode === "pan"
      ? { x, scale: 1.18 }
      : { y, scale: 1.22 };

  return (
    <motion.div
      ref={ref}
      className="relative h-[45vh] overflow-hidden border-y border-line md:h-[60vh]"
      style={mode === "expand" && !reduced ? { clipPath } : undefined}
      aria-label={alt}
      role="img"
    >
      <motion.div className="absolute inset-0" style={imageStyle}>
        <Image src={src} alt="" fill className="object-cover" sizes="100vw" />
      </motion.div>

      {caption && (
        <p className="eyebrow absolute left-4 top-5 border border-line bg-paper/90 px-3 py-1.5 text-ink sm:left-8">
          {caption}
        </p>
      )}
    </motion.div>
  );
}
