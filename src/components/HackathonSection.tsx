import { motion } from "framer-motion";

export function HackathonSection() {
  return (
    <section id="hackathon" className="py-32 border-t border-foreground/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="font-mono text-xs tracking-[0.3em] mb-4">003 / HACKATHON</p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Embodied Intelligence Challenge
          </h2>
          
          <p className="text-xl leading-relaxed mb-12 max-w-2xl">
            A 24–36 hour competition for robotics and AI builders to prototype physical intelligent systems.
          </p>

          <div className="grid md:grid-cols-4 gap-8 pt-8 border-t border-foreground/20">
            {[
              { label: "EXECUTION", desc: "Ship working prototypes" },
              { label: "FEASIBILITY", desc: "Real-world applicability" },
              { label: "INTELLIGENCE", desc: "Embodied AI integration" },
              { label: "INTERACTION", desc: "Human-machine interface" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="font-mono text-xs tracking-wider mb-2">{item.label}</p>
                <p className="text-sm opacity-60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
