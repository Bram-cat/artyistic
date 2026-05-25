# Artystic

Artystic is a design-polish skill and editorial-style website for making interfaces feel authored instead of templated.

It ships as:

- a Next.js site showcasing the visual system
- a tiny CLI entrypoint
- a bundled Pi skill at `skills/artystic/SKILL.md`

## Showcase

<p align="center">
  <img src="./public/assets/artystic-hero.png" alt="Artystic hero showcase" width="900" />
</p>

<p align="center">
  <img src="./public/assets/artystic-capabilities.png" alt="Artystic capabilities showcase" width="900" />
</p>

<p align="center">
  <img src="./public/assets/artystic-command-surface.png" alt="Artystic command surface showcase" width="900" />
</p>

Artystic is for pages that already work but still feel generic. It pushes toward stronger visual subject matter, fewer sharper containers, mixed typography with clear roles, meaningful image plates, and restrained motion that guides attention.

## How to use it

### Local development

```bash
bun install
bun run dev
bun run check
```

### CLI

```bash
npx artystic
npx artystic brief
npx artystic skill
```

- `npx artystic` — show help
- `npx artystic brief` — print the critique brief
- `npx artystic skill` — print the bundled skill path

### Bundled Pi skill

```text
skills/artystic/SKILL.md
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
