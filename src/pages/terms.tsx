import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService: React.FC = () => {
  return (
    <main className="bg-white text-black min-h-screen font-sans antialiased">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Terms of Service
            </h1>
            <p className="mt-4 text-lg text-gray-500 font-semibold">
              Rules for using our website and services
            </p>
            <p className="mt-2 text-sm text-gray-400">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          {/* Content */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 text-gray-700 leading-relaxed space-y-10">
            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                1. Agreement to Terms
              </h2>
              <p>
                By using our Services, you agree to these Terms. If you do not agree, 
                please do not use our website, products, or services. These Terms govern 
                your access and use of our site and services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                2. Intellectual Property Rights
              </h2>
              <p>
                All content, features, and functionality on our website are the exclusive 
                property of M&A Construction and its licensors. You may not use our trademarks 
                or branding without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                3. User Conduct
              </h2>
              <p>
                You agree not to use our Services for illegal, harmful, or prohibited purposes. 
                You are responsible for your activity on the website and must not post or distribute 
                content that is unlawful, threatening, abusive, defamatory, deceptive, or fraudulent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                4. Limitation of Liability
              </h2>
              <p>
                M&A Construction and its affiliates are not liable for any indirect, incidental, 
                special, consequential, or punitive damages, including loss of profits, data, or goodwill, 
                resulting from your use of the Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                5. Contact Us
              </h2>
              <p>
                For questions regarding these Terms, contact us at{" "}
                <a
                  href="mailto:hello@mandaconstruction.in"
                  className="text-primary hover:underline font-medium"
                >
                  hello@mandaconstruction.in
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default TermsOfService;
