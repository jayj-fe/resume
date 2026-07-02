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

export type CareerProjectListItem = string | CareerProjectLink;

export interface CareerProject {
  company: CompanySlug;
  title: string;
  period: string;
  role: string[];
  issues: string[];
  tasks: string[];
  tech: string;
  awards?: CareerProjectListItem[];
  related?: CareerProjectListItem[];
}
