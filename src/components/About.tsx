import { Building2, Users, Globe2, Zap } from "lucide-react";

const features = [
  { icon: Building2, title: "Industry Expertise", desc: "10+ years in construction" },
  { icon: Users, title: "Expert Team", desc: "Certified professionals" },
  { icon: Globe2, title: "Nationwide Coverage", desc: "Coast-to-coast service" },
  { icon: Zap, title: "Fast Turnaround", desc: "Quick & accurate delivery" }
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 bg-gradient-to-b from-background via-white to-secondary/20 overflow-hidden"
    >
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

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-used_dark uppercase tracking-widest px-4 py-2 bg-used_dark/10 rounded-full">
              Who We Are
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-charcoal">
            About the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-used_dark to-used_dark">
              Company
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-gold via-used/30 to-used mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="md:flex md:items-center md:space-x-10 mb-16">
          {/* Left Side - Text */}
          <div className="md:w-1/2 space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              &nbsp;&nbsp;&nbsp;&nbsp; M&A Construction Services LLC is a construction support and cost-estimating company delivering comprehensive estimating, BIM coordination, and project control services to general contractors, subcontractors, and developers across the United States.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              &nbsp;&nbsp;&nbsp;&nbsp; We specialize in accurate, data-driven cost analysis across all trades — civil, structural, MEP, and finishes. Our digital-first workflow leverages industry-leading tools like <strong>PlanSwift, Bluebeam, Revit, and MS Project</strong> to ensure accuracy, speed, and transparency in every project.
            </p>

            {/* Blockquote */}
            <blockquote className="relative border-l-4 border-yellow-500 pl-6 py-4 italic text-gray-800 bg-yellow-50 rounded-lg">
              Whether it's a single-trade takeoff or full project estimation, we deliver tailored, on-time, and cost-effective solutions — <strong>entirely online</strong>.
            </blockquote>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1742112125567-3e8967bad60f"
              alt="Construction Team"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Feature Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white rounded-2xl shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-steel rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <feature.icon className="h-7 w-7 text-used" />
                </div>
                <h3 className="font-bold text-lg text-charcoal mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
