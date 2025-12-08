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
            Companies working on humanoids, industrial robotics, and neural interfaces are scaling quickly, yet operate in fragmented ecosystems. Existing conferences do not offer a single hub for AI, robotics, and HCI—nor a European location with global reach. MACHINA provides an industry-focused setting where investors can meet key robotics and AI companies, understand their direction, and explore partnerships.
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
