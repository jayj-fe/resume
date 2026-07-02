#!/usr/bin/env node

import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(rootDir, "out");
const docsDir = path.join(rootDir, "docs");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/resume";

const buildEnv = {
  ...process.env,
  GITHUB_PAGES: "true",
  NEXT_PUBLIC_BASE_PATH: basePath,
  NEXT_PUBLIC_SITE_URL: "https://jayj-fe.github.io/resume",
};

function patchManifestLinks(dir) {
  for (const name of readdirSync(dir)) {
    const fullPath = path.join(dir, name);

    if (statSync(fullPath).isDirectory()) {
      patchManifestLinks(fullPath);
      continue;
    }

    if (!name.endsWith(".html")) {
      continue;
    }

    const html = readFileSync(fullPath, "utf8");
    const patched = html.replaceAll(
      'href="/manifest.webmanifest"',
      `href="${basePath}/manifest.webmanifest"`,
    );

    if (patched !== html) {
      writeFileSync(fullPath, patched);
    }
  }
}

console.log("Building static site for GitHub Pages...");
execSync("pnpm build", { cwd: rootDir, stdio: "inherit", env: buildEnv });

if (!existsSync(outDir)) {
  throw new Error("Build output not found. Expected the out/ directory.");
}

console.log("Copying out/ to docs/...");
rmSync(docsDir, { recursive: true, force: true });
cpSync(outDir, docsDir, { recursive: true });
writeFileSync(path.join(docsDir, ".nojekyll"), "");

console.log("Patching manifest links for GitHub Pages basePath...");
patchManifestLinks(docsDir);

console.log("Done. Commit the docs/ folder and enable GitHub Pages from /docs on main.");
