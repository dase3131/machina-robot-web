import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-32 border-t border-foreground/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] mb-8">001 / WHY MACHINA</p>
          
          <p className="font-sans text-xl md:text-2xl leading-relaxed mb-12">
            MACHINA is built for the people shaping the next generation of robotics and physical AI. We bring together founders, investors, and industry leaders who are defining what intelligent machines will become—creating a space where bold ideas meet real capital, and where partnerships form between those building the future.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="font-mono text-xs tracking-wider opacity-50 mb-2">AUDIENCE</p>
              <p className="text-sm leading-relaxed">Robotics founders, C-level leaders, AI labs, neurotech pioneers, investors, policymakers</p>
            </div>
            <div>
              <p className="font-mono text-xs tracking-wider opacity-50 mb-2">LOCATION</p>
              <p className="text-sm leading-relaxed">Paris, France — European hub with global reach</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
