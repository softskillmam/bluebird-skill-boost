import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
const footerLinks = {
  company: [{
    name: "About Us",
    href: "#"
  }, {
    name: "Careers",
    href: "#"
  }, {
    name: "Blog",
    href: "#"
  }, {
    name: "Press",
    href: "#"
  }],
  courses: [{
    name: "Communication Mastery",
    href: "#"
  }, {
    name: "Interview Confidence",
    href: "#"
  }, {
    name: "Emotional Intelligence",
    href: "#"
  }, {
    name: "Leadership Skills",
    href: "#"
  }],
  support: [{
    name: "Help Center",
    href: "#"
  }, {
    name: "FAQs",
    href: "#"
  }, {
    name: "Contact Us",
    href: "#"
  }, {
    name: "Privacy Policy",
    href: "#"
  }]
};
const socialLinks = [{
  icon: Facebook,
  href: "#",
  label: "Facebook"
}, {
  icon: Instagram,
  href: "#",
  label: "Instagram"
}, {
  icon: Linkedin,
  href: "#",
  label: "LinkedIn"
}, {
  icon: Twitter,
  href: "#",
  label: "Twitter"
}, {
  icon: Youtube,
  href: "#",
  label: "YouTube"
}];
const Footer = () => {
  return <footer id="contact" className="bg-popover border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                Blue<span className="text-primary">Birds</span>solutions
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Empowering students and professionals to master soft skills and achieve 
              their career dreams through expert-led training and personalized coaching.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:hello@bluebirdssolutions.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>hello@bluebirdssolutions.com</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Madurai,TamilNadu, India</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Courses</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map(link => <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map(link => <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 mt-12 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} BlueBirdssolutions. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(social => <a key={social.label} href={social.href} aria-label={social.label} className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                <social.icon className="w-5 h-5" />
              </a>)}
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;