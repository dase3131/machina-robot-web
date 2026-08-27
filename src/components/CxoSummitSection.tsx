import { Reveal } from "@/components/motion/Primitives";

const items = [
  {
    k: "Format",
    v: "Invitation-only, closed-door roundtables running in parallel to the main tracks.",
  },
  {
    k: "Who",
    v: "CEOs, COOs, and heads of automation from industrial groups, plus fund partners.",
  },
  {
    k: "Agenda",
    v: "Deployment economics, procurement, workforce, and regulation — under Chatham House rule.",
  },
  {
    k: "Access",
    v: "Limited to 80 seats. Nominated or reviewed by the programme committee.",
  },
];

export function CxoSummitSection() {
  return (
    <section id="cxo" className="relative py-20 md:py-32">
      <div className="container-editorial">
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-3 border-t border-foreground/15 pt-4">
          <p className="label-ink">004 / CXO Summit</p>
          <p className="label">Parallel programme</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal y={14}>
              <h2 className="display-xl max-w-[12ch]">The CXO Summit</h2>
            </Reveal>
            <Reveal y={14} delay={0.08}>
              <p className="body-copy mt-8 max-w-[46ch] text-lg">
                A private track for the executives deciding where robotics budget
                actually goes. Same venue, same days, a smaller room.
              </p>
            </Reveal>
            <a
              href="#tickets"
              className="mt-10 inline-block border border-foreground px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] transition-colors hover:bg-foreground hover:text-background"
            >
              Request an invitation
            </a>
          </div>

          <div className="lg:col-span-6">
            {items.map((it) => (
              <div
                key={it.k}
                className="border-t border-foreground/15 py-5 last:border-b"
              >
                <p className="label mb-2">{it.k}</p>
                <p className="max-w-[46ch] text-sm leading-relaxed">{it.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
