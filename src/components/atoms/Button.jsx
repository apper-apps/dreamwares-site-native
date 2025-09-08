import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Button = forwardRef(({ 
  children, 
  variant = "primary", 
  size = "md", 
  className, 
  disabled = false,
  ...props 
}, ref) => {
const baseStyles = "inline-flex items-center justify-center font-bold rounded-lg transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-deep-space disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group";
  
const variants = {
    primary: "bg-gradient-to-r from-electric-blue via-neon-cyan to-holographic-purple text-white hover:shadow-2xl hover:shadow-electric-blue/40 focus:ring-electric-blue cyber-button-primary hover:scale-105",
    secondary: "border-2 border-electric-blue text-electric-blue bg-transparent hover:bg-gradient-to-r hover:from-electric-blue hover:to-neon-cyan hover:text-white focus:ring-electric-blue cyber-button-secondary hover:border-transparent",
    accent: "bg-gradient-to-r from-neon-cyan via-holographic-purple to-electric-blue text-white hover:shadow-2xl hover:shadow-neon-cyan/40 focus:ring-neon-cyan cyber-button-accent hover:scale-105",
    ghost: "text-electric-blue hover:bg-electric-blue/10 focus:ring-electric-blue cyber-button-ghost hover:text-neon-cyan",
    outline: "border border-electric-blue/30 text-cyber-silver hover:border-electric-blue hover:text-electric-blue hover:bg-electric-blue/5 focus:ring-electric-blue/20 cyber-button-outline"
  };
  
const sizes = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base", 
    lg: "px-10 py-5 text-lg"
  };
  
  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;