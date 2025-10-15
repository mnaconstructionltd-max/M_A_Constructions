import { Mail, Phone, Globe, Linkedin, Instagram, Facebook } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
    const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className="relative bg-gradient-to-br from-[#0d1117] via-[#0d1117] to-[#1a1f29] text-white py-16 overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
                          <span
              className="flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src="/logo.png"
                alt="M&A Construction Logo"
                className="h-20 md:h-24 w-auto"
              />
            </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Precision-driven estimating and project management services for
              modern construction firms.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-primary font-bold mb-3 uppercase tracking-wide text-sm">
              Services
            </h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Quantity Takeoff & Estimation</li>
              <li>Project Controls Management</li>
              <li>Bid Management & ITB Support</li>
              <li>BIM Coordination & 3D Modeling</li>
              <li>Value Engineering</li>
              <li>Remote Estimating Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-primary font-bold mb-3 uppercase tracking-wide text-sm">
              Contact Info
            </h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-used_dark" /> +1 (954) 410-2970
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-used_dark" /> mnaconstruction.ltd@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-used_dark" /> www.mnaconstruction.com
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-primary font-bold mb-3 uppercase tracking-wide text-sm">
              Follow Us
            </h4>
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-used_dark/60 transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-used_dark/60 transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-used_dark/60 transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <p className="text-white/70 text-sm">
              Serving clients nationwide across the United States.
            </p>
          </div>
          
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {currentYear} M&A Construction Services LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacyPolicy" className="hover:text-used_dark transition">Privacy Policy</a>
            <a href="/cookies" className="hover:text-used_dark transition">Cookies</a>
            <a href="/terms" className="hover:text-used_dark transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
