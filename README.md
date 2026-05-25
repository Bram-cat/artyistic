# Artystic

Artystic is a design-polish skill and editorial-style website for making interfaces feel authored instead of templated.

It ships as:

- a Next.js site showcasing the visual system
- a tiny CLI entrypoint
- a bundled Pi skill at `skills/artystic/SKILL.md`

Artystic is a cross-agent design-polish skill for pages that already work but still feel generic. It is tailored for Code 5.5 and works cleanly across Pi, Codex, Claude Code, Cursor, OpenCode, and other skill-compatible coding agents. It pushes toward stronger visual subject matter, fewer sharper containers, mixed typography with clear roles, meaningful image plates, and restrained motion that guides attention.

## How to use it

### Install

```bash
npx artystic
```

This runs the skills.sh installer for the Artystic skill and installs it into your compatible agent setup.

Use it when a page feels too safe, too same-font, too SaaS-like, too card-heavy, or visually under-authored.

## Agent compatibility

Artystic is built to install and run as a reusable skill, not just as a website demo.

It is designed for cross-agent use, including:

- Code 5.5
- Pi
- Codex
- Claude Code
- Cursor
- OpenCode
- other skills-compatible agent setups

## Project structure

```text
app/                  Next.js app router pages and global styles
components/           Shared UI components
bin/artystic.mjs      CLI entrypoint
skills/artystic/      Bundled Pi skill
public/assets/        Image plates and visual assets
```

## Repository

GitHub: https://github.com/Bram-cat/artyistic

## License

MIT — see [LICENSE](./LICENSE).
