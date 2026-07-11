import { NavItem, Service, Skill, Project, TimelineEvent, SocialLink } from "@/types";

export const siteConfig = {
  name: "Arturo Legaspi",
  shortName: "Arturo",
  title: "Arturo Legaspi | Tech Lead",
  description:
    "Tech Lead con más de 10 años de experiencia en el sector tecnológico, especializado en arquitectura de software, gestión de equipos y soluciones digitales para el sector bancario.",
  url: "https://arturo.work",
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
  { label: "Especialidades", href: "#services" },
  { label: "Proyectos", href: "#projects" },
  { label: "Trayectoria", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

export const services: Service[] = [
  {
    id: "arquitectura",
    title: "Arquitectura",
    description:
      "Definición de arquitecturas para servicios críticos: del diseño del core bancario a la operación de millones de transacciones diarias.",
    icon: "code",
    features: [
      "Microservicios y core bancario",
      "Arquitecturas escalables",
      "Cloud con AWS CloudFormation",
      "Big Data con Apache Spark",
    ],
  },
  {
    id: "liderazgo",
    title: "Liderazgo",
    description:
      "Dirección de equipos de ingeniería: estrategia técnica, mentoring y metodologías ágiles que hacen crecer al producto y a las personas.",
    icon: "lightbulb",
    features: [
      "Gestión de equipos técnicos",
      "Estrategia y roadmap técnico",
      "Mentoring de desarrolladores",
      "Metodologías ágiles",
    ],
  },
  {
    id: "desarrollo",
    title: "Desarrollo",
    description:
      "Soluciones digitales de extremo a extremo sobre el ecosistema Java y Spring, con foco en banca y servicios financieros.",
    icon: "palette",
    features: [
      "Java y Spring Framework",
      "APIs y servicios core",
      "Automatización de procesos",
      "Modernización de legacy",
    ],
  },
];

export const skills: Skill[] = [
  // Backend
  { name: "Java", category: "backend" },
  { name: "Spring Framework", category: "backend" },
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
  { name: "Metodologías Ágiles", category: "metodo" },
  { name: "Git", category: "metodo" },
];

export const projects: Project[] = [
  {
    id: "plataforma-bancaria",
    title: "Plataforma Digital Bancaria",
    description:
      "Arquitectura de servicios core que procesa millones de operaciones diarias para banca digital.",
    image: "/images/proyect-1.png",
    tags: ["Java", "Spring Boot", "Microservicios", "Big Data"],
    category: "arquitectura",
  },
  {
    id: "gestion-crm",
    title: "Sistema de Gestión CRM",
    description:
      "Aplicación de gestión de cuentas bancarias y clientes, del frontend al backend.",
    image: "/images/proyect-2.png",
    tags: ["Java", "Spring Framework", "Hibernate", "JavaScript"],
    category: "desarrollo",
  },
  {
    id: "automatizacion-procesos",
    title: "Automatización de Procesos",
    description:
      "Automatización de procesos internos que mejoró la eficiencia operativa un 60%.",
    image: "/images/proyect-3.png",
    tags: ["Java", "Spring", "APIs", "DevOps"],
    category: "automatizacion",
  },
];

export const timeline: TimelineEvent[] = [
  {
    id: "timeline-1",
    date: "Dic 2023 — Actualidad",
    title: "Tech Lead",
    company: "Santander Digital Services",
    description:
      "Liderazgo del equipo técnico, definición de arquitectura y estrategia para servicios digitales bancarios.",
    type: "work",
  },
  {
    id: "timeline-2",
    date: "Nov 2021 — Feb 2024",
    title: "Especialista Técnico Digital",
    company: "Santander Digital Services",
    description:
      "Referencia técnica en soluciones bancarias: servicios core y arquitecturas escalables.",
    type: "work",
  },
  {
    id: "timeline-3",
    date: "Abr 2018 — Oct 2021",
    title: "Arquitecto de Software",
    company: "Vector ITC Group",
    description:
      "Arquitectura web, creación de componentes, gestión de equipo y automatización de procesos en entorno ágil.",
    type: "work",
  },
  {
    id: "timeline-4",
    date: "Jun 2017 — Mar 2018",
    title: "Analista",
    company: "innoQA",
    description:
      "Desarrollo frontend y modernización de aplicaciones legacy con metodologías ágiles.",
    type: "work",
  },
  {
    id: "timeline-5",
    date: "Jul 2015 — Abr 2017",
    title: "Programador Senior",
    company: "IMC Solutions España",
    description:
      "Sistemas de gestión de cuentas bancarias y CRM, tanto en frontend como en backend.",
    type: "work",
  },
  {
    id: "timeline-6",
    date: "Abr 2014 — Abr 2015",
    title: "Desarrollador",
    company: "Accenture",
    description:
      "Campañas sobre BankSphere: desarrollo con Java, Hibernate y Spring.",
    type: "work",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", url: siteConfig.links.linkedin, icon: "linkedin" },
  { name: "GitHub", url: siteConfig.links.github, icon: "github" },
];
