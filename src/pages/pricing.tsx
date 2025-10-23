import Navbar from "@/components/Navbar";
import ContactSection from "@/components/contactTrade";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const PricingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToQuote = () => {
    const contactSection = document.getElementById("whychooseus");
    if (contactSection) {
      const y = contactSection.getBoundingClientRect().bottom + window.scrollY;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section id="hero" className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-100" />
          <div className="relative z-10 container mx-auto px-4 py-36 text-center max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Transparent, Competitive Pricing
            </h1>
            <p
              className={`text-lg text-gray-700 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              Pricing depends on project size, scope of work, and complexity, but is definitely competitive compared to a full-time estimator or market rate takeoff services.
            </p>
            <div
              className={`mt-10 flex justify-center transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <Button
                size="lg"
                onClick={scrollToQuote}
                className="group relative bg-primary hover:bg-primary/90 text-white text-base px-8 py-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </Button>
            </div>
          </div>
        </section>

        <section id='whychooseus' className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle>Why choose our estimating services?</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Benefit from experienced estimators delivering accurate takeoffs efficiently and transparently.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>Fast turnaround times tailored to your needs.</li>
                  <li>Competitive pricing based on your project’s scope and complexity.</li>
                  <li>Clear, detailed deliverables aligned with industry standards.</li>
                  <li>Flexible communication with your project team.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;