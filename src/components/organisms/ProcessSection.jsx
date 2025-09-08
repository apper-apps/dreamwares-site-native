import { useEffect, useRef } from "react";
import Container from "@/components/atoms/Container";
import ProcessStep from "@/components/molecules/ProcessStep";

const ProcessSection = () => {
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

  const processSteps = [
    {
      number: 1,
      title: "Initial Call",
      description: "Understand your business goals and technical requirements"
    },
    {
      number: 2,
      title: "Free POC",
      description: "Validate your idea with a proof of concept before you commit"
    },
    {
      number: 3,
      title: "Discovery Call",
      description: "Map out detailed solution requirements and timeline"
    },
    {
      number: 4,
      title: "Design & Architecture",
      description: "Create the foundation and system architecture"
    },
    {
      number: 5,
      title: "AI-Powered Development",
      description: "Rapid building using advanced AI development tools"
    },
    {
      number: 6,
      title: "Launch & Scale",
      description: "Go live with real users and scale your product"
    },
    {
      number: 7,
      title: "Ongoing Support",
      description: "Continuous updates and growth support"
    }
  ];

  return (
    <section id="process" ref={sectionRef} className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16 animate-on-scroll stagger-1">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            From Idea to Launch in{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Simple Steps
            </span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Our proven process takes you from concept to working product with clarity and speed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {processSteps.slice(0, 4).map((step, index) => (
            <div key={step.number} className={`animate-on-scroll stagger-${index + 2}`}>
              <ProcessStep
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={index === 3}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {processSteps.slice(4).map((step, index) => (
            <div key={step.number} className={`animate-on-scroll stagger-${index + 6}`}>
              <ProcessStep
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={index === 2}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;