import React, { useEffect, useRef, useState } from "react";
import ContactModal from "@/components/organisms/ContactModal";
import ApperIcon from "@/components/ApperIcon";
import Container from "@/components/atoms/Container";
import Button from "@/components/atoms/Button";

const HeroSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, { threshold: 0.1 });

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const valuePops = [
    { icon: "Rocket", text: "AI-assisted development" },
    { icon: "Play", text: "See a demo (POC) before committing" },
    { icon: "Target", text: "You own everything" }
  ];

  return (
<section ref={sectionRef} className="pt-32 pb-20 bg-gradient-to-br from-deep-space via-void-black to-cyber-dark relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-radial from-electric-blue/10 via-transparent to-neon-purple/10 animate-pulse"></div>
      <div className="particle-constellation absolute inset-0"></div>
      <div className="energy-streams absolute inset-0"></div>
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-on-scroll stagger-1">
<h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-tight mb-8 relative">
              <span className="relative z-10 cyber-text-glow">
                We build your tech,{" "}
                <span className="bg-gradient-to-r from-electric-blue via-neon-cyan to-holographic-purple bg-clip-text text-transparent animate-gradient cyber-text-pulse">
                  you build your business
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 blur-2xl animate-pulse"></div>
            </h1>
            
<div className="text-2xl text-cyber-silver leading-relaxed mb-10 relative">
              <span className="relative z-10 cyber-text-subtle">
                With AI-powered development, Dreamwares helps non-technical founders launch in weeks, not months.
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-transparent blur-xl"></div>
            </div>

            {/* Value Props */}
            <div className="space-y-4 mb-10">
{valuePops.map((prop, index) => (
                <div key={index} className="flex items-center text-xl group">
                  <div className="w-12 h-12 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 rounded-full flex items-center justify-center mr-6 border border-electric-blue/30 cyber-pulse group-hover:border-electric-blue transition-all duration-300">
                    <ApperIcon name={prop.icon} className="w-6 h-6 text-electric-blue group-hover:text-neon-cyan transition-colors" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-blue/10 to-neon-cyan/10 animate-pulse"></div>
                  </div>
                  <span className="text-white font-semibold cyber-text-glow group-hover:text-neon-cyan transition-colors">{prop.text}</span>
                </div>
              ))}
            </div>

<Button 
              onClick={handleContactClick} 
              size="lg" 
              className="mb-6 cyber-button-hero relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Let's Discuss Your Needs Now
                <ApperIcon name="ArrowRight" className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-cyan opacity-75 blur-lg group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/50 to-neon-cyan/50 animate-pulse"></div>
            </Button>
            
<div className="text-lg text-cyber-silver cyber-text-subtle">
              <span className="inline-block w-2 h-2 bg-electric-blue rounded-full mr-2 animate-pulse"></span>
              Free consultation • No commitment required
              <span className="inline-block w-2 h-2 bg-neon-cyan rounded-full ml-2 animate-pulse"></span>
            </div>
          </div>

          {/* Visual */}
          <div className="animate-on-scroll stagger-2">
            <div className="relative">
<div className="cyber-panel-hero rounded-3xl p-10 text-white shadow-2xl backdrop-blur-xl border border-electric-blue/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-transparent to-neon-purple/10 animate-pulse"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-electric-blue/20 to-neon-cyan/20 backdrop-blur-xl rounded-xl p-6 text-center border border-electric-blue/40 cyber-glow-sm">
                      <div className="text-4xl font-black cyber-text-glow mb-2">2-4</div>
                      <div className="text-cyber-silver font-medium">Weeks to Launch</div>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-electric-blue/5 to-neon-cyan/5 animate-pulse"></div>
                    </div>
                    <div className="bg-gradient-to-br from-neon-cyan/20 to-holographic-purple/20 backdrop-blur-xl rounded-xl p-6 text-center border border-neon-cyan/40 cyber-glow-sm">
                      <div className="text-4xl font-black cyber-text-glow mb-2">100%</div>
                      <div className="text-cyber-silver font-medium">You Own It</div>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-cyan/5 to-holographic-purple/5 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-lg font-medium">
                    <div className="flex items-center space-x-2">
                      <ApperIcon name="Sparkles" className="w-6 h-6 text-electric-blue animate-pulse" />
                      <span className="cyber-text-glow">AI-Powered</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ApperIcon name="Zap" className="w-6 h-6 text-neon-cyan animate-pulse" />
                      <span className="cyber-text-glow">Fast Delivery</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
<div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-electric-blue to-neon-cyan rounded-full flex items-center justify-center shadow-2xl border border-electric-blue/50 cyber-pulse">
                <ApperIcon name="TrendingUp" className="w-12 h-12 text-white drop-shadow-neon" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 animate-pulse"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-neon-cyan to-holographic-purple rounded-full flex items-center justify-center shadow-2xl border border-neon-cyan/50 cyber-pulse">
                <ApperIcon name="Smartphone" className="w-10 h-10 text-white drop-shadow-neon" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan/20 to-holographic-purple/20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
<ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
};

export default HeroSection;