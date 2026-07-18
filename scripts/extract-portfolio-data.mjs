import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const legacyPath = path.resolve(
  __dirname,
  "..",
  "..",
  "_portfolio_legacy_backup",
  "index.html"
);

const html = fs.readFileSync(legacyPath, "utf8");

function extractBracketArray(varName) {
  const startPat = `const ${varName} = `;
  const idx = html.indexOf(startPat);
  if (idx === -1) throw new Error(`Missing ${varName}`);
  let pos = idx + startPat.length;
  while (html[pos] !== "[") pos++;
  let depth = 0;
  let i = pos;
  let inSQ = false;
  let inDQ = false;
  while (i < html.length) {
    const c = html[i];
    const prev = html[i - 1];
    if (!inDQ && c === "'" && prev !== "\\") {
      inSQ = !inSQ;
      i++;
      continue;
    }
    if (!inSQ && c === '"' && prev !== "\\") {
      inDQ = !inDQ;
      i++;
      continue;
    }
    if (inSQ || inDQ) {
      i++;
      continue;
    }
    if (c === "[") depth++;
    else if (c === "]") {
      depth--;
      if (depth === 0) return html.slice(pos, i + 1);
    }
    i++;
  }
  throw new Error(`Unclosed array ${varName}`);
}

let projects = extractBracketArray("PROJECTS");
let reviews = extractBracketArray("REVIEWS");

projects = projects.replace(/'projects\//g, "'/projects/");
reviews = reviews.replace(/'projects\//g, "'/projects/");

const libDir = path.resolve(__dirname, "..", "lib");
fs.mkdirSync(libDir, { recursive: true });

fs.writeFileSync(
  path.join(libDir, "projects.ts"),
  `export type ProjectCategory = "web" | "mobile" | "game" | "3d";

export type Project = {
  id: number;
  cat: ProjectCategory;
  title: string;
  desc: string;
  tags: string[];
  thumb: string;
  gallery: string[];
};

export const PROJECTS: Project[] = ${projects};
`
);

fs.writeFileSync(
  path.join(libDir, "reviews.ts"),
  `export type Review = {
  name: string;
  country: string;
  code: string;
  lang: string;
  stars: number;
  project: string;
  color: string;
  text: string;
  photo?: string;
};

export const REVIEWS: Review[] = ${reviews};
`
);

console.log("Wrote lib/projects.ts and lib/reviews.ts");
