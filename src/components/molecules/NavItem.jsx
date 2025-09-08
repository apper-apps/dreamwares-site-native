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
        "text-gray-300 hover:text-primary transition-colors duration-200 font-medium",
        isActive && "text-primary",
        className
      )}
    >
      {children}
    </a>
  );
};

export default NavItem;