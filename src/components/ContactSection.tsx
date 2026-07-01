import { Mail, MapPin, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-gradient-dark">
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-body text-sm tracking-[0.25em] uppercase mb-4 text-center">
          Get In Touch
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-14">
          <span className="text-gradient-gold">Contact</span> Us
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: MapPin, label: "Location", value: "105/51 RAHMAT MANZIL, 1 ST FLOOR, ARMENIAN STREET, GEORGE TOWN, CHENNAI, TAMIL NADU 600001" },
          { icon: Mail, label: "Email", value: "contact@thebrandauthority.agency" },
          { icon: Phone, label: "Phone", value: "+91 824-8152139" },
        ].map((item, i) => (
          <AnimatedSection key={item.label} delay={i * 0.1}>
            <div className="text-center border border-border rounded-lg p-8 bg-card/50 hover:border-gold transition-colors">
              <item.icon className="w-7 h-7 text-primary mx-auto mb-4" />
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                {item.label}
              </p>
              <p className="text-foreground text-sm font-medium">{item.value}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
