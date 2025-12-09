import { motion } from "framer-motion";

const speakers = [
  {
    name: "Jensen Huang",
    title: "CEO",
    company: "NVIDIA",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    bio: "Pioneer in GPU computing and AI acceleration. Led NVIDIA from gaming graphics to becoming the backbone of modern AI infrastructure."
  },
  {
    name: "Elon Musk",
    title: "CEO",
    company: "Tesla",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Visionary behind Tesla Optimus humanoid robot. Transforming autonomous systems from vehicles to general-purpose robotics."
  },
  {
    name: "Wang Xingxing",
    title: "CEO",
    company: "Unitree",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Founded Unitree at 26, revolutionizing affordable quadruped robots. Making advanced robotics accessible worldwide."
  },
  {
    name: "Brett Adcock",
    title: "CEO",
    company: "Figure",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    bio: "Serial entrepreneur building general-purpose humanoid robots. Previously founded Archer Aviation and Vettery."
  },
  {
    name: "Marc Raibert",
    title: "Founder",
    company: "Boston Dynamics",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Legendary roboticist and MIT professor. Created Spot, Atlas, and defined modern dynamic locomotion."
  },
  {
    name: "Geordie Rose",
    title: "CEO",
    company: "Sanctuary AI",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    bio: "Quantum computing pioneer, founder of D-Wave. Now building human-like AI for general-purpose robots."
  }
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
          <p className="font-mono text-xs tracking-[0.3em] mb-4">004 / SPEAKERS</p>
          <h2 className="text-4xl md:text-5xl font-bold">Industry Leaders</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer flex gap-4"
            >
              <div className="relative overflow-hidden flex-shrink-0 w-32 h-32">
                <div className="w-full h-full bg-foreground/5 overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="font-sans text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  {speaker.name}
                </h3>
                <p className="font-mono text-xs opacity-50 mt-1">
                  {speaker.title}, {speaker.company}
                </p>
                <div className="overflow-hidden mt-3">
                  <p className="font-mono text-xs opacity-0 group-hover:opacity-70 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 leading-relaxed max-w-[200px]">
                    {speaker.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 font-mono text-xs opacity-50"
        >
          + More speakers to be announced
        </motion.p>
      </div>
    </section>
  );
}
