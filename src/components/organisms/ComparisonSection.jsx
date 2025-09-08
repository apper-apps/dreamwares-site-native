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
          border: "border-red-500/30",
          glow: "shadow-red-500/20"
        };
      case "yellow":
        return {
          primary: "from-yellow-500 to-orange-500",
          secondary: "from-yellow-500/20 to-orange-500/20",
          text: "text-yellow-400",
          border: "border-yellow-500/30",
          glow: "shadow-yellow-500/20"
        };
      case "blue":
        return {
          primary: "from-blue-500 to-green-500",
          secondary: "from-blue-500/20 to-green-500/20",
          text: "text-blue-400",
          border: "border-blue-500/30",
          glow: "shadow-blue-500/20"
        };
      default:
        return {
          primary: "from-gray-500 to-gray-600",
          secondary: "from-gray-500/20 to-gray-600/20",
          text: "text-gray-400",
          border: "border-gray-500/30",
          glow: "shadow-gray-500/20"
        };
    }
  };

return (
    <section ref={sectionRef} className="py-20 bg-surface overflow-hidden">
      <Container>
        <div className="text-center mb-16 animate-on-scroll stagger-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Founders Really Want — And How{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Dreamwares Delivers It
            </span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            See how we compare to traditional development approaches
          </p>
        </div>

        {/* Mind Map Container */}
        <div className="animate-on-scroll stagger-2 relative min-h-[800px] md:min-h-[600px]">
          
          {/* Desktop Layout */}
          <div className="hidden md:block relative w-full h-full">
            <svg 
              viewBox="0 0 1200 600" 
              className="w-full h-full absolute inset-0"
              style={{ minHeight: "600px" }}
            >
              {/* Connection Lines */}
              <defs>
                <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#dc2626" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#eab308" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Main Branch Lines */}
              {/* Left Branch (Traditional) */}
              <path
                d="M 600 300 Q 450 250 300 200"
                stroke="url(#redGradient)"
                strokeWidth="3"
                fill="none"
                className="animate-pulse"
                style={{ animationDuration: "3s" }}
              />
              
              {/* Middle Branch (Freelancers) */}
              <path
                d="M 600 300 Q 600 150 600 100"
                stroke="url(#yellowGradient)"
                strokeWidth="3"
                fill="none"
                className="animate-pulse"
                style={{ animationDuration: "3s", animationDelay: "0.5s" }}
              />
              
              {/* Right Branch (Dreamwares) */}
              <path
                d="M 600 300 Q 750 250 900 200"
                stroke="url(#blueGradient)"
                strokeWidth="3"
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
                        strokeWidth="2"
                        fill="none"
                        className="opacity-60"
                      />
                    );
                  })}
                </g>
              ))}
            </svg>

            {/* Central Node */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              onMouseEnter={() => setHoveredNode('center')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className={`
                bg-gradient-to-r from-gray-800 to-gray-900 
                border border-gray-600 rounded-full 
                w-32 h-32 md:w-40 md:h-40
                flex flex-col items-center justify-center
                shadow-2xl transition-all duration-300
                ${hoveredNode === 'center' ? 'scale-110 shadow-primary/30' : ''}
              `}>
                <div className="text-center p-2">
                  <div className="text-white font-bold text-sm md:text-base leading-tight">
                    {mindMapData.center.title}
                  </div>
                  <div className="text-gray-400 text-xs mt-1">
                    {mindMapData.center.subtitle}
                  </div>
                </div>
              </div>
            </div>

            {/* Branch Title Nodes */}
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
                    border ${colors.border}
                    rounded-xl px-6 py-4
                    transition-all duration-300
                    ${hoveredNode === branch.id ? `scale-105 shadow-xl ${colors.glow}` : ''}
                  `}>
                    <div className="text-center">
                      <div className={`font-bold text-white text-sm md:text-base ${
                        branch.id === 'dreamwares' ? 'bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent' : ''
                      }`}>
                        {branch.title}
                      </div>
                      <div className={`text-xs mt-1 ${
                        branch.id === 'dreamwares' ? 'text-primary' : colors.text
                      }`}>
                        {branch.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Category Nodes */}
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
                        bg-gradient-to-r ${branch.id === 'dreamwares' ? 'from-primary/20 to-blue-500/20' : colors.secondary}
                        border ${branch.id === 'dreamwares' ? 'border-primary/30' : colors.border}
                        rounded-lg px-3 py-2 min-w-[180px]
                        transition-all duration-300
                        ${hoveredNode === `${branch.id}-${nodeIndex}` ? 
                          `scale-105 shadow-lg ${branch.id === 'dreamwares' ? 'shadow-primary/20' : colors.glow}` : 
                          ''
                        }
                      `}>
                        <div className="flex items-center space-x-2">
                          <ApperIcon 
                            name={node.icon} 
                            className={`w-4 h-4 ${
                              branch.id === 'dreamwares' ? 'text-green-400' : colors.text
                            }`} 
                          />
                          <div className="flex-1">
                            <div className={`font-medium text-xs ${
                              branch.id === 'dreamwares' ? 'text-white' : colors.text
                            }`}>
                              {node.category}
                            </div>
                            <div className={`text-xs mt-1 ${
                              branch.id === 'dreamwares' ? 'text-gray-300' : 'text-gray-400'
                            }`}>
                              {node.text}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-8">
            {/* Central Node Mobile */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-600 rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl">
                <div className="text-center p-2">
                  <div className="text-white font-bold text-sm leading-tight">
                    {mindMapData.center.title}
                  </div>
                  <div className="text-gray-400 text-xs mt-1">
                    {mindMapData.center.subtitle}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Branches */}
            {mindMapData.branches.map((branch) => {
              const colors = getThemeColors(branch.theme);
              
              return (
                <div key={`mobile-${branch.id}`} className="space-y-4">
                  {/* Branch Title */}
                  <div className="text-center">
                    <div className={`
                      inline-block bg-gradient-to-r ${colors.secondary}
                      border ${colors.border}
                      rounded-xl px-6 py-3
                    `}>
                      <div className={`font-bold text-white ${
                        branch.id === 'dreamwares' ? 'bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent' : ''
                      }`}>
                        {branch.title}
                      </div>
                      <div className={`text-xs mt-1 ${
                        branch.id === 'dreamwares' ? 'text-primary' : colors.text
                      }`}>
                        {branch.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Branch Nodes */}
                  <div className="grid grid-cols-1 gap-3 px-4">
                    {branch.nodes.map((node, nodeIndex) => (
                      <div 
                        key={`mobile-${branch.id}-${nodeIndex}`}
                        className={`
                          bg-gradient-to-r ${branch.id === 'dreamwares' ? 'from-primary/20 to-blue-500/20' : colors.secondary}
                          border ${branch.id === 'dreamwares' ? 'border-primary/30' : colors.border}
                          rounded-lg p-3
                          transition-all duration-300 hover:scale-102
                        `}
                      >
                        <div className="flex items-center space-x-3">
                          <ApperIcon 
                            name={node.icon} 
                            className={`w-5 h-5 ${
                              branch.id === 'dreamwares' ? 'text-green-400' : colors.text
                            }`} 
                          />
                          <div className="flex-1">
                            <div className={`font-medium text-sm ${
                              branch.id === 'dreamwares' ? 'text-white' : colors.text
                            }`}>
                              {node.category}
                            </div>
                            <div className={`text-sm mt-1 ${
                              branch.id === 'dreamwares' ? 'text-gray-300' : 'text-gray-400'
                            }`}>
                              {node.text}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
</Container>
    </section>
  );
};

export default ComparisonSection;