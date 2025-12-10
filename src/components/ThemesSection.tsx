import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const themes = [
  {
    number: "01",
    title: "HUMANOID",
    description: "Explore the future of bipedal systems and physical AI agents that will reshape human-robot interaction.",
    topics: [
      "Next-gen bipedal locomotion",
      "Dexterous manipulation systems",
      "Human-robot collaboration frameworks",
      "Embodied intelligence architectures"
    ]
  },
  {
    number: "02", 
    title: "INDUSTRIAL",
    description: "Automation at scale for manufacturing and logistics, driving the next industrial revolution.",
    topics: [
      "Factory automation pipelines",
      "Warehouse robotics at scale",
      "Quality control AI systems",
      "Predictive maintenance"
    ]
  },
  {
    number: "03",
    title: "INTEGRATION",
    description: "Merging foundation models with physical systems to create truly intelligent machines.",
    topics: [
      "LLM-powered robotics",
      "Vision-language-action models",
      "Sim-to-real transfer",
      "Multi-modal perception"
    ]
  },
  {
    number: "04",
    title: "ETHICS",
    description: "Deployment frameworks and responsible development for safe AI-robotics systems.",
    topics: [
      "Safety certification standards",
      "Regulatory landscapes",
      "Liability frameworks",
      "Workforce transition"
    ]
  }
];

export function ThemesSection() {
  const [activeTheme, setActiveTheme] = useState(0);

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left side - Theme titles */}
          <div className="space-y-2">
            {themes.map((theme, index) => (
              <motion.button
                key={theme.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveTheme(index)}
                className={`w-full text-left py-4 border-b border-foreground/10 group transition-all duration-300 flex items-baseline gap-4 ${
                  activeTheme === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
              >
                <span className="font-mono text-xs">/{theme.number}</span>
                <span 
                  className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight transition-colors duration-300 ${
                    activeTheme === index ? 'text-foreground' : 'text-foreground'
                  }`}
                >
                  {theme.title}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Right side - Description panel */}
          <div className="lg:pl-8 lg:border-l border-foreground/10 min-h-[400px] flex items-start pt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTheme}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <p className="text-lg md:text-xl leading-relaxed">
                  <span className="font-semibold">{themes[activeTheme].description.split(' ').slice(0, 4).join(' ')}</span>
                  {' '}{themes[activeTheme].description.split(' ').slice(4).join(' ')}
                </p>
                
                <div className="space-y-4">
                  {themes[activeTheme].topics.map((topic, index) => (
                    <motion.div
                      key={topic}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="py-3 border-b border-foreground/10 font-mono text-sm"
                    >
                      {topic}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
