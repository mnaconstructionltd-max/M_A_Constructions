import { Button } from "@/components/ui/button";
import { ArrowRight, Award, TrendingUp, Shield } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { icon: Award, label: "Years of Excellence", value: "10+" },
    { icon: TrendingUp, label: "Projects Completed", value: "500+" },
    { icon: Shield, label: "Client Satisfaction", value: "98%" }
  ];

  return (
    <section id='hero' className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background with blueprint + grid overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-100">
        {/* Blueprint Image */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/bg.png"
            alt="Blueprint Background" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-grid-pattern"></div>
        </div>
      </div>

      {/* Floating geometric accents */}
      <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-steel-blue/20 rounded-lg animate-pulse"></div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center py-6">

          {/* Premium Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/30 rounded-full mb-8 backdrop-blur-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Award className="h-4 w-4 text-gold" />
            <span className="text-sm font-semibold text-gold">Premium Construction Services</span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-5xl md:text-7xl font-bold text-gray-900 mb-6`}>
            <span className="block mb-2">M&A Construction Services LLC</span>
          </h1>

          {/* Tagline */}
          <p className={`text-2xl md:text-4xl text-primary font-semibold mb-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Building Accuracy. Delivering Value.
          </p>

          {/* Description */}
          <p className={`text-lg md:text-xl text-gray/90 max-w-3xl mx-auto mb-12 font-light leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Precision-driven estimating and project management services for modern construction firms. Experience excellence in every estimate, accuracy in every detail.
          </p>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="group relative bg-used_dark hover:bg-used_dark/80 text-charcoal  text-lg px-10 py-7 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center text-white">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" />
              </span>
              <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="group border-2 border-white/80 text-black hover:bg-white hover:text-charcoal  text-lg px-10 py-7 transition-all duration-500 hover:scale-105 backdrop-blur-sm bg-white/5"
            >
              Explore Services
              <div className="ml-2 w-2 h-2 bg-used_dark rounded-full group-hover:animate-ping" />
            </Button>
          </div>


        </div>
      </div>
{/* Elegant Scroll Indicator */}
<div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-50 animate-bounce">
  <button
    onClick={() => {
      const nextSection = document.querySelector("#services");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }}
    className="focus:outline-none"
    aria-label="Scroll to next section"
  >
    <img
      src="/Scroll.svg"
      alt="Scroll Indicator"
      className="w-10 h-10 rotate-[315deg] cursor-pointer"
    />
  </button>
</div>

    </section>
  );
};

export default Hero;
