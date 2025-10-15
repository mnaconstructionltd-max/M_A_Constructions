import React from 'react';
import MissionVisionCard from '../components/ui/MissionVisionCard';
import CoreValueCard from '../components/ui/CoreValueCard';
import { TargetIcon } from '../components/icons/TargetIcon';
import { EyeIcon } from '../components/icons/EyeIcon';
import { PrecisionIcon } from '../components/icons/PrecisionIcon';
import { TransparencyIcon } from '../components/icons/TransparencyIcon';
import { InnovationIcon } from '../components/icons/InnovationIcon';
import { ExcellenceIcon } from '../components/icons/ExcellenceIcon';

const Mission: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-50 font-sans antialiased">
      {/* Background Grid */}
      {/* <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20"></div> */}
      {/* Sparkles */}
      <div className="absolute top-1/4 left-10 h-2 w-2 rounded-full bg-white opacity-70 shadow-[0_0_10px_2px_#fff]"></div>
      <div className="absolute top-1/2 right-20 h-1.5 w-1.5 rounded-full bg-white opacity-70 shadow-[0_0_8px_1px_#fff]"></div>
      <div className="absolute bottom-1/4 left-1/3 h-1 w-1 rounded-full bg-white opacity-70 shadow-[0_0_6px_1px_#fff]"></div>
      <div className="absolute bottom-16 right-1/4 h-2 w-2 rounded-full bg-white opacity-70 shadow-[0_0_10px_2px_#fff]"></div>
      <div className="absolute top-20 right-1/3 h-1 w-1 rounded-full bg-white opacity-70 shadow-[0_0_6px_1px_#fff]"></div>

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-6xl space-y-16 py-16">
          {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-used_dark uppercase tracking-widest px-4 py-2 bg-used_dark/10 rounded-full">
              Core Values
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-charcoal">
            Mission & {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-used_dark to-used_dark">
              Vision
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-gold via-used/30 to-used mx-auto rounded-full" />
        </div>
          {/* Mission and Vision Section */}
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <MissionVisionCard
              icon={<TargetIcon className="h-20 w-20 text-white" />}
              title="Our Mission"
              description="To empower the construction industry with reliable, technology-driven estimating, BIM, and project control solutions that enhance efficiency, precision, and profitability."
              glowEffect="from-amber-400/80 via-amber-400/40 to-transparent"
            />
            <MissionVisionCard
              icon={<EyeIcon className="h-20 w-20 text-white" />}
              title="Our Vision"
              description="To be America’s most trusted construction estimating and BIM services partner, redefining accuracy, innovation, and transparency across every project we touch."
              glowEffect="from-blue-500/80 via-blue-500/40 to-transparent"
            />
          </section>

          {/* Core Values Section */}
          <section className="space-y-8">
            <h2 className="text-center text-3xl font-bold text-gray-800">
              CORE VALUES
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <CoreValueCard
                icon={<PrecisionIcon className="h-10 w-10 text-amber-500" />}
                title="Precision"
                description="Accurate and reliable in every estimate we deliver."
              />
              <CoreValueCard
                icon={<TransparencyIcon className="h-10 w-10 text-blue-500" />}
                title="Transparency"
                description="Clear communication and open processes at all stages."
              />
              <CoreValueCard
                icon={<InnovationIcon className="h-10 w-10 text-blue-500" />}
                title="Innovation"
                description="Leveraging modern tech for smarter construction solutions."
              />
              <CoreValueCard
                icon={<ExcellenceIcon className="h-10 w-10 text-amber-500" />}
                title="Excellence"
                description="Committed to setting new standards of quality."
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Mission;
;
