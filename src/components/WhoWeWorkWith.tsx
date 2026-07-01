import { User, Landmark, Star, Briefcase, Mic, Vote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const personas = [
  { icon: Star, label: "Actors & Actresses" },
  { icon: Landmark, label: "Politicians" },
  { icon: User, label: "Public Figures" },
  { icon: Briefcase, label: "Business Leaders" },
  { icon: Mic, label: "Influencers" },
  { icon: Vote, label: "Election Candidates" },
];

const WhoWeWorkWith = () => (
  <section className="section-padding bg-gradient-dark">
    <div className="max-w-5xl mx-auto text-center">
      <AnimatedSection>
        <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-4">
          Who We Work With
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-14">
          Built for <span className="text-gradient-gold">High-Profile</span> Individuals
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {personas.map((p, i) => (
          <AnimatedSection key={p.label} delay={i * 0.08}>
            <div className="border border-border rounded-lg p-6 flex flex-col items-center gap-3 hover:border-gold transition-colors bg-card/50">
              <p.icon className="w-7 h-7 text-primary" />
              <span className="font-body text-sm font-medium text-foreground">{p.label}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeWorkWith;
