
import React from 'react';

interface CoreValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CoreValueCard: React.FC<CoreValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-gray-200/50 bg-white/80 p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-4">{icon}</div>
      <h4 className="mb-2 text-xl font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default CoreValueCard;
