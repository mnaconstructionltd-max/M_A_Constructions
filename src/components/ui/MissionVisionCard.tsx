
import React from 'react';

interface MissionVisionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  glowEffect: string;
}

const MissionVisionCard: React.FC<MissionVisionCardProps> = ({ icon, title, description, glowEffect }) => {
  return (
    <div className="relative rounded-2xl p-8 text-center transition-transform duration-300 hover:scale-105">
      {/* Glow Effect */}
      <div className={`absolute inset-0 transform-gpu rounded-3xl bg-gradient-to-br ${glowEffect} blur-3xl opacity-50 transition-opacity duration-300 group-hover:opacity-70`}></div>

      {/* Card Content with Glassmorphism */}
      <div className="relative z-10 h-full overflow-hidden rounded-2xl border border-white/20 bg-white/30 p-8 shadow-xl backdrop-blur-lg">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-black/10">
            {icon}
          </div>
          <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
          <p className="text-base text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionCard;
