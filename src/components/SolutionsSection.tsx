import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, BarChart3, Globe } from "lucide-react";

const solutions = [
  { icon: Zap, title: "Intelligent Automation", desc: "Automate complex workflows with AI that learns and adapts to your business processes." },
  { icon: Shield, title: "Enterprise Security", desc: "Built-in compliance and security frameworks designed for regulated industries." },
  { icon: BarChart3, title: "Predictive Analytics", desc: "Transform raw data into actionable insights with advanced machine learning models." },
  { icon: Globe, title: "Omnichannel Engagement", desc: "Unified customer experience across every touchpoint and communication channel." },
];

const SolutionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="py-24 lg:py-32 bg-gradient-alt" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-navy">
            Solutions That <span className="text-gradient-cyan">Scale</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Purpose-built AI solutions for enterprise challenges that demand precision and reliability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              className="group bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-cyan/30"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:glow-cyan transition-shadow duration-300">
                <s.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
