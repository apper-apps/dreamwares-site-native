import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Container = forwardRef(({ children, size = "default", className, ...props }, ref) => {
  const sizes = {
    sm: "max-w-4xl",
    default: "max-w-6xl",
    lg: "max-w-7xl",
    full: "max-w-none"
  };
  
  return (
    <div
      ref={ref}
      className={cn("w-full mx-auto px-4 sm:px-6 lg:px-8", sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
});

Container.displayName = "Container";

export default Container;