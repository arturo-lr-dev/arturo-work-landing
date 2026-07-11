"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Mono meta label, e.g. "SERVICES · 03" — encodes what the section holds */
  meta: string;
  title: string;
  lead?: string;
  className?: string;
  /** Set when the section sits on ink instead of paper */
  inverted?: boolean;
}

/** Shared section opener: heavy rule, mono meta, oversized display title. */
export function SectionHeading({ meta, title, lead, className, inverted = false }: SectionHeadingProps) {
  return (
    <div className={cn("mb-14 md:mb-20", className)}>
      <motion.div
        className={cn("h-0.5 origin-left", inverted ? "bg-chalk" : "bg-ink")}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
        <div>
          <motion.p
            className={cn("eyebrow", inverted ? "text-chalk/60" : "text-graphite")}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {meta}
          </motion.p>
          <h2
            className={cn(
              "heading-2 mt-4 uppercase",
              inverted ? "text-chalk" : "text-ink"
            )}
          >
            <span className="sr-only">{title}</span>
            <span aria-hidden className="flex flex-wrap gap-x-[0.28em]">
              {title.split(" ").map((word, i) => (
                <span key={`${word}-${i}`} className="inline-flex overflow-hidden">
                  <motion.span
                    className="inline-block will-change-transform"
                    initial={{ y: "110%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1 + i * 0.09,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          </h2>
        </div>
        {lead && (
          <motion.p
            className={cn(
              "max-w-sm text-base",
              inverted ? "text-chalk/70" : "text-graphite"
            )}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {lead}
          </motion.p>
        )}
      </div>
    </div>
  );
}
