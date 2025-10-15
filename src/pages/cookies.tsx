import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicy: React.FC = () => {
  return (
    <main className="bg-white text-black min-h-screen font-sans antialiased">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Cookie Policy
            </h1>
            <p className="mt-4 text-lg text-gray-500 font-semibold">
              How we use cookies to improve your experience
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
                1. What Are Cookies?
              </h2>
              <p>
                Cookies are small text files stored on your device that help us 
                recognize your preferences and provide a better user experience. 
                We use cookies for functionality, analytics, fraud prevention, 
                and other legitimate purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                2. How We Use Cookies
              </h2>
              <p>
                Cookies help us understand how you interact with our website 
                and improve your experience. We use the following types of cookies:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>
                  <strong>Strictly necessary cookies:</strong> Required for 
                  the basic operation of our website.
                </li>
                <li>
                  <strong>Analytical/performance cookies:</strong> Help us 
                  count visitors and understand navigation patterns.
                </li>
                <li>
                  <strong>Functionality cookies:</strong> Recognize you when 
                  you return to our website and remember your preferences.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                3. Managing Cookies
              </h2>
              <p>
                You can manage or delete cookies using your browser settings. 
                Blocking essential cookies may limit your access to certain 
                features on our site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3">
                4. Contact Us
              </h2>
              <p>
                For any questions about this policy, contact us at{" "}
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

export default CookiePolicy;
