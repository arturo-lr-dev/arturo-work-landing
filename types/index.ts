export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: "arquitectura" | "datos" | "seguridad" | "automatizacion";
}

export interface MethodStep {
  id: string;
  title: string;
  detail: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  company: string;
  description: string;
  /** The shift in thinking that stage produced — not what was done, but what it taught */
  lesson?: string;
  type: "work" | "education" | "achievement";
}

export interface Principle {
  id: string;
  statement: string;
  detail: string;
}

export interface Skill {
  name: string;
  level?: number;
  category: "backend" | "frontend" | "data" | "metodo";
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
