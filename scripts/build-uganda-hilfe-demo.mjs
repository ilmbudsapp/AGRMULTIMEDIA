import { cpSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const demoDir = path.join(root, "demos", "uganda-hilfe");
const outDir = path.join(demoDir, "out");
const targetDir = path.join(root, "client", "public", "demo", "uganda-hilfe");

console.log("Installing Uganda-Hilfe demo dependencies...");
execSync("npm install", { cwd: demoDir, stdio: "inherit" });

console.log("Building Uganda-Hilfe Next.js demo...");
execSync("npm run build", { cwd: demoDir, stdio: "inherit" });

console.log(`Copying ${outDir} -> ${targetDir}`);
rmSync(targetDir, { recursive: true, force: true });
cpSync(outDir, targetDir, { recursive: true });
console.log("OK: Uganda-Hilfe demo exported to client/public/demo/uganda-hilfe");
