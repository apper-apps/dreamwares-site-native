import React, { useEffect, useRef, useState } from "react";
import ApperIcon from "@/components/ApperIcon";
import Container from "@/components/atoms/Container";
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

const [hoveredNode, setHoveredNode] = useState(null);

  const mindMapData = {
    center: {
      title: "Development Approaches",
      subtitle: "What Founders Need"
    },
    branches: [
      {
        id: "traditional",
        title: "Traditional Development",
        subtitle: "Slow & Expensive",
        theme: "red",
        position: "left",
        nodes: [
          { category: "Speed", text: "Projects drag on", icon: "Clock" },
          { category: "Cost", text: "Costs increase", icon: "TrendingUp" },
          { category: "Ownership", text: "Don't own product", icon: "Lock" },
          { category: "Communication", text: "Tech jargon", icon: "MessageCircle" },
          { category: "Support", text: "Little help after", icon: "AlertCircle" },
          { category: "Delivery", text: "Delays common", icon: "Calendar" }
        ]
      },
      {
        id: "freelancers",
        title: "Freelancers/Agencies",
        subtitle: "Hit or Miss",
        theme: "yellow",
        position: "middle",
        nodes: [
          { category: "Speed", text: "Faster, unpredictable", icon: "Timer" },
          { category: "Cost", text: "Pricing changes", icon: "DollarSign" },
          { category: "Ownership", text: "Unclear ownership", icon: "HelpCircle" },
          { category: "Communication", text: "Still confusing", icon: "MessageSquare" },
          { category: "Support", text: "Limited support", icon: "Clock" },
          { category: "Delivery", text: "Depends on availability", icon: "User" }
        ]
      },
      {
        id: "dreamwares",
        title: "Dreamwares AI",
        subtitle: "The Better Way",
        theme: "blue",
        position: "right",
        nodes: [
          { category: "Speed", text: "Quick and reliable launch", icon: "Zap" },
          { category: "Cost", text: "Clear, fixed pricing", icon: "Check" },
          { category: "Ownership", text: "You own 100%", icon: "Key" },
          { category: "Communication", text: "Clear and simple", icon: "CheckCircle" },
          { category: "Support", text: "Dedicated support guarantee", icon: "Shield" },
          { category: "Delivery", text: "On-time delivery", icon: "CheckCircle2" }
        ]
      }
    ]
  };

const getThemeColors = (theme) => {
    switch (theme) {
      case "red":
        return {
          primary: "from-red-500 to-red-600",
          secondary: "from-red-500/20 to-red-600/20",
          text: "text-red-400",
          border: "border-red-500/40",
          glow: "shadow-red-500/30 cyber-glow-sm"
        };
      case "yellow":
        return {
          primary: "from-energy-yellow to-orange-500",
          secondary: "from-energy-yellow/20 to-orange-500/20",
          text: "text-energy-yellow",
          border: "border-energy-yellow/40",
          glow: "shadow-energy-yellow/30 cyber-glow-sm"
        };
      case "blue":
        return {
          primary: "from-electric-blue to-neon-cyan",
          secondary: "from-electric-blue/20 to-neon-cyan/20",
          text: "text-electric-blue",
          border: "border-electric-blue/40",
          glow: "shadow-electric-blue/30 cyber-glow"
        };
      default:
        return {
          primary: "from-cyber-silver to-electric-blue",
          secondary: "from-cyber-silver/20 to-electric-blue/20",
          text: "text-cyber-silver",
          border: "border-cyber-silver/40",
          glow: "shadow-cyber-silver/30 cyber-glow-sm"
        };
    }
  };

