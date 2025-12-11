import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const speakers = [
  { name: "Speaker 1", title: "CEO", company: "Robotics Company" },
  { name: "Speaker 2", title: "Founder", company: "AI Startup" },
  { name: "Speaker 3", title: "CTO", company: "Tech Giant" },
  { name: "Speaker 4", title: "CEO", company: "Humanoid Robotics" },
  { name: "Speaker 5", title: "Partner", company: "Venture Capital" },
  { name: "Speaker 6", title: "CEO", company: "Industrial Automation" },
  { name: "Speaker 7", title: "Founder", company: "AI Research Lab" },
  { name: "Speaker 8", title: "CEO", company: "Drone Technology" },
  { name: "Speaker 9", title: "CTO", company: "Computer Vision" },
  { name: "Speaker 10", title: "CEO", company: "Autonomous Systems" },
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
          className="mb-12"
        >
          <h2 className="font-mono text-4xl md:text-5xl lg:text-6xl tracking-tight">MACHINA 2026 Speakers</h2>
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              {/* Card */}
              <div className="bg-foreground rounded-2xl overflow-hidden">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-background/10 to-background/30" />
                  
                  {/* Blurred head silhouette */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-background/20 blur-2xl translate-y-[-5%]" />
                  </div>
                  
                  {/* Overlay with text */}
                  <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4">
                    <p className="font-mono text-[10px] md:text-xs text-background/80 text-center tracking-wide">
                      To be announced soon
                    </p>
                  </div>

                  {/* Arrow button - bottom left */}
                  <button className="absolute bottom-3 left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
                  </button>
                </div>

                {/* Speaker Info */}
                <div className="p-4">
                  <h3 className="font-sans text-sm font-semibold text-background">
                    {speaker.name}
                  </h3>
                  <p className="font-mono text-[10px] text-background/60 mt-1 leading-relaxed">
                    {speaker.title}, {speaker.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}