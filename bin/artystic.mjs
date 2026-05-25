#!/usr/bin/env node

import { spawnSync } from "node:child_process";

const args = process.argv.slice(2);
const command = args[0] ?? "install";
const source = "Bram-cat/artyistic";
const skillName = "artystic";

const help = `
artystic

A design-polish skill for making interfaces feel authored instead of templated.

Usage:
  npx artystic              Install the Artystic skill via skills.sh
  npx artystic install      Install the Artystic skill via skills.sh
  npx artystic brief        Print the Artystic critique brief
  npx artystic skill        Print where the bundled SKILL.md lives
  npx artystic help         Show this help

Install notes:
  - Uses the skills.sh installer under the hood
  - Auto-detects compatible agents
  - Installs the Artystic skill from ${source}
`;

function printBrief() {
  console.log(`Artystic brief:\n\n1. Make the artifact the visual subject.\n2. Use fewer containers with more meaning.\n3. Mix type intentionally: sans for structure, serif for emotional impact, mono for metadata.\n4. Prefer editorial composition over generic SaaS card grids.\n5. Every image plate must carry content, not decoration.`);
}

function printSkill() {
  console.log("Bundled skill: skills/artystic/SKILL.md");
}

function runInstaller(extraArgs = []) {
  const installArgs = [
    "--yes",
    "skills",
    "add",
    source,
    "--skill",
    skillName,
    ...extraArgs,
  ];

  console.log(`Installing ${skillName} from ${source}...\n`);

  const result = spawnSync("npx", installArgs, {
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  if (result.error) {
    console.error("Failed to run skills installer:", result.error.message);
    process.exit(1);
  }

  process.exit(result.status ?? 0);
}

if (command === "brief") {
  printBrief();
} else if (command === "skill") {
  printSkill();
} else if (command === "help" || command === "--help" || command === "-h") {
  console.log(help.trim());
} else if (command === "install") {
  runInstaller(args.slice(1));
} else {
  runInstaller(args);
}
