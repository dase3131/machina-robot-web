import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Magnetic, EASE } from "@/components/motion/Primitives";

const NAV = [
  { label: "Summit", href: "#summit" },
  { label: "Agenda", href: "#agenda" },
  { label: "Speakers", href: "#speakers" },
  { label: "Partner", href: "#partner" },
];

export function Header() {
  const { scrollYProgress, scrollY } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    restDelta: 0.001,
  });
  const [condensed, setCondensed] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setCondensed(v > 40));

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`border-b transition-all duration-500 ${
          condensed
            ? "border-foreground/10 bg-background/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="container-editorial">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              condensed ? "py-3" : "py-6"
            }`}
          >
            {/* Wordmark */}
            <a href="#top" className="group flex items-baseline gap-3">
              <span className="font-mono text-sm uppercase tracking-[0.3em]">
                Machina
              </span>
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
                / Paris 2027
              </span>
            </a>

            {/* Nav */}
            <nav className="hidden items-center gap-10 md:flex">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover-rule py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <Magnetic strength={0.2}>
              <a
                href="#partner"
                className="border border-foreground px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] transition-colors duration-300 hover:bg-foreground hover:text-background"
              >
                Become a partner
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Scroll progress hairline */}
        <motion.div
          style={{ scaleX: progress }}
          className="h-px origin-left bg-foreground"
        />
      </div>
    </motion.header>
  );
}
