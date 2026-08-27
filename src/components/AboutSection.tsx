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
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3 border-t border-foreground/20 pt-4">
          <p className="label-ink">001 / The summit</p>
          <p className="label">Paris · 2027</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal y={16} className="lg:col-span-7">
            <p className="lede max-w-[24ch] text-2xl leading-[1.15] md:text-4xl">
              MACHINA is the meeting point for the people building — and buying —
              the next generation of robotics and physical AI.
            </p>
          </Reveal>

          <Reveal y={16} delay={0.08} className="lg:col-span-5">
            <p className="body-copy max-w-[46ch] text-base md:text-[17px]">
              Two days in Paris bringing together robotics founders, C-level
              operators, AI labs, investors, and policymakers. One curated room of
              decision makers, built for conversations that turn into contracts.
            </p>
          </Reveal>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-px border border-foreground/20 bg-foreground/20 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-background px-5 py-7 md:px-6 md:py-8">
              <dd className="font-mono text-3xl leading-none tracking-tight md:text-[2.75rem]">
                {s.value}
              </dd>
              <dt className="label mt-3 block">{s.label}</dt>
            </div>
          ))}
        </dl>

      </div>
    </section>
  );
}
