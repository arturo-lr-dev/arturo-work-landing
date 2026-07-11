"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui";
import { navItems, siteConfig, socialLinks } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });
  const nameY = useTransform(scrollYProgress, [0, 1], [140, 0]);

  return (
    <footer ref={footerRef} className="overflow-hidden bg-ink pt-16 text-chalk">
      <Container>
        <div className="flex flex-col justify-between gap-10 border-t border-chalk/15 pt-10 md:flex-row">
          <p className="max-w-sm text-sm text-chalk/60">
            Tech Lead y consultor independiente. Sistemas que se pueden
            auditar, escalar y heredar — en banca, deporte profesional y donde
            haya un reto serio.
          </p>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="eyebrow text-chalk/60 hover:text-chalk transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow text-chalk/60 hover:text-chalk transition-colors"
              >
                {link.name} ↗
              </a>
            ))}
          </div>
        </div>

        <p className="eyebrow mt-12 text-chalk/40">
          © {currentYear} {siteConfig.name}. Todos los derechos reservados.
        </p>
      </Container>

      {/* Giant sign-off, rising into place as the footer scrolls in */}
      <div aria-hidden className="pointer-events-none select-none">
        <motion.p
          style={{ y: nameY }}
          className="-mb-[4vw] text-center font-display text-[22vw] font-extrabold uppercase leading-none tracking-tight text-chalk/[0.06]"
        >
          {siteConfig.shortName}
        </motion.p>
      </div>
    </footer>
  );
}
