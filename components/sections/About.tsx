"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px] -z-10" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Decorative Frame */}
              <div className="absolute inset-4 border-2 border-primary/30 rounded-3xl" />
              <div className="absolute -inset-4 border border-secondary/20 rounded-3xl rotate-3" />

              {/* Image Container */}
              <div className="relative z-10 aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                {/* Placeholder - Replace with actual image */}
                <div className="w-full h-full flex items-center justify-center bg-surface-card">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl font-bold text-white">
                      A
                    </div>
                    <p className="mt-4 text-text-secondary text-sm">Your Photo Here</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 bg-surface-card border border-white/10 rounded-2xl px-6 py-4 shadow-xl z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-2xl font-bold gradient-text">5+ Years</div>
                <div className="text-sm text-text-secondary">of Experience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.span
              className="text-primary font-medium tracking-wider uppercase text-sm"
              variants={fadeInUp}
            >
              About Me
            </motion.span>

            <motion.h2 className="heading-2 mt-4 mb-6" variants={fadeInUp}>
              Turning <span className="gradient-text">Ideas</span> Into
              <br />
              Digital Reality
            </motion.h2>

            <motion.div className="space-y-4 text-text-secondary" variants={fadeInUp}>
              <p>
                Hey there! I&apos;m a passionate digital freelancer with a love for
                creating beautiful, functional, and user-centered digital experiences.
                With expertise spanning development, design, and strategy, I bring a
                holistic approach to every project.
              </p>
              <p>
                I believe great digital products come from understanding both the
                technical possibilities and the human needs they serve. Whether you&apos;re
                a startup looking to launch your MVP or an established business ready
                for a digital transformation, I&apos;m here to help.
              </p>
              <p>
                When I&apos;m not coding or designing, you&apos;ll find me exploring new
                technologies, contributing to open source, or sharing knowledge with
                the community.
              </p>
            </motion.div>

            {/* Skills Preview */}
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              variants={fadeInUp}
            >
              {["React", "Next.js", "TypeScript", "Figma", "Node.js", "Tailwind"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-surface-card border border-white/5 rounded-full text-sm text-text-primary"
                  >
                    {skill}
                  </span>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
