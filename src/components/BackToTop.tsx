import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-4 z-50
            flex flex-col items-center justify-center
            text-gray-800
            transition-transform duration-300
          "
        >
          {/* Shaking arrow animation */}
          <ArrowUp
            className="w-8 h-8 animate-bounce-slow text-used"
          />
          <span className="text-xs mt-1 tracking-wide">Back to Top</span>

          <style>{`
            @keyframes shake {
              0%, 100% { transform: translateY(0); }
              25% { transform: translateY(-4px); }
              50% { transform: translateY(4px); }
              75% { transform: translateY(-4px); }
            }
            .animate-bounce-slow {
              animation: shake 1.5s infinite ease-in-out;
            }
          `}</style>
        </button>
      )}
    </>
  );
};

export default BackToTop;
