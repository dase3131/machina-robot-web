import { motion } from "framer-motion";

export function FooterSection() {
  return (
    <footer id="register" className="py-32 border-t border-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="font-mono text-xs tracking-[0.3em] mb-6">JULY 7, 2025 • PARIS</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
            Join MACHINA
          </h2>
          <p className="text-lg opacity-70 mb-12">
            Be part of the conversation shaping the future of physical AI.
          </p>
          
          <a 
            href="mailto:hello@machina.ai"
            className="inline-block font-mono text-sm tracking-wider border-2 border-foreground px-12 py-5 hover:bg-foreground hover:text-background transition-all"
          >
            REGISTER INTEREST
          </a>
        </motion.div>

        <div className="mt-32 pt-8 border-t border-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-xs tracking-widest">MACHINA 2025</span>
          <span className="font-mono text-xs opacity-50">Where intelligence meets the physical world.</span>
        </div>
      </div>
    </footer>
  );
}
