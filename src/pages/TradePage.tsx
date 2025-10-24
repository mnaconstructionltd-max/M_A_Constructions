import Navbar from "@/components/Navbar";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    CheckCircle2,
  UploadCloud,
  Clock,
  ShieldCheck,
  Award,
} from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { csiDivisions } from "../data/Csi_Divisions";

const CSITrades = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
};

  const filteredDivisions = useMemo(() => {
    if (!search) return [];
    const searchLower = search.toLowerCase();
    return csiDivisions.filter(trade =>
      trade.title.toLowerCase().includes(searchLower) ||
      trade.description.toLowerCase().includes(searchLower) ||
      (trade.id && trade.id.toLowerCase().includes(searchLower))
            );
  }, [search]);

  const handleSelect = (trade: typeof csiDivisions[0]) => {
    window.location.href = `/csi-trades/${trade.id}`;
};

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-100">
            <div className="absolute inset-0 opacity-10">
              <img
                src="/bg2.png"
                alt="Blueprint Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full bg-grid-pattern" />
            </div>
          </div>
          <div className="absolute bottom-16 right-10 w-24 h-24 border-2 border-primary/20 rounded-xl animate-pulse" />
          <div className="relative z-10 container mx-auto px-4 py-36">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="max-w-2xl">
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight">
                  CSI Estimating Services
                </h1>
                <p
                  className={`mt-4 text-lg text-gray-700 transition-all duration-1000 delay-200 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                  }`}
                >
                  Accurate quantity takeoffs and cost breakdowns across all Construction Specifications Institute divisions. Fast turnaround, transparent pricing, and deliverables ready for bid day.
                </p>
                <div
                  className={`mt-8 flex flex-col gap-4 sm:flex-row transition-all duration-1000 delay-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                  }`}
                >
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("contact")}
                    className="group relative bg-primary hover:bg-primary/90 text-white text-base px-8 py-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  >
                    <span className="relative z-10 flex items-center">
                      Upload Plans
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollToSection("divisions")}
                    className="group border-2 text-gray-900 hover:bg-white text-base px-8 py-6 transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm bg-white/70"
                  >
                    Browse CSI Divisions
                    <div className="ml-2 w-2 h-2 bg-used_dark rounded-full group-hover:animate-ping" />
                  </Button>
                </div>
                <div
                  className={`mt-10 grid gap-6 sm:grid-cols-3 transition-all duration-1000 delay-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                  }`}
                >
                  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="text-3xl font-semibold text-gray-900">24-48h</div>
                    <div className="text-sm text-gray-600">Turnaround time</div>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="text-3xl font-semibold text-gray-900">99%+</div>
                    <div className="text-sm text-gray-600">Accuracy reports</div>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="text-3xl font-semibold text-gray-900">50+</div>
                    <div className="text-sm text-gray-600">CSI divisions</div>
                  </div>
                </div>
              </div>
              <div
                className={`lg:justify-self-end transition-all duration-1000 delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
              >
                <Card className="border-gray-200 bg-white/90 backdrop-blur shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">How it works</CardTitle>
                    <CardDescription className="text-gray-600">
                      Clear, contractor-friendly deliverables tailored to your scope.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="rounded-md bg-primary/10 p-2 text-primary">
                        <UploadCloud className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">Upload drawings</div>
                        <p className="text-sm text-gray-600">
                          Share PDFs or links to your plan set with any alternates and addenda.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-md bg-primary/10 p-2 text-primary">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">Receive estimate</div>
                        <p className="text-sm text-gray-600">
                          Detailed takeoffs, labor hours, and cost breakdowns in 24-48 hours.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-md bg-primary/10 p-2 text-primary">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">Bid with confidence</div>
                        <p className="text-sm text-gray-600">
                          Unit-priced deliverables in Excel and PDF, aligned to CSI divisions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="divisions" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                CSI Division Takeoff Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional estimating services for all Construction Specifications Institute divisions
              </p>
            </div>
            <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <div className="relative w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Search CSI division or keyword..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 text-base focus:outline-none focus:ring-2 focus:ring-primary transition"
                  value={search}
                  onChange={e => {
                    setSearch(e.target.value);
                    setShowSuggestions(!!e.target.value);
                  }}
                  onFocus={() => setShowSuggestions(!!search)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                  autoComplete="off"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg width="18" height="18" fill="none" stroke="currentColor" className="inline" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </span>
                {showSuggestions && filteredDivisions.length > 0 && (
                  <ul className="absolute left-0 z-20 mt-2 w-full rounded-lg border border-gray-200 bg-white shadow-lg max-h-64 overflow-auto animate-fadeIn">
                    {filteredDivisions.slice(0, 10).map(trade => (
                      <li
                        key={trade.id}
                        className="px-4 py-2 hover:bg-primary/10 cursor-pointer flex items-center gap-2"
                        onMouseDown={() => {
                          handleSelect(trade);
                          setShowSuggestions(false);
                        }}
                      >
                        <span className={`w-5 h-5 flex items-center justify-center ${trade.color}`}>
                          <trade.icon className="w-4 h-4" />
                        </span>
                        <span className="font-medium">{trade.title}</span>
                        <span className="ml-auto text-xs text-gray-400">{trade.id}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {csiDivisions.map((trade) => {
                const Icon = trade.icon;
                return (
                  <Link key={trade.id} to={`/csi-trades/${trade.id}`}>
                    <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
                      <CardHeader>
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${trade.color}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {trade.title}
                        </CardTitle>
                        <CardDescription>{trade.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-sm text-used font-medium">
                          Learn more
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
                            <BackToTop />
      </main>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default CSITrades;
