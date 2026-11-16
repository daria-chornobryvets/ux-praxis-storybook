// Пошук ключів і токенів у файлах, які відстежує git.
// Ключ, що потрапив у git, вважається втраченим, тому перевірка зупиняє збірку.
import { execFileSync } from "node:child_process";
import { readFileSync, statSync } from "node:fs";

const PATTERNS = [
  ["приватний ключ", /-----BEGIN (?:RSA |EC |DSA |OPENSSH |PGP )?PRIVATE KEY-----/],
  ["GitHub токен", /\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{30,}\b|\bgithub_pat_[A-Za-z0-9_]{40,}\b/],
  ["AWS ключ", /\bAKIA[0-9A-Z]{16}\b/],
  ["Google API ключ", /\bAIza[0-9A-Za-z_-]{35}\b/],
  ["Slack токен", /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/],
  ["Anthropic/OpenAI ключ", /\bsk-(?:ant-)?[A-Za-z0-9_-]{32,}\b/],
  ["Vercel токен", /\bvercel_[A-Za-z0-9_]{20,}\b/i],
  [
    "значення секрету в коді",
    /\b(?:api[_-]?key|secret|token|password|passwd)\b["']?\s*[:=]\s*["'][A-Za-z0-9_\-+/=]{20,}["']/i,
  ],
];
const ENV_FILE = /(^|\/)\.env(\.|$)/;
const ENV_ALLOWED = /\.env\.(example|sample|template)$/;
const MAX_BYTES = 5 * 1024 * 1024;

const files = execFileSync("git", ["ls-files", "-z"], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 })
  .split("\0")
  .filter(Boolean);

const problems = [];
for (const file of files) {
  if (ENV_FILE.test(file) && !ENV_ALLOWED.test(file)) {
    problems.push(`${file}: файл змінних середовища не має бути в git`);
    continue;
  }
  let size;
  try {
    size = statSync(file).size;
  } catch {
    continue;
  }
  if (size > MAX_BYTES) continue;
  const text = readFileSync(file, "utf8");
  if (text.includes("\u0000")) continue; // бінарний файл
  for (const [name, regex] of PATTERNS) {
    if (regex.test(text)) problems.push(`${file}: схоже на ${name}`);
  }
}

if (problems.length) {
  console.error("Знайдено можливі секрети (значень тут не показано):");
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log(`Секрети: перевірено ${files.length} файлів, нічого не знайдено.`);
