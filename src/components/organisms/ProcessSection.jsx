import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/atoms/Container";

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

const processStepsPhase1 = [
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
      title: "AI Development",
      description: "Rapid building using advanced AI development tools"
    },
    {
      number: 6,
      title: "Launch & Scale",
      description: "Go live with real users and scale your product"
    }
  ];

const processStepsPhase2 = [
    {
      number: 1,
      title: "Consultation & Discovery",
      description: "Comprehensive understanding of goals, requirements, and timeline"
    },
    {
      number: 2,
      title: "Free POC",
      description: "Validate your idea with a proof of concept before you commit"
    },
    {
      number: 3,
      title: "Design & Architecture",
      description: "Create the foundation and system architecture"
    },
    {
      number: 4,
      title: "AI Development",
      description: "Rapid building using advanced AI development tools"
    },
    {
      number: 5,
      title: "Launch & Scale",
      description: "Go live with real users and scale your product"
    }
  ];

  const processStepsPhase3 = [
    {
      number: 1,
      title: "Strategy & Planning",
      description: "Define objectives, requirements, and comprehensive project roadmap"
    },
    {
      number: 2,
      title: "Design & Development",
      description: "Create and build your solution using cutting-edge technologies"
    },
    {
      number: 3,
      title: "Testing & Optimization",
      description: "Ensure quality, performance, and user experience excellence"
    },
    {
      number: 4,
      title: "Deployment & Growth",
      description: "Launch successfully and scale your product for maximum impact"
    }
  ];

const phases = [
    { segments: 6, steps: processStepsPhase1, name: "Phase 1: Complete Process", rotation: 0 },
    { segments: 5, steps: processStepsPhase2, name: "Phase 2: Streamlined Process", rotation: 45 },
    { segments: 4, steps: processStepsPhase3, name: "Phase 3: Major Phases", rotation: 90 }
  ];
const [currentPhase, setCurrentPhase] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
useEffect(() => {
    const phaseTimer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPhase((prev) => (prev + 1) % phases.length);
        setIsTransitioning(false);
      }, 500);
    }, 8000); // Switch phases every 8 seconds

    return () => clearTimeout(phaseTimer);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % phases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, phases.length]);

const createSegmentPath = (index, total, radius = 120, centerX = 150, centerY = 150, rotationOffset = 0) => {
    const angle = (2 * Math.PI) / total;
    const rotationRad = (rotationOffset * Math.PI) / 180;
    const startAngle = (index * angle) - Math.PI / 2 + rotationRad;
    const endAngle = ((index + 1) * angle) - Math.PI / 2 + rotationRad;
    
    const x1 = centerX + radius * Math.cos(startAngle);
    const y1 = centerY + radius * Math.sin(startAngle);
    const x2 = centerX + radius * Math.cos(endAngle);
    const y2 = centerY + radius * Math.sin(endAngle);
    
    const largeArc = angle > Math.PI ? 1 : 0;
    
    return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
  };

const getLabelPosition = (index, total, radius = 160, centerX = 150, centerY = 150, rotationOffset = 0) => {
    const rotationRad = (rotationOffset * Math.PI) / 180;
    const angle = (2 * Math.PI * index) / total - Math.PI / 2 + rotationRad;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { x, y };
  };

  const getSegmentColor = (index, total) => {
    const hue = 250 + (index * 40) / total;
    return `hsl(${hue}, 70%, 60%)`;
  };

  const currentPhaseData = phases[currentPhase];

  return (
<section id="process" ref={sectionRef} className="py-20 bg-background">
      <Container>
<div className="text-center mb-16 animate-on-scroll stagger-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            From Idea to Launch in{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Simple Steps
            </span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Our proven process takes you from concept to working product with clarity and speed
          </p>
        </div>

<div 
          className="flex justify-center items-center animate-on-scroll stagger-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative">
            <svg 
              width="400" 
              height="400" 
              viewBox="0 0 300 300" 
className={`circular-process ${isPaused ? 'paused' : ''} ${isTransitioning ? 'morphing' : ''}`}
              style={{
                transform: `rotate(${phases[currentPhase].rotation}deg)`,
                transition: isTransitioning ? 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
              }}
            >
              {/* Rotating segments */}
              <g className="segments-container">
                {currentPhaseData.steps.map((step, index) => (
                  <path
                    key={`${currentPhase}-${index}`}
                    d={createSegmentPath(index, currentPhaseData.segments)}
                    fill={getSegmentColor(index, currentPhaseData.segments)}
                    stroke="#0F1419"
                    strokeWidth="2"
                    className="segment-path"
                    style={{
                      filter: 'drop-shadow(0 4px 8px rgba(37, 99, 235, 0.3))'
                    }}
                  />
                ))}
              </g>

              {/* Center circle */}
              <circle
                cx="150"
                cy="150"
                r="50"
                fill="url(#centerGradient)"
                stroke="#2563EB"
                strokeWidth="3"
                className="center-circle"
              />

              {/* Center text */}
              <text
                x="150"
                y="145"
                textAnchor="middle"
                className="center-text"
                fill="white"
                fontSize="14"
                fontWeight="bold"
              >
                From Idea
              </text>
              <text
                x="150"
                y="160"
                textAnchor="middle"
                className="center-text"
                fill="white"
                fontSize="14"
                fontWeight="bold"
              >
                to Launch
              </text>

              {/* Gradient definitions */}
              <defs>
                <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
              </defs>
            </svg>

            {/* Labels positioned outside segments */}
            {currentPhaseData.steps.map((step, index) => {
              const position = getLabelPosition(index, currentPhaseData.segments);
              return (
                <div
                  key={`label-${currentPhase}-${index}`}
                  className="absolute label-container"
                  style={{
                    left: position.x + 50,
                    top: position.y + 50,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="bg-surface/90 backdrop-blur-sm rounded-lg p-3 border border-primary/20 text-center min-w-[120px] label-fade-in">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                      {step.number}
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">{step.title}</h4>
                    <p className="text-xs text-muted leading-tight">{step.description}</p>
                  </div>
                  
                  {/* Connecting line to center */}
                  <div className="absolute inset-0 connecting-line">
                    <svg 
                      width="100%" 
                      height="100%" 
                      className="absolute inset-0 pointer-events-none"
                    >
                      <line
                        x1="50%"
                        y1="50%"
                        x2={150 - position.x + '%'}
                        y2={150 - position.y + '%'}
                        stroke="#2563EB"
                        strokeWidth="2"
                        strokeDasharray="4,4"
                        opacity="0.6"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;