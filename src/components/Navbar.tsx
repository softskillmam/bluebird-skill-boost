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
          scrolled || isOpen
            ? "bg-background/95 backdrop-blur-xl shadow-elevated border border-border/50 rounded-2xl lg:rounded-full"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-between h-14 px-4 lg:px-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
              <span className="text-primary-foreground font-bold text-base">B</span>
            </div>
            <span className="text-base font-bold text-foreground hidden sm:block">
              Blue<span className="text-primary">Birds</span>
            </span>
          </a>

          {/* Desktop Pill Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center bg-muted/50 rounded-full p-1 gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={cn(
                    "relative px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300",
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
              className="rounded-full px-5 shadow-glow"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-full transition-all duration-300",
              isOpen 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted/50 text-foreground hover:bg-muted"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation - Attached dropdown */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-out",
            isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 pt-2 border-t border-border/30">
            <div className="flex flex-col gap-2 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={cn(
                    "px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-center",
                    activeLink === link.name
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <Button 
              variant="hero" 
              size="sm" 
              className="w-full rounded-full mt-2"
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