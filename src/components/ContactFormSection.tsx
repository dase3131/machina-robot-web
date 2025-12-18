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
    
    // Simulate form submission
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
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-number mb-4">004 / STAY UPDATED</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-none mb-6">
              BE THE FIRST<br />
              <span className="text-muted-foreground">TO KNOW</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Join our exclusive mailing list for early access to speaker announcements, 
              ticket releases, and partnership opportunities.
            </p>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider mb-2 text-muted-foreground">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="w-full bg-transparent border-b-2 border-foreground/20 py-3 text-lg focus:border-foreground focus:outline-none transition-colors placeholder:text-muted-foreground/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider mb-2 text-muted-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={255}
                  className="w-full bg-transparent border-b-2 border-foreground/20 py-3 text-lg focus:border-foreground focus:outline-none transition-colors placeholder:text-muted-foreground/50"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block font-mono text-xs uppercase tracking-wider mb-2 text-muted-foreground">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="w-full bg-transparent border-b-2 border-foreground/20 py-3 text-lg focus:border-foreground focus:outline-none transition-colors placeholder:text-muted-foreground/50"
                  placeholder="Your company name"
                />
              </div>

              <div className="pt-4 flex gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Get Early Access"}
                </button>
                <button
                  type="button"
                  className="btn-outline flex items-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}