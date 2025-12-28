import React from "react";
import { useNavigate } from "react-router-dom";
import useSearchStore from "../../store/useSearchStore";

const SearchBar = () => {
  const navigate = useNavigate();
  const { query, setQuery } = useSearchStore();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-2xl mt-8 relative group">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 rounded-xl shadow-soft p-2 gap-2 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
        {/* Search Input */}
        <div className="flex-1 flex items-center w-full h-12 md:h-14 px-4 gap-3">
          <span className="material-symbols-outlined text-text-sub text-2xl">
            search
          </span>
          <input
            className="w-full h-full bg-transparent border-none focus:ring-0 text-lg placeholder-text-sub/70 text-text-main dark:text-white p-0 font-medium outline-none"
            placeholder="ابحث عن اسم الدواء أو المنطقة..."
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        {/* Divider (Desktop) */}
        <div className="hidden md:block w-px h-8 bg-gray-200 dark:bg-gray-700"></div>
        {/* Locate Me Button */}
        <button className="w-full md:w-auto h-12 md:h-14 px-4 flex items-center justify-center gap-2 text-primary dark:text-blue-400 font-bold hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors whitespace-nowrap group/location cursor-pointer">
          <span className="material-symbols-outlined text-xl group-hover/location:animate-bounce">
            my_location
          </span>
          <span>تحديد موقعي</span>
        </button>
        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="w-full md:w-auto h-12 md:h-14 px-8 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center cursor-pointer"
        >
          بحث
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
