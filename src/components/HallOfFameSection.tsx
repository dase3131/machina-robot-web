import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const speakers = [
  {
    name: "Eric Schmidt",
    title: "Executive Chairman & CEO of Relativity Space,",
    subtitle: "Former CEO of Google",
    company: "Relativity",
    image: "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae40bf34160cd3ff1a9_Eric%20Schmidt.avif",
    logo: "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae4e643301758a16db5_tag-rel.avif",
  },
  {
    name: "Nikesh Arora",
    title: "Chairman & CEO,",
    subtitle: "Palo Alto Networks",
    company: "Palo Alto",
    image: "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae4bccf7c822e327e2b_Nikesh%20Arora.avif",
    logo: "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae43f82e950f430e9f6_tag%20palo.avif",
  },
  {
    name: "Andrew Feldman",
    title: "CEO & Founder,",
    subtitle: "Cerebras Systems",
    company: "Cerebras",
    image: "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae4cd59a62ca6513e36_Andrew%20Feldman.avif",
    logo: "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae4cd59a62ca6513e6a_tag%20cerebras.avif",
  },
  {
    name: "Benoit Dageville",
    title: "Founder & Board Member,",
    subtitle: "Snowflake",
    company: "Snowflake",
    image: "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae4afd6e9e12a03893f_Benoit%20Dageville.avif",
    logo: "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae4bccf7c822e327e2e_tag%20snowflake.avif",
  },
  {
    name: "Jonathan Ross",
    title: "CEO & Founder,",
    subtitle: "Groq",
    company: "Groq",
    image: "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae4ec6d20420b10e78e_Jonathan%20Ross.avif",
    logo: "https://cdn.prod.website-files.com/66f11b59c8366f8c2c21551f/690b3ae41cc0b13e9efc33bb_tag%20groq.avif",
  },
];

export function HallOfFameSection() {
  return (
    <section id="speakers" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl mb-2">
            <span className="italic font-serif">RAISE Hall of Fame</span>
          </h2>
          <p className="font-mono text-3xl md:text-5xl lg:text-6xl opacity-60">
            2025 <span className="mx-2">|</span> Speakers
          </p>
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Card */}
              <div className="bg-background/10 rounded-2xl overflow-hidden border border-background/10 hover:border-background/20 transition-all duration-300">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Company Logo Badge */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <img
                      src={speaker.logo}
                      alt={speaker.company}
                      className="h-8 md:h-10 object-contain"
                    />
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="p-5">
                  <h3 className="font-sans text-lg font-semibold text-background mb-1">
                    {speaker.name}
                  </h3>
                  <p className="font-sans text-sm text-background/70 leading-relaxed">
                    {speaker.title}
                  </p>
                  {speaker.subtitle && (
                    <p className="font-sans text-sm text-background/70">
                      {speaker.subtitle}
                    </p>
                  )}
                </div>

                {/* Arrow Button */}
                <div className="px-5 pb-5">
                  <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="w-5 h-5 text-primary-foreground" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
