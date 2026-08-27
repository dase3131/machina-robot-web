import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Reveal, EASE } from "@/components/motion/Primitives";

const themes = [
  {
    number: "01",
    title: "Humanoid",
    description:
      "Bipedal systems and general-purpose machines moving from demo reels into real deployment.",
    topics: [
      "Next-gen bipedal locomotion",
      "Dexterous manipulation systems",
      "Human–robot collaboration frameworks",
      "Embodied intelligence architectures",
    ],
  },
  {
    number: "02",
    title: "Industrial",
    description:
      "Automation at scale across manufacturing, logistics, and the physical supply chain.",
    topics: [
      "Factory automation pipelines",
      "Warehouse robotics at scale",
      "Quality control AI systems",
      "Predictive maintenance",
    ],
  },
  {
    number: "03",
    title: "Integration",
    description:
      "Foundation models meeting hardware — the software layer that makes machines useful.",
    topics: [
      "LLM-powered robotics",
      "Vision-language-action models",
      "Sim-to-real transfer",
      "Multi-modal perception",
    ],
  },
  {
    number: "04",
    title: "Capital",
    description:
      "How robotics gets funded, priced, and scaled — from seed rounds to industrial rollout.",
    topics: [
      "Hardware-heavy venture models",
      "Unit economics of autonomy",
      "Strategic corporate investment",
      "Path to industrial contracts",
    ],
  },
  {
    number: "05",
    title: "Deployment",
    description:
      "Safety, certification, and the regulatory reality of putting machines into the world.",
    topics: [
      "Safety certification standards",
      "Regulatory landscapes",
      "Liability frameworks",
      "Workforce transition",
    ],
  },
];

export function ThemesSection() {
  const [active, setActive] = useState(0);
  const theme = themes[active];

  return (
    <section id="agenda" className="relative py-16 md:py-24">
      <div className="container-editorial">
        {/* Header */}
        <div className="mb-14 flex flex-wrap items-baseline justify-between gap-3 border-t border-foreground/15 pt-4 md:mb-20">
          <Reveal>
            <p className="label-ink">003 / Tracks</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="label">
              {String(active + 1).padStart(2, "0")} — {String(themes.length).padStart(2, "0")}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Track list */}
          <div className="lg:col-span-7">
            {themes.map((t, i) => {
              const isActive = active === i;
              return (
                <motion.button
                  key={t.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, delay: i * 0.06, ease: EASE }}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className="group block w-full border-t border-foreground/15 py-5 text-left last:border-b md:py-7"
                >
                  <div className="flex items-baseline gap-5 md:gap-8">
                    <span
                      className={`font-mono text-[11px] tracking-[0.2em] transition-colors duration-500 ${
                        isActive ? "text-foreground" : "text-muted-foreground/60"
                      }`}
                    >
                      /{t.number}
                    </span>

                    <span className="relative overflow-hidden">
                      <span
                        className={`display-lg block transition-all duration-500 ${
                          isActive
                            ? "translate-x-2 text-foreground"
                            : "translate-x-0 text-foreground/25 group-hover:text-foreground/50"
                        }`}
                      >
                        {t.title}
                      </span>
                    </span>

                    <motion.span
                      aria-hidden
                      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -8 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="ml-auto font-mono text-sm"
                    >
                      →
                    </motion.span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <p className="label mb-6">
                    Track {theme.number} · {theme.title}
                  </p>

                  <p className="mb-10 max-w-[36ch] text-xl leading-[1.4] tracking-[-0.01em] md:text-2xl">
                    {theme.description}
                  </p>

                  <div>
                    {theme.topics.map((topic, i) => (
                      <motion.div
                        key={topic}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.1 + i * 0.07,
                          ease: EASE,
                        }}
                        className="flex items-baseline gap-4 border-t border-foreground/15 py-3.5 last:border-b"
                      >
                        <span className="font-mono text-[10px] text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-[13px] leading-relaxed">
                          {topic}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
