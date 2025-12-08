import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-foreground/10"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-mono text-sm tracking-widest">MACHINA</span>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="font-mono text-xs tracking-wider hover:opacity-60 transition-opacity">ABOUT</a>
          <a href="#themes" className="font-mono text-xs tracking-wider hover:opacity-60 transition-opacity">THEMES</a>
          <a href="#hackathon" className="font-mono text-xs tracking-wider hover:opacity-60 transition-opacity">HACKATHON</a>
          <a href="#speakers" className="font-mono text-xs tracking-wider hover:opacity-60 transition-opacity">SPEAKERS</a>
        </nav>
        <a 
          href="#register" 
          className="font-mono text-xs tracking-wider border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-all"
        >
          REGISTER
        </a>
      </div>
    </motion.header>
  );
}
