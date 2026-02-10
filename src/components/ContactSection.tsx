import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-lavender" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-navy leading-tight">
              Ready to build your{" "}
              <span className="text-gradient-cyan">competitive edge</span>?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
              Let's explore how bespoke AI can transform your customer experience, reduce costs, and unlock new revenue streams.
            </p>
            <div className="mt-8 space-y-4">
              {["Tailored to your data & workflows", "Enterprise-grade security", "Measurable ROI from day one"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm font-medium text-navy">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border">
              <h3 className="text-xl font-bold text-navy mb-6">Get in Touch</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm font-medium text-navy mb-1.5 block">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-navy mb-1.5 block">Work Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-navy mb-1.5 block">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-navy mb-1.5 block">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-cta text-primary-foreground py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity glow-violet"
                >
                  Contact Us <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
