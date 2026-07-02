export type CompanySlug = "hankookilbo" | "witplus" | "cidow";

export interface CareerCompany {
  slug: CompanySlug;
  label: string;
  period: string;
}

export interface CareerProjectLink {
  label: string;
  href: string;
}

export interface CareerProject {
  company: CompanySlug;
  title: string;
  period: string;
  role: string[];
  issues: string[];
  tasks: string[];
  tech: string;
  awards?: string[];
  notes?: string[];
  links?: CareerProjectLink[];
}
