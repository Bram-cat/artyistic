import { ArrowLongRightIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

import { CopyCommand } from "@/components/copy-command";
import { VisualPlate } from "@/components/visual-plate";

const fieldCities = ["Toronto", "Berlin", "Tokyo", "Shanghai", "London", "Lisbon", "New York", "São Paulo", "Singapore", "Dubai"];

function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#05050a]/72 py-5 font-[var(--font-mono)] text-[0.66rem] uppercase tracking-[0.24em] text-white/45 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="text-white/76 hover:text-[#c6a9ff]">Artystic / Skill</a>
        <nav className="flex items-center gap-5">
          <a href="#field" className="hover:text-[#c6a9ff]">Field</a>
          <a href="#method" className="hover:text-[#c6a9ff]">Method</a>
          <a href="#proof" className="hover:text-[#c6a9ff]">Proof</a>
          <a href="#install" className="hover:text-[#c6a9ff]">Install</a>
          <a href="https://github.com/Bram-cat/artyistic" className="pixel-button inline-flex items-center gap-2 border border-[#9b5cff]/55 px-3 py-2 text-[#c6a9ff]">
            <span className="pixel-text">
              <span className="pixel-text__sizer">Star · 0.1K</span>
              <span className="pixel-text__label">Star · 0.1K</span>
            </span>
            <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
          </a>
        </nav>
      </div>
    </header>
  );
}

function SourceItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-white/10 pt-4">
      <p className="font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.24em] text-[#ff9a6f]">— {label}</p>
      <p className="mt-3 truncate text-lg font-semibold tracking-[-0.04em] text-white/86">{value}</p>
    </div>
  );
}

function Rule({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <article className="reveal border-t border-white/10 pt-5">
      <p className="font-[var(--font-mono)] text-[0.66rem] uppercase tracking-[0.24em] text-[#ff9a6f]">{number}</p>
      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.06em] text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/62">{body}</p>
    </article>
  );
}

function IssueHeader({ numeral, title, meta }: { numeral: string; title: string; meta: string }) {
  return (
    <div className="reveal flex items-center justify-between border-t border-white/10 pt-8 font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.24em] text-white/42">
      <span className="serif-hit text-2xl tracking-[-0.04em] text-[#ff9a6f]">{numeral}</span>
      <span>{title}</span>
      <span>{meta}</span>
    </div>
  );
}

