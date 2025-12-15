import { motion } from "framer-motion";
import cognitionLogo from "@/assets/logos/cognition.svg";
import nvidiaLogo from "@/assets/logos/nvidia.avif";
import anthropicLogo from "@/assets/logos/anthropic.avif";
import openaiLogo from "@/assets/logos/openai.avif";
import metaLogo from "@/assets/logos/meta.avif";
import mistralLogo from "@/assets/logos/mistral.avif";
import ycombinatorLogo from "@/assets/logos/ycombinator.avif";
import paloaltoLogo from "@/assets/logos/paloalto.avif";
import cerebrasLogo from "@/assets/logos/cerebras.svg";

const companies = [
  { name: "Cognition", logo: cognitionLogo },
  { name: "NVIDIA", logo: nvidiaLogo },
  { name: "Anthropic", logo: anthropicLogo },
  { name: "OpenAI", logo: openaiLogo },
  { name: "Meta", logo: metaLogo },
  { name: "Mistral AI", logo: mistralLogo },
  { name: "Y Combinator", logo: ycombinatorLogo },
  { name: "Palo Alto", logo: paloaltoLogo },
  { name: "Cerebras", logo: cerebrasLogo },
];

export function CompanyBanner() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <h2 className="font-sans text-2xl md:text-3xl">
          Trusted by the <span className="italic">industry pioneers</span>
        </h2>
      </div>
      
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling container */}
        <motion.div
          className="flex gap-16 items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Double the logos for seamless loop */}
          {[...companies, ...companies].map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 h-12 flex items-center justify-center"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-8 md:h-10 w-auto object-contain invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
