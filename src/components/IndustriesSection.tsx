import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Landmark, Heart, ShoppingCart, Plane, GraduationCap } from "lucide-react";

const industries = [
  { icon: Landmark, name: "Financial Services" },
  { icon: Heart, name: "Healthcare" },
  { icon: ShoppingCart, name: "Retail & E-Commerce" },
  { icon: Building2, name: "Telecommunications" },
  { icon: Plane, name: "Travel & Hospitality" },
  { icon: GraduationCap, name: "Education" },
];

const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="py-24 lg:py-32 bg-gradient-lavender" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-navy">
            Industries We <span className="text-gradient-cyan">Serve</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored AI solutions across sectors that demand precision, compliance, and scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              className="group bg-card rounded-xl p-6 text-center shadow-card hover:shadow-card-hover border border-border hover:border-cyan/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:glow-cyan transition-shadow duration-300">
                <ind.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm font-semibold text-navy">{ind.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
