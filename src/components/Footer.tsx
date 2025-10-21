import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:your-email@example.com",
      label: "Email",
    },
    {
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Fahad Hossain. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center md:justify-start gap-1">
                Built with <Heart className="h-3 w-3 text-destructive fill-destructive" /> using React & Tailwind CSS
              </p>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5 text-primary" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              Interested in collaboration? Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
