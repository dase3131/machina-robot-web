import { motion } from "framer-motion";
import ericSchmidt from "@/assets/eric-schmidt.png";
import { Reveal, MaskedLines, useParallax } from "@/components/motion/Primitives";

export function QuoteSection() {
  const { ref, y } = useParallax(40);

  return (
    <section className="relative overflow-hidden py-24 md:py-40">
      <div className="container-editorial">
        <div className="mb-14 flex flex-wrap items-baseline justify-between gap-3 border-t border-foreground/15 pt-4 md:mb-20">
          <Reveal>
            <p className="label-ink">Backed by</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="label">Raise Summit</p>
          </Reveal>
        </div>

        <MaskedLines
          as="h2"
          lines={["Brought to you", "by Raise Summit"]}
          className="display-xl mb-16 md:mb-24"
        />

        <div ref={ref} className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <motion.div style={{ y }} className="lg:col-span-5">
            <Reveal y={32}>
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden border border-foreground/15 grayscale">
                  <img
                    src={ericSchmidt}
                    alt="Eric Schmidt, former CEO and Chairman of Google, speaking at Raise Summit"
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between">
                  <span className="label">Raise Summit · Paris</span>
                  <span className="label">Fig. 01</span>
                </figcaption>
              </figure>
            </Reveal>
          </motion.div>

          {/* Quote */}
          <div className="lg:col-span-7 lg:pb-6">
            <Reveal delay={0.12}>
              <blockquote className="text-3xl leading-[1.12] tracking-[-0.025em] md:text-5xl lg:text-[3.5rem]">
                <span className="text-muted-foreground/40">“</span>The
                fastest-growing AI tech conference in Europe,{" "}
                <em className="font-normal italic">and maybe in history.</em>
                <span className="text-muted-foreground/40">”</span>
              </blockquote>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-12 border-t border-foreground/15 pt-5">
                <p className="font-mono text-sm uppercase tracking-[0.18em]">
                  Eric Schmidt
                </p>
                <p className="body-copy mt-2 max-w-[46ch] text-sm">
                  Former CEO &amp; Chairman of Google · Chair &amp; CEO of
                  Relativity Space
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
