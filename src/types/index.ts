export interface ResourceItem {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  link: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  date: string;
  tags: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  expertise: string[];
  imageUrl: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  source: string;
  link: string;
}