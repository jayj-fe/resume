#!/usr/bin/env node

import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(rootDir, "out");
const docsDir = path.join(rootDir, "docs");

const buildEnv = {
  ...process.env,
  GITHUB_PAGES: "true",
  NEXT_PUBLIC_SITE_URL: "https://jayj-fe.github.io/resume",
};

console.log("Building static site for GitHub Pages...");
execSync("pnpm build", { cwd: rootDir, stdio: "inherit", env: buildEnv });

if (!existsSync(outDir)) {
  throw new Error("Build output not found. Expected the out/ directory.");
}

console.log("Copying out/ to docs/...");
rmSync(docsDir, { recursive: true, force: true });
cpSync(outDir, docsDir, { recursive: true });
writeFileSync(path.join(docsDir, ".nojekyll"), "");

console.log("Done. Commit the docs/ folder and enable GitHub Pages from /docs on main.");
