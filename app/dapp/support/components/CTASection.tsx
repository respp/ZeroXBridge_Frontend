import React from 'react';

interface CTASectionProps {
  className?: string;
  onContactClick?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ className = '', onContactClick }) => {
  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      window.open('/support/contact', '_self');
    }
  };

  return (
    <section className={`bg-black py-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-5 lg:px-[clamp(16px,5vw,100px)] text-center">
        <div className="space-y-6">
          <h2 className="text-white text-2xl lg:text-3xl font-medium">
            Didn't find what you're looking for?
          </h2>
          <button
            onClick={handleContactClick}
            className="inline-flex items-center gap-2 bg-white text-black font-medium py-3 px-8 rounded-[12px] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200"
          >
            Contact Support
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
