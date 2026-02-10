import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <PageLayout>
      <PageHero
        title="Let's Build Your Competitive Edge"
        highlight="Competitive Edge"
        subtitle="Whether you're exploring AI for the first time or looking to scale existing initiatives, we're ready to help."
        breadcrumb="Contact"
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeUp>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6">Get in touch</h2>
                <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
                  Tell us about your business challenges and we'll show you how bespoke AI can deliver measurable outcomes — quickly and securely.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">Email</p>
                      <p className="text-sm text-muted-foreground">info@zoragobalai.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">Phone</p>
                      <p className="text-sm text-muted-foreground">9087000345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">Office</p>
                      <p className="text-sm text-muted-foreground">Ground Floor, 12, Rajiv Gandhi Salai,
Srinivasa Nagar,
Kandhanchavadi, Perungudi,
Chennai, Tamil Nadu 600096</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border">
                <h3 className="text-xl font-bold text-navy mb-6">Send us a message</h3>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="text-sm font-medium text-navy mb-1.5 block">Full Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy mb-1.5 block">Work Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy mb-1.5 block">Company Name</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow" placeholder="Acme Corp" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy mb-1.5 block">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" className="w-full bg-gradient-cta text-primary-foreground py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity glow-violet">
                    Contact Us <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
