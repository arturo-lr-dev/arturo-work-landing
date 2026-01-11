"use client";

import { motion } from "framer-motion";
import { Container, Badge } from "@/components/ui";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { skills } from "@/lib/constants";

const categories = [
  { id: "frontend", label: "Frontend", color: "primary" },
  { id: "backend", label: "Backend", color: "secondary" },
  { id: "design", label: "Design", color: "accent" },
  { id: "tools", label: "Tools", color: "primary" },
] as const;

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden bg-surface-card/30">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] -z-10" />

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
            Skills & Expertise
          </motion.span>
          <motion.h2 className="heading-2 mt-4" variants={fadeInUp}>
            Technologies I{" "}
            <span className="gradient-text">Work With</span>
          </motion.h2>
          <motion.p className="text-text-secondary mt-4" variants={fadeInUp}>
            A diverse toolkit that enables me to tackle any digital challenge,
            from concept to deployment.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="p-6 rounded-2xl bg-surface-card border border-white/5"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    category.color === "primary"
                      ? "bg-primary"
                      : category.color === "secondary"
                      ? "bg-secondary"
                      : "bg-accent"
                  }`}
                />
                {category.label}
              </h3>

              <motion.div
                className="flex flex-wrap gap-3"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={staggerItem}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant={
                          category.color === "primary"
                            ? "primary"
                            : category.color === "secondary"
                            ? "secondary"
                            : "accent"
                        }
                      >
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
              </motion.div>

              {/* Skill Bars */}
              <div className="mt-6 space-y-4">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .slice(0, 3)
                  .map((skill) => (
                    <div key={`bar-${skill.name}`} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-text-primary">{skill.name}</span>
                        <span className="text-text-secondary">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${
                            category.color === "primary"
                              ? "bg-gradient-to-r from-primary to-primary/50"
                              : category.color === "secondary"
                              ? "bg-gradient-to-r from-secondary to-secondary/50"
                              : "bg-gradient-to-r from-accent to-accent/50"
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
