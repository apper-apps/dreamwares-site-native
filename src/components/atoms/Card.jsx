import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Card = forwardRef(({ 
  children, 
  variant = "default", 
  hover = false,
  className, 
  ...props 
}, ref) => {
const baseStyles = "bg-gradient-to-br from-void-black/80 to-cyber-dark/60 rounded-2xl border border-electric-blue/30 p-10 transition-all duration-500 backdrop-blur-xl relative overflow-hidden group";
  
const variants = {
    default: "shadow-lg shadow-electric-blue/10",
    elevated: "shadow-2xl shadow-electric-blue/20 border-electric-blue/50",
    outlined: "border-electric-blue/40 shadow-xl shadow-neon-cyan/10"
  };
  const hoverStyles = hover ? "cyber-card-hover hover:border-electric-blue/60 hover:shadow-2xl hover:shadow-electric-blue/30" : "";
  
  return (
    <div
      ref={ref}
      className={cn(baseStyles, variants[variant], hoverStyles, className)}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;