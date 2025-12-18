import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactFormSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch soon with more information about MACHINA.",
    });
    
    setFormData({ name: "", email: "", company: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs tracking-wider text-background/60 mb-6">004 / STAY UPDATED</p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-none">
              JOIN THE
              <br />
              WAITLIST
            </h2>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="w-full bg-transparent border border-background/30 px-4 py-4 text-base focus:border-background focus:outline-none transition-colors placeholder:text-background/40 font-mono"
                  placeholder="NAME"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={255}
                  className="w-full bg-transparent border border-background/30 px-4 py-4 text-base focus:border-background focus:outline-none transition-colors placeholder:text-background/40 font-mono"
                  placeholder="EMAIL"
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="w-full bg-transparent border border-background/30 px-4 py-4 text-base focus:border-background focus:outline-none transition-colors placeholder:text-background/40 font-mono"
                  placeholder="COMPANY"
                />
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group bg-background text-foreground px-10 py-4 font-mono text-sm uppercase tracking-wider flex items-center gap-3 hover:bg-background/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "SUBMITTING..." : "GET EARLY ACCESS"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <p className="text-center text-background/50 font-mono text-xs tracking-wider pt-4">
              EARLY ACCESS • SPEAKER ANNOUNCEMENTS • PARTNERSHIP OPPORTUNITIES
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}