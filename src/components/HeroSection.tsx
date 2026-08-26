import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SplineRobot from "@/components/SplineRobot";
import { MaskedLines, Magnetic, EASE } from "@/components/motion/Primitives";

const META = [
  { k: "Edition", v: "03" },
  { k: "City", v: "Paris" },
  { k: "Year", v: "2027" },
  { k: "Focus", v: "Physical AI" },
];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const robotY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen overflow-hidden pt-28 md:pt-32"
    >
      {/* Blueprint texture, very faint */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.55]" />

      {/* Structural vertical rules — the grid made visible */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="container-editorial h-full">
          <div className="grid h-full grid-cols-12">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.6, delay: 0.4 + i * 0.04, ease: EASE }}
                className="h-full origin-top border-l border-foreground/[0.06] last:border-r"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container-editorial relative z-10">
        {/* Top metadata strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: EASE }}
          className="flex flex-wrap items-baseline justify-between gap-y-2 border-t border-foreground/15 pt-4"
        >
          <span className="label-ink">001 / The Summit</span>
          <span className="label">Humanoids · Robotics · Industrial Autonomy</span>
        </motion.div>

        {/* Display title */}
        <motion.div style={{ y: titleY, opacity: fade }} className="relative">
          <MaskedLines
            as="h1"
            immediate
            delay={0.35}
            stagger={0.06}
            lines={["Machina"]}
            className="display-hero mt-10 md:mt-14"
          />

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9, ease: EASE }}
              className="label"
            >
              By Raise Summit
            </motion.p>

            <MaskedLines
              immediate
              delay={0.75}
              stagger={0.07}
              lines={["Where intelligence", "meets the physical world."]}
              className="font-sans text-2xl leading-[1.15] tracking-[-0.02em] md:max-w-[22ch] md:text-4xl"
            />
          </div>
        </motion.div>

        {/* Lower block: robot + copy + CTAs */}
        <div className="mt-10 grid items-end gap-10 lg:mt-4 lg:grid-cols-12 lg:gap-8">
          {/* Left column */}
          <motion.div
            style={{ opacity: fade }}
            className="order-2 flex flex-col gap-10 lg:order-1 lg:col-span-5 lg:pb-20"
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.15, ease: EASE }}
              className="body-copy max-w-md"
            >
              One day in Paris where the people building intelligent machines meet
              the people funding and deploying them. Founders, operators, and
              investors — in one room, by design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3, ease: EASE }}
              className="flex flex-wrap items-center gap-3"
            >
              <Magnetic strength={0.22}>
                <a href="#partner" className="btn-primary">
                  Become a partner
                </a>
              </Magnetic>
              <Magnetic strength={0.18}>
                <a href="#summit" className="btn-outline">
                  Explore the summit
                  <span aria-hidden>↓</span>
                </a>
              </Magnetic>
            </motion.div>

            {/* Metadata table */}
            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.45, ease: EASE }}
              className="grid max-w-md grid-cols-2 gap-x-8 sm:grid-cols-4"
            >
              {META.map((m) => (
                <div key={m.k} className="border-t border-foreground/15 pt-3">
                  <dt className="label mb-1">{m.k}</dt>
                  <dd className="font-mono text-sm uppercase tracking-tight">
                    {m.v}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* Right column — robot */}
          <motion.div
            style={{ y: robotY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.6, ease: EASE }}
            className="order-1 h-[420px] lg:order-2 lg:col-span-7 lg:h-[620px]"
          >
            <SplineRobot className="h-full w-full" />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: fade }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="label"
        >
          Scroll
        </motion.div>
      </motion.div>
    </section>
  );
}
