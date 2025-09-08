import { useState, useEffect, useRef } from 'react';
import Container from '@/components/atoms/Container';

const MetricsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    experience: 0,
    satisfaction: 0
  });

  const sectionRef = useRef(null);

  const metrics = [
    {
      key: 'clients',
      label: 'Clients Served',
      target: 250,
      suffix: '+'
    },
    {
      key: 'projects',
      label: 'Projects Completed',
      target: 500,
      suffix: '+'
    },
    {
      key: 'experience',
      label: 'Years Experience',
      target: 8,
      suffix: '+'
    },
    {
      key: 'satisfaction',
      label: 'Client Satisfaction',
      target: 98,
      suffix: '%'
    }
  ];

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Animate counters when visible
  useEffect(() => {
    if (!isVisible) return;

    const animateCounter = (key, target, duration = 2000) => {
      const startTime = Date.now();
      const startValue = 0;

      const updateCounter = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);

        setCounters(prev => ({
          ...prev,
          [key]: currentValue
        }));

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    };

    // Start animations with staggered delays
    metrics.forEach((metric, index) => {
      setTimeout(() => {
        animateCounter(metric.key, metric.target);
      }, index * 200);
    });
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-surface/50 to-background">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trusted by businesses worldwide to deliver exceptional software solutions
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <div
              key={metric.key}
              className={`text-center p-6 rounded-2xl bg-gradient-to-br from-surface/80 to-surface/40 backdrop-blur-sm border border-white/10 card-hover ${
                isVisible ? `animate-on-scroll animate stagger-${index + 1}` : 'animate-on-scroll'
              }`}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {counters[metric.key]}{metric.suffix}
              </div>
              <div className="text-gray-300 font-medium text-sm md:text-base">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
      </Container>
    </section>
  );
};

export default MetricsSection;