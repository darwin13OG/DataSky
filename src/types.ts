export interface Project {
  id: string;
  name: string;
  domain: string;
  url: string;
  category: string;
  categorySlug: 'retail' | 'fintech' | 'automation' | 'ai';
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  techStackSummary: string;
  highlights: string[];
  metrics?: string;
  version: string;
}

export interface Engineer {
  id: string;
  number: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  skills: string[];
  githubUser?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
