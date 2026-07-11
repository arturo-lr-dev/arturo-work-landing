"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { siteConfig, socialLinks } from "@/lib/constants";

const channels = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
  {
    label: "Teléfono",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
    external: false,
  },
  ...socialLinks.map((link) => ({
    label: link.name,
    value: `@${link.name === "LinkedIn" ? "arturo-legaspi-rodrigo" : "arturo-lr-dev"}`,
    href: link.url,
    external: true,
  })),
];

export function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative z-10 -mt-10 rounded-t-[2.5rem] bg-ink py-24 text-chalk md:-mt-14 md:rounded-t-[4rem] md:py-32"
      initial={{ y: 90 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <Container>
        {/* Meta row */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-chalk/15 pb-4">
          <p className="eyebrow text-chalk/60">Contacto</p>
          <p className="eyebrow flex items-center gap-2 text-chalk/60">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-ultra" />
            Abierto a nuevos desafíos
          </p>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Big invitation */}
          <div>
            <h2 className="display-hero text-chalk">
              <Reveal>¿Nuevo</Reveal>
              <Reveal delay={0.12}>desafío?</Reveal>
              <Reveal delay={0.24}>
                <span className="text-ultra-lite">Hablemos.</span>
              </Reveal>
            </h2>

            <motion.p
              className="mt-8 max-w-md text-chalk/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              Disponible para nuevos retos en liderazgo técnico y arquitectura
              de software. Un email o una llamada es suficiente para empezar.
            </motion.p>
          </div>

          {/* Contact ledger */}
          <div className="divide-y divide-chalk/15 border-y border-chalk/15">
            {channels.map((channel, index) => (
              <motion.a
                key={channel.label}
                href={channel.href}
                {...(channel.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-baseline justify-between gap-4 py-6 transition-colors hover:text-ultra-lite"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="eyebrow text-chalk/50">{channel.label}</span>
                <span className="flex items-center gap-3 text-right font-display text-xl font-bold tracking-tight md:text-2xl">
                  {channel.value}
                  <span
                    aria-hidden
                    className="inline-block text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
