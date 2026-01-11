"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { timeline } from "@/lib/constants";

const typeColors = {
  work: "from-primary to-secondary",
  education: "from-secondary to-accent",
  achievement: "from-accent to-primary",
};

const typeIcons = {
  work: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  education: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  achievement: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
};

export function Timeline() {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] -z-10" />

      <Container>
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span
            className="text-primary font-medium tracking-wider uppercase text-sm"
            variants={fadeInUp}
          >
            Experience
          </motion.span>
          <motion.h2 className="heading-2 mt-4" variants={fadeInUp}>
            My Professional{" "}
            <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.p className="text-text-secondary mt-4" variants={fadeInUp}>
            A timeline of my career milestones and continuous growth in the
            digital industry.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          {timeline.map((event, index) => (
            <motion.div
              key={event.id}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Dot */}
              <motion.div
                className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-surface-dark border-2 border-primary flex items-center justify-center z-10"
                whileHover={{ scale: 1.2 }}
              >
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${typeColors[event.type]}`} />
              </motion.div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                <motion.div
                  className="p-6 rounded-2xl bg-surface-card border border-white/5"
                  whileHover={{ y: -4 }}
                >
                  {/* Date Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${typeColors[event.type]} bg-opacity-20 text-white text-sm mb-3`}>
                    <span className="opacity-80">{typeIcons[event.type]}</span>
                    {event.date}
                  </div>

                  {/* Title & Company */}
                  <h3 className="text-lg font-semibold text-text-primary">
                    {event.title}
                  </h3>
                  <p className="text-primary text-sm mb-2">{event.company}</p>

                  {/* Description */}
                  <p className="text-text-secondary text-sm">
                    {event.description}
                  </p>
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
