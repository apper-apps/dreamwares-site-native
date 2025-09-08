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
<section ref={sectionRef} className="py-24 bg-gradient-to-br from-cyber-dark/50 via-void-black to-deep-space relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-radial from-electric-blue/10 via-transparent to-neon-purple/10 animate-pulse"></div>
      
      <Container>
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-electric-blue via-neon-cyan to-holographic-purple bg-clip-text text-transparent mb-6 animate-gradient cyber-text-pulse">
            Our Impact in Numbers
          </h2>
          <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 blur-3xl animate-pulse -z-10"></div>
          <p className="text-2xl text-cyber-silver max-w-3xl mx-auto cyber-text-subtle">
            Trusted by businesses worldwide to deliver exceptional software solutions
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <div
              key={metric.key}
              className={`text-center p-8 rounded-3xl bg-gradient-to-br from-void-black/80 via-cyber-dark/60 to-void-black/80 backdrop-blur-xl border-2 border-electric-blue/30 cyber-card-hover cyber-glow-sm ${
                isVisible ? `animate-on-scroll animate stagger-${index + 1}` : 'animate-on-scroll'
              }`}
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-electric-blue via-neon-cyan to-holographic-purple bg-clip-text text-transparent mb-4 cyber-text-glow animate-gradient">
                {counters[metric.key]}{metric.suffix}
              </div>
              <div className="text-cyber-silver font-bold text-base md:text-lg cyber-text-subtle">
                {metric.label}
              </div>
              {/* Holographic effect overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-electric-blue/5 via-neon-cyan/5 to-holographic-purple/5 animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 center w-80 h-80 bg-holographic-purple/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </Container>
    </section>
  );
};

export default MetricsSection;