import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Eye, X, Download } from "lucide-react";
import BackToTop from "@/components/BackToTop";

type Estimation = {
  name: string;
  date: string;
  pdfUrl: string;
  previewImg?: string;
};

const estimations: Estimation[] = [
  {
    name: "Residential Multi-Family Takeoff",
    date: "April 2024",
    pdfUrl: "/estimations/sample-estimate-01.pdf",
    previewImg: "/estimations/thumb-01.png"
  },
  {
    name: "Commercial Retrofit Estimate",
    date: "March 2024",
    pdfUrl: "/estimations/sample-estimate-02.pdf",
    previewImg: "/estimations/thumb-02.png"
  },
  {
    name: "School Renovation - Electrical",
    date: "February 2024",
    pdfUrl: "/estimations/sample-estimate-03.pdf",
    previewImg: "/estimations/thumb-03.png"
  },
  {
    name: "Healthcare Facility - General Trades",
    date: "January 2024",
    pdfUrl: "/estimations/sample-estimate-04.pdf",
    previewImg: "/estimations/thumb-04.png"
  }
];

const EstimationPreviewModal = ({
  estimation,
  onClose
}: {
  estimation: Estimation;
  onClose: () => void;
}) => (
  <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center transition-all duration-500">
    <div className="relative bg-white max-w-2xl w-full rounded-2xl shadow-2xl p-0 animate-fade-in-up overflow-hidden">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-0 right-0 m-4 z-10 p-2 rounded-full hover:bg-black/10 transition"
        aria-label="Close Preview"
      >
        <X className="h-6 w-6 text-charcoal" />
      </button>
      {/* Header */}
      <div className="flex items-center gap-3 bg-gradient-to-br from-gold/5 via-gold/10 to-yellow-100/20 px-7 py-5 border-b border-gold/10">
        <FileText className="h-6 w-6 text-gold" />
        <div>
          <div className="text-lg font-bold text-charcoal">{estimation.name}</div>
          <div className="text-xs text-gray-400">{estimation.date}</div>
        </div>
      </div>
      {/* PDF Preview */}
      <div className="p-6 flex flex-col items-center gap-4">
        {/* Show preview image if available, otherwise fallback to icon */}
        {estimation.previewImg ? (
          <img
            src={estimation.previewImg}
            alt="Estimation Preview"
            className="rounded shadow-lg max-h-80 border border-gold/10 bg-white object-contain"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-64 bg-slate-50 rounded">
            <FileText className="h-16 w-16 text-gold/80" />
          </div>
        )}
        <a
          href={estimation.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-7 py-3 rounded-full bg-used_dark hover:bg-used_dark/90 text-white font-semibold transition shadow-md"
        >
          <Download className="h-5 w-5" />
          View Full PDF
        </a>
      </div>
    </div>
    {/* Backdrop for click outside to close */}
    <div
      className="fixed inset-0 z-40"
      onClick={onClose}
      aria-label="Close"
    ></div>
  </div>
);

const EstimationsPage = () => {
  const [selectedEstimation, setSelectedEstimation] = useState<Estimation | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navbar />
      <main>
        <section className="relative flex flex-col items-center pt-32 pb-14 min-h-[65vh] overflow-hidden">
          {/* Background + Grid overlay like Hero */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img src="/bg5.png" alt="Blueprint" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="h-full w-full bg-grid-pattern"></div>
            </div>
          </div>
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/30 rounded-full mb-6 backdrop-blur-sm">
                <FileText className="h-4 w-4 text-gold" />
                <span className="text-sm font-semibold text-gold">Sample Estimations</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-4">
                Previous <span className="text-used">Estimations</span>
              </h1>
              <p className="text-lg md:text-xl text-gray/90 mb-1 font-light leading-relaxed">
                Browse real-world samples of estimation and takeoff reports delivered by our expert team.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {estimations.map((est, i) => (
                <Card
                  key={est.pdfUrl}
                  className="group relative bg-gradient-to-br from-white to-gray-50 hover:shadow-hover border-2 border-gray-100 hover:border-gold/40 transition-all duration-700 hover:-translate-y-2 overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.13}s` }}
                >
                  <CardHeader className="flex flex-row items-center gap-4 mb-0 pb-2">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shadow">
                      <FileText className="h-7 w-7 text-used" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-charcoal">
                        {est.name}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-400">
                        {est.date}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Preview Image Thumbnail */}
                    <div className="mt-2 mb-1 flex justify-center">
                      {est.previewImg ? (
                        <img
                          src={est.previewImg}
                          alt={est.name}
                          className="rounded-lg border border-gold/10 w-full h-32 object-cover object-left-top shadow"
                        />
                      ) : (
                        <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                          <FileText className="h-9 w-9 text-gold/50" />
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <Button
                        variant="default"
                        className="bg-used_dark hover:bg-used_dark/90 px-6 py-2 group"
                        onClick={() => setSelectedEstimation(est)}
                      >
                        <Eye className="h-5 w-5 mr-2" /> Preview
                      </Button>
                      <a
                        href={est.pdfUrl}
                        download
                        className="inline-flex items-center gap-1 text-gold font-semibold px-3 py-1.5 rounded transition hover:bg-gold/10 text-sm"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* Floating Accent */}
          <div className="absolute top-[60%] right-16 w-36 h-36 border-2 border-gold/20 rounded-xl animate-pulse" />
        </section>
                            <BackToTop />
      </main>
      <Footer />
      {/* Mega Dialog for Preview */}
      {selectedEstimation && (
        <EstimationPreviewModal
          estimation={selectedEstimation}
          onClose={() => setSelectedEstimation(null)}
        />
      )}
    </div>
  );
};

export default EstimationsPage;