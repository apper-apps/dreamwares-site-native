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
<footer className="relative py-20 px-12 bg-gradient-to-br from-deep-space via-void-black to-cyber-dark text-white overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[12rem] md:text-[20rem] font-black text-electric-blue/5 select-none whitespace-nowrap cyber-text-shadow">
          Dreamwares AI
        </span>
      </div>
      
      {/* Energy Field Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-neon-purple/5 pointer-events-none animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/10 via-transparent to-transparent pointer-events-none"></div>
      <Container>
        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
            {/* Navigation Columns */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Information Column */}
              <div>
<h3 className="font-bold text-white mb-8 text-xl cyber-text-glow">Information</h3>
                <ul className="space-y-4">
                  {informationLinks.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href}
                        className="text-cyber-silver hover:text-electric-blue transition-all duration-300 text-base cyber-link relative group"
                      >
                        <span className="relative z-10">{link.label}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded"></div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Column */}
<div>
                <h3 className="font-bold text-white mb-8 text-xl cyber-text-glow">Services</h3>
                <ul className="space-y-4">
                  {servicesLinks.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href}
                        className="text-cyber-silver hover:text-neon-cyan transition-all duration-300 text-base cyber-link relative group"
                      >
                        <span className="relative z-10">{link.label}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded"></div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

{/* Resources Column */}
              <div>
                <h3 className="font-bold text-white mb-8 text-xl cyber-text-glow">Resources</h3>
                <ul className="space-y-4">
                  {resourcesLinks.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href}
                        className="text-cyber-silver hover:text-holographic-purple transition-all duration-300 text-base cyber-link relative group"
                      >
                        <span className="relative z-10">{link.label}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-holographic-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded"></div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Signup */}
<div className="lg:col-span-2">
              <h3 className="font-bold text-white mb-8 text-2xl cyber-text-glow">
                Transform any idea with{" "}
                <span className="bg-gradient-to-r from-electric-blue to-neon-cyan bg-clip-text text-transparent">
                  Dreamwares AI
                </span>
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="flex-1 px-6 py-4 bg-void-black/80 border border-electric-blue/30 rounded-lg text-white placeholder-cyber-silver focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300 cyber-input"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-cyan text-white font-bold rounded-lg hover:shadow-xl hover:shadow-electric-blue/30 transition-all duration-300 hover:scale-105 cyber-button-secondary relative overflow-hidden group">
                  <span className="relative z-10">Subscribe</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 animate-pulse"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
<div className="border-t border-electric-blue/20 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {/* Social Media Icons */}
              <div className="flex space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-gradient-to-r from-void-black/80 to-cyber-dark/80 rounded-full flex items-center justify-center border border-electric-blue/30 hover:border-electric-blue hover:bg-electric-blue/10 transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/25 cyber-glow-sm group"
                    aria-label={social.label}
                  >
                    <ApperIcon name={social.icon} className="w-6 h-6 text-cyber-silver group-hover:text-electric-blue transition-colors" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-blue/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 animate-pulse"></div>
                  </a>
                ))}
              </div>

              {/* Copyright and Legal */}
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
<p className="text-cyber-silver text-base cyber-text-subtle">
                  © {currentYear} Dreamwares AI. All rights reserved.
                  <span className="inline-block w-1 h-1 bg-electric-blue rounded-full mx-2 animate-pulse"></span>
                  Powered by the future
                </p>
                <div className="flex space-x-8">
                  <a href="#" className="text-cyber-silver hover:text-electric-blue transition-all duration-300 cyber-link relative group">
                    <span className="relative z-10">Privacy Policy</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded"></div>
                  </a>
                  <a href="#" className="text-cyber-silver hover:text-neon-cyan transition-all duration-300 cyber-link relative group">
                    <span className="relative z-10">Terms of Service</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded"></div>
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