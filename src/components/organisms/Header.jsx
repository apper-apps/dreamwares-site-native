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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-surface/95 backdrop-blur-md shadow-lg border-b border-primary/20" : "bg-transparent"
    )}>
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
<div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg">
              <ApperIcon name="Zap" className="w-6 h-6 text-white" />
            </div>
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Dreamwares.ai
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavItem key={item.label} href={item.href}>
                {item.label}
              </NavItem>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
<Button onClick={handleContactClick} size="sm">
              Start With a Chat
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
>
            <ApperIcon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              className="w-6 h-6 text-white"
            />
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
<div className="md:hidden bg-surface/95 backdrop-blur-md border-t border-primary/20 shadow-lg">
          <Container>
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <NavItem 
                  key={item.label} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2"
                >
                  {item.label}
                </NavItem>
              ))}
<Button 
                onClick={handleContactClick}
                className="w-full mt-4"
              >
                Start With a Chat
              </Button>
            </div>
          </Container>
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