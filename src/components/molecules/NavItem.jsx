import { cn } from "@/utils/cn";

const NavItem = ({ href, children, isActive = false, onClick, className }) => {
  const handleClick = (e) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (onClick) onClick(e);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
className={cn(
        "text-cyber-silver hover:text-electric-blue transition-all duration-300 font-semibold relative group cyber-nav-link",
        isActive && "text-electric-blue cyber-nav-active",
        className
      )}
    >
      {children}
    </a>
  );
};

export default NavItem;