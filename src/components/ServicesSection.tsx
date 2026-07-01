import { Instagram, Target, Newspaper, Megaphone, Camera, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Instagram,
    title: "Social Media Management",
    description: "We manage your complete social media presence professionally across Instagram, Facebook, Twitter (X), YouTube, and LinkedIn.",
    items: ["Daily post creation", "Content strategy", "Caption writing", "Image & video design", "Audience engagement", "Follower growth strategy"],
    goal: "Build authority, trust, and influence.",
  },
  {
    icon: Target,
    title: "Personal Brand Strategy",
    description: "We define and build your public image so people see you exactly the way you want to be seen.",
    items: ["Brand positioning", "Public perception strategy", "Audience targeting", "Content planning", "Reputation management"],
  },
  {
    icon: Newspaper,
    title: "PR Management",
    description: "We manage your public visibility and media presence to increase credibility and public trust.",
    items: ["News article publishing", "Media coverage", "Interview coordination", "Press release creation", "Online reputation control"],
  },
  {
    icon: Megaphone,
    title: "Promotion & Campaigns",
    description: "We promote your image, films, public activities, and political campaigns for maximum reach.",
    items: ["Digital promotion", "Campaign promotion", "Event promotion", "Movie promotion", "Political promotion"],
  },
  {
    icon: Camera,
    title: "Content Creation",
    description: "Professional content creation team for high-quality visuals that build influence.",
    items: ["Photoshoot planning", "Video shoot planning", "Reel creation", "Promotional videos", "Interview & speech clips"],
  },
  {
    icon: ShieldCheck,
    title: "Reputation Management",
    description: "We protect and maintain your public image with proactive monitoring and crisis support.",
    items: ["Monitoring public mentions", "Managing negative content", "Strengthening positive visibility", "Crisis management support"],
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-4 text-center">
          Our Core Services
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">
          End-to-End <span className="text-gradient-gold">Brand Management</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 0.08}>
            <div className="group h-full border border-border rounded-lg p-8 bg-background hover:border-gold transition-colors duration-300">
              <service.icon className="w-8 h-8 text-primary mb-5" />
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1 text-xs">●</span>
                    {item}
                  </li>
                ))}
              </ul>
              {service.goal && (
                <p className="mt-5 text-sm font-semibold text-primary">
                  {service.goal}
                </p>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
