import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

export function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      <Spotlight size={400} className="z-10" />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-4 items-center min-h-[80vh]">
          {/* Left: Title */}
          <div className="relative z-10 flex flex-col justify-center lg:pr-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-xs tracking-[0.3em] mb-6"
            >
              PARIS • JULY 7, 2025
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-mono text-[clamp(3rem,12vw,10rem)] font-black leading-[0.85] tracking-tighter"
            >
              MACHINA
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 max-w-md text-lg leading-relaxed"
            >
              Where intelligence meets the physical world.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-4 max-w-lg font-mono text-xs leading-relaxed opacity-70"
            >
              The summit dedicated to humanoids, robotics, industrial autonomy, and next-generation human–machine interfaces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-10 flex gap-4"
            >
              <a 
                href="#register"
                className="font-mono text-xs tracking-wider border-2 border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all"
              >
                REGISTER NOW
              </a>
              <a 
                href="#about"
                className="font-mono text-xs tracking-wider px-8 py-4 hover:opacity-60 transition-opacity"
              >
                LEARN MORE →
              </a>
            </motion.div>
          </div>

          {/* Right: Robot */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[500px] lg:h-[700px]"
          >
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
