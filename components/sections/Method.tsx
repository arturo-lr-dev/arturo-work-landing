"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { SectionHeading } from "@/components/motion";
import { method } from "@/lib/constants";

export function Method() {
  return (
    <section id="metodo" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          meta={`Método · ${method.length} pasos, siempre en este orden`}
          title="Cómo trabajo"
          lead="Método, no improvisación: cada proyecto recorre los mismos cinco pasos, y siempre empieza por el diagnóstico."
        />

        <div className="border-t-2 border-ink">
          {method.map((step, index) => (
            <motion.div
              key={step.id}
              className="group relative overflow-hidden border-b-2 border-ink"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Ink flood on hover */}
              <span className="ink-fill" aria-hidden />

              <div className="relative grid gap-4 py-10 md:grid-cols-12 md:items-baseline md:py-12">
                <span className="eyebrow text-ultra transition-colors duration-300 group-hover:text-chalk md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink transition-colors duration-300 group-hover:text-chalk md:col-span-5 md:text-4xl">
                  {step.title}
                </h3>

                <p className="max-w-xl text-graphite transition-colors duration-300 group-hover:text-chalk/75 md:col-span-6">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
