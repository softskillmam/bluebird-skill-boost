import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Courses", href: "#courses" },
  { name: "About", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (name: string) => {
    setActiveLink(name);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={cn(
          "w-full max-w-5xl transition-all duration-500 ease-out",
          scrolled
            ? "bg-background/80 backdrop-blur-xl shadow-elevated border border-border/50 rounded-full"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-between h-14 lg:h-16 px-4 lg:px-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <span className="text-primary-foreground font-bold text-lg">B</span>
            </div>
            <span className="text-lg font-bold text-foreground hidden sm:block">
              Blue<span className="text-primary">Birds</span>
            </span>
          </a>

          {/* Desktop Pill Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center bg-muted/50 rounded-full p-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                    activeLink === link.name
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block shrink-0">
            <Button 
              variant="hero" 
              size="sm"
              className="rounded-full px-6 shadow-glow"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2.5 rounded-full transition-all duration-300",
              isOpen 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted/50 text-foreground hover:bg-muted"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-xl transition-all duration-500 lg:hidden",
          isOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
        style={{ top: "80px" }}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={cn(
                  "flex items-center justify-between py-4 px-5 rounded-2xl text-lg font-medium transition-all duration-300",
                  activeLink === link.name
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "text-foreground hover:bg-muted"
                )}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <span>{link.name}</span>
                <span className="text-sm opacity-60">→</span>
              </a>
            ))}
          </div>
          
          <div 
            className="mt-8 transition-all duration-500"
            style={{
              transitionDelay: isOpen ? "300ms" : "0ms",
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isOpen ? 1 : 0,
            }}
          >
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full rounded-2xl text-lg py-6 shadow-glow"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;