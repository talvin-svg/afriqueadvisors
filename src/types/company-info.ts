export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  founded: number;
  domain: string;
  url: string;
  phone: string;
  phoneHref: string;
  email: string;
  founderEmail: string;
  socialLinks: {
    linkedin?: string;
  };
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  overview: string;
  href: string;
  items: ServiceItem[];
  outcomes: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  email: string;
  linkedinUrl?: string;
  bio: string[];
  qualifications: { title: string; detail?: string }[];
}
