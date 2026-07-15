import { Target, Briefcase, Users, Award, Landmark, TrendingUp, Star, UserCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const personas = [
  { icon: Target, label: "Founders" },
  { icon: Briefcase, label: "CEOs" },
  { icon: Users, label: "Managing Directors" },
  { icon: Award, label: "Entrepreneurs" },
  { icon: Landmark, label: "Business Owners" },
  { icon: TrendingUp, label: "Second-Generation Leaders" },
  { icon: Star, label: "Industry Experts" },
  { icon: UserCheck, label: "Senior Executives" },
];

const WhoWeWorkWith = () => (
  <section className="section-padding bg-gradient-dark">
    <div className="max-w-5xl mx-auto text-center">
      <AnimatedSection>
        <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-4">
          Who We Work With
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Built for <span className="text-gradient-gold">Business Leaders</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed">
          If you have built something worth knowing about, we help the world know the person behind it.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {personas.map((p, i) => (
          <AnimatedSection key={p.label} delay={i * 0.08}>
            <div className="border border-border rounded-lg p-6 flex flex-col items-center gap-3 hover:border-gold transition-colors bg-card/50">
              <p.icon className="w-7 h-7 text-primary" />
              <span className="font-body text-sm font-medium text-foreground text-center">{p.label}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeWorkWith;
