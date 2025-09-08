import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import ContactModal from "@/components/organisms/ContactModal";
import ApperIcon from "@/components/ApperIcon";
import Container from "@/components/atoms/Container";
import Button from "@/components/atoms/Button";
const CTASection = () => {
const sectionRef = useRef();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
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

const handleCTAClick = () => {
    setIsContactModalOpen(true);
  };

  const trustPoints = [
    { icon: "Shield", text: "Full ownership" },
    { icon: "CheckCircle", text: "Simple process" },
    { icon: "Clock", text: "24/5 Support" }
  ];

  return (
<section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-br from-electric-blue via-neon-cyan to-holographic-purple relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-radial from-void-black/20 via-transparent to-deep-space/30 animate-pulse"></div>
      
      <Container>
        <div className="text-center text-white animate-on-scroll stagger-1 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white cyber-text-glow">
            Let's transform your ideas into{" "}
            <span className="bg-gradient-to-r from-white via-cyber-silver to-white bg-clip-text text-transparent animate-gradient">
              action
            </span>
          </h2>
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-cyber-silver/10 blur-3xl animate-pulse -z-10"></div>
          
          <p className="text-2xl opacity-95 mb-10 max-w-3xl mx-auto text-white cyber-text-subtle">
            Ready to turn your vision into reality? Start with a free consultation and see how we can help you launch faster.
          </p>

          <div className="mb-10 animate-on-scroll stagger-2">
            <Button 
              onClick={handleCTAClick}
              variant="secondary"
              size="lg"
              className="bg-white text-electric-blue hover:bg-cyber-silver hover:text-void-black hover:transform hover:scale-110 transition-all duration-500 shadow-2xl border-2 border-white/50 hover:border-white cyber-button-hero relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center font-bold text-xl">
                Start With a Chat
                <ApperIcon name="MessageCircle" className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent animate-pulse"></div>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12 animate-on-scroll stagger-3">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center group">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4 border border-white/30 group-hover:border-white transition-all duration-300 group-hover:bg-white/30">
                  <ApperIcon name={point.icon} className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </div>
                <span className="opacity-95 text-white text-lg font-semibold group-hover:text-cyber-silver transition-colors">{point.text}</span>
              </div>
            ))}
          </div>

          <p className="text-lg opacity-90 mt-8 animate-on-scroll stagger-4 cyber-text-subtle">
            <span className="inline-block w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Free consultation • No commitment required • Response within 24 hours
            <span className="inline-block w-2 h-2 bg-white rounded-full ml-2 animate-pulse"></span>
          </p>
        </div>
      </Container>
      
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
};

export default CTASection;