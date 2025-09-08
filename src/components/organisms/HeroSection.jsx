import { useEffect, useRef } from "react";
import Container from "@/components/atoms/Container";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const HeroSection = () => {
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

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const valuePops = [
    { icon: "Rocket", text: "AI-assisted development" },
    { icon: "Play", text: "See a demo (POC) before committing" },
    { icon: "Target", text: "You own everything" }
  ];

  return (
<section ref={sectionRef} className="pt-32 pb-20 bg-gradient-to-br from-background via-surface/50 to-primary/10 relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-on-scroll stagger-1">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              We build your tech,{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                you build your business
              </span>
            </h1>
            
<p className="text-xl text-gray-300 leading-relaxed">
              With AI-powered development, Dreamwares helps non-technical founders launch in weeks, not months.
            </p>

            {/* Value Props */}
            <div className="space-y-4 mb-10">
              {valuePops.map((prop, index) => (
                <div key={index} className="flex items-center text-lg">
<div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <ApperIcon name={prop.icon} className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-white font-medium">{prop.text}</span>
                </div>
              ))}
            </div>

            <Button onClick={scrollToContact} size="lg" className="mb-4">
              Let's Discuss Your Needs Now
              <ApperIcon name="ArrowRight" className="w-5 h-5 ml-2" />
            </Button>
            
<p className="text-sm text-gray-400">
              Free consultation • No commitment required
            </p>
          </div>

          {/* Visual */}
          <div className="animate-on-scroll stagger-2">
            <div className="relative">
<div className="hero-gradient rounded-2xl p-8 text-white shadow-2xl backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10">
                    <div className="text-2xl font-bold">2-4</div>
                    <div className="text-sm opacity-90">Weeks to Launch</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-90">You Own It</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm opacity-90">
                  <span>AI-Powered</span>
                  <ApperIcon name="Sparkles" className="w-5 h-5" />
                  <span>Fast Delivery</span>
                  <ApperIcon name="Zap" className="w-5 h-5" />
                  <span>Full Support</span>
                </div>
              </div>
              
              {/* Floating Elements */}
<div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                <ApperIcon name="Code" className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center shadow-lg">
                <ApperIcon name="Smartphone" className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;