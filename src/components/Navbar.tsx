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
  { name: "Pricing", href: "/pricing" },

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
    href: "#",
    subLinks: [
      { name: "Drywall", href: "/csi-trades/drywall" },
      { name: "Flooring", href: "/csi-trades/flooring" },
      { name: "Painting", href: "/csi-trades/painting" },
    ],
  },
  {
    name: "Lumber",
    href: "#",
    subLinks: [
      { name: "Framing", href: "/csi-trades/framing" },
      { name: "Carpentry", href: "/csi-trades/carpentry" },
      { name: "Millwork", href: "/csi-trades/millwork" },
    ],
  },
  {
    name: "MEP",
    href: "#",
    subLinks: [
      { name: "Mechanical", href: "/csi-trades/mechanical" },
      { name: "Electrical", href: "/csi-trades/electrical" },
      { name: "Plumbing", href: "/csi-trades/plumbing" },
      { name: "Duct", href: "/csi-trades/duct" },
      { name: "Piping", href: "/csi-trades/piping" },
      { name: "HVAC", href: "/csi-trades/hvac" },
      { name: "Gutter", href: "/csi-trades/gutter" },
    ],
  },
  {
    name: "Thermal Moisture Protection",
    href: "#",
    subLinks: [
      { name: "Roofing", href: "/csi-trades/roofing" },
      { name: "Insulation", href: "/csi-trades/insulation" },
      { name: "Waterproofing", href: "/csi-trades/waterproofing" },
      { name: "Firestopping", href: "/csi-trades/firestopping" },
    ],
  },
  {
    name: "Openings",
    href: "#",
    subLinks: [
      { name: "Doors & Windows", href: "/csi-trades/doors-windows" },
    ],
  },
  {
    name: "Sitework",
    href: "#",
    subLinks: [
      { name: "Landscaping", href: "/csi-trades/landscaping" },
    ],
  },
  { name: "Concrete", href: "/csi-trades/concrete" },
  { name: "Masonry", href: "/csi-trades/masonry" },
  { name: "Structural Steel", href: "/csi-trades/structural-steel" },
];

interface NestedMenuLinksProps {
  links: NavLink[];
  handleClick: (href: string) => void;
  isMobile?: boolean;
  openIndex?: number | null;
  setOpenIndex?: (idx: number | null) => void;
  openSubIndex?: number | null;
  setOpenSubIndex?: (idx: number | null) => void;
}

