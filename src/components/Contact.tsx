import { Phone, Mail, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-20 bg-white overflow-hidden"
    >
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
            Lets Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-used_dark to-used_dark">Together</span>
          </h2>
          <p className="text-lg text-gray-600">
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
          </div>
          

          {/* Right Side - Form */}
          <form className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 backdrop-blur-sm relative z-20">
            <div className="grid gap-6">
              {[
                { label: "Name *", type: "text", placeholder: "Your name" },
                {
                  label: "Email *",
                  type: "email",
                  placeholder: "your.email@example.com",
                },
                { label: "Phone *", type: "tel", placeholder: "+1 (555) 123-4567" },
                { label: "Company", type: "text", placeholder: "Your company name" },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-gray-800 font-semibold mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  />
                </div>
              ))}

              <div>
                <label className="block text-gray-800 font-semibold mb-1">
                  Message *
                </label>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-used_dark hover:bg-used_dark/80 text-white font-semibold py-3 rounded-md shadow-md transition-colors duration-300"
              >
                Send Quote Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
