import AnimatedSection from "./AnimatedSection";

const steps = [
  { num: "01", title: "Confidential Consultation", desc: "We understand your goals, audience, and vision in complete privacy." },
  { num: "02", title: "Brand Analysis", desc: "Deep analysis of your current public image and digital footprint." },
  { num: "03", title: "Strategy Creation", desc: "A tailored roadmap for positioning, content, and growth." },
  { num: "04", title: "Content & PR Execution", desc: "Our team creates, publishes, and manages all your digital touchpoints." },
  { num: "05", title: "Growth & Reputation Management", desc: "Ongoing monitoring, optimization, and reputation protection." },
];

const ProcessSection = () => (
  <section id="process" className="section-padding bg-gradient-dark">
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-4 text-center">
          Our Process
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">
          How We <span className="text-gradient-gold">Work</span>
        </h2>
      </AnimatedSection>

      <div className="space-y-0">
        {steps.map((step, i) => (
          <AnimatedSection key={step.num} delay={i * 0.1}>
            <div className="flex gap-6 items-start relative pb-10 last:pb-0">
              {/* Line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[23px] top-12 bottom-0 w-px bg-border" />
              )}
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0 text-primary-foreground font-body text-sm font-bold">
                {step.num}
              </div>
              <div className="pt-2">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
