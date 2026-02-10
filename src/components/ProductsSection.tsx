import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Headphones, Ticket, TrendingUp, MessageSquare } from "lucide-react";

const products = [
  { icon: Headphones, title: "AI Contact Centre", desc: "Intelligent routing, real-time sentiment analysis, and automated resolution for modern contact centres." },
  { icon: Ticket, title: "AI Ticketing", desc: "Smart ticket classification, priority assignment, and automated workflows that reduce response times." },
  { icon: TrendingUp, title: "Customer Value Management", desc: "Predict churn, identify upsell opportunities, and maximise customer lifetime value with AI." },
  { icon: MessageSquare, title: "Conversational AI", desc: "Natural language understanding that delivers human-like interactions at enterprise scale." },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-navy">
            Our <span className="text-gradient-cyan">Products</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A suite of AI-powered products designed for enterprise customer engagement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              className="group flex gap-6 bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-violet/20"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:glow-violet transition-shadow duration-300">
                <p.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
