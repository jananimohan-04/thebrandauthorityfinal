import { Users, UserCheck, Heart, Briefcase, TrendingUp, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  { icon: Users, text: "People connect with people." },
  { icon: UserCheck, text: "Customers want to know who is behind the company." },
  { icon: Heart, text: "Employees want to understand their leaders." },
  { icon: Briefcase, text: "Business partners want to know who they are working with." },
  { icon: TrendingUp, text: "Investors want to understand the founder's vision." },
  { icon: Award, text: "Your personal brand builds trust before the first meeting happens." },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-card">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-4 text-center">
          Why Personal Branding?
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-6">
          Your Company's Strongest <span className="text-gradient-gold">Marketing Asset</span> Could Be You
        </h2>
        <p className="text-center font-display text-xl text-muted-foreground mb-14">
          Establish credibility, build alignment, and drive growth.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {reasons.map((r, i) => (
          <AnimatedSection key={r.text} delay={i * 0.07}>
            <div className="flex items-center gap-4 p-5 rounded-lg border border-border hover:border-gold transition-colors bg-background h-full">
              <r.icon className="w-6 h-6 text-primary shrink-0" />
              <span className="font-body text-sm font-medium text-foreground">{r.text}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4}>
        <div className="text-center font-display text-lg md:text-xl font-semibold text-gradient-gold tracking-wide mt-10">
          Build your name. Build trust. Grow your business.
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default WhyChooseUs;
