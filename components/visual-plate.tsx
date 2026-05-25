import Image from "next/image";

type VisualPlateProps = {
  title: string;
  eyebrow: string;
  index: string;
  asset: string;
  priority?: boolean;
  variant?: "hero" | "tile";
};

export function VisualPlate({ title, eyebrow, index, asset, priority = false, variant = "tile" }: VisualPlateProps) {
  const words = title.split(" ");
  const last = words.at(-1);
  const rest = words.slice(0, -1).join(" ");
  const isHero = variant === "hero";

  return (
    <figure className={["plate reveal group p-5 sm:p-6", isHero ? "min-h-[34rem] lg:min-h-[40rem]" : "min-h-[31rem]"].join(" ")}>
      <Image
        src={asset}
        alt=""
        fill
        priority={priority}
        className="object-cover opacity-88 duration-700 ease-out group-hover:scale-[1.025] group-hover:opacity-100"
        sizes={isHero ? "(max-width: 1024px) 100vw, 62vw" : "(max-width: 1024px) 100vw, 33vw"}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,10,0.04),rgba(5,5,10,0.16)_38%,rgba(5,5,10,0.88))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c6a9ff]/60 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
      <figcaption className="relative flex h-full min-h-[inherit] flex-col justify-between">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.24em] text-white/52">
          <span>{index}</span>
          <span>{eyebrow}</span>
        </div>
        <div className="max-w-md border-t border-white/10 pt-5">
          <p className={["font-semibold leading-none tracking-[-0.08em] text-white", isHero ? "text-4xl sm:text-6xl" : "text-3xl sm:text-5xl"].join(" ")}>
            {rest} <span className="serif-hit text-[#c6a9ff]">{last}</span>
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
