import { NavItem, MethodStep, Skill, Project, TimelineEvent, SocialLink, Principle } from "@/types";

export const siteConfig = {
  name: "Arturo Legaspi",
  shortName: "Arturo",
  title: "Arturo Legaspi | Tech Lead & Consultor",
  description:
    "Tech Lead en banca digital y consultor independiente. Arquitectura de software, seguridad desde el diseño y sistemas que se pueden auditar, escalar y heredar.",
  url: "https://arturo-dev.vercel.app/",
  ogImage: "/images/og-image.png",
  email: "arturo@legasint.com",
  phone: "+34 649 355 701",
  phoneHref: "+34649355701",
  links: {
    github: "https://github.com/arturo-lr-dev",
    linkedin: "https://linkedin.com/in/arturo-legaspi-rodrigo-393802bb/",
  },
};

export const navItems: NavItem[] = [
  { label: "Perfil", href: "#about" },
  { label: "Cómo pienso", href: "#principios" },
  { label: "Método", href: "#metodo" },
  { label: "Casos", href: "#projects" },
  { label: "Trayectoria", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

export const principles: Principle[] = [
  {
    id: "arquitectura",
    statement: "La arquitectura va antes que el código.",
    detail:
      "El código es la consecuencia, no el plan. Cuando el diseño está claro, escribirlo es la parte fácil; cuando no lo está, ningún framework te salva.",
  },
  {
    id: "medir",
    statement: "Si no se puede medir, no se puede confiar.",
    detail:
      "Una suite de pruebas en verde, un plan de carga con números y métricas en producción valen más que cualquier promesa. Lo que no se mide se discute; lo que se mide se decide.",
  },
  {
    id: "riesgo",
    statement: "Menos riesgo vale más que más funcionalidades.",
    detail:
      "Una entidad financiera o un club profesional no necesitan otra feature: necesitan no salir en las noticias. Seguridad, auditabilidad y previsibilidad van antes que cualquier brillo.",
  },
  {
    id: "retos",
    statement: "Un reto que asusta es un plan de aprendizaje.",
    detail:
      "Cada salto de mi carrera empezó con algo que no sabía hacer: modernizar legacy, diseñar arquitecturas, dirigir personas. Soy autodidacta sin permiso: la documentación, el código de otros y la curiosidad llegan antes que cualquier formación oficial.",
  },
  {
    id: "ensenar",
    statement: "Enseñar es aprender dos veces.",
    detail:
      "Si no puedo explicárselo a un junior en una pizarra, es que todavía no lo entiendo. Cada persona que mentorizo me obliga a ordenar lo que creía saber — y de paso el equipo entero corre más.",
  },
  {
    id: "activos",
    statement: "Construyo activos, no dependencia.",
    detail:
      "El objetivo es que el sistema siga generando valor sin mí: documentación que entiende un comité, código que puede auditar un tercero y equipos formados para heredarlo.",
  },
];

export const method: MethodStep[] = [
  {
    id: "diagnostico",
    title: "Diagnóstico",
    detail:
      "Antes de proponer nada, entiendo el modelo real del negocio. He llegado a desmontar un cuadro de mando de 58 hojas de cálculo antes de escribir una sola línea: el esquema de datos correcto estaba ahí escondido.",
  },
  {
    id: "arquitectura",
    title: "Arquitectura",
    detail:
      "Diseño para el peor día: la seguridad y el compliance entran en el plano, no en el parche. La arquitectura se documenta y se defiende delante de quien firma.",
  },
  {
    id: "prototipo",
    title: "Prototipo validado",
    detail:
      "Nada de maquetas eternas: algo que se puede tocar, romper y medir, con pruebas automatizadas desde el primer día.",
  },
  {
    id: "entrega",
    title: "Documentación y entrega",
    detail:
      "Informes ejecutivos con la marca del cliente y documentación que entiende un comité de dirección. El README técnico es el mínimo, no el entregable.",
  },
  {
    id: "medicion",
    title: "Medición continua",
    detail:
      "Planes de carga, suites de seguridad y métricas en producción. Más de cien pruebas en verde no son un hito: son el estado normal del sistema.",
  },
];

export const skills: Skill[] = [
  // Backend
  { name: "Java", category: "backend" },
  { name: "Spring Framework", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Hibernate", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MySQL", category: "backend" },
  // Frontend
  { name: "JavaScript", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  // Data & Cloud
  { name: "Apache Spark", category: "data" },
  { name: "AWS CloudFormation", category: "data" },
  // Método
  { name: "Arquitectura de Software", category: "metodo" },
  { name: "Seguridad de APIs", category: "metodo" },
  { name: "Pruebas de carga", category: "metodo" },
  { name: "Metodologías Ágiles", category: "metodo" },
  { name: "Git", category: "metodo" },
];

export const projects: Project[] = [
  {
    id: "migracion-api",
    title: "Migración de datos y API",
    description:
      "Migración integral de datos y una API de más de 50 endpoints para una organización deportiva de primera división — sin parar la operación.",
    tags: ["API", "Migración", "50+ endpoints"],
    category: "datos",
  },
  {
    id: "seguridad-api",
    title: "Blindaje de una API de socios",
    description:
      "De vulnerable a una suite de 110 pruebas de seguridad en verde, con plan de carga sobre los endpoints críticos.",
    tags: ["Seguridad", "110 tests", "Pruebas de carga"],
    category: "seguridad",
  },
  {
    id: "core-bancario",
    title: "Plataforma digital bancaria",
    description:
      "Arquitectura de servicios core que procesa millones de operaciones diarias para un grupo financiero internacional.",
    tags: ["Java", "Spring Boot", "Microservicios"],
    category: "arquitectura",
  },
  {
    id: "automatizacion",
    title: "Automatización de procesos",
    description:
      "Automatización de procesos internos que mejoró la eficiencia operativa un 60%.",
    tags: ["Java", "Spring", "APIs", "DevOps"],
    category: "automatizacion",
  },
];

export const timeline: TimelineEvent[] = [
  {
    id: "timeline-0",
    date: "En paralelo — Actualidad",
    title: "Consultor independiente",
    company: "Estudio propio",
    description:
      "Arquitectura, seguridad y datos para organizaciones deportivas y financieras, compatibilizado con el liderazgo técnico en banca.",
    lesson:
      "Moverme a la vez en banca y consultoría me enseñó que la gobernanza no es burocracia: es lo que te deja dormir.",
    type: "work",
  },
  {
    id: "timeline-1",
    date: "Dic 2023 — Actualidad",
    title: "Tech Lead",
    company: "Banca digital · grupo financiero internacional",
    description:
      "Liderazgo del equipo técnico, definición de arquitectura y estrategia para servicios digitales bancarios.",
    lesson:
      "Hoy mi mejor código son las preguntas que hace mi equipo cuando yo no estoy delante.",
    type: "work",
  },
  {
    id: "timeline-2",
    date: "Nov 2021 — Feb 2024",
    title: "Especialista Técnico Digital",
    company: "Banca digital · grupo financiero internacional",
    description:
      "Referencia técnica en soluciones bancarias: servicios core y arquitecturas escalables.",
    lesson:
      "A escala bancaria aprendí humildad técnica: millones de operaciones no perdonan la elegancia sin pruebas.",
    type: "work",
  },
  {
    id: "timeline-3",
    date: "Abr 2018 — Oct 2021",
    title: "Arquitecto de Software",
    company: "Consultora tecnológica",
    description:
      "Arquitectura web, creación de componentes, gestión de equipo y automatización de procesos en entorno ágil.",
    lesson:
      "Pasé de resolver problemas a repartirlos: mi primer equipo me enseñó que explicar bien es la mitad del diseño.",
    type: "work",
  },
  {
    id: "timeline-4",
    date: "Jun 2017 — Mar 2018",
    title: "Analista",
    company: "Consultora de calidad de software",
    description:
      "Desarrollo frontend y modernización de aplicaciones legacy con metodologías ágiles.",
    lesson:
      "Heredar legacy me quitó el miedo: todo código es de otro seis meses después, incluido el tuyo.",
    type: "work",
  },
  {
    id: "timeline-5",
    date: "Jul 2015 — Abr 2017",
    title: "Programador Senior",
    company: "Consultora de software financiero",
    description:
      "Sistemas de gestión de cuentas bancarias y CRM, tanto en frontend como en backend.",
    lesson:
      "Tocar frontend y backend a la vez me enseñó más que cualquier especialización: los sistemas fallan en las costuras.",
    type: "work",
  },
  {
    id: "timeline-6",
    date: "Abr 2014 — Abr 2015",
    title: "Desarrollador",
    company: "Consultora multinacional",
    description:
      "Desarrollo de campañas para banca con Java, Hibernate y Spring.",
    lesson:
      "La carrera te da el vocabulario, pero el oficio se aprende delante del código de verdad.",
    type: "work",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", url: siteConfig.links.linkedin, icon: "linkedin" },
  { name: "GitHub", url: siteConfig.links.github, icon: "github" },
];
