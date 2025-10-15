import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, ClipboardCheck, FileText, Boxes, TrendingDown, Headphones } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Quantity Takeoff & Estimation",
    description: "Detailed trade-wise takeoffs across architectural, structural, MEP, roofing, and finishes with precision accuracy.",
    color: "from-gold to-gold"
  },
  {
    icon: ClipboardCheck,
    title: "Project Controls Management",
    description: "Comprehensive submittal tracking, RFI coordination, cost reports, and change-order management systems.",
    color: "from-gold to-gold"
  },
  {
    icon: FileText,
    title: "Bid Management & ITB Support",
    description: "Professional proposal creation, detailed scope analysis, quote comparison, and complete bid tabulation.",
    color: "from-gold to-gold"
  },
  {
    icon: Boxes,
    title: "BIM Coordination & 3D Modeling",
    description: "Advanced clash detection, model validation, and stunning 3D visualization using Revit and Navisworks.",
    color: "from-gold to-gold"
  },
  {
    icon: TrendingDown,
    title: "Value Engineering & Cost Optimization",
    description: "Strategic material and design alternatives engineered for maximum cost efficiency without compromising quality.",
    color: "from-gold to-gold"
  },
  {
    icon: Headphones,
    title: "Remote Estimating & Outsourcing Support",
    description: "Flexible online support for contractors with scalable project demands and 24/7 availability.",
    color: "from-gold to-gold"
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-16 bg-gradient-to-b from-secondary/20 via-white to-background overflow-hidden">
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-transparent"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      {/* Floating Accent Elements */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-used_dark uppercase tracking-widest px-4 py-2 bg-used_dark/10 rounded-full">
              What We Offer
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-charcoal">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-used_dark to-used_dark">Services</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-gold via-used/30 to-used mx-auto rounded-full mb-6" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Comprehensive construction support solutions tailored to your project needs with precision and excellence
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 hover:shadow-hover transition-all duration-700 hover:-translate-y-3 border-2 border-gray-100 hover:border-primary/20 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Animated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-gold/0 to-primary/0 opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
              
              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <CardHeader className="relative pb-4">
                <div className={`w-16 h-16 bg-transparent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg group-hover:shadow-xl`}>
                  <service.icon className="h-8 w-8 text-used_dark" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-xl md:text-2xl font-bold text-charcoal group-hover:text-primary transition-colors duration-500 leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-base leading-relaxed text-foreground/80 font-normal">
                  {service.description}
                </CardDescription>
                
                {/* Learn More Indicator */}
                <div className="mt-4 flex items-center text-used font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-0 group-hover:translate-x-2">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg text-muted-foreground mb-6">
            Can't find what you're looking for? We offer custom solutions tailored to your needs.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-steel text-gray font-bold rounded-full hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl"
          >
            <span>Discuss Your Project</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="orange" viewBox="0 0 24 24" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
