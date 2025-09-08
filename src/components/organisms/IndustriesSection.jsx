import { useEffect, useRef } from "react";
import Container from "@/components/atoms/Container";
import IndustryCard from "@/components/molecules/IndustryCard";

const IndustriesSection = () => {
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

  const industries = [
    {
      name: "Healthcare",
      description: "Patient portals, telemedicine platforms, and healthcare management systems",
      icon: "Heart"
    },
    {
      name: "Education",
      description: "Online courses, training platforms, and educational management tools",
      icon: "GraduationCap"
    },
    {
      name: "E-commerce",
      description: "Online stores, marketplaces, and retail management systems",
      icon: "ShoppingCart"
    },
    {
      name: "Services",
      description: "Booking systems, project management, and service delivery platforms",
      icon: "Briefcase"
    },
    {
      name: "Real Estate",
      description: "Property listings, management systems, and real estate platforms",
      icon: "Home"
    },
    {
      name: "Fintech",
      description: "Payment systems, financial tracking, and fintech applications",
      icon: "CreditCard"
    }
  ];

  return (
<section id="industries" ref={sectionRef} className="py-20 bg-surface">
      <Container>
        <div className="text-center mb-16 animate-on-scroll stagger-1">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Who We{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Help
            </span>
          </h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We specialize in building solutions across diverse industries and use cases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={industry.name} className={`animate-on-scroll stagger-${index + 2}`}>
              <IndustryCard
                name={industry.name}
                description={industry.description}
                icon={industry.icon}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IndustriesSection;