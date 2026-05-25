#!/usr/bin/env node

const args = process.argv.slice(2);
const command = args[0] ?? "help";

const help = `
artystic

A design-polish skill for making interfaces feel authored instead of templated.

Usage:
  npx artystic              Show this help
  npx artystic brief        Print the Artystic critique brief
  npx artystic skill        Print where the bundled SKILL.md lives

Local development:
  bun install
  bun run dev
`;

if (command === "brief") {
  console.log(`Artystic brief:\n\n1. Make the artifact the visual subject.\n2. Use fewer containers with more meaning.\n3. Mix type intentionally: sans for structure, serif for emotional impact, mono for metadata.\n4. Prefer editorial composition over generic SaaS card grids.\n5. Every image plate must carry content, not decoration.`);
} else if (command === "skill") {
  console.log("Bundled skill: skills/artystic/SKILL.md");
} else {
  console.log(help.trim());
}
