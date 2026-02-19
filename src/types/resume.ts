export interface ResumeData {
  fullName: string;
  title: string;
  summary: string;
  skills: string[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: string[];
  englishLevel: string;
  stack: string;
  github: string;
  linkedin: string;
  portfolio: string;
  email: string;
  phone: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  tech: string;
  link: string;
}

export interface EducationItem {
  institution: string;
  course: string;
  period: string;
}

export const emptyResume: ResumeData = {
  fullName: "",
  title: "",
  summary: "",
  skills: [],
  experience: [],
  projects: [],
  education: [],
  certifications: [],
  englishLevel: "Básico",
  stack: "Full Stack",
  github: "",
  linkedin: "",
  portfolio: "",
  email: "",
  phone: "",
};

export type TemplateType = "minimal" | "modern" | "dark";
