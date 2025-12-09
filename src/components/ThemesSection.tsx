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
          <p className="font-mono text-xs tracking-[0.3em] mb-4">002 / AGENDA</p>
          <h2 className="text-4xl md:text-5xl font-bold">Conference Agenda</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Large card - spans 2 cols and 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 border border-foreground/20 p-8 group hover:bg-foreground hover:text-background transition-colors duration-300 flex flex-col justify-between min-h-[320px]"
          >
            <span className="font-mono text-6xl md:text-8xl opacity-10 group-hover:opacity-20 transition-opacity">01</span>
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                {themes[0].title}
              </h3>
              <p className="text-sm opacity-60 group-hover:opacity-80">{themes[0].description}</p>
            </div>
          </motion.div>

          {/* Medium cards */}
          {themes.slice(1, 3).map((theme, index) => (
            <motion.div
              key={theme.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="md:col-span-2 border border-foreground/20 p-6 group hover:bg-foreground hover:text-background transition-colors duration-300 flex flex-col justify-between min-h-[160px]"
            >
              <span className="font-mono text-4xl opacity-10 group-hover:opacity-20 transition-opacity">{theme.number}</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {theme.title}
                </h3>
                <p className="text-sm opacity-60 group-hover:opacity-80">{theme.description}</p>
              </div>
            </motion.div>
          ))}

          {/* Small cards */}
          {themes.slice(3).map((theme, index) => (
            <motion.div
              key={theme.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              className="md:col-span-2 border border-foreground/20 p-6 group hover:bg-foreground hover:text-background transition-colors duration-300 flex flex-col justify-between min-h-[140px]"
            >
              <span className="font-mono text-3xl opacity-10 group-hover:opacity-20 transition-opacity">{theme.number}</span>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {theme.title}
                </h3>
                <p className="text-sm opacity-60 group-hover:opacity-80">{theme.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
