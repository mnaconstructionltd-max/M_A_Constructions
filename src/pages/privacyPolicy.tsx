import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="bg-white text-black min-h-screen font-sans antialiased">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-12">
          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black">
              Privacy{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 font-semibold">
              How we protect your trust and data
            </p>
            <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          {/* Content */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 text-gray-700 leading-relaxed">
            <p className="text-sm text-gray-400 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-3">
              1. Introduction
            </h2>
            <p>
              Welcome to <strong>M&A Construction</strong> ("we," "our," or "us"). 
              Your privacy is very important to us. This Privacy Policy explains 
              how we collect, use, and protect the information you share with us 
              when using our website or services.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-3">
              2. Information We Collect
            </h2>
            <p>
              We may collect personal information you provide voluntarily, such 
              as your name, email, phone number, or project details when you contact 
              us, request a quote, or fill out forms on our site. We also collect 
              non-personal information such as browser type, pages visited, and 
              website interactions to improve your experience.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-3">
              3. How We Use Your Information
            </h2>
            <p>
              The information you provide is used to respond to your inquiries, 
              provide requested services, send updates or promotional material, 
              and improve our website. We ensure your data is only used for 
              legitimate business purposes and with your consent where required.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-3">
              4. Sharing Your Information
            </h2>
            <p>
              We respect your privacy and do not sell your data. Your information 
              may only be shared with trusted partners or service providers to deliver 
              our services, or if required by law to protect legal rights and obligations.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-3">
              5. Security
            </h2>
            <p>
              We implement reasonable administrative, technical, and physical 
              measures to protect your data. However, no system is completely 
              secure. By using our site, you acknowledge that absolute security 
              cannot be guaranteed.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-3">
              6. Cookies & Tracking
            </h2>
            <p>
              Our website may use cookies and similar technologies to enhance 
              functionality, analyze traffic, and provide a better browsing 
              experience. You can control cookies through your browser settings.
            </p>

            <h2 className="text-xl font-bold text-black mt-8 mb-3">
              7. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or how we handle 
              your data, please reach out at{" "}
              <a
                href="mailto:hello@mandaconstruction.in"
                className="text-primary hover:underline font-medium"
              >
                hello@mandaconstruction.in
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
