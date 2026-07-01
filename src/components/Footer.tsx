const Footer = () => (
  <footer className="bg-background border-t border-border py-8 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display text-sm font-semibold text-gradient-gold">
        The Brand Authority
      </p>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} The Brand Authority. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
