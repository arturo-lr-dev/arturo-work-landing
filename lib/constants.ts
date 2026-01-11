import { NavItem, Service, Skill, Project, TimelineEvent, SocialLink } from "@/types";

export const siteConfig = {
  name: "Arturo",
  title: "Arturo | Full-Service Digital Freelancer",
  description: "Full-service digital freelancer specializing in development, design, and strategy. Helping businesses build impactful digital experiences.",
  url: "https://arturo.dev",
  ogImage: "/og-image.png",
  links: {
    twitter: "https://twitter.com/arturo",
    github: "https://github.com/arturo",
    linkedin: "https://linkedin.com/in/arturo",
  },
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const services: Service[] = [
  {
    id: "development",
    title: "Development",
    description: "Building robust, scalable web applications with modern technologies and best practices.",
    icon: "code",
    features: [
      "Full-stack web applications",
      "E-commerce solutions",
      "API development & integration",
      "Performance optimization",
    ],
  },
  {
    id: "design",
    title: "Design",
    description: "Creating beautiful, intuitive interfaces that delight users and drive engagement.",
    icon: "palette",
    features: [
      "UI/UX Design",
      "Design systems",
      "Brand identity",
      "Prototyping",
    ],
  },
  {
    id: "strategy",
    title: "Strategy",
    description: "Providing expert guidance to help your digital products succeed in the market.",
    icon: "lightbulb",
    features: [
      "Technical consulting",
      "Architecture planning",
      "Product strategy",
      "Team mentoring",
    ],
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "Framer Motion", level: 85, category: "frontend" },
  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "GraphQL", level: 75, category: "backend" },
  // Design
  { name: "Figma", level: 90, category: "design" },
  { name: "Adobe XD", level: 75, category: "design" },
  { name: "UI/UX", level: 85, category: "design" },
  // Tools
  { name: "Git", level: 90, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "AWS", level: 70, category: "tools" },
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js, featuring real-time inventory, payments, and admin dashboard.",
    image: "/images/projects/ecommerce.jpg",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "development",
  },
  {
    id: "project-2",
    title: "SaaS Dashboard",
    description: "Analytics dashboard for a SaaS product with real-time data visualization and team collaboration features.",
    image: "/images/projects/dashboard.jpg",
    tags: ["React", "D3.js", "Node.js", "WebSocket"],
    liveUrl: "https://example.com",
    category: "development",
  },
  {
    id: "project-3",
    title: "Brand Identity System",
    description: "Complete brand identity and design system for a fintech startup, including logo, colors, and component library.",
    image: "/images/projects/brand.jpg",
    tags: ["Figma", "Design System", "Branding"],
    category: "design",
  },
  {
    id: "project-4",
    title: "Mobile App UI",
    description: "User interface design for a fitness tracking mobile application with gamification elements.",
    image: "/images/projects/mobile.jpg",
    tags: ["UI/UX", "Figma", "Prototyping"],
    category: "design",
  },
  {
    id: "project-5",
    title: "Tech Startup Advisory",
    description: "Technical strategy and architecture consulting for an early-stage startup, from MVP to Series A.",
    image: "/images/projects/strategy.jpg",
    tags: ["Strategy", "Architecture", "Mentoring"],
    category: "strategy",
  },
  {
    id: "project-6",
    title: "Digital Transformation",
    description: "Led digital transformation initiative for a traditional retail company, modernizing their tech stack.",
    image: "/images/projects/transform.jpg",
    tags: ["Consulting", "Migration", "Training"],
    category: "strategy",
  },
];

export const timeline: TimelineEvent[] = [
  {
    id: "timeline-1",
    date: "2023 - Present",
    title: "Freelance Digital Consultant",
    company: "Self-employed",
    description: "Providing full-service digital solutions to startups and established businesses. Specializing in web development, UI/UX design, and technical strategy.",
    type: "work",
  },
  {
    id: "timeline-2",
    date: "2020 - 2023",
    title: "Senior Frontend Developer",
    company: "Tech Company",
    description: "Led frontend development for multiple high-impact projects. Mentored junior developers and established coding standards.",
    type: "work",
  },
  {
    id: "timeline-3",
    date: "2018 - 2020",
    title: "Full Stack Developer",
    company: "Digital Agency",
    description: "Built web applications for diverse clients across industries. Gained experience in various technologies and project management.",
    type: "work",
  },
  {
    id: "timeline-4",
    date: "2018",
    title: "Computer Science Degree",
    company: "University",
    description: "Bachelor's degree in Computer Science with focus on software engineering and human-computer interaction.",
    type: "education",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/arturo", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/arturo", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/arturo", icon: "twitter" },
];
