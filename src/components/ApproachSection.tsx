import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Discover", desc: "Deep-dive into your business processes, pain points, and strategic objectives." },
  { num: "02", title: "Design", desc: "Architect bespoke AI solutions tailored to your unique requirements and data landscape." },
  { num: "03", title: "Develop", desc: "Build, train, and fine-tune models using your proprietary data with enterprise-grade security." },
  { num: "04", title: "Deploy", desc: "Seamless integration into your existing tech stack with continuous monitoring and optimisation." },
];

const ApproachSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="our-approach" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-navy">
            Our <span className="text-gradient-cyan">Approach</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that transforms ambitious AI visions into measurable business outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border z-0" />
              )}
              <div className="relative bg-card rounded-xl p-8 shadow-card border border-border">
                <span className="text-5xl font-black text-accent/15">{step.num}</span>
                <h3 className="text-xl font-bold text-navy mt-2 mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
