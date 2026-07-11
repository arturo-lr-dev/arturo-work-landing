"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui";
import { Reveal, RotatingWord, Marquee, Magnetic } from "@/components/motion";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((m) => m.HeroScene),
  { ssr: false }
);

const marqueeItems = [
  "ARQUITECTURA",
  "JAVA",
  "SPRING",
  "MICROSERVICIOS",
  "BIG DATA",
  "AWS",
  "LIDERAZGO TÉCNICO",
  "AGILE",
  "POSTGRESQL",
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col overflow-hidden pt-28 md:pt-32"
    >
      {/* Wireframe system blueprint drifting behind the headline */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 right-[-12%] -z-[1] hidden w-[58%] md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.9 }}
        aria-hidden
      >
        <HeroScene />
      </motion.div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
        {/* Top meta row */}
        <motion.div
          className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/15 pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="eyebrow text-graphite">
            Arturo Legaspi — Tech Lead
          </p>
          <p className="eyebrow flex items-center gap-2 text-graphite">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-ultra" />
            Abierto a nuevos desafíos
          </p>
        </motion.div>

        {/* Kinetic headline — drifts away as you scroll past */}
        <motion.div
          className="flex flex-1 flex-col justify-center py-16"
          style={{ y: headlineY, opacity: headlineOpacity }}
        >
          <h1 className="display-hero text-ink">
            <Reveal immediate delay={0.15}>Software</Reveal>
            <Reveal immediate delay={0.27}>Crítico,</Reveal>
            <Reveal immediate delay={0.39}>
              <span className="text-ultra">
                <RotatingWord words={["DISEÑADO", "LIDERADO", "CONSTRUIDO"]} />
              </span>
            </Reveal>
            <Reveal immediate delay={0.51}>A Escala.</Reveal>
          </h1>

          <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <motion.p
              className="max-w-md text-lg leading-relaxed text-graphite"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Más de 10 años en el sector financiero: arquitectura de software,
              equipos de ingeniería y servicios digitales que procesan millones
              de operaciones al día.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <Magnetic>
                <Button href="#contact" size="lg">
                  Hablemos
                </Button>
              </Magnetic>
              <Button href="#experience" variant="secondary" size="lg">
                Ver trayectoria
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Ticker of disciplines and tools */}
      <motion.div
        className="border-y-2 border-ink bg-paper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <Marquee
          items={marqueeItems}
          duration={36}
          className="py-4 font-display text-xl font-bold uppercase tracking-tight md:text-2xl"
          separator="*"
          skewOnScroll
        />
      </motion.div>
    </section>
  );
}
