import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavLink {
  name: string;
  href: string;
  subLinks?: NavLink[];
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#contact" },
];

const servicesLinks: NavLink[] = [
  { name: "Quantity Takeoff & Estimation", href: "#services" },
  { name: "Project Controls Management", href: "#services" },
  { name: "BIM Coordination & 3D Modeling", href: "#services" },
  { name: "Bid Management & ITB Support", href: "#services" },
  { name: "Value Engineering & Cost Optimization", href: "#services" },
  { name: "Remote Estimating & Outsourcing Support", href: "#services" },
];

const csiLinks: NavLink[] = [
  {
    name: "Finishes",
    href: "#services",
    subLinks: [
      { name: "Paint", href: "#paint" },
      { name: "Wall Covering", href: "#wall" },
    ],
  },
  {
    name: "Lumber",
    href: "#services",
    subLinks: [
      { name: "Plywood", href: "#plywood" },
      { name: "Timber", href: "#timber" },
    ],
  },
  {
    name: "MEP",
    href: "#services",
    subLinks: [
      { name: "HVAC", href: "#hvac" },
      { name: "Plumbing", href: "#plumbing" },
    ],
  },
  { name: "Concrete", href: "#services" },
  { name: "Structural Steel", href: "#services" },
];

interface NestedMenuLinksProps {
  links: NavLink[];
  handleClick: (href: string) => void;
  isMobile?: boolean;
  openIndex?: number | null;
  setOpenIndex?: (idx: number | null) => void;
}

const NestedMenuLinks = ({
  links,
  handleClick,
  isMobile = false,
  openIndex,
  setOpenIndex,
}: NestedMenuLinksProps) => {
  const [localOpenIndex, setLocalOpenIndex] = useState<number | null>(null);

  const usedOpenIndex = openIndex !== undefined ? openIndex : localOpenIndex;
  const usedSetOpenIndex = setOpenIndex !== undefined ? setOpenIndex : setLocalOpenIndex;

  const [subOpenIndex, setSubOpenIndex] = useState<number | null>(null);

  return (
    <div className={`${isMobile ? "flex flex-col" : "flex flex-col"}`}>
      {links.map((link, index) => (
        <div
          key={link.name}
          className="relative group"
        >
          <button
            onClick={() => {
              if (link.subLinks) {
                if (isMobile) {
                  usedSetOpenIndex(usedOpenIndex === index ? null : index);
                }
              } else {
                handleClick(link.href);
                if (isMobile) usedSetOpenIndex(null);
              }
            }}
            onMouseEnter={() => {
              if (!isMobile && link.subLinks) usedSetOpenIndex(index);
            }}
            onMouseLeave={() => {
              if (!isMobile && link.subLinks) usedSetOpenIndex(null);
            }}
            className={`text-black text-left w-full px-5 py-2 flex justify-between items-center hover:text-used ${
              isMobile ? "border-b last:border-b-0" : ""
            }`}
            type="button"
            aria-haspopup={!!link.subLinks}
            aria-expanded={usedOpenIndex === index}
          >
                  {link.name}
            {link.subLinks && (
              <motion.span
                animate={{
                  rotate: (isMobile
                    ? usedOpenIndex === index
                    : usedOpenIndex === index)
                    ? 270
                    : 0,
                }}
                transition={{ duration: 0.25 }}
                className="ml-2"
                style={{ display: "flex", alignItems: "center" }}
              >
                <ChevronDown size={14} />
              </motion.span>
                    )}
                </button>
          {/* Show submenu in these cases:
              - desktop: on hover, i.e. when usedOpenIndex === index
              - mobile: if expanded/clicked, i.e. usedOpenIndex === index */}
          {link.subLinks && (
                <AnimatePresence>
              {usedOpenIndex === index && (
                    <motion.div
                  initial={
                  isMobile
                      ? { opacity: 0, y: 5 }
                      : { opacity: 0, x: -5 }
                  }
                  animate={
                    isMobile
                      ? { opacity: 1, y: 0 }
                      : { opacity: 1, x: 0 }
                  }
                  exit={
                    isMobile
                      ? { opacity: 0, y: 5 }
                      : { opacity: 0, x: -5 }
                  }
                        transition={{ duration: 0.2 }}
                  className={`${
                    isMobile
                      ? "flex flex-col bg-white border-l border-gray-200 ml-4"
                      : "absolute top-0 left-full ml-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 flex flex-col"
                  }`}
                  onMouseEnter={() => {
                    if (!isMobile && link.subLinks) usedSetOpenIndex(index);
                  }}
                  onMouseLeave={() => {
                    if (!isMobile && link.subLinks) usedSetOpenIndex(null);
                  }}
                          >
                  {link.subLinks.map((sub, sidx) => (
                    <div key={sub.name} className="relative group">
                      <button
                        onClick={() => {
                          if (sub.subLinks && isMobile) {
                            // handle mobile submenu for second level
                            setSubOpenIndex(subOpenIndex === sidx ? null : sidx);
                          } else {
                            handleClick(sub.href);
                            if (isMobile) {
                              usedSetOpenIndex(null);
                              setSubOpenIndex(null);
                            }
                          }
                        }}
                        onMouseEnter={() => {
                          if (!isMobile && sub.subLinks) setSubOpenIndex(sidx);
                        }}
                        onMouseLeave={() => {
                          if (!isMobile && sub.subLinks) setSubOpenIndex(null);
                        }}
                        className="text-black text-left px-4 py-2 hover:text-used hover:bg-gray-50 flex justify-between items-center w-full"
                        type="button"
                        aria-haspopup={!!sub.subLinks}
                        aria-expanded={subOpenIndex === sidx}
                >
                        {sub.name}
                        {sub.subLinks && (
                          <motion.span
                            animate={{
                              rotate: (isMobile
                                ? subOpenIndex === sidx
                                : subOpenIndex === sidx)
                                ? 180
                                : 0,
                            }}
                            transition={{ duration: 0.25 }}
                            className="ml-2"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <ChevronDown size={14} />
                          </motion.span>
            )}
                      </button>
                      {/* Right side subdropdown */}
                      {sub.subLinks && (
                        <AnimatePresence>
                          {((isMobile && subOpenIndex === sidx) ||
                            (!isMobile && subOpenIndex === sidx)) && (
                            <motion.div
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              transition={{ duration: 0.2 }}
                              className={`${
                                isMobile
                                  ? "flex flex-col bg-white border-l border-gray-200 ml-4"
                                  : "absolute top-0 left-full w-48 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col z-50"
                              }`}
                              style={
                                isMobile
                                  ? { position: "relative" }
                                  : { top: 0, left: "100%" }
                              }
                              onMouseEnter={() => {
                                if (!isMobile && sub.subLinks)
                                  setSubOpenIndex(sidx);
                              }}
                              onMouseLeave={() => {
                                if (!isMobile && sub.subLinks)
                                  setSubOpenIndex(null);
                              }}
                            >
                              {sub.subLinks.map((nested) => (
                                <button
                                  key={nested.name}
                                  onClick={() => handleClick(nested.href)}
                                  className="text-black text-left px-4 py-2 hover:text-used hover:bg-gray-50 w-full"
                                  type="button"
                                >
                                  {nested.name}
                                </button>
                              ))}
                            </motion.div>
      )}
    </AnimatePresence>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [desktopCsiOpen, setDesktopCsiOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  const [mobileCsiOpenIdx, setMobileCsiOpenIdx] = useState<number | null>(null);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const lastScroll = useRef(0);

  const csiRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
    setDesktopCsiOpen(false);
    setDesktopServicesOpen(false);
    setMobileCsiOpenIdx(null);
    setMobileServicesOpen(false);
  };

  const handleContactClick = () => {
    window.open("tel:+19544102970");
    setIsMobileMenuOpen(false);
    setMobileCsiOpenIdx(null);
    setMobileServicesOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);
      setIsHidden(currentScroll > lastScroll.current && currentScroll > 100);
      lastScroll.current = currentScroll;
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // Desktop dropdowns
      if (csiRef.current && !csiRef.current.contains(target)) setDesktopCsiOpen(false);
      if (servicesRef.current && !servicesRef.current.contains(target)) setDesktopServicesOpen(false);

      // Mobile menu
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target)
      ) {
        setIsMobileMenuOpen(false);
        setMobileCsiOpenIdx(null);
        setMobileServicesOpen(false);
      }
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDesktopCsiOpen(false);
        setDesktopServicesOpen(false);
        setMobileCsiOpenIdx(null);
        setMobileServicesOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isMobileMenuOpen]);

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
            <span className="flex items-center cursor-pointer" onClick={() => handleClick("#hero")}>
              <img src="/logo.png" alt="Logo" className="h-20 md:h-24 w-auto" />
            </span>
            <div className="hidden md:flex items-center gap-6 relative">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleClick(link.href)}
                  className="text-black font-medium hover:text-used"
                  type="button"
                >
                  {link.name}
                </button>
              ))}

              <div
                className="relative"
                ref={csiRef}
                onMouseEnter={() => setDesktopCsiOpen(true)}
                onMouseLeave={() => setDesktopCsiOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-black hover:text-used font-medium"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={desktopCsiOpen}
                >
                  CSI Trades <ChevronDown size={16} />
                </button>
                <AnimatePresence>
                  {desktopCsiOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-10 right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                    >
                      <NestedMenuLinks
                        links={csiLinks}
                        handleClick={handleClick}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div
                className="relative"
                ref={servicesRef}
                onMouseEnter={() => setDesktopServicesOpen(true)}
                onMouseLeave={() => setDesktopServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-black hover:text-used font-medium"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={desktopServicesOpen}
                >
                  Services <ChevronDown size={16} />
                </button>
                <AnimatePresence>
                  {desktopServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-10 right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                    >
                      {servicesLinks.map((link) => (
                        <button
                          key={link.name}
                          onClick={() => handleClick(link.href)}
                          className="text-black text-left px-5 py-2 hover:text-used hover:bg-gray-50 w-full"
                          type="button"
                        >
                          {link.name}
                        </button>
                      ))}
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
            <button
              className="md:hidden text-used"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              type="button"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                ref={mobileMenuRef}
                id="mobile-menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="md:hidden mt-2 pt-4 border-t border-gray-200 flex flex-col gap-2 bg-white/40 backdrop-blur-md rounded-xl shadow-lg"
              >
                <NestedMenuLinks links={navLinks} handleClick={handleClick} isMobile />
                <NestedMenuLinks
                  links={csiLinks}
                  handleClick={handleClick}
                  isMobile
                  openIndex={mobileCsiOpenIdx}
                  setOpenIndex={setMobileCsiOpenIdx}
                />
                <div>
                  <button
                    className="flex justify-between items-center px-4 py-3 font-medium text-black hover:text-used transition-colors duration-200 w-full"
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    type="button"
                  >
                    Services
                    <motion.span
                      animate={{
                        rotate: mobileServicesOpen ? 180 : 0,
                      }}
                      transition={{ duration: 0.25 }}
                      className="ml-2"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col bg-white border-t border-gray-200 rounded-b-lg overflow-hidden"
                      >
                        {servicesLinks.map((link) => (
                          <button
                            key={link.name}
                            onClick={() => handleClick(link.href)}
                            className="text-black text-left px-6 py-2 hover:text-used hover:bg-gray-50 w-full"
                            type="button"
                          >
                            {link.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Button
                  onClick={handleContactClick}
                  className="bg-used_dark text-white hover:bg-used_dark/80 hover:text-white font-semibold px-6 rounded-2xl mx-4 my-2 transition-colors duration-200"
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
