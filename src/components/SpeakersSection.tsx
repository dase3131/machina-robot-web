import { motion } from "framer-motion";

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
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.3em] mb-4">004 / SPEAKERS</p>
            <h2 className="text-4xl md:text-5xl font-bold">Industry Leaders</h2>
          </div>
          <p className="font-mono text-xs opacity-50 hidden md:block">
            + More speakers to be announced
          </p>
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] bg-foreground/10 overflow-hidden mb-4">
                {/* Placeholder blurred silhouette */}
                <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 to-foreground/40 blur-sm" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-foreground/20 blur-xl" />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center p-4">
                  <p className="font-mono text-xs md:text-sm text-background text-center tracking-wide">
                    To be announced soon
                  </p>
                </div>
              </div>

              {/* Speaker Info */}
              <h3 className="font-sans text-sm md:text-base font-medium">
                {speaker.name}
              </h3>
              <p className="font-mono text-xs opacity-50 mt-1">
                {speaker.title}, {speaker.company}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="font-mono text-xs opacity-50 mt-8 text-center md:hidden">
          + More speakers to be announced
        </p>
      </div>
    </section>
  );
}
