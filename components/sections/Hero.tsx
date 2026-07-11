"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui";
import { Reveal, RotatingWord, Marquee, Magnetic } from "@/components/motion";
import { SceneBoundary } from "@/components/three/SceneBoundary";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((m) => m.HeroScene),
  { ssr: false }
);

const marqueeItems = [
  "ARQUITECTURA",
  "SEGURIDAD",
  "APIS",
  "DATOS",
  "JAVA",
  "SPRING",
  "APRENDER",
  "ENSEÑAR",
  "MENTORING",
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // Mount the 3D scene only on wide screens with real WebGL2 support;
  // CSS-hiding it isn't enough — a mounted canvas can still crash
  // devices without WebGL2 and take the whole page down with it.
  const [showScene, setShowScene] = useState(false);
  useEffect(() => {
    if (!window.matchMedia("(min-width: 768px)").matches) return;
    try {
      const probe = document.createElement("canvas").getContext("webgl2");
      if (probe) setShowScene(true);
    } catch {
      // No WebGL2 — the hero simply skips the scene
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col overflow-hidden pt-28 md:pt-32"
    >
      {/* Wireframe system blueprint drifting behind the headline */}
      {showScene && (
        <motion.div
          className="pointer-events-none absolute inset-y-0 right-[-12%] -z-[1] w-[58%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.9 }}
          aria-hidden
        >
          <SceneBoundary>
            <HeroScene />
          </SceneBoundary>
        </motion.div>
      )}

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
        {/* Top meta row */}
        <motion.div
          className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/15 pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="eyebrow text-graphite">
            Arturo Legaspi — Tech Lead &amp; Consultor
          </p>
          <p className="eyebrow flex items-center gap-2 text-graphite">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-ultra" />
            Disponible para nuevos proyectos
          </p>
        </motion.div>

        {/* Kinetic headline — drifts away as you scroll past */}
        <motion.div
          className="flex flex-1 flex-col justify-center py-16"
          style={{ y: headlineY, opacity: headlineOpacity }}
        >
          <h1 className="text-ink">
            <Reveal immediate delay={0.1}>
              <span className="font-display text-2xl font-bold tracking-tight md:text-4xl">
                No entrego código, entrego
              </span>
            </Reveal>
            <span className="display-hero block">
              <Reveal immediate delay={0.25}>Sistemas</Reveal>
              <Reveal immediate delay={0.37}>Que Puedes</Reveal>
              <Reveal immediate delay={0.49}>
                <span className="text-ultra">
                  <RotatingWord words={["AUDITAR", "ESCALAR", "HEREDAR"]} />
                </span>
                .
              </Reveal>
            </span>
          </h1>

          <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <motion.p
              className="max-w-md text-lg leading-relaxed text-graphite"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Tech Lead en banca digital y consultor independiente, autodidacta
              de vocación. Arquitectura seria, seguridad desde el diseño y
              entregables que entiende un comité — no solo un README.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <Magnetic>
                <Button href="#contact" size="lg">
                  Cuéntame el problema
                </Button>
              </Magnetic>
              <Button href="#metodo" variant="secondary" size="lg">
                Cómo trabajo
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Ticker of disciplines and tools — kept above the parallaxing
          headline so the CTAs slide underneath it, never over it */}
      <motion.div
        className="relative z-10 border-y-2 border-ink bg-paper"
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
