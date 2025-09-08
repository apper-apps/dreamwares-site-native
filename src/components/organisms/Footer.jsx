import Container from "@/components/atoms/Container";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "About", href: "#" },
    { label: "Services", href: "#process" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: "Twitter", href: "#", label: "Twitter" },
    { icon: "Linkedin", href: "#", label: "LinkedIn" },
    { icon: "Github", href: "#", label: "GitHub" }
  ];

  return (
<footer className="bg-background text-white py-12 border-t border-primary/20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
<div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <ApperIcon name="Zap" className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Dreamwares.ai</span>
            </div>
<p className="text-gray-300 mb-6 max-w-md">
              AI-powered development agency helping non-technical founders launch products quickly and efficiently.
            </p>
            <div className="flex space-x-4">
{socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-surface rounded-full flex items-center justify-center hover:bg-primary transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
                  aria-label={social.label}
                >
                  <ApperIcon name={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
<h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
<div className="flex items-center text-gray-300">
                <ApperIcon name="Mail" className="w-4 h-4 mr-2 text-primary" />
                <span>hello@dreamwares.ai</span>
              </div>
              <div className="flex items-center text-gray-300">
                <ApperIcon name="Clock" className="w-4 h-4 mr-2 text-primary" />
                <span>24/5 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
<div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-300 text-sm mb-4 md:mb-0">
            © {currentYear} Dreamwares.ai. All rights reserved.
          </p>
<div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;