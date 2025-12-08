import { motion } from "framer-motion";

const companies = [
  "NVIDIA", "Agility Robotics", "Figure", "Boston Dynamics", 
  "1X", "Sanctuary AI", "Unitree", "Fourier", "Intrinsic",
  "UC Berkeley", "MIT", "Stanford HAI", "CMU Robotics"
];

export function SpeakersSection() {
  return (
    <section id="speakers" className="py-32 border-t border-foreground/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] mb-4">004 / SPEAKERS & SPONSORS</p>
          <h2 className="text-4xl md:text-5xl font-bold">Industry Leaders</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          {companies.map((company, index) => (
            <motion.span
              key={company}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="font-mono text-sm border border-foreground/20 px-6 py-3 hover:bg-foreground hover:text-background transition-all cursor-default"
            >
              {company}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 font-mono text-xs opacity-50"
        >
          + Major BCI/HCI groups and industrial robotics companies
        </motion.p>
      </div>
    </section>
  );
}
