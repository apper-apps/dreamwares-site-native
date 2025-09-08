import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Card = forwardRef(({ 
  children, 
  variant = "default", 
  hover = false,
  className, 
  ...props 
}, ref) => {
const baseStyles = "bg-surface rounded-xl border border-primary/20 p-8 transition-all duration-300 backdrop-blur-sm";
  
const variants = {
    default: "shadow-sm",
    elevated: "shadow-lg shadow-primary/10",
    outlined: "border-primary/20 shadow-none"
  };
  const hoverStyles = hover ? "card-hover hover:border-primary/20" : "";
  
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