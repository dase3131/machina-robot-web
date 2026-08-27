import { useRef } from "react";
import { Reveal } from "@/components/motion/Primitives";

const speakers = [
  {
    name: "Eric Schmidt",
    role: "Executive Chairman & CEO",
    org: "Relativity Space · Former CEO of Google",
    image:
      "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae40bf34160cd3ff1a9_Eric%20Schmidt.avif",
  },
  {
    name: "Nikesh Arora",
    role: "Chairman & CEO",
    org: "Palo Alto Networks",
    image:
      "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae4bccf7c822e327e2b_Nikesh%20Arora.avif",
  },
  {
    name: "Andrew Feldman",
    role: "CEO & Founder",
    org: "Cerebras Systems",
    image:
      "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae4cd59a62ca6513e36_Andrew%20Feldman.avif",
  },
  {
    name: "Benoit Dageville",
    role: "Founder & Board Member",
    org: "Snowflake",
    image:
      "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae4afd6e9e12a03893f_Benoit%20Dageville.avif",
  },
  {
    name: "Jonathan Ross",
    role: "CEO & Founder",
    org: "Groq",
    image:
      "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae4ec6d20420b10e78e_Jonathan%20Ross.avif",
  },
];

export function SpeakersCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  };

  return (
    <section id="speakers" className="relative py-20 md:py-32">
      <div className="container-editorial">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3 border-t border-foreground/15 pt-4">
          <p className="label-ink">002 / Speakers</p>
          <p className="label">Selection · Raise alumni</p>
        </div>

        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <Reveal y={14}>
            <h2 className="display-xl max-w-[14ch]">The stage they have stood on</h2>
          </Reveal>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous speakers"
              onClick={() => scrollBy(-1)}
              className="border border-foreground/30 px-4 py-2 font-mono text-sm transition-colors hover:bg-foreground hover:text-background"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next speakers"
              onClick={() => scrollBy(1)}
              className="border border-foreground/30 px-4 py-2 font-mono text-sm transition-colors hover:bg-foreground hover:text-background"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:px-[max(1.5rem,calc((100vw-1200px)/2))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {speakers.map((s) => (
          <article
            key={s.name}
            className="w-[72vw] shrink-0 snap-start sm:w-[46vw] lg:w-[22vw]"
          >
            <div className="aspect-[4/5] overflow-hidden bg-foreground">
              <img
                src={s.image}
                alt={`${s.name}, ${s.role} at ${s.org}`}
                loading="lazy"
                className="h-full w-full object-cover grayscale"
              />
            </div>
            <div className="mt-4 border-t border-foreground/15 pt-3">
              <h3 className="font-mono text-[13px] uppercase tracking-[0.06em]">
                {s.name}
              </h3>
              <p className="body-copy mt-1.5 text-[12px] leading-snug">{s.role}</p>
              <p className="mt-0.5 text-[12px] leading-snug text-muted-foreground/70">
                {s.org}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="container-editorial mt-10">
        <a
          href="#tickets"
          className="inline-block border-b border-foreground pb-1 font-mono text-[11px] uppercase tracking-[0.22em]"
        >
          Full 2027 line-up announced soon
        </a>
      </div>
    </section>
  );
}
