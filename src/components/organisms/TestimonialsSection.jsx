import { useEffect, useRef } from "react";
import Container from "@/components/atoms/Container";
import TestimonialCard from "@/components/molecules/TestimonialCard";

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      quote: "I had zero tech background but was able to launch my platform in just three weeks. The team made everything clear and delivered ahead of schedule.",
      highlight: "Clear explanations, early delivery",
      author: "Sarah Chen",
      role: "Founder, MedConnect"
    },
    {
      quote: "Other agencies spoke in technical jargon I didn't understand. Dreamwares gave me a clear plan and timeline that actually made sense.",
      highlight: "Saved time and money with clear planning",
      author: "Marcus Rodriguez",
      role: "CEO, EduFlow"
    },
    {
      quote: "While they handled all the technical complexity, I could focus on growing my customer base. The product worked perfectly from day one.",
      highlight: "Focus on customers, not tech problems",
      author: "Lisa Thompson",
      role: "Founder, BookingPro"
    },
    {
      quote: "Dreamwares took my idea from a paper concept to a working product that impressed investors. The confidence boost was incredible.",
      highlight: "Turned idea into investor-ready product",
      author: "David Park",
      role: "Founder, FinTrack"
    }
  ];

  return (
<section id="testimonials" ref={sectionRef} className="py-20 bg-background">
      <Container>
        <div className="text-center mb-16 animate-on-scroll stagger-1">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from founders who transformed their ideas into successful products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`animate-on-scroll stagger-${index + 2}`}>
              <TestimonialCard
                quote={testimonial.quote}
                highlight={testimonial.highlight}
                author={testimonial.author}
                role={testimonial.role}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;