import Image from "next/image";

export const CommunityCard = ({ onClick, className = '' }: { onClick?: () => void; className?: string }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open('/support/contact', '_self');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };
  
  return (
    //<div className="bg-gray-50 relative w-full h-[481px] max-h-[481px] bg-support-card-bg rounded-[1rem] p-10 overflow-hidden">
    <div
      className={`
        relative flex flex-col
        bg-white dark:bg-[#161616]
        border border-gray-200 dark:border-[#202020]
        rounded-2xl p-8 cursor-pointer
        transition-all duration-300 ease-in-out
        hover:bg-gray-50 dark:hover:bg-[#1a1a1a]
        focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-500 
        focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#161616]
        overflow-hidden
        group
        ${className}
      `}
      style={{
        height: '481px',
        borderRadius: '16px',
        opacity: 1,
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label="Submit a support ticket"
    >
    <a
        href="https://t.me/ZeroXBridge1"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="w-full h-full">
          {/* Text content */}
          <div className="space-y-3.5 text-support-card-text font-inter relative z-10">
            <h5 className="font-normal text-2xl leading-[1.2em]">Community</h5>
            <p className="font-normal text-sm leading-[1.2em]">
              Join Our Discord and Telegram Community
            </p>
          </div>
           {/* Background image */}
           <div className="absolute inset-0 flex items-end justify-center opacity-90">
             <Image
               src="/community-image.png"
               alt="community card image"
               width={450}
               height={500}
               className="object-contain brightness-125 contrast-125 saturate-150"
             />
           </div>
        </div>
      </a>
    </div>
  );
};
