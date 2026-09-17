export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'HealthTech' | 'CleanTech & SaaS' | 'Logistics & Mobile' | 'Cybersecurity' | 'AI & Tools' | 'Creative 3D';
  description: string;
  longDescription: string;
  image: string;
  color: string;
  accentGlow: string;
  featured: boolean;
  technologies: string[];
  features: string[];
  metrics?: string;
  demoUrl?: string;
  githubUrl?: string;
  architectureDetails?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  masteryType: 'Pratiquée' | 'Notion / Abordée';
  level: number; // 0 to 100
  color: string;
  iconName: string;
  description: string;
  popularProjects: string[];
}

export interface TimelineStep {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  organization: string;
  location: string;
  description: string;
  skills: string[];
  type: 'education' | 'experience' | 'specialization' | 'projects';
  icon: string;
  glowColor: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  glowColor: 'purple' | 'cyan' | 'pink' | 'emerald';
  badge: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  icon: string;
}
