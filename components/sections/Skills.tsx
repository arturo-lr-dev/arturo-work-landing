"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { SectionHeading } from "@/components/motion";
import { skills } from "@/lib/constants";

const categories = [
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "data", label: "Data & Cloud" },
  { id: "metodo", label: "Método" },
] as const;

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          meta={`Stack · ${skills.length} herramientas`}
          title="Las herramientas"
          lead="Este stack no salió de ningún máster: es la huella de diez años aprendiendo lo que cada reto pedía."
        />

        <div className="divide-y divide-line border-y border-line">
          {categories.map((category, index) => {
            const items = skills.filter((s) => s.category === category.id);
            return (
              <motion.div
                key={category.id}
                className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="md:col-span-3">
                  <span className="eyebrow text-graphite">
                    {category.label} · {items.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-3 md:col-span-9">
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      className="font-display text-2xl font-bold uppercase tracking-tight text-ink transition-colors duration-200 hover:text-ultra md:text-3xl"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15 + i * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
