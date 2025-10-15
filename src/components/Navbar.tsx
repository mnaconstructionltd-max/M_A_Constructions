import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#contact" },
];

// const servicesLinks = [
//   { name: "Quantity Takeoff & Estimation", href: "/quantity-takeoff" },
//   { name: "Project Controls Management", href: "/project-controls" },
//   { name: "BIM Coordination & 3D Modeling", href: "/bim-3d" },
//   { name: "Bid Management & ITB Support", href: "/bid-management" },
//   { name: "Value Engineering & Cost Optimization", href: "/value-engineering" },
//   { name: "Remote Estimating & Outsourcing Support", href: "/remote-support" },
// ];

const servicesLinks = [
  { name: "Quantity Takeoff & Estimation", href: "#services" },
  { name: "Project Controls Management", href: "#services" },
  { name: "BIM Coordination & 3D Modeling", href: "#services" },
  { name: "Bid Management & ITB Support", href: "#services" },
  { name: "Value Engineering & Cost Optimization", href: "#services" },
  { name: "Remote Estimating & Outsourcing Support", href: "#services" },
];

// Reusable links component
const MenuLinks = ({
  links,
  handleClick,
  className = "",
}: {
  links: typeof navLinks;
  handleClick: (href: string) => void;
  className?: string;
}) => {
  return (
    <>
      {links.map((link) => (
        <button
          key={link.name}
          onClick={() => handleClick(link.href)}
          className={`font-medium transition-all duration-200 ${className}`}
        >
          {link.name}
        </button>
      ))}
    </>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const moreRef = useRef<HTMLDivElement>(null);
  const mobileMoreRef = useRef<HTMLDivElement>(null);
  const lastScroll = useRef(0);

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (href: string) => {
    if (href.startsWith("/")) {
      if (location.pathname !== href) navigate(href);
    } else if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 100);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("http")) {
      window.open(href, "_blank");
    }
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  };

  const handleContactClick = () => {
    window.open("tel:+19544102970");
  };

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);
      setIsHidden(currentScroll > lastScroll.current && currentScroll > 100);
      lastScroll.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) setIsServicesOpen(false);
      if (mobileMoreRef.current && !mobileMoreRef.current.contains(event.target as Node)) setIsMobileServicesOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300 ease-in-out ${
            isScrolled ? "bg-white/40 backdrop-blur-md shadow-sm" : "bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto h-24">
            {/* Logo */}
            <span className="flex items-center cursor-pointer" onClick={() => handleClick("#hero")}>
              <img src="/logo.png" alt="M&A Construction Logo" className="h-20 md:h-24 w-auto" />
            </span>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 relative">
              <MenuLinks links={navLinks} handleClick={handleClick} className="text-black hover:text-used" />

              {/* Services Dropdown */}
              <div className="relative" ref={moreRef}>
                <button
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                  className="flex items-center gap-1 text-black hover:text-used font-medium"
                >
                  Services <ChevronDown size={16} />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-3 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden"
                    >
                      <MenuLinks links={servicesLinks} handleClick={handleClick} className="text-black text-left px-5 py-3 hover:text-used" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Button
                onClick={handleContactClick}
                className="bg-used_dark text-white hover:bg-white/40 hover:text-used hover:border font-semibold px-6 rounded-2xl"
              >
                Call Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="md:hidden mt-2 pt-4 border-t border-gray-200 flex flex-col gap-2 bg-black/60 backdrop-blur-lg rounded-xl"
              >
                <MenuLinks links={navLinks} handleClick={handleClick} className="text-white text-left px-4 py-2 hover:text-primary" />

                {/* Mobile Services Dropdown */}
                <div className="flex flex-col" ref={mobileMoreRef}>
                  <button
                    className="flex justify-between items-center px-4 py-3 font-medium text-white hover:text-primary"
                    onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                  >
                    Services <ChevronDown size={18} className={`transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : "rotate-0"}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col bg-black/30 border-t border-gray-600"
                      >
                        <MenuLinks links={servicesLinks} handleClick={handleClick} className="text-white text-left px-6 py-3 hover:bg-white/10 hover:text-primary" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Button
                  onClick={handleContactClick}
                  className="bg-primary text-white hover:bg-orange/40 hover:text-black font-semibold px-6 rounded-2xl mx-4 my-2"
                >
                  Call Us
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
