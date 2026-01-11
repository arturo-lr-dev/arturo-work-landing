export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: "development" | "design" | "strategy";
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
  level: number;
  category: "frontend" | "backend" | "design" | "tools";
  icon?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  image?: string;
  readingTime: string;
  content: string;
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
