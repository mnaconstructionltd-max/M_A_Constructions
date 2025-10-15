import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList } from "lucide-react";

const ProjectControls: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      title: "Documentation Control",
      desc: "Manage all project documents efficiently to ensure accuracy and compliance.",
      img: "/placeholder-docs.png",
      icon: ClipboardList,
    },
    {
      title: "RFI & Submittal Tracking",
      desc: "Track Requests for Information and submittals to maintain project schedule and clarity.",
      img: "/placeholder-rfi.png",
      icon: ArrowRight,
    },
    {
      title: "Change Orders & Cost Reporting",
      desc: "Monitor and report change orders and costs to improve budget control.",
      img: "/placeholder-cost.png",
      icon: ClipboardList,
    },
  ];

  return (
    <main className="bg-white text-black min-h-screen font-sans antialiased">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
        <div className="relative z-10 text-center px-4 py-20 max-w-5xl mx-auto">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
          >
            Project Controls Management
          </h1>
          <p
            className={`text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Documentation control, submittal tracking, RFI coordination, change-order review, and cost reporting for improved budget control.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("features")}
            className="group relative bg-primary text-white px-10 py-5 font-semibold rounded-2xl hover:scale-105 transition-transform duration-500"
          >
            Learn More
            <ArrowRight className="ml-2 inline h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Structured management solutions to keep your project on track and within budget.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105 duration-500"
            >
              <div className="bg-primary/10 rounded-full p-4 mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center mb-4">{feature.desc}</p>
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to streamline your project?</h2>
          <p className="mb-8 text-lg">
            Contact us today for professional project control management services.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-white text-primary px-10 py-5 font-semibold rounded-2xl hover:scale-105 transition-transform duration-500"
          >
            Get a Quote
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ProjectControls;
