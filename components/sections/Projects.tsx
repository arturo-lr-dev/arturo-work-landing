"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { SectionHeading } from "@/components/motion";
import { projects } from "@/lib/constants";
import { Project } from "@/types";

const categoryLabels: Record<Project["category"], string> = {
  arquitectura: "Arquitectura",
  desarrollo: "Desarrollo",
  automatizacion: "Automatización",
};

function ProjectRow({ project }: { project: Project }) {
  return (
    <div className="group grid items-baseline gap-3 border-b border-line py-8 transition-colors duration-300 hover:border-ink md:grid-cols-12 md:gap-6">
      <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink transition-all duration-300 group-hover:translate-x-3 group-hover:text-ultra md:col-span-5 md:text-4xl">
        {project.title}
      </h3>

      <p className="text-sm text-graphite md:col-span-4">
        {project.description}
      </p>

      <div className="md:col-span-3">
        <p className="eyebrow text-ink">{categoryLabels[project.category]}</p>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-graphite"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          meta={`Proyectos · ${projects.length} destacados`}
          title="El índice"
          lead="Una muestra del trabajo en banca digital: arquitectura, producto y eficiencia operativa."
        />

        <div className="border-t border-line">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectRow project={project} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
