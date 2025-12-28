import React from "react";
import useSearchStore from "../../store/useSearchStore";

interface CompactSearchBarProps {
  onSearch?: () => void;
}

const CompactSearchBar: React.FC<CompactSearchBarProps> = ({ onSearch }) => {
  const { query, setQuery } = useSearchStore();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch();
    }
  };

  return (
    <div className="flex items-center bg-gray-100 dark:bg-[#1E293B] rounded-full px-4 h-11 w-full max-w-md border border-gray-200 dark:border-gray-700/50 transition-colors duration-300">
      {/* Filter Icon */}
      <button className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer mr-2">
        <span className="material-symbols-outlined text-xl">tune</span>
      </button>

      <input
        type="text"
        className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none text-right"
        placeholder="panadol extra"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        dir="rtl"
      />

      {/* Search Icon */}
      <button
        onClick={onSearch}
        className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer ml-2"
      >
        <span className="material-symbols-outlined text-xl">search</span>
      </button>
    </div>
  );
};

export default CompactSearchBar;