function PromptLine({ label, body }: { label: string; body: string }) {
  return (
    <div className="grid gap-3 border-t border-white/10 py-5 md:grid-cols-[0.28fr_0.72fr]">
      <p className="font-[var(--font-mono)] text-[0.66rem] uppercase tracking-[0.22em] text-[#ff9a6f]">{label}</p>
      <p className="text-lg leading-8 tracking-[-0.035em] text-white/78">{body}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top" className="relative min-h-screen pb-16">
      <Nav />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
        <div className="hero-copy space-y-8 lg:sticky lg:top-28 lg:self-start">
          <div className="space-y-5">
            <p className="kicker">Design-polish skill · authored interfaces</p>
            <h1 className="max-w-4xl text-6xl font-semibold leading-[0.86] tracking-[-0.105em] text-white sm:text-7xl lg:text-[7.4rem]">
              Make it feel <span className="serif-hit text-[#c6a9ff]">authored.</span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-white/68">
              Artystic turns safe screens into image-led, type-aware, editorial web artifacts.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#install" className="pixel-button inline-flex items-center gap-2 border border-[#9b5cff]/60 px-5 py-3 text-sm font-semibold text-[#c6a9ff]">
              <span className="pixel-text">
                <span className="pixel-text__sizer">Use npx artystic</span>
                <span className="pixel-text__label">Use npx artystic</span>
              </span>{" "}<ArrowLongRightIcon className="h-4 w-4" />
            </a>
            <a href="#method" className="pixel-button inline-flex items-center gap-2 border border-white/12 px-5 py-3 text-sm font-semibold text-white/72">
              <span className="pixel-text">
                <span className="pixel-text__sizer">Read method</span>
                <span className="pixel-text__label">Read method</span>
              </span>
            </a>
          </div>

          <div className="border-t border-white/10 pt-5">
            <p className="max-w-lg text-sm leading-7 text-white/54">
              Use the skill when a route feels competent but anonymous. It audits the visual subject, cuts filler, assigns type roles, and replaces placeholder art with proof plates.
            </p>
          </div>
        </div>

        <VisualPlate index="Fig. 01" eyebrow="Hero plate" title="Images carry meaning" asset="/assets/artystic-hero.png" priority variant="hero" />
      </section>

      <section id="field" className="border-y border-white/10 py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.22fr_0.78fr] lg:px-8">
          <div className="reveal flex items-center gap-5">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/14 text-[#ff9a6f]">•</span>
            <div>
              <p className="font-[var(--font-mono)] text-sm font-semibold uppercase tracking-[0.22em] text-white">From the field</p>
              <p className="mt-2 font-[var(--font-mono)] text-[0.68rem] uppercase tracking-[0.22em] text-white/42">Screens · prompts · proof plates</p>
            </div>
          </div>
          <div className="reveal overflow-hidden border-l border-white/10 py-3 pl-8">
            <div className="flex min-w-max animate-[marquee_28s_linear_infinite] gap-8 font-[var(--font-mono)] text-sm uppercase tracking-[0.2em] text-white/58">
              {[...fieldCities, ...fieldCities].map((city, index) => (
                <span key={`${city}-${index}`}><span className="text-[#c6a9ff]">{city}</span> · {12 + index} critiques</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 border-b border-white/10 px-4 py-16 sm:px-6 lg:grid-cols-[0.46fr_0.54fr] lg:px-8">
        <VisualPlate index="Plate 01.5" eyebrow="Field map" title="Source has gravity" asset="/assets/artystic-field-map.png" />
        <div className="reveal space-y-10 self-center">
          <div className="grid gap-5 border-y border-white/10 py-6 md:grid-cols-[0.35fr_0.65fr]">
            <p className="font-[var(--font-mono)] text-sm uppercase tracking-[0.24em] text-white/52">Theme target · Nº 00</p>
            <div>
              <h2 className="text-4xl font-semibold leading-none tracking-[-0.075em] text-white sm:text-5xl">
                Dark editorial <span className="serif-hit text-[#c6a9ff]">design system</span> for websites that need aura.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/62">
                Artystic is tailored for Codex, Pi, Claude Code, Cursor, and other coding-agent surfaces that should feel like Open Design, Midjourney, Locomotive, creative tooling launches, AI design labs, agent skill pages, portfolios, and products where visual taste is part of the product.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <SourceItem label="Perk 01" value="Kills template smell" />
            <SourceItem label="Perk 02" value="Turns images into proof" />
            <SourceItem label="Perk 03" value="Assigns type roles" />
            <SourceItem label="Perk 04" value="Adds restrained motion" />
            <SourceItem label="Perk 05" value="Cuts filler sections" />
            <SourceItem label="Command" value="npx artystic" />
          </div>
        </div>
      </section>

      <section id="method" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <IssueHeader numeral="I." title="About / manifesto" meta="002 / 008" />
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="reveal lg:sticky lg:top-28 lg:self-start">
            <p className="kicker">Method</p>
            <h2 className="mt-4 text-4xl font-semibold leading-none tracking-[-0.075em] text-white sm:text-6xl">
              Polish by <span className="serif-hit text-[#ff9a6f]">decisions</span>, not decoration.
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <Rule number="01" title="Type has roles" body="Sans sets structure, mono handles metadata, serif/italic lands the emotional word. Do not make every phrase feel equal." />
            <Rule number="02" title="Images must earn space" body="Every plate needs content: artifact, signal, product truth, or atmosphere. No empty right-side filler." />
            <Rule number="03" title="Containers stay rare" body="Prefer fewer, stronger blocks. Remove support rows and stat chips when one sentence is clearer." />
            <Rule number="04" title="Motion has restraint" body="Use premium scroll reveals, sticky staging, and gentle image lift. Motion should guide attention, not perform." />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <IssueHeader numeral="II." title="Capabilities / design gates" meta="003 / 008" />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <VisualPlate index="Plate 05" eyebrow="Capabilities" title="Gates before pixels" asset="/assets/artystic-capabilities.png" />
          <div className="grid gap-8 sm:grid-cols-2">
            <Rule number="Audit" title="Find the template smell" body="Detect same-font hierarchy, card-grid reflexes, fake editorial labels, and image containers that mean nothing." />
            <Rule number="Shape" title="Lock visual direction" body="Define the scene, palette strategy, type roles, asset slots, motion personality, and what the page must refuse." />
            <Rule number="Polish" title="Cut until it lands" body="Remove redundant copy, swap filled CTAs for restraint, strengthen the hero, and make every block earn its footprint." />
            <Rule number="Proof" title="Use real assets" body="Generate or place production image plates, then wire them to exact sections instead of letting filler survive." />
          </div>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <IssueHeader numeral="III." title="Proof plates / generated assets" meta="004 / 008" />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <VisualPlate index="Plate 02" eyebrow="Type system" title="Words get weight" asset="/assets/artystic-type.png" />
          <VisualPlate index="Plate 03" eyebrow="Composition" title="Less but sharper" asset="/assets/artystic-composition.png" />
          <VisualPlate index="Plate 04" eyebrow="Visual proof" title="Artifact over chrome" asset="/assets/artystic-artifact.png" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <IssueHeader numeral="IV." title="Prompt refinery / image direction" meta="005 / 008" />
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.55fr_0.45fr]">
          <div className="reveal space-y-8">
            <h2 className="text-5xl font-semibold leading-none tracking-[-0.085em] text-white sm:text-7xl">
              Thin prompts make <span className="serif-hit text-[#c6a9ff]">thin images.</span>
            </h2>
            <VisualPlate index="Plate 06" eyebrow="Prompt system" title="Direction before output" asset="/assets/artystic-prompt-refinery.png" />
          </div>
          <div className="reveal">
            <PromptLine label="Subject" body="Name the artifact, not just the mood. A plate needs a protagonist." />
            <PromptLine label="Composition" body="Declare negative space, density, crop, and where the object cluster lives." />
            <PromptLine label="Texture" body="Use material words: vellum, porcelain, graphite, dust, beam, glass, paper." />
            <PromptLine label="Negative" body="Forbid readable text, logos, UI chrome, watermarks, and generic neon gradients." />
          </div>
        </div>
      </section>

      <section id="install" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <IssueHeader numeral="V." title="Install / command surface" meta="006 / 008" />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="reveal">
            <p className="kicker">Install</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.075em] text-white sm:text-6xl">
              Run <span className="serif-hit text-[#c6a9ff]">npx artystic</span>
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.7fr_0.3fr]">
            <div className="plate reveal p-6">
              <p className="font-[var(--font-mono)] text-[0.66rem] uppercase tracking-[0.24em] text-white/44">install</p>
              <pre className="mt-4 overflow-x-auto text-2xl font-semibold tracking-[-0.04em] text-[#c6a9ff]"><code>npx artystic</code></pre>
              <div className="mt-6 flex flex-wrap gap-3">
                <CopyCommand command="npx artystic" />
                <a href="https://github.com/Bram-cat/artyistic" className="pixel-button inline-flex items-center gap-2 border border-white/12 px-5 py-3 text-sm font-semibold text-white/72">
                  <span className="pixel-text">
                    <span className="pixel-text__sizer">Repository</span>
                    <span className="pixel-text__label">Repository</span>
                  </span>{" "}<ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-5 text-sm leading-7 text-white/62">
                This repo includes <code className="text-[#c6a9ff]">skills/artystic/SKILL.md</code> and a CLI entry at <code className="text-[#c6a9ff]">bin/artystic.mjs</code>.
              </p>
            </div>
            <VisualPlate index="Plate 07" eyebrow="Command" title="Copy then run" asset="/assets/artystic-command-surface.png" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <IssueHeader numeral="VI." title="Frequently asked / no fluff" meta="007 / 008" />
        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          <PromptLine label="01" body="Is Artystic a theme? No. It is a critique and polishing discipline that can produce many themes." />
          <PromptLine label="02" body="Does it copy Open Design? No. It borrows issue structure, metadata rhythm, and image-led proof, then uses its own palette and artifacts." />
          <PromptLine label="03" body="When does it fail? When the page becomes a polished product template with decorative plates and identical cards." />
          <PromptLine label="04" body="What should an agent do first? Cut copy, assign type roles, identify the visual subject, and replace filler images with meaningful assets." />
        </div>
      </section>
    </main>
  );
}
