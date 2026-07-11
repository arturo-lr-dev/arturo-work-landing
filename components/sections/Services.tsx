"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { SectionHeading } from "@/components/motion";
import { services } from "@/lib/constants";

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          meta={`Especialidades · ${services.length} áreas`}
          title="En qué aporto"
          lead="Tres frentes que en un proyecto real son uno solo: la arquitectura marca el ritmo, el equipo la hace posible y el código la hace realidad."
        />

        <div className="border-t-2 border-ink">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative overflow-hidden border-b-2 border-ink"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Ink flood on hover */}
              <span className="ink-fill" aria-hidden />

              <div className="relative grid gap-6 py-10 transition-colors duration-300 md:grid-cols-12 md:items-center md:py-14 group-hover:text-chalk">
                <h3 className="font-display text-4xl font-extrabold uppercase tracking-tight text-ink transition-colors duration-300 md:col-span-4 md:text-5xl group-hover:text-chalk">
                  {service.title}
                </h3>

                <p className="max-w-md text-graphite transition-colors duration-300 md:col-span-4 group-hover:text-chalk/70">
                  {service.description}
                </p>

                <ul className="md:col-span-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="border-b border-line py-2 font-mono text-xs uppercase tracking-[0.14em] text-graphite transition-colors duration-300 last:border-b-0 group-hover:border-chalk/20 group-hover:text-chalk/80"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
