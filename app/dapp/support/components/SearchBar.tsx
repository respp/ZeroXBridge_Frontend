import React, { useState } from 'react';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  className = '', 
  placeholder = "Search for support...",
  onSearch 
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    } else {
      console.log('Search query:', searchQuery);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full max-w-2xl mx-auto ${className}`}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-4 bg-[#1A1A1A] border border-[#1A1A1A] rounded-[12px] text-white placeholder-[#97A1A4] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
      </div>
    </form>
  );
};

export default SearchBar;
