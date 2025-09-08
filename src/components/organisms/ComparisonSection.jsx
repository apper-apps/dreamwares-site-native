import { useEffect, useRef } from "react";
import Container from "@/components/atoms/Container";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const ComparisonSection = () => {
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

  const comparisonData = [
    { 
      category: "Speed",
      traditional: { text: "Projects drag on", icon: "Clock", color: "text-red-500" },
      freelancers: { text: "Faster, unpredictable", icon: "Timer", color: "text-yellow-500" },
      dreamwares: { text: "Quick and reliable launch", icon: "Zap", color: "text-green-500" }
    },
    {
      category: "Cost",
      traditional: { text: "Costs increase", icon: "TrendingUp", color: "text-red-500" },
      freelancers: { text: "Pricing changes", icon: "DollarSign", color: "text-yellow-500" },
      dreamwares: { text: "Clear, fixed pricing", icon: "Check", color: "text-green-500" }
    },
    {
      category: "Ownership",
      traditional: { text: "Don't own product", icon: "Lock", color: "text-red-500" },
      freelancers: { text: "Unclear ownership", icon: "HelpCircle", color: "text-yellow-500" },
      dreamwares: { text: "You own 100%", icon: "Key", color: "text-green-500" }
    },
    {
      category: "Communication",
      traditional: { text: "Tech jargon", icon: "MessageCircle", color: "text-red-500" },
      freelancers: { text: "Still confusing", icon: "MessageSquare", color: "text-yellow-500" },
      dreamwares: { text: "Clear and simple", icon: "CheckCircle", color: "text-green-500" }
    },
    {
      category: "Support",
      traditional: { text: "Little help after", icon: "AlertCircle", color: "text-red-500" },
      freelancers: { text: "Limited support", icon: "Clock", color: "text-yellow-500" },
      dreamwares: { text: "Dedicated support guarantee", icon: "Shield", color: "text-green-500" }
    },
    {
      category: "Delivery",
      traditional: { text: "Delays common", icon: "Calendar", color: "text-red-500" },
      freelancers: { text: "Depends on availability", icon: "User", color: "text-yellow-500" },
      dreamwares: { text: "On-time delivery", icon: "CheckCircle2", color: "text-green-500" }
    }
  ];

  return (
<section ref={sectionRef} className="py-20 bg-surface">
      <Container>
        <div className="text-center mb-16 animate-on-scroll stagger-1">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Founders Really Want — And How{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Dreamwares Delivers It
            </span>
          </h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we compare to traditional development approaches
          </p>
        </div>

        <div className="animate-on-scroll stagger-2">
          <Card className="overflow-hidden">
            {/* Header */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-primary/20 pb-6 mb-6">
<div className="font-semibold text-white text-center md:text-left">Category</div>
              <div className="text-center">
                <div className="font-semibold text-white mb-1">Traditional Development</div>
                <div className="text-sm text-gray-400">Slow & Expensive</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-white mb-1">Freelancers/Agencies</div>
                <div className="text-sm text-gray-400">Inconsistent</div>
              </div>
              <div className="text-center">
                <div className="font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                  Dreamwares AI
                </div>
                <div className="text-sm text-primary font-medium">The Better Way</div>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="space-y-6">
              {comparisonData.map((row, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
<div className="font-medium text-white text-center md:text-left">
                    {row.category}
                  </div>
                  
                  <div className="flex items-center justify-center md:justify-center space-x-2 text-center">
                    <ApperIcon name={row.traditional.icon} className={`w-5 h-5 ${row.traditional.color}`} />
                    <span className="text-gray-400">{row.traditional.text}</span>
                  </div>
                  
<div className="flex items-center justify-center md:justify-center space-x-2 text-center">
                    <ApperIcon name={row.freelancers.icon} className={`w-5 h-5 ${row.freelancers.color}`} />
                    <span className="text-gray-400">{row.freelancers.text}</span>
                  </div>
                  
                  <div className="flex items-center justify-center md:justify-center space-x-2 text-center bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg py-2 px-3 border border-primary/20">
                    <ApperIcon name={row.dreamwares.icon} className={`w-5 h-5 ${row.dreamwares.color}`} />
                    <span className="font-medium text-white">{row.dreamwares.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default ComparisonSection;