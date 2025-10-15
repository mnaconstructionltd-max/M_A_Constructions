
import React from 'react';

export const PrecisionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.5 2v6h-6" />
    <path d="M2.5 22v-6h6" />
    <path d="M16 2.5a9 9 0 0 1-13.5 4.8" />
    <path d="M8 21.5a9 9 0 0 1 13.5-4.8" />
    <circle cx="12" cy="12" r="1" />
  </svg>
);
