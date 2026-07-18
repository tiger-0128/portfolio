import type { ProjectCategory } from "@/lib/projects";

export const CAT_LABELS: Record<ProjectCategory, string> = {
  web: "Web",
  mobile: "Mobile",
  game: "Game",
  "3d": "3D",
};

export const TYPEWRITER_PHRASES = [
  "Web & SaaS Developer",
  "Mobile App Engineer",
  "AI & Automation Builder",
  "Game & 3D Developer",
  "Full-Stack Craftsman",
] as const;

/** Portrait gender sequence matching legacy `g` array */
export const REVIEW_GENDER = [
  "m",
  "f",
  "m",
  "m",
  "m",
  "f",
  "m",
  "f",
  "m",
  "m",
  "f",
  "m",
  "f",
  "m",
  "m",
  "f",
  "m",
  "f",
  "m",
  "f",
  "f",
  "m",
  "f",
  "m",
  "f",
  "m",
  "f",
  "m",
  "m",
  "f",
  "m",
  "f",
  "m",
  "f",
  "m",
  "f",
] as const;

export const REVIEWS_PER_PAGE = 9;
