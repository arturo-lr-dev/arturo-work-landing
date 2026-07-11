"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Container } from "@/components/ui";
import { SectionHeading } from "@/components/motion";
import { timeline } from "@/lib/constants";

export function Timeline() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 60%"],
  });
  const drawn = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="experience" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          meta={`Trayectoria · ${timeline.length} etapas`}
          title="El recorrido"
        />

        <div ref={listRef} className="relative max-w-4xl">
          {/* Static track + scroll-drawn line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-line" aria-hidden />
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-px origin-top bg-ultra"
            style={{ scaleY: drawn }}
            aria-hidden
          />

          <div className="space-y-14 pl-8 md:pl-16">
            {timeline.map((event, index) => (
              <motion.article
                key={event.id}
                className="grid gap-2 md:grid-cols-12 md:gap-6"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="eyebrow pt-1.5 text-graphite md:col-span-3">
                  {event.date}
                </p>
                <div className="md:col-span-9">
                  <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl">
                    {event.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-ultra">
                    {event.company}
                  </p>
                  <p className="mt-3 max-w-xl text-graphite">{event.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
