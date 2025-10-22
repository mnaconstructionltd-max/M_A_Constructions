import { Phone, Mail, Globe } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/send_email.php", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Your request has been sent successfully!");
        form.reset();
      } else {
        toast.error("Error sending request: " + data.error);
      }
    } catch (err) {
      toast.error("Something went wrong: " + err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-white overflow-hidden">
      {/* Toast Container */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* 🔹 Soft Animated Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            animation: "gridMove 40s linear infinite",
          }}
        />
      </div>

      {/* 🔹 Floating Light Orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float-slow"
        style={{ animationDelay: "2s" }}
      />

      {/* 🔹 Content */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mt-6 text-charcoal">
            Lets Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-used_dark to-used_dark">
              Together
            </span>
          </h2>
          <p className="text-lg text-gray-600 mt-8">
            Get in touch for a free consultation and quote
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-100">
                <Phone className="w-6 h-6 text-used_dark mt-1" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">PHONE</p>
                  <p className="text-lg font-semibold text-gray-800">
                    +1 (954) 410-2970
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-100">
                <Mail className="w-6 h-6 text-used_dark mt-1" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">EMAIL</p>
                  <p className="text-lg font-semibold text-gray-800">
                    mnaconstruction.ltd@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-100">
                <Globe className="w-6 h-6 text-used_dark mt-1" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">WEBSITE</p>
                  <p className="text-lg font-semibold text-gray-800">
                    www.maconstruction-llc.com
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 border-l-4 border-used_dark bg-gray-50 mt-8 rounded-xl text-gray-700 text-sm">
              <span className="text-used_dark font-bold">Note:</span> We operate entirely online, providing nationwide support for
              estimating and project management.
            </div>

                        {/* Map placeholder */}
            <div className="h-64 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13729333.939770471!2d-107.70706006677838!3d39.38823628388877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2z4LCv4LGB4LCo4LGG4LGW4LCf4LGG4LCh4LGNIOCwuOCxjeCwn-Cxh-Cwn-CxjeCwuOCxjQ!5e1!3m2!1ste!2sin!4v1761072185854!5m2!1ste!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location map"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 backdrop-blur-sm relative z-20"
          >
            <div className="grid gap-6">
              {/* Name */}
              <div>
                <label className="block text-gray-800 font-semibold mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-800 font-semibold mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-800 font-semibold mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-gray-800 font-semibold mb-1">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Your company name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-800 font-semibold mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-used_dark hover:bg-used_dark/80 text-white font-semibold py-3 rounded-md shadow-md transition-colors duration-300"
              >
                {loading ? "Sending..." : "Send Quote Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
