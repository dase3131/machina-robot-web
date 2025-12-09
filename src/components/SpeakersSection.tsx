import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
  const [isPaused, setIsPaused] = useState(false);
  const total = speakers.length;

  // Auto-rotate
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  const rotate = (direction: number) => {
    setActiveIndex((prev) => (prev + direction + total) % total);
  };

  const getCardStyle = (index: number) => {
    const diff = (index - activeIndex + total) % total;
    const normalizedDiff = diff > total / 2 ? diff - total : diff;
    
    // Position cards in a semi-circle
    const angle = normalizedDiff * 45; // degrees between cards
    const radius = 350;
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius - radius;
    const scale = 1 - Math.abs(normalizedDiff) * 0.12;
    const opacity = 1 - Math.abs(normalizedDiff) * 0.25;
    const zIndex = 10 - Math.abs(normalizedDiff);

    return {
      transform: `translateX(${x}px) translateZ(${z}px) scale(${Math.max(scale, 0.65)})`,
      opacity: Math.max(opacity, 0.35),
      zIndex,
    };
  };

  return (
    <section 
      id="speakers" 
      className="py-32 border-t border-foreground/10 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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

        {/* Carousel container */}
        <div 
          className="relative h-[380px] md:h-[420px] flex items-center justify-center"
          style={{ perspective: '1200px' }}
        >
          <div className="relative w-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                className="absolute w-40 md:w-48 cursor-pointer"
                animate={getCardStyle(index)}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="bg-background border border-foreground/10 hover:border-foreground/30 transition-colors duration-300 p-3">
                  <div className="aspect-square bg-foreground/5 overflow-hidden mb-3">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        index === activeIndex ? 'grayscale-0' : 'grayscale'
                      }`}
                    />
                  </div>
                  <h3 className="font-sans text-sm font-medium truncate">
                    {speaker.name}
                  </h3>
                  <p className="font-mono text-xs opacity-50 mt-1 truncate">
                    {speaker.title}, {speaker.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={() => rotate(-1)}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => rotate(1)}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Active speaker info */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center mt-4"
          >
            <h3 className="font-sans text-xl md:text-2xl font-medium">{speakers[activeIndex].name}</h3>
            <p className="font-mono text-sm opacity-50 mt-2">
              {speakers[activeIndex].title}, {speakers[activeIndex].company}
            </p>
            <p className="font-mono text-xs opacity-70 mt-4 max-w-lg mx-auto leading-relaxed">
              {speakers[activeIndex].bio}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {speakers.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-foreground w-6' : 'bg-foreground/30 w-2'
              }`}
            />
          ))}
        </div>

        <p className="font-mono text-xs opacity-50 mt-8 text-center md:hidden">
          + More speakers to be announced
        </p>
      </div>
    </section>
  );
}