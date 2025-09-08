import { useEffect, useRef } from "react";
import Container from "@/components/atoms/Container";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const ProductsSection = () => {
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

  const products = [
    {
      name: "Integrately",
      tagline: "AI Automation Platform",
      features: [
        "1,300+ app integrations",
        "20M+ workflows automated",
        "No coding required",
        "Smart automation suggestions"
      ],
      icon: "Zap",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "Apper.io",
      tagline: "AI App Builder",
      features: [
        "Prompt to SaaS app",
        "Complete solution included",
        "Custom branding",
        "Enterprise ready"
      ],
      icon: "Smartphone",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "AutoTester.ai",
      tagline: "AI QA Testing",
      features: [
        "4-click testing setup",
        "80% faster shipping",
        "90% less manual effort",
        "Comprehensive test coverage"
      ],
      icon: "TestTube",
      gradient: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16 animate-on-scroll stagger-1">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Real products we've built that are transforming industries
          </p>
        </div>

        <div className="space-y-16">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`animate-on-scroll stagger-${index + 2} grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Product Info */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <Card className="h-full">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${product.gradient} rounded-xl flex items-center justify-center mr-4`}>
                      <ApperIcon name={product.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-dark">{product.name}</h3>
                      <p className="text-muted">{product.tagline}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <ApperIcon name="CheckCircle" className="w-5 h-5 text-accent mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="secondary">
                    Learn More
                    <ApperIcon name="ExternalLink" className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              </div>

              {/* Visual Placeholder */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className={`aspect-video bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}>
                  <div className="text-center text-white">
                    <ApperIcon name={product.icon} className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <div className="text-xl font-semibold opacity-90">{product.name}</div>
                    <div className="text-sm opacity-75">Product Screenshot</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductsSection;