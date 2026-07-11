"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui";
import { Reveal, Counter, SectionHeading } from "@/components/motion";

const stats = [
  { value: 10, suffix: "+", label: "Años de experiencia" },
  { value: 6, suffix: "", label: "Compañías" },
  { value: 60, suffix: "%", label: "Eficiencia ganada" },
];

const stack = ["Java", "Spring", "PostgreSQL", "AWS", "Apache Spark", "Git"];

export function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <SectionHeading meta="Perfil · Tech Lead" title="Quién hay detrás" />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Statement */}
          <div className="lg:col-span-7">
            <p className="heading-3 text-ink">
              <Reveal>La mejor arquitectura es la que</Reveal>
              <Reveal delay={0.1}>
                su equipo puede sostener —{" "}
                <span className="text-ultra">construyo las dos cosas.</span>
              </Reveal>
            </p>

            <motion.div
              className="mt-8 max-w-xl space-y-4 text-graphite"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p>
                Llevo más de diez años desarrollando software y diseñando
                sistemas, la mayor parte en servicios financieros. Hoy ejerzo
                como Tech Lead en Santander Digital Services, donde combino la
                pasión técnica con la dirección de equipos.
              </p>
              <p>
                Mi terreno es el software que no puede fallar: core bancario,
                CRM, automatización de procesos. Defino la arquitectura,
                acompaño al equipo que la construye y respondo por lo que llega
                a producción.
              </p>
            </motion.div>

            {/* Stack chips */}
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {stack.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-line px-4 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-graphite"
                >
                  {tool}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Portrait of the system + stats ledger */}
          <div className="space-y-10 lg:col-span-4 lg:col-start-9">
            <motion.div
              ref={imageRef}
              className="relative aspect-square overflow-hidden border border-line bg-chalk"
              initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div className="absolute -inset-[8%]" style={{ y: imageY }}>
                <Image
                  src="/images/profile.png"
                  alt="Diagrama isométrico de una arquitectura de software con un componente destacado en azul ultramar"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 30vw, 100vw"
                />
              </motion.div>
            </motion.div>

            <div className="divide-y divide-line border-y border-line">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="flex items-baseline justify-between gap-4 py-6"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="font-display text-5xl font-extrabold text-ink md:text-6xl">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="eyebrow text-graphite">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
