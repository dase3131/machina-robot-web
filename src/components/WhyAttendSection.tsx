import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "NETWORK",
    subtitle: "WITH LEADERS",
    description: "Connect with founders, investors, and executives from the world's most innovative robotics and AI companies.",
  },
  {
    number: "02",
    title: "DISCOVER",
    subtitle: "BREAKTHROUGHS",
    description: "First-hand access to cutting-edge demos, product launches, and technical deep-dives from pioneers.",
  },
  {
    number: "03",
    title: "FORGE",
    subtitle: "PARTNERSHIPS",
    description: "A curated environment designed to facilitate meaningful connections that turn into real opportunities.",
  },
  {
    number: "04",
    title: "SHAPE",
    subtitle: "THE FUTURE",
    description: "Join the conversation defining how intelligent machines will transform industries and everyday life.",
  },
];

export function WhyAttendSection() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="section-number mb-4">003 / WHY ATTEND</p>
        </motion.div>

        {/* Stacked Reasons */}
        <div className="space-y-0">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-t border-border py-8 md:py-12"
            >
              <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">
                {/* Number */}
                <div className="col-span-2 md:col-span-1">
                  <span className="font-mono text-xs text-muted-foreground">{reason.number}</span>
                </div>
                
                {/* Title */}
                <div className="col-span-10 md:col-span-4">
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-none">
                    {reason.title}
                    <br />
                    <span className="text-muted-foreground">{reason.subtitle}</span>
                  </h3>
                </div>
                
                {/* Description */}
                <div className="col-span-12 md:col-span-7 md:pl-8">
                  <p className="text-muted-foreground leading-relaxed max-w-lg pt-4 md:pt-2">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom border */}
        <div className="border-t border-border" />
      </div>
    </section>
  );
}