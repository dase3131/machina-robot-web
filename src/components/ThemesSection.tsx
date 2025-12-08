import { motion } from "framer-motion";

const themes = [
  {
    number: "01",
    title: "Humanoid Robotics & Embodied Intelligence",
    description: "The future of bipedal systems and physical AI agents"
  },
  {
    number: "02", 
    title: "Industrial Physical Intelligence",
    description: "Automation at scale for manufacturing and logistics"
  },
  {
    number: "03",
    title: "BCI / HCI",
    description: "Brain-computer and human-computer interfaces redefining interaction"
  },
  {
    number: "04",
    title: "AI × Robotics Integration",
    description: "Merging foundation models with physical systems"
  },
  {
    number: "05",
    title: "Safety, Ethics & Policy",
    description: "Deployment frameworks and responsible development"
  }
];

export function ThemesSection() {
  return (
    <section id="themes" className="py-32 border-t border-foreground/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] mb-4">002 / THEMES & TRACKS</p>
          <h2 className="text-4xl md:text-5xl font-bold">Core Focus Areas</h2>
        </motion.div>

        <div className="space-y-0">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-t border-foreground/20 py-8 group hover:bg-foreground/5 transition-colors px-4 -mx-4"
            >
              <div className="flex items-start gap-8">
                <span className="font-mono text-xs opacity-40">{theme.number}</span>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:translate-x-2 transition-transform">
                    {theme.title}
                  </h3>
                  <p className="text-sm opacity-60">{theme.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
