import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import {
  CheckCircle2,
  ArrowLeft,
  Upload,
  Clock,
  DollarSign,
  FileText,
} from "lucide-react";

type CsiTradePageProps<T> = {
  data: T;
};

function CsiTradePage<T extends Record<string, any>>({ data }: CsiTradePageProps<T>) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const {
    hero,
    overview,
    stages,
    services,
    materials,
    approach,
    deliverables,
    software,
    portfolio,
    processSteps,
    faq,
    testimonials,
    contactInfo,
  } = data;

  return (
    <div className="text-gray-700 font-sans antialiased min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-primary-foreground/90 hover:text-primary-foreground mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        {/* Smaller Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-[hsl(210,100%,35%)] text-primary-foreground rounded-lg p-8 mb-16 shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">
            {hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-4">
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={hero.ctaLink}
              className="bg-amber-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1"
            >
              {hero.ctaText}
            </a>
          <span className="text-lg font-medium">{hero.phone}</span>
        </div>
      </section>

      {/* Overview */}
        <section className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">{overview.title || "Overview"}</h2>
          <p className="text-gray-700 text-lg">{overview.text || overview}</p>
      </section>

      {/* Stages */}
      {stages?.length > 0 && (
          <section className="bg-slate-50 py-12 px-6 rounded-lg shadow mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
              Project Stages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {stages.map((stage: any, i: number) => (
                <Card
                key={i}
                  className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1"
              >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {stage.name}
                    </h3>
                    <p className="text-gray-700">{stage.description}</p>
                  </CardContent>
                </Card>
              ))}
              </div>
        </section>
      )}

        {/* Services */}
        {services?.length > 0 && (
          <section className="py-12 px-6 mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service: string, i: number) => (
                <Card
                key={i}
                  className="text-center hover:shadow-md transition-shadow duration-300 hover:-translate-y-1"
              >
                  <CardContent className="pt-6 pb-8 px-6">
                    <p className="text-gray-700 text-lg font-medium">{service}</p>
                  </CardContent>
                </Card>
            ))}
          </div>
        </section>
      )}

        {/* Materials */}
        {materials?.length > 0 && (
          <section className="bg-slate-50 py-12 px-6 rounded-lg shadow mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Materials</h2>
            <ul className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {materials.map((material: string, i: number) => (
                <li
                  key={i}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 text-center text-gray-700"
                >
                  {material}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Approach */}
        {approach?.length > 0 && (
          <section className="py-12 px-6 mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Approach</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
              {approach.map((step: string, i: number) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </section>
        )}

        {/* Deliverables */}
        {deliverables?.length > 0 && (
          <section className="bg-slate-50 py-12 px-6 rounded-lg shadow mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Deliverables</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {deliverables.map((item: string, i: number) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 text-center text-gray-700"
                >
                  {item}
    </div>
              ))}
            </div>
          </section>
        )}

        {/* Portfolio */}
        {portfolio?.length > 0 && (
          <section className="py-12 px-6 mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Portfolio</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {portfolio.map((item: any, i: number) => (
                <Card
                  key={i}
                  className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{item.address}</p>
                    <p className="text-gray-700">{item.scope}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Process Steps */}
        {processSteps?.length > 0 && (
          <section className="py-12 px-6 mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
              How to Get an Estimate
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
              {processSteps.map((step: string, i: number) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </section>
        )}

        {/* FAQ */}
        {faq?.length > 0 && (
          <section className="bg-slate-50 py-12 px-6 rounded-lg shadow mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">FAQ</h2>
            <div className="space-y-4">
              {faq.map((item: any, i: number) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center font-medium text-gray-800"
                    aria-expanded={openFAQ === i}
                  >
                    {item.question}
                    <span className="text-xl">{openFAQ === i ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFAQ === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-4 bg-white text-gray-700"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default CsiTradePage;
