import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChat = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your Construction services.");
    const phoneNumber = "13099899951";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-8 z-50 flex flex-col items-center"
    >
      {/* WhatsApp Icon Button */}
      <button
        onClick={handleWhatsAppClick}
        className="
          text-[#25D366]
          p-1
          rounded-full
          cursor-pointer
          transition-transform duration-300
          animate-alarm
        "
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={50} />
      </button>

      {/* Alarm-style Twirl Animation */}
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
    </motion.div>
  );
};

export default WhatsAppChat;
