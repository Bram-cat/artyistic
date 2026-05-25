# Artystic

Artystic is a design-polish skill and editorial-style website for making interfaces feel authored instead of templated.

It ships as:

- a Next.js site showcasing the visual system
- a tiny CLI entrypoint
- a bundled Pi skill at `skills/artystic/SKILL.md`

Artystic is for pages that already work but still feel generic. It pushes toward stronger visual subject matter, fewer sharper containers, mixed typography with clear roles, meaningful image plates, and restrained motion that guides attention.

## How to use it

### Install

```bash
npx artystic
```

Use it when a page feels too safe, too same-font, too SaaS-like, too card-heavy, or visually under-authored.

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Bun

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
