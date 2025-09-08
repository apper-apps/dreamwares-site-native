import Container from "@/components/atoms/Container";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const informationLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Features", href: "#" },
    { label: "Contact", href: "#" }
  ];

  const servicesLinks = [
    { label: "AI Development", href: "#" },
    { label: "App Building", href: "#" },
    { label: "Automation", href: "#" },
    { label: "Testing", href: "#" }
  ];

const resourcesLinks = [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Support", href: "#" }
  ];

  const socialLinks = [
    { icon: "Linkedin", href: "#", label: "LinkedIn" },
    { icon: "Twitter", href: "#", label: "Twitter" },
    { icon: "Facebook", href: "#", label: "Facebook" },
    { icon: "Instagram", href: "#", label: "Instagram" }
  ];

  return (
<footer className="relative py-16 px-10 bg-gradient-to-br from-background via-surface to-background text-white overflow-hidden">
      {/* Background Watermark */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[12rem] md:text-[20rem] font-bold text-white/10 select-none whitespace-nowrap">
          Dreamwares AI
        </span>
      </div>
      
      {/* Gradient Mesh Background */}
<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 pointer-events-none"></div>
      
      <Container>
        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
            {/* Navigation Columns */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Information Column */}
              <div>
                <h3 className="font-semibold text-white mb-6 text-lg">Information</h3>
                <ul className="space-y-3">
                  {informationLinks.map((link) => (
                    <li key={link.label}>
                      <a 
href={link.href}
                        className="text-muted hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Column */}
              <div>
                <h3 className="font-semibold text-white mb-6 text-lg">Services</h3>
                <ul className="space-y-3">
                  {servicesLinks.map((link) => (
                    <li key={link.label}>
                      <a 
href={link.href}
                        className="text-muted hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Column */}
              <div>
                <h3 className="font-semibold text-white mb-6 text-lg">Resources</h3>
                <ul className="space-y-3">
                  {resourcesLinks.map((link) => (
                    <li key={link.label}>
                      <a 
href={link.href}
                        className="text-muted hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-white mb-6 text-xl">
                Transform any idea with Dreamwares AI
              </h3>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="w-full px-4 py-3 bg-slate-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200"
                />
<button className="w-full px-6 py-3 bg-gradient-to-r from-primary to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800/80 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
                    aria-label={social.label}
                  >
                    <ApperIcon name={social.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Copyright and Legal */}
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <p className="text-gray-300 text-sm">
                  © {currentYear} Dreamwares AI. All rights reserved.
                </p>
                <div className="flex space-x-6 text-sm">
<a href="#" className="text-muted hover:text-primary transition-colors duration-200">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-muted hover:text-primary transition-colors duration-200">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;