const NestedMenuLinks = ({
  links,
  handleClick,
  isMobile = false,
  openIndex,
  setOpenIndex,
  openSubIndex,
  setOpenSubIndex,
}: NestedMenuLinksProps) => {
  const [localOpenIndex, setLocalOpenIndex] = useState<number | null>(null);
  const [localOpenSubIndex, setLocalOpenSubIndex] = useState<number | null>(null);

  const usedOpenIndex = openIndex !== undefined ? openIndex : localOpenIndex;
  const usedSetOpenIndex = setOpenIndex !== undefined ? setOpenIndex : setLocalOpenIndex;

  const usedOpenSubIndex = openSubIndex !== undefined ? openSubIndex : localOpenSubIndex;
  const usedSetOpenSubIndex = setOpenSubIndex !== undefined ? setOpenSubIndex : setLocalOpenSubIndex;

  return (
    <div className={`${isMobile ? "flex flex-col" : "flex flex-col"}`}>
      {links.map((link, index) => (
        <div key={link.name} className="relative group">
          <button
            onClick={() => {
              if (link.subLinks) {
                if (isMobile) {
                  if (usedOpenIndex === index) {
                    usedSetOpenIndex(null);
                    usedSetOpenSubIndex(null);
                  } else {
                    usedSetOpenIndex(index);
                    usedSetOpenSubIndex(null);
                  }
                } else {
                  // desktop handled elsewhere
                }
              } else {
                handleClick(link.href);
                            if (isMobile) {
                              usedSetOpenIndex(null);
                  usedSetOpenSubIndex(null);
                            }
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
                  rotate: usedOpenIndex === index ? 270 : 0,
                }}
                      transition={{ duration: 0.15 }}
                      className="ml-2"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                <ChevronDown size={14} />
                    </motion.span>
                    )}
          </button>
          {/* submenu level 1 */}
          {link.subLinks && usedOpenIndex === index && (
            <AnimatePresence>
              {isMobile ? (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col bg-white border-l border-gray-200 ml-4"
                >
                  {link.subLinks.map((sub, sidx) => (
                    <div key={sub.name} className="relative group">
                      <button
                        onClick={() => {
                          if (sub.subLinks) {
                            if (usedOpenSubIndex === sidx) {
                              usedSetOpenSubIndex(null);
                            } else {
                              usedSetOpenSubIndex(sidx);
                            }
                          } else {
                            handleClick(sub.href);
                            usedSetOpenIndex(null);
                            usedSetOpenSubIndex(null);
                          }
                        }}
                        className="text-black text-left px-4 py-2 hover:text-used hover:bg-gray-50 flex justify-between items-center w-full"
                        type="button"
                        aria-haspopup={!!sub.subLinks}
                        aria-expanded={usedOpenSubIndex === sidx}
                      >
                        {sub.name}
                        {sub.subLinks && (
                          <motion.span
                            animate={{
                              rotate: usedOpenSubIndex === sidx ? 180 : 0,
                            }}
                            transition={{ duration: 0.25 }}
                            className="ml-2"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <ChevronDown size={14} />
                          </motion.span>
            )}
                      </button>
                      {/* submenu level 2 */}
                      {sub.subLinks && usedOpenSubIndex === sidx && (
                        <AnimatePresence>
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col bg-white border-l border-gray-200 ml-4"
                          >
                            {sub.subLinks.map((nested) => (
                              <button
                                key={nested.name}
                                onClick={() => {
                                  handleClick(nested.href);
                                  usedSetOpenIndex(null);
                                  usedSetOpenSubIndex(null);
                                }}
                                className="text-black text-left px-6 py-2 hover:text-used hover:bg-gray-50 w-full"
                                type="button"
                              >
                                {nested.name}
                              </button>
                            ))}
                          </motion.div>
    </AnimatePresence>
                      )}
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-0 left-full ml-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 flex flex-col"
                  onMouseEnter={() => usedSetOpenIndex(index)}
                  onMouseLeave={() => usedSetOpenIndex(null)}
                >
                  {link.subLinks.map((sub, sidx) => (
                    <div key={sub.name} className="relative group">
                      <button
                        onClick={() => {
                          if (sub.subLinks) {
                            setOpenSubIndex && setOpenSubIndex(sidx);
                          } else {
                            handleClick(sub.href);
                          }
                        }}
                        onMouseEnter={() => {
                          if (sub.subLinks) setOpenSubIndex && setOpenSubIndex(sidx);
                        }}
                        onMouseLeave={() => {
                          if (sub.subLinks) setOpenSubIndex && setOpenSubIndex(null);
                        }}
                        className="text-black text-left px-4 py-2 hover:text-used hover:bg-gray-50 flex justify-between items-center w-full"
                        type="button"
                        aria-haspopup={!!sub.subLinks}
                        aria-expanded={usedOpenSubIndex === sidx}
                      >
                        {sub.name}
                        {sub.subLinks && (
                          <motion.span
                            animate={{
                              rotate: usedOpenSubIndex === sidx ? 180 : 0,
                            }}
                            transition={{ duration: 0.25 }}
                            className="ml-2"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <ChevronDown size={14} />
                          </motion.span>
                        )}
                      </button>
                      {sub.subLinks && usedOpenSubIndex === sidx && (
                        <AnimatePresence>
                          <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-0 left-full w-48 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col z-50"
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

  // Mobile state for CSI and Services nested menus
  const [mobileCsiOpen, setMobileCsiOpen] = useState(false);
  const [mobileCsiOpenIdx, setMobileCsiOpenIdx] = useState<number | null>(null);
  const [mobileCsiSubOpenIdx, setMobileCsiSubOpenIdx] = useState<number | null>(null);

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
    setMobileCsiOpen(false);
    setMobileCsiOpenIdx(null);
    setMobileCsiSubOpenIdx(null);
    setMobileServicesOpen(false);
  };

  const handleContactClick = () => {
    window.open("tel:+19544102970");
        setIsMobileMenuOpen(false);
    setMobileCsiOpen(false);
    setMobileCsiOpenIdx(null);
        setMobileCsiSubOpenIdx(null);
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
        setMobileCsiOpen(false);
        setMobileCsiOpenIdx(null);
        setMobileCsiSubOpenIdx(null);
        setMobileServicesOpen(false);
      }
};

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDesktopCsiOpen(false);
        setDesktopServicesOpen(false);
        setMobileCsiOpen(false);
        setMobileCsiOpenIdx(null);
        setMobileCsiSubOpenIdx(null);
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
                  onClick={() => handleClick("/csi-trades")}
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
                {/* NavLinks */}
                <NestedMenuLinks links={navLinks} handleClick={handleClick} isMobile />

                {/* CSI Trades top-level button */}
                <div>
                  <button
                    className="flex justify-between items-center px-4 py-3 font-medium text-black hover:text-used transition-colors duration-200 w-full"
                    onClick={() => {
                      setMobileCsiOpen((prev) => {
                        if (prev) {
                          setMobileCsiOpenIdx(null);
                          setMobileCsiSubOpenIdx(null);
                        }
                        return !prev;
                      });
                    }}
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={mobileCsiOpen}
                  >
                    CSI Trades
                    <motion.span
                      animate={{
                        rotate: mobileCsiOpen ? 180 : 0,
                      }}
                      transition={{ duration: 0.25 }}
                      className="ml-2"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {mobileCsiOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col bg-white border-t border-gray-200 rounded-b-lg overflow-hidden"
                      >
                        <NestedMenuLinks
                          links={csiLinks}
                          handleClick={handleClick}
                          isMobile
                          openIndex={mobileCsiOpenIdx}
                          setOpenIndex={(idx) => {
                            setMobileCsiOpenIdx(idx);
                            if (idx === null) setMobileCsiSubOpenIdx(null);
                          }}
                          openSubIndex={mobileCsiSubOpenIdx}
                          setOpenSubIndex={setMobileCsiSubOpenIdx}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Services Dropdown modeled similarly*/}
                <div>
                  <button
                    className="flex justify-between items-center px-4 py-3 font-medium text-black hover:text-used transition-colors duration-200 w-full"
                    onClick={() => {
                      setMobileServicesOpen((prev) => {
                        if (prev) {
                          // closing top, reset any deeper states if added
                        }
                        return !prev;
                      });
                    }}
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
