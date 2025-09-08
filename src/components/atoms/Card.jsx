import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Card = forwardRef(({ 
  children, 
  variant = "default", 
  hover = false,
  className, 
  ...props 
}, ref) => {
  const baseStyles = "bg-white rounded-xl border border-gray-100 p-8 transition-all duration-300";
  
  const variants = {
    default: "shadow-sm",
    elevated: "shadow-lg",
    outlined: "border-gray-200 shadow-none"
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