import { XCircle, CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const DifferenceSection = () => (
  <section className="section-padding bg-gradient-dark relative overflow-hidden">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-4 text-center">
          Our Difference
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-6">
          We Don't Create Influencers.<br />
          <span className="text-gradient-gold">We Build Business Leaders Into Brands.</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
          We focus strictly on corporate positioning, credibility, and authority rather than superficial metrics or vanity virality.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Card - What we don't do */}
        <AnimatedSection delay={0.1}>
          <div className="border border-red-950/40 rounded-lg p-8 bg-black/30 hover:border-red-900/60 transition-all duration-300">
            <h3 className="font-display text-xl font-bold text-red-500 mb-6 flex items-center gap-3">
              <XCircle className="w-6 h-6" /> What We Avoid
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <span className="text-red-500/80 mt-1 font-bold">✕</span>
                Dancing or performing on social media platforms.
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <span className="text-red-500/80 mt-1 font-bold">✕</span>
                Chasing cheap viral content or outrage clicks.
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <span className="text-red-500/80 mt-1 font-bold">✕</span>
                Trying to turn you into an internet celebrity.
              </li>
            </ul>
          </div>
        </AnimatedSection>

        {/* Right Card - What we build */}
        <AnimatedSection delay={0.2}>
          <div className="border border-gold/40 rounded-lg p-8 bg-gold/5 hover:border-gold transition-all duration-300 glow-gold">
            <h3 className="font-display text-xl font-bold text-primary mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6" /> What We Build
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground text-sm leading-relaxed">
                <span className="text-primary mt-1 font-bold">✓</span>
                Credible, professional, and business-focused personal brands.
              </li>
              <li className="flex items-start gap-3 text-foreground text-sm leading-relaxed">
                <span className="text-primary mt-1 font-bold">✓</span>
                A brand that reflects your real experience & expertise.
              </li>
              <li className="flex items-start gap-3 text-foreground text-sm leading-relaxed">
                <span className="text-primary mt-1 font-bold">✓</span>
                A brand that builds trust and authority in your industry.
              </li>
              <li className="flex items-start gap-3 text-foreground text-sm leading-relaxed">
                <span className="text-primary mt-1 font-bold">✓</span>
                A brand that actively supports the growth of your company.
              </li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default DifferenceSection;
