import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppChat = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in your Construction services."
    );
    const phoneNumber = "+919544102970";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            key="right"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-8 z-50 flex flex-col items-center"
          >
            <WhatsAppImageButton onClick={handleWhatsAppClick} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 left-8 z-50 flex flex-col items-center"
          >
            <WhatsAppImageButton onClick={handleWhatsAppClick} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global style for shaking animation */}
      <style>{`
        @keyframes alarmTwirl {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(-15deg); }
          30% { transform: rotate(15deg); }
          45% { transform: rotate(-10deg); }
          60% { transform: rotate(10deg); }
          75% { transform: rotate(-5deg); }
          90% { transform: rotate(5deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-alarm {
          animation: alarmTwirl 1.2s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>
    </>
  );
};


const WhatsAppImageButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="
      flex flex-col items-center justify-center
      rounded-full
      cursor-pointer
      transition-transform duration-300
      gap-2
    "
    aria-label="Chat on WhatsApp"
  >
    <img
      src="/whatsapp.png"
      alt="WhatsApp"
      className="w-14 h-14 animate-alarm"
    />
    <span className="text-sm font-medium text-black bg-white/80">Chat with us</span>
  </button>
);


export default WhatsAppChat;
