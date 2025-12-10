import { motion } from "framer-motion";
import ericSchmidt from "@/assets/eric-schmidt.png";

export function QuoteSection() {
  return (
    <section className="py-32 border-t border-foreground/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] border border-foreground/20 overflow-hidden grayscale">
              <img 
                src={ericSchmidt} 
                alt="Eric Schmidt" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute bottom-6 left-6">
              <p className="font-mono text-xs tracking-[0.3em] text-background">FROM RAISE SUMMIT</p>
            </div>
          </motion.div>

          {/* Right - Quote */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              "The fastest-growing AI Tech conference in Europe,{" "}
              <span className="italic font-normal">and maybe in history"</span>
            </blockquote>
            
            <div className="pt-8 border-t border-foreground/10">
              <p className="font-semibold text-lg">Eric Schmidt</p>
              <p className="font-mono text-sm opacity-60">Former CEO & Chairman of Google; Chair & CEO of Relativity Space</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
