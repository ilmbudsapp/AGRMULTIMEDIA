import { cpSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const demoDir = path.join(root, "demos", "atelier-wandgold");
const outDir = path.join(demoDir, "out");
const targetDir = path.join(root, "client", "public", "demo", "atelier-wandgold");

console.log("Installing Atelier Wandgold demo dependencies...");
execSync("npm install", { cwd: demoDir, stdio: "inherit" });

console.log("Building Atelier Wandgold Next.js demo...");
execSync("npm run build", { cwd: demoDir, stdio: "inherit" });

console.log(`Copying ${outDir} -> ${targetDir}`);
rmSync(targetDir, { recursive: true, force: true });
cpSync(outDir, targetDir, { recursive: true });
console.log("OK: Atelier Wandgold demo exported to client/public/demo/atelier-wandgold");
