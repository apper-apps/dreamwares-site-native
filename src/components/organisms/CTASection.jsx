import { useEffect, useRef } from "react";
import Container from "@/components/atoms/Container";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { toast } from "react-toastify";

const CTASection = () => {
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

  const handleCTAClick = () => {
    toast.success("Thanks for your interest! We'll be in touch soon.");
  };

  const trustPoints = [
    { icon: "Shield", text: "Full ownership" },
    { icon: "CheckCircle", text: "Simple process" },
    { icon: "Clock", text: "24/5 Support" }
  ];

  return (
<section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      <Container>
        <div className="text-center text-white animate-on-scroll stagger-1">
<h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Let's transform your ideas into action
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto text-white">
            Ready to turn your vision into reality? Start with a free consultation and see how we can help you launch faster.
          </p>

          <div className="mb-8 animate-on-scroll stagger-2">
<Button 
              onClick={handleCTAClick}
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-50 hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Start With a Chat
              <ApperIcon name="MessageCircle" className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 animate-on-scroll stagger-3">
{trustPoints.map((point, index) => (
              <div key={index} className="flex items-center">
                <ApperIcon name={point.icon} className="w-5 h-5 text-white mr-2" />
                <span className="opacity-90 text-white">{point.text}</span>
              </div>
            ))}
          </div>

          <p className="text-sm opacity-75 mt-6 animate-on-scroll stagger-4">
            Free consultation • No commitment required • Response within 24 hours
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;