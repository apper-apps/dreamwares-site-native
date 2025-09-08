import { useState, useEffect } from "react";
import Container from "@/components/atoms/Container";
import Button from "@/components/atoms/Button";
import NavItem from "@/components/molecules/NavItem";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";
import ContactModal from "@/components/organisms/ContactModal";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const navItems = [
    { label: "Process", href: "#process" },
    { label: "Industries", href: "#industries" },
    { label: "Products", href: "#products" },
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "#testimonials" }
  ];

const handleContactClick = () => {
    setIsContactModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
<header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled 
        ? "bg-void-black/90 backdrop-blur-xl shadow-2xl border-b border-electric-blue/30 cyber-glow" 
        : "bg-transparent"
    )}>
      {/* Holographic Header Border */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent animate-pulse"></div>
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
<div className="w-12 h-12 bg-gradient-to-r from-electric-blue via-neon-cyan to-holographic-purple rounded-lg flex items-center justify-center shadow-xl border border-electric-blue/50 cyber-pulse">
              <ApperIcon name="Zap" className="w-7 h-7 text-white drop-shadow-neon" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 animate-pulse"></div>
            </div>
            <span className="ml-4 text-2xl font-bold bg-gradient-to-r from-electric-blue via-neon-cyan to-holographic-purple bg-clip-text text-transparent cyber-text">
              Dreamwares.ai
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-neon-cyan/10 blur-xl -z-10"></div>
            </span>
          </div>

          {/* Desktop Navigation */}
<nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <NavItem 
                key={item.label} 
                href={item.href}
                className="cyber-nav-item"
              >
                {item.label}
              </NavItem>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
<Button 
              onClick={handleContactClick} 
              size="sm"
              className="cyber-button-primary"
            >
              <span className="relative z-10">Start With a Chat</span>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-cyan rounded-lg opacity-75 blur-sm"></div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
<button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-lg border border-electric-blue/30 hover:border-electric-blue hover:bg-electric-blue/10 transition-all duration-300 cyber-glow-sm"
          >
            <ApperIcon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              className="w-6 h-6 text-electric-blue"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-electric-blue/5 to-neon-cyan/5 animate-pulse"></div>
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
<div className="md:hidden bg-void-black/95 backdrop-blur-xl border-t border-electric-blue/30 shadow-2xl cyber-panel">
          <Container>
            <div className="py-6 space-y-6">
              {navItems.map((item) => (
                <NavItem 
                  key={item.label} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 cyber-nav-mobile"
                >
                  {item.label}
                </NavItem>
              ))}
              <Button 
                onClick={handleContactClick}
                className="w-full mt-6 cyber-button-primary"
              >
                <span className="relative z-10">Start With a Chat</span>
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-cyan rounded-lg opacity-75 blur-sm"></div>
              </Button>
            </div>
          </Container>
          {/* Mobile menu glow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-electric-blue/5 to-transparent pointer-events-none"></div>
        </div>
)}
      
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </header>
  );
};

export default Header;