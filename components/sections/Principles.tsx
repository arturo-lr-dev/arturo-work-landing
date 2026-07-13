"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { SectionHeading } from "@/components/motion";
import { principles } from "@/lib/constants";

export function Principles() {
  return (
    <section id="principios" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          meta={`Principios · ${principles.length} convicciones`}
          title="Cómo pienso"
          lead="Las tecnologías rotan cada pocos años; estos son mis innegociables en cualquier proyecto."
        />

        <div className="border-t border-line">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.id}
              className="grid gap-3 border-b border-line py-10 md:grid-cols-12 md:gap-6 md:py-12"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="eyebrow pt-2 text-ultra md:col-span-1">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:col-span-5 md:text-3xl">
                {principle.statement}
              </h3>

              <p className="max-w-xl text-graphite md:col-span-6">
                {principle.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
