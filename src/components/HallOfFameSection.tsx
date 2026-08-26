import { motion } from "framer-motion";
import { Reveal, MaskedLines, EASE } from "@/components/motion/Primitives";

const raiseSpeakers = [
  {
    name: "Eric Schmidt",
    role: "Executive Chairman & CEO",
    org: "Relativity Space · Former CEO of Google",
    company: "Relativity",
    image:
      "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae40bf34160cd3ff1a9_Eric%20Schmidt.avif",
    logo: "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae4e643301758a16db5_tag-rel.avif",
  },
  {
    name: "Nikesh Arora",
    role: "Chairman & CEO",
    org: "Palo Alto Networks",
    company: "Palo Alto",
    image:
      "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae4bccf7c822e327e2b_Nikesh%20Arora.avif",
    logo: "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae43f82e950f430e9f6_tag%20palo.avif",
  },
  {
    name: "Andrew Feldman",
    role: "CEO & Founder",
    org: "Cerebras Systems",
    company: "Cerebras",
    image:
      "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae4cd59a62ca6513e36_Andrew%20Feldman.avif",
    logo: "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae4cd59a62ca6513e6a_tag%20cerebras.avif",
  },
  {
    name: "Benoit Dageville",
    role: "Founder & Board Member",
    org: "Snowflake",
    company: "Snowflake",
    image:
      "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae4afd6e9e12a03893f_Benoit%20Dageville.avif",
    logo: "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae4bccf7c822e327e2e_tag%20snowflake.avif",
  },
  {
    name: "Jonathan Ross",
    role: "CEO & Founder",
    org: "Groq",
    company: "Groq",
    image:
      "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae4ec6d20420b10e78e_Jonathan%20Ross.avif",
    logo: "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae41cc0b13e9efc33bb_tag%20groq.avif",
  },
];

const tba = [
  "Humanoid platform CEO",
  "Foundation model lab",
  "Industrial automation group",
  "Frontier robotics fund",
  "Policy & standards lead",
];

export function HallOfFameSection() {
  return (
    <section id="speakers" className="relative py-24 md:py-40">
      <div className="container-editorial">
        {/* Header */}
        <div className="mb-14 flex flex-wrap items-baseline justify-between gap-3 border-t border-foreground/15 pt-4 md:mb-20">
          <Reveal>
            <p className="label-ink">004 / Speakers</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="label">Hall of fame</p>
          </Reveal>
        </div>

        <MaskedLines
          as="h2"
          lines={["The stage they", "have stood on"]}
          className="display-xl mb-16 max-w-[16ch] md:mb-24"
        />

        {/* RAISE alumni */}
        <div className="mb-24 md:mb-32">
          <Reveal>
            <div className="mb-8 flex items-baseline justify-between border-b border-foreground/15 pb-3">
              <h3 className="label-ink">Raise Summit alumni</h3>
              <span className="label">05 speakers</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
            {raiseSpeakers.map((speaker, i) => (
              <motion.article
                key={speaker.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.8, delay: i * 0.07, ease: EASE }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-foreground">
                  <img
                    src={speaker.image}
                    alt={`${speaker.name}, ${speaker.role} at ${speaker.company}`}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-[900ms] ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                  />

                  {/* Logo tag */}
                  <div className="absolute bottom-3 left-3">
                    <img
                      src={speaker.logo}
                      alt={speaker.company}
                      loading="lazy"
                      className="h-6 object-contain opacity-90 md:h-7"
                    />
                  </div>

                  {/* Index marker */}
                  <span className="absolute right-3 top-3 font-mono text-[10px] tracking-[0.2em] text-background/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-4 border-t border-foreground/15 pt-3">
                  <h4 className="font-mono text-[13px] uppercase tracking-[0.06em]">
                    {speaker.name}
                  </h4>
                  <p className="body-copy mt-1.5 text-[12px] leading-snug">
                    {speaker.role}
                  </p>
                  <p className="mt-0.5 text-[12px] leading-snug text-muted-foreground/70">
                    {speaker.org}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* MACHINA 2027 — TBA */}
        <div>
          <Reveal>
            <div className="mb-8 flex items-baseline justify-between border-b border-foreground/15 pb-3">
              <h3 className="label-ink">Machina 2027 — to be announced</h3>
              <span className="label">05 slots</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
            {tba.map((hint, i) => (
              <motion.article
                key={hint}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.8, delay: i * 0.07, ease: EASE }}
                className="group"
              >
                <div className="relative flex aspect-[4/5] items-end overflow-hidden border border-foreground/20 bg-transparent grid-pattern-fine">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-foreground/30 transition-colors duration-500 group-hover:text-foreground/60">
                      TBA
                    </span>
                  </div>
                  <span className="absolute right-3 top-3 font-mono text-[10px] tracking-[0.2em] text-foreground/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-4 border-t border-foreground/15 pt-3">
                  <h4 className="font-mono text-[13px] uppercase tracking-[0.06em] text-foreground/40">
                    Announcing soon
                  </h4>
                  <p className="body-copy mt-1.5 text-[12px] leading-snug">
                    {hint}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
