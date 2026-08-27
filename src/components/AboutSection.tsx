import { Reveal } from "@/components/motion/Primitives";

const STATS = [
  { value: "1,200+", label: "Senior attendees" },
  { value: "72%", label: "Director level or above" },
  { value: "300+", label: "Investors & funds" },
  { value: "40+", label: "Countries represented" },
];

export function AboutSection() {
  return (
    <section id="summit" className="relative py-16 md:py-24">
      <div className="container-editorial">
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-3 border-t border-foreground/15 pt-4">
          <p className="label-ink">001 / The summit</p>
          <p className="label">Paris · 2027</p>
        </div>

        <Reveal y={16}>
          <p className="lede max-w-[34ch] text-2xl leading-[1.2] md:text-4xl">
            MACHINA is the meeting point for the people building — and buying —
            the next generation of robotics and physical AI.
          </p>
        </Reveal>

        <Reveal y={16} delay={0.08}>
          <p className="body-copy mt-8 max-w-[62ch] text-lg">
            Two days in Paris bringing together robotics founders, C-level
            operators, AI labs, investors, and policymakers. One curated room of
            decision makers, built for conversations that turn into contracts.
          </p>
        </Reveal>

        <dl className="mt-16 grid grid-cols-2 border-t border-foreground/15 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="border-b border-foreground/15 py-8 lg:border-r lg:pr-6 lg:last:border-r-0"
            >
              <dd className="display-lg mb-2">{s.value}</dd>
              <dt className="label">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
