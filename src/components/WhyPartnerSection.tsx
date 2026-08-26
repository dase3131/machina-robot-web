import { motion } from "framer-motion";
import { useState } from "react";
import { Reveal, MaskedLines, EASE } from "@/components/motion/Primitives";

const reasons = [
  {
    number: "01",
    title: "Reach decision",
    title2: "makers directly",
    description:
      "No exhibition hall anonymity. Partners are placed in front of the founders, operators, and funds who sign the contracts.",
    metric: "72%",
    metricLabel: "Attendees at director level or above",
  },
  {
    number: "02",
    title: "Own a moment",
    title2: "on the record",
    description:
      "Keynote slots, curated roundtables, and demo installations that put your technology in the room instead of in a brochure.",
    metric: "1",
    metricLabel: "Single-stage format, no parallel tracks",
  },
  {
    number: "03",
    title: "Source real",
    title2: "deal flow",
    description:
      "The robotics capital stack in one place — strategic investors, industrial buyers, and the teams they are looking to back.",
    metric: "300+",
    metricLabel: "Investors and corporate development leads",
  },
  {
    number: "04",
    title: "Carry the",
    title2: "Raise signal",
    description:
      "Machina inherits the audience, press coverage, and credibility Raise Summit has built across three editions in Paris.",
    metric: "3",
    metricLabel: "Editions of proven audience quality",
  },
];

export function WhyPartnerSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-40">
      <div className="container-editorial">
        <div className="mb-14 flex flex-wrap items-baseline justify-between gap-3 border-t border-foreground/15 pt-4 md:mb-20">
          <Reveal>
            <p className="label-ink">005 / Why Partner</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="label">For sponsors &amp; partners</p>
          </Reveal>
        </div>

        <MaskedLines
          as="h2"
          lines={["What partnering", "actually buys you"]}
          className="display-xl mb-16 max-w-[16ch] md:mb-24"
        />

        <div>
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.07, ease: EASE }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative border-t border-foreground/15 last:border-b"
            >
              {/* Hover wash */}
              <motion.div
                aria-hidden
                initial={false}
                animate={{ scaleY: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="pointer-events-none absolute inset-0 origin-bottom bg-foreground/[0.035]"
              />

              <div className="relative grid grid-cols-12 items-start gap-4 py-8 md:gap-8 md:py-14">
                <div className="col-span-12 md:col-span-1">
                  <span className="label">{reason.number}</span>
                </div>

                <div className="col-span-12 md:col-span-5">
                  <h3 className="display-md">
                    {reason.title}
                    <br />
                    <span
                      className={`transition-colors duration-500 ${
                        hovered === i ? "text-foreground" : "text-foreground/35"
                      }`}
                    >
                      {reason.title2}
                    </span>
                  </h3>
                </div>

                <div className="col-span-12 md:col-span-4">
                  <p className="body-copy max-w-[42ch] text-[15px]">
                    {reason.description}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-2">
                  <p className="font-mono text-2xl tracking-tight md:text-3xl">
                    {reason.metric}
                  </p>
                  <p className="label mt-2 max-w-[20ch] leading-relaxed">
                    {reason.metricLabel}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
