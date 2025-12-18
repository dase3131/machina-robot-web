import { motion } from "framer-motion";
import { Users, Lightbulb, Handshake, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "CONNECT WITH INDUSTRY LEADERS",
    description: "Network with founders, investors, and executives from the world's most innovative robotics and AI companies.",
  },
  {
    icon: Lightbulb,
    title: "DISCOVER BREAKTHROUGH TECHNOLOGY",
    description: "Get first-hand access to cutting-edge demos, product launches, and technical deep-dives from pioneers in the field.",
  },
  {
    icon: Handshake,
    title: "FORGE LASTING PARTNERSHIPS",
    description: "A curated environment designed to facilitate meaningful connections that turn into real business opportunities.",
  },
  {
    icon: Rocket,
    title: "SHAPE THE FUTURE",
    description: "Join the conversation defining how intelligent machines will transform industries and everyday life.",
  },
];

export function WhyAttendSection() {
  return (
    <section className="py-24 md:py-32 grid-pattern">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-number mb-4">003 / WHY ATTEND</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-none">
            WHERE INTELLIGENCE<br />
            <span className="text-muted-foreground">MEETS OPPORTUNITY</span>
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="font-mono text-sm font-semibold tracking-wider mb-3 uppercase">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}