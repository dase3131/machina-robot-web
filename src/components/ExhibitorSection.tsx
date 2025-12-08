import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const exhibitors = [
  {
    id: "001",
    name: "UNITREE",
    robot: "H1",
    description: "World's first full-size general-purpose humanoid robot capable of running at 3.3 m/s. Features 19 degrees of freedom with advanced whole-body coordination.",
    specs: ["HEIGHT: 1.8M", "WEIGHT: 47KG", "DOF: 19"],
  },
  {
    id: "002",
    name: "1X",
    robot: "NEO",
    description: "Embodied AI humanoid designed for safe human collaboration. Powered by neural networks trained on real-world interaction data.",
    specs: ["HEIGHT: 1.65M", "WEIGHT: 30KG", "BIPEDAL"],
  },
  {
    id: "003",
    name: "FIGURE",
    robot: "02",
    description: "Next-generation humanoid built for commercial deployment. Integrates advanced AI reasoning with precise manipulation capabilities.",
    specs: ["HEIGHT: 1.7M", "PAYLOAD: 20KG", "AUTONOMOUS"],
  },
  {
    id: "004",
    name: "TESLA",
    robot: "OPTIMUS",
    description: "General-purpose humanoid designed for scalable manufacturing. Utilizes Tesla's AI infrastructure and FSD computer technology.",
    specs: ["HEIGHT: 1.73M", "WEIGHT: 57KG", "DOF: 28"],
  },
];

export const ExhibitorSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-background/60 mb-4">002 / EXHIBITORS</p>
          <h2 className="font-mono text-4xl md:text-5xl lg:text-6xl tracking-tight">
            THE MACHINES
          </h2>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-8">
            {exhibitors.map((exhibitor, index) => (
              <CarouselItem key={exhibitor.id} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Podium */}
                  <div className="relative bg-background/5 border border-background/20 backdrop-blur-sm">
                    {/* Robot Display Area */}
                    <div className="relative h-[400px] md:h-[500px] flex items-end justify-center overflow-hidden">
                      {/* Grid overlay */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="w-full h-full" style={{
                          backgroundImage: `
                            linear-gradient(to right, currentColor 1px, transparent 1px),
                            linear-gradient(to bottom, currentColor 1px, transparent 1px)
                          `,
                          backgroundSize: '40px 40px'
                        }} />
                      </div>
                      
                      {/* Robot silhouette placeholder */}
                      <div className="relative z-10 w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="font-mono text-8xl md:text-9xl font-light text-background/10 tracking-tighter">
                            {exhibitor.robot}
                          </div>
                          <div className="font-mono text-xs tracking-[0.5em] text-background/40 mt-4">
                            [HOLOGRAM ACTIVE]
                          </div>
                        </div>
                      </div>

                      {/* Corner accents */}
                      <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-background/30" />
                      <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-background/30" />
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-background/30" />
                      <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-background/30" />
                    </div>

                    {/* Info Box */}
                    <div className="border-t border-background/20 p-6 md:p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <p className="font-mono text-xs text-background/40 mb-2">{exhibitor.id}</p>
                          <h3 className="font-mono text-2xl md:text-3xl tracking-tight">{exhibitor.name}</h3>
                        </div>
                        <div className="font-mono text-xs text-background/60 text-right">
                          MODEL_<br/>{exhibitor.robot}
                        </div>
                      </div>
                      
                      <p className="font-mono text-sm leading-relaxed text-background/70 mb-6">
                        {exhibitor.description}
                      </p>

                      {/* Specs */}
                      <div className="flex flex-wrap gap-2">
                        {exhibitor.specs.map((spec, i) => (
                          <span
                            key={i}
                            className="font-mono text-[10px] tracking-wider px-3 py-1.5 border border-background/20 text-background/60"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex items-center justify-center gap-4 mt-12">
            <CarouselPrevious className="static translate-y-0 bg-transparent border-background/30 text-background hover:bg-background/10 hover:text-background" />
            <CarouselNext className="static translate-y-0 bg-transparent border-background/30 text-background hover:bg-background/10 hover:text-background" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
