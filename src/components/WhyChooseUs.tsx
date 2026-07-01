import { Lock, Users, TrendingUp, Award, Layers, Crown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  { icon: Lock, text: "Confidential and Professional" },
  { icon: Users, text: "Dedicated Personal Brand Team" },
  { icon: TrendingUp, text: "Strategic Image Building" },
  { icon: Award, text: "Experience with Public Figures" },
  { icon: Layers, text: "End-to-End Management" },
  { icon: Crown, text: "Focus on Influence and Authority" },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-card">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-4 text-center">
          Why Choose Us
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-6">
          We Don't Just Manage Social Media
        </h2>
        <p className="text-center font-display text-xl text-gradient-gold mb-14">
          We build powerful public identities.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reasons.map((r, i) => (
          <AnimatedSection key={r.text} delay={i * 0.07}>
            <div className="flex items-center gap-4 p-5 rounded-lg border border-border hover:border-gold transition-colors bg-background">
              <r.icon className="w-6 h-6 text-primary shrink-0" />
              <span className="font-body text-sm font-medium text-foreground">{r.text}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
