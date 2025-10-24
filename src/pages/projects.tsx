import { FileText, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";


const SampleProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative flex flex-col items-center pt-32 pb-14 min-h-[70vh] overflow-hidden">
          {/* Background overlays */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img src="/bg3.png" alt="Blueprint" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="h-full w-full bg-grid-pattern"></div>
            </div>
          </div>
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/30 rounded-full mb-8 backdrop-blur-sm">
              <FileText className="h-4 w-4 text-gold" />
              <span className="text-sm font-semibold text-gold">Sample Projects</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-4 text-center">
              Projects <span className="text-used">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-gray/90 mb-8 font-light max-w-2xl text-center leading-relaxed">
              We are currently updating our project portfolio.&nbsp;
              <br className="hidden md:block" />
              <span className="text-gold font-semibold">
                Amazing project showcases are coming soon!
              </span>
            </p>
            <div className="w-full flex flex-col items-center mt-12">
              <div className="bg-gradient-to-br from-slate-100 via-white to-gray-50 shadow-xl border-2 border-gold/20 rounded-2xl max-w-2xl w-full py-16 flex flex-col items-center animate-fade-in-up transition">
                <Loader2 className="h-14 w-14 text-gold animate-spin mb-6" />
                <div className="text-2xl font-semibold text-gold mb-2">Coming Soon</div>
                <div className="text-gray-500 text-lg text-center px-4">
                  Our project gallery is being curated.<br />
                  Please check back soon for new updates and completed works!
                </div>
              </div>
            </div>
          </div>
          {/* Floating Accent */}
          <div className="absolute top-[60%] right-16 w-36 h-36 border-2 border-gold/20 rounded-xl animate-pulse" />
        </section>
                    <BackToTop />
      </main>
      <Footer />
    </div>
  );
};

export default SampleProjectsPage;