export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: "arquitectura" | "desarrollo" | "automatizacion";
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  company: string;
  description: string;
  type: "work" | "education" | "achievement";
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
