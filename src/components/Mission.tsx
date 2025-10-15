import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const Mission = () => {
  const coreValues = [
    { title: "Precision", desc: "Accurate and reliable in every estimate we deliver." },
    { title: "Transparency", desc: "Clear communication and open processes at all stages." },
    { title: "Innovation", desc: "Leveraging modern tech for smarter construction solutions." },
    { title: "Excellence", desc: "Committed to setting new standards of quality." },
  ];

  return (
    <section
      id="mission"
      className="relative py-16 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,215,0,0.2) 1px, transparent 1px), linear-gradient(rgba(255,215,0,0.2) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-20 left-10 w-96 h-96 bg-gold/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-primary/10 blur-3xl rounded-full animate-pulse delay-1000" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-bold text-used_dark uppercase tracking-widest px-4 py-2 bg-used_dark/10 rounded-full">
            Our Foundation
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mt-6 text-charcoal">
            Mission & <span className="text-transparent bg-clip-text bg-gradient-to-r from-used_dark to-used_dark">Vision</span>
          </h2>
           <div className="w-24 h-1.5 bg-gradient-to-r from-gold via-used/30 to-used mx-auto rounded-full mb-6 mt-5" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4 font-light">
            Building a future of precision, integrity, and innovation in construction excellence.
          </p>
        </div>

        {/* Mission + Vision Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100 shadow-lg p-10 hover:shadow-xl transition-all"
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 shadow-md">
              <Target className="h-8 w-8 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              To empower the construction industry with reliable, technology-driven estimating,
              BIM, and project control solutions that enhance efficiency, precision, and profitability.
            </p>
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full opacity-0 hover:opacity-100 transition-opacity duration-700" />
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100 shadow-lg p-10 hover:shadow-xl transition-all"
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 shadow-md">
              <Eye className="h-8 w-8 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              To be America’s most trusted construction estimating and BIM services partner, redefining accuracy,
              innovation, and transparency across every project we touch.
            </p>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full opacity-0 hover:opacity-100 transition-opacity duration-700" />
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-semibold mb-10 text-charcoal">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-2"
              >
                <h4 className="text-lg font-bold text-used_dark to-used_dark mb-2">{value.title}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
