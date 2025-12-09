import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const total = speakers.length;
  const angleStep = 360 / total;

  const rotate = (direction: number) => {
    setActiveIndex((prev) => (prev + direction + total) % total);
  };

  return (
    <section id="speakers" className="py-32 border-t border-foreground/10 overflow-hidden">
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

        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center perspective-[1000px]">
          {/* 3D Carousel */}
          <div 
            className="relative w-full h-full"
            style={{ 
              transformStyle: 'preserve-3d',
              transform: `rotateY(${-activeIndex * angleStep}deg)`,
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {speakers.map((speaker, index) => {
              const angle = index * angleStep;
              const radius = 350;
              
              return (
                <div
                  key={speaker.name}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-56"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="group cursor-pointer bg-background p-4 border border-foreground/10 hover:border-foreground/30 transition-all duration-300">
                    <div className="relative overflow-hidden mb-4">
                      <div className="aspect-square bg-foreground/5 overflow-hidden">
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                    </div>
                    <h3 className="font-sans text-sm font-medium">
                      {speaker.name}
                    </h3>
                    <p className="font-mono text-xs opacity-50 mt-1">
                      {speaker.title}, {speaker.company}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <button
            onClick={() => rotate(-1)}
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => rotate(1)}
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Active speaker info */}
        <motion.div 
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mt-8"
        >
          <h3 className="font-sans text-2xl font-medium">{speakers[activeIndex].name}</h3>
          <p className="font-mono text-sm opacity-50 mt-2">
            {speakers[activeIndex].title}, {speakers[activeIndex].company}
          </p>
          <p className="font-mono text-xs opacity-70 mt-4 max-w-md mx-auto leading-relaxed">
            {speakers[activeIndex].bio}
          </p>
        </motion.div>

        <p className="font-mono text-xs opacity-50 mt-8 text-center md:hidden">
          + More speakers to be announced
        </p>
      </div>
    </section>
  );
}