return (
<section ref={sectionRef} className="py-24 bg-gradient-to-br from-cyber-dark via-void-black to-deep-space relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-15"></div>
      <div className="absolute inset-0 bg-gradient-radial from-electric-blue/10 via-transparent to-neon-purple/10 animate-pulse"></div>
      
      <Container>
        <div className="text-center mb-20 animate-on-scroll stagger-1">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 cyber-text-glow">
            What Founders Really Want — And How{" "}
            <span className="bg-gradient-to-r from-electric-blue via-neon-cyan to-holographic-purple bg-clip-text text-transparent animate-gradient cyber-text-pulse">
              Dreamwares Delivers It
            </span>
          </h2>
          <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 blur-3xl animate-pulse -z-10"></div>
          <p className="text-2xl text-cyber-silver max-w-4xl mx-auto cyber-text-subtle">
            See how we compare to traditional development approaches
          </p>
        </div>

        {/* Mind Map Container */}
        <div className="animate-on-scroll stagger-2 relative min-h-[900px] md:min-h-[700px]">
          
          {/* Desktop Layout */}
          <div className="hidden md:block relative w-full h-full">
            <svg 
              viewBox="0 0 1200 600" 
              className="w-full h-full absolute inset-0"
              style={{ minHeight: "700px" }}
            >
              {/* Enhanced Connection Lines */}
              <defs>
                <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#dc2626" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFE066" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Enhanced Main Branch Lines */}
              <path
                d="M 600 300 Q 450 250 300 200"
                stroke="url(#redGradient)"
                strokeWidth="4"
                fill="none"
                className="animate-pulse"
                style={{ animationDuration: "3s" }}
              />
              
              <path
                d="M 600 300 Q 600 150 600 100"
                stroke="url(#yellowGradient)"
                strokeWidth="4"
                fill="none"
                className="animate-pulse"
                style={{ animationDuration: "3s", animationDelay: "0.5s" }}
              />
              
              <path
                d="M 600 300 Q 750 250 900 200"
                stroke="url(#blueGradient)"
                strokeWidth="4"
                fill="none"
                className="animate-pulse"
                style={{ animationDuration: "3s", animationDelay: "1s" }}
              />

              {/* Category connection lines for each branch */}
              {mindMapData.branches.map((branch, branchIndex) => (
                <g key={branch.id}>
                  {branch.nodes.map((node, nodeIndex) => {
                    let startX, startY, endX, endY;
                    
                    if (branch.position === "left") {
                      startX = 300;
                      startY = 200;
                      endX = 150;
                      endY = 80 + (nodeIndex * 80);
                    } else if (branch.position === "middle") {
                      startX = 600;
                      startY = 100;
                      endX = 500 + (nodeIndex % 2 === 0 ? -100 : 100);
                      endY = 50 + (Math.floor(nodeIndex / 2) * 60);
                    } else {
                      startX = 900;
                      startY = 200;
                      endX = 1050;
                      endY = 80 + (nodeIndex * 80);
                    }

                    return (
                      <path
                        key={`${branch.id}-${nodeIndex}`}
                        d={`M ${startX} ${startY} Q ${(startX + endX) / 2} ${(startY + endY) / 2 - 20} ${endX} ${endY}`}
                        stroke={`url(#${branch.theme}Gradient)`}
                        strokeWidth="3"
                        fill="none"
                        className="opacity-80"
                      />
                    );
                  })}
                </g>
              ))}
            </svg>

            {/* Enhanced Central Node */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              onMouseEnter={() => setHoveredNode('center')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className={`
                bg-gradient-to-r from-void-black via-cyber-dark to-void-black 
                border-2 border-electric-blue/50 rounded-full 
                w-36 h-36 md:w-44 md:h-44
                flex flex-col items-center justify-center
                shadow-2xl transition-all duration-500 cyber-glow
                ${hoveredNode === 'center' ? 'scale-110 shadow-electric-blue/50' : ''}
              `}>
                <div className="text-center p-3">
                  <div className="text-white font-black text-base md:text-lg leading-tight cyber-text-glow">
                    {mindMapData.center.title}
                  </div>
                  <div className="text-cyber-silver text-sm mt-1 cyber-text-subtle">
                    {mindMapData.center.subtitle}
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-blue/10 to-neon-cyan/10 animate-pulse"></div>
              </div>
            </div>

            {/* Enhanced Branch Title Nodes */}
            {mindMapData.branches.map((branch, index) => {
              const colors = getThemeColors(branch.theme);
              let position;
              
              if (branch.position === "left") {
                position = { top: "33%", left: "25%" };
              } else if (branch.position === "middle") {
                position = { top: "17%", left: "50%" };
              } else {
                position = { top: "33%", right: "25%" };
              }

              return (
                <div 
                  key={branch.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
                  style={position}
                  onMouseEnter={() => setHoveredNode(branch.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div className={`
                    bg-gradient-to-r ${colors.secondary}
                    border-2 ${colors.border}
                    rounded-2xl px-8 py-6
                    transition-all duration-500 backdrop-blur-xl
                    ${hoveredNode === branch.id ? `scale-110 shadow-2xl ${colors.glow}` : ''}
                  `}>
                    <div className="text-center">
                      <div className={`font-black text-white text-base md:text-lg ${
                        branch.id === 'dreamwares' ? 'bg-gradient-to-r from-electric-blue to-neon-cyan bg-clip-text text-transparent cyber-text-pulse' : 'cyber-text-glow'
                      }`}>
                        {branch.title}
                      </div>
                      <div className={`text-sm mt-2 ${
                        branch.id === 'dreamwares' ? 'text-electric-blue cyber-text-subtle' : colors.text
                      }`}>
                        {branch.subtitle}
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
                  </div>
                </div>
              );
            })}

            {/* Enhanced Category Nodes */}
            {mindMapData.branches.map((branch) => (
              <div key={`nodes-${branch.id}`}>
                {branch.nodes.map((node, nodeIndex) => {
                  const colors = getThemeColors(branch.theme);
                  let position;
                  
                  if (branch.position === "left") {
                    position = {
                      top: `${13 + (nodeIndex * 13.3)}%`,
                      left: "12.5%"
                    };
                  } else if (branch.position === "middle") {
                    const isEven = nodeIndex % 2 === 0;
                    position = {
                      top: `${8 + (Math.floor(nodeIndex / 2) * 10)}%`,
                      left: isEven ? "42%" : "58%"
                    };
                  } else {
                    position = {
                      top: `${13 + (nodeIndex * 13.3)}%`,
                      right: "12.5%"
                    };
                  }

                  return (
                    <div 
                      key={`${branch.id}-node-${nodeIndex}`}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
                      style={position}
                      onMouseEnter={() => setHoveredNode(`${branch.id}-${nodeIndex}`)}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      <div className={`
                        bg-gradient-to-r ${branch.id === 'dreamwares' ? 'from-electric-blue/20 to-neon-cyan/20' : colors.secondary}
                        border-2 ${branch.id === 'dreamwares' ? 'border-electric-blue/40' : colors.border}
                        rounded-xl px-4 py-3 min-w-[200px] backdrop-blur-xl
                        transition-all duration-500
                        ${hoveredNode === `${branch.id}-${nodeIndex}` ? 
                          `scale-110 shadow-2xl ${branch.id === 'dreamwares' ? 'shadow-electric-blue/30' : colors.glow}` : 
                          ''
                        }
                      `}>
                        <div className="flex items-center space-x-3">
                          <ApperIcon 
                            name={node.icon} 
                            className={`w-5 h-5 ${
                              branch.id === 'dreamwares' ? 'text-neon-green drop-shadow-neon' : colors.text
                            }`} 
                          />
                          <div className="flex-1">
                            <div className={`font-bold text-sm ${
                              branch.id === 'dreamwares' ? 'text-white cyber-text-glow' : colors.text
                            }`}>
                              {node.category}
                            </div>
                            <div className={`text-sm mt-1 ${
                              branch.id === 'dreamwares' ? 'text-cyber-silver cyber-text-subtle' : 'text-gray-400'
                            }`}>
                              {node.text}
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Enhanced Mobile Layout */}
          <div className="md:hidden space-y-10">
            {/* Central Node Mobile */}
            <div className="flex justify-center mb-12">
              <div className="bg-gradient-to-r from-void-black via-cyber-dark to-void-black border-2 border-electric-blue/50 rounded-full w-36 h-36 flex flex-col items-center justify-center shadow-2xl cyber-glow">
                <div className="text-center p-3">
                  <div className="text-white font-black text-base leading-tight cyber-text-glow">
                    {mindMapData.center.title}
                  </div>
                  <div className="text-cyber-silver text-sm mt-1 cyber-text-subtle">
                    {mindMapData.center.subtitle}
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-blue/10 to-neon-cyan/10 animate-pulse"></div>
              </div>
            </div>

            {/* Mobile Branches */}
            {mindMapData.branches.map((branch) => {
              const colors = getThemeColors(branch.theme);
              
              return (
                <div key={`mobile-${branch.id}`} className="space-y-6">
                  {/* Branch Title */}
                  <div className="text-center">
                    <div className={`
                      inline-block bg-gradient-to-r ${colors.secondary}
                      border-2 ${colors.border}
                      rounded-2xl px-8 py-4 backdrop-blur-xl
                    `}>
                      <div className={`font-black text-white text-lg ${
                        branch.id === 'dreamwares' ? 'bg-gradient-to-r from-electric-blue to-neon-cyan bg-clip-text text-transparent cyber-text-pulse' : 'cyber-text-glow'
                      }`}>
                        {branch.title}
                      </div>
                      <div className={`text-sm mt-2 ${
                        branch.id === 'dreamwares' ? 'text-electric-blue cyber-text-subtle' : colors.text
                      }`}>
                        {branch.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Branch Nodes */}
                  <div className="grid grid-cols-1 gap-4 px-6">
                    {branch.nodes.map((node, nodeIndex) => (
                      <div 
                        key={`mobile-${branch.id}-${nodeIndex}`}
                        className={`
                          bg-gradient-to-r ${branch.id === 'dreamwares' ? 'from-electric-blue/20 to-neon-cyan/20' : colors.secondary}
                          border-2 ${branch.id === 'dreamwares' ? 'border-electric-blue/40' : colors.border}
                          rounded-xl p-4 backdrop-blur-xl
                          transition-all duration-500 hover:scale-105
                        `}
                      >
                        <div className="flex items-center space-x-4">
                          <ApperIcon 
                            name={node.icon} 
                            className={`w-6 h-6 ${
                              branch.id === 'dreamwares' ? 'text-neon-green drop-shadow-neon' : colors.text
                            }`} 
                          />
                          <div className="flex-1">
                            <div className={`font-bold text-base ${
                              branch.id === 'dreamwares' ? 'text-white cyber-text-glow' : colors.text
                            }`}>
                              {node.category}
                            </div>
                            <div className={`text-base mt-2 ${
                              branch.id === 'dreamwares' ? 'text-cyber-silver cyber-text-subtle' : 'text-gray-400'
                            }`}>
                              {node.text}
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
                      </div>
                    ))}
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

export default ComparisonSection;