import { Reveal, WordReveal, Counter, Rule } from "@/components/motion/Primitives";

const STATS = [
  { value: 1200, suffix: "+", label: "Senior attendees" },
  { value: 60, suffix: "+", label: "Speakers on stage" },
  { value: 300, suffix: "+", label: "Investors & funds" },
  { value: 40, suffix: "+", label: "Countries represented" },
];

const FACTS = [
  {
    k: "Audience",
    v: "Robotics founders, C-level operators, AI labs, investors, and policymakers.",
  },
  {
    k: "Location",
    v: "Paris, France — Europe's gateway to global industrial capital.",
  },
  {
    k: "Format",
    v: "One stage, curated roundtables, and a live demo floor. No parallel noise.",
  },
];

export function AboutSection() {
  return (
    <section id="summit" className="relative py-24 md:py-40">
      <div className="container-editorial">
        {/* Header */}
        <div className="mb-16 flex flex-wrap items-baseline justify-between gap-3 border-t border-foreground/15 pt-4 md:mb-24">
          <Reveal>
            <p className="label-ink">002 / Why Machina</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="label">The thesis</p>
          </Reveal>
        </div>

        {/* Statement */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <WordReveal
              className="lede max-w-[38ch] text-2xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
              text="MACHINA is built for the people shaping the next generation of robotics and physical AI."
            />
            <Reveal delay={0.15}>
              <p className="body-copy mt-10 max-w-[52ch] text-lg">
                We bring together the founders, investors, and industry leaders
                defining what intelligent machines will become. A space where bold
                ideas meet real capital and lasting partnerships take shape.
              </p>
            </Reveal>
          </div>

          {/* Facts column */}
          <div className="lg:col-span-4 lg:pt-2">
            {FACTS.map((f, i) => (
              <Reveal key={f.k} delay={0.1 + i * 0.08}>
                <div className="border-t border-foreground/15 py-5">
                  <p className="label mb-2">{f.k}</p>
                  <p className="max-w-[38ch] text-sm leading-relaxed">{f.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Stats band */}
        <div className="mt-20 md:mt-28">
          <Rule />
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="border-b border-foreground/15 px-0 py-8 md:py-12 lg:border-r lg:pr-6 lg:last:border-r-0">
                  <dd className="display-lg mb-3">
                    <Counter value={s.value} suffix={s.suffix} />
                  </dd>
                  <dt className="label">{s.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
