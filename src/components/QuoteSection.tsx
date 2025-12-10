import { motion } from "framer-motion";

export function QuoteSection() {
  return (
    <section className="py-32 border-t border-foreground/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Visual element */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] border border-foreground/20 flex items-center justify-center">
              <span className="font-mono text-[120px] md:text-[180px] opacity-5 select-none">M</span>
            </div>
            <div className="absolute bottom-6 left-6">
              <p className="font-mono text-xs tracking-[0.3em]">MACHINA</p>
              <p className="font-mono text-xs opacity-60">PARIS 2025</p>
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
              "The convergence of AI and robotics will be{" "}
              <span className="italic font-normal">the defining shift of this decade."</span>
            </blockquote>
            
            <div className="pt-8 border-t border-foreground/10">
              <p className="font-semibold text-lg">Industry Leader</p>
              <p className="font-mono text-sm opacity-60">CEO, Major Robotics Company</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
