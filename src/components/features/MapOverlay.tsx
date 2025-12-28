import React, { useState } from "react";
import ThemeToggle from "../common/ThemeToggle";
import { Pharmacy } from "../../types";

interface MapOverlayProps {
  pharmacies: Pharmacy[];
  query: string;
  setQuery: (query: string) => void;
  onSearch: () => void;
  onToggleView: () => void;
  selectedPharmacy: Pharmacy | null;
  onSelectPharmacy: (pharmacy: Pharmacy | null) => void;
}

const MapOverlay: React.FC<MapOverlayProps> = ({
  query,
  setQuery,
  onSearch,
  onToggleView,
  selectedPharmacy,
  onSelectPharmacy,
}) => {
  const [activeFilter, setActiveFilter] = useState("الكل");

  const filters = [
    { id: "all", label: "الكل", icon: "check" },
    {
      id: "open",
      label: "مفتوح الآن",
      icon: "schedule",
      color: "text-secondary",
    },
    { id: "24h", label: "٢٤ ساعة", icon: "history", color: "text-secondary" },
    {
      id: "near",
      label: "الأقرب إلي",
      icon: "near_me",
      color: "text-secondary",
    },
    {
      id: "insurance",
      label: "يقبل التأمين",
      icon: "health_and_safety",
      color: "text-blue-500",
    },
  ];

  return (
    <div className="absolute inset-0 z-10 flex flex-col h-full pointer-events-none">
      {/* Header Section (Search & Filter) */}
      <div className="w-full px-4 pt-4 pb-2 pointer-events-auto">
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          {/* Search Bar & List Toggle */}
          <div className="flex items-center gap-3 w-full">
            {/* List View Toggle Button */}
            <button
              onClick={onToggleView}
              className="flex items-center justify-center gap-2 h-12 px-5 bg-white dark:bg-gray-800 rounded-xl shadow-md text-[#0d131b] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shrink-0 cursor-pointer border-none"
            >
              <span className="material-symbols-outlined">
                format_list_bulleted
              </span>
              <span className="font-bold hidden sm:inline">القائمة</span>
            </button>

            {/* Search Input */}
            <div className="flex-1 relative h-12 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center overflow-hidden">
              <div className="w-12 h-full flex items-center justify-center text-gray-400">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="w-full h-full border-none focus:ring-0 text-base placeholder:text-gray-400 text-gray-800 dark:text-white bg-transparent px-0 ml-4 font-medium outline-none"
                placeholder="ابحث عن صيدلية، منطقة..."
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                  e.key === "Enter" && onSearch()
                }
              />
              <div className="h-8 w-[1px] bg-gray-200 dark:bg-gray-700 mx-2"></div>
              <button className="w-12 h-full flex items-center justify-center text-primary dark:text-blue-400 hover:bg-primary/5 dark:hover:bg-blue-400/10 transition-colors border-none cursor-pointer">
                <span className="material-symbols-outlined">tune</span>
              </button>
            </div>

            {/* Actions (Toggle & Profile) */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <div className="hidden md:block w-12 h-12 rounded-xl bg-gray-200 dark:bg-gray-700 shadow-md bg-cover bg-center cursor-pointer border-2 border-white dark:border-gray-600 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center font-bold text-primary dark:text-blue-400">
                  م
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Filter Chips */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.label)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg shadow-sm text-sm font-semibold transition-all shrink-0 cursor-pointer border-none ${
                  activeFilter === filter.label
                    ? "bg-primary text-white"
                    : "bg-white dark:bg-gray-800 text-[#0d131b] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-[18px] ${
                    activeFilter === filter.label
                      ? "text-white"
                      : filter.color || ""
                  }`}
                >
                  {filter.icon}
                </span>
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer to push content to bottom */}
      <div className="flex-1"></div>

      {/* Bottom Floating Controls & Card */}
      <div className="w-full px-4 pb-6 pt-4 pointer-events-auto flex flex-col items-center justify-end relative">
        {/* Map Controls (Floating Right) */}
        <div className="absolute bottom-6 right-4 flex flex-col gap-3 z-40">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col overflow-hidden">
            <button className="w-10 h-10 flex items-center justify-center text-[#0d131b] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 border-none cursor-pointer border-b border-gray-100 dark:border-gray-700">
              <span className="material-symbols-outlined">add</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center text-[#0d131b] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 border-none cursor-pointer">
              <span className="material-symbols-outlined">remove</span>
            </button>
          </div>
          <button className="w-10 h-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-primary dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all border-none cursor-pointer">
            <span className="material-symbols-outlined">my_location</span>
          </button>
        </div>

        {/* Selected Pharmacy Card (Floating Overlay) */}
        {selectedPharmacy && (
          <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-1 animate-in slide-in-from-bottom-5 duration-300">
            <div className="flex flex-col md:flex-row gap-0 md:gap-4 items-stretch">
              {/* Image Mobile/Desktop */}
              <div
                className="md:hidden w-full h-32 bg-gray-100 dark:bg-gray-700 rounded-xl mb-3 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${selectedPharmacy.image})` }}
              >
                <div className="absolute top-2 right-2 bg-secondary/90 backdrop-blur text-white text-xs px-2 py-1 rounded-full font-bold shadow-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    check_circle
                  </span>
                  {selectedPharmacy.availabilityStatus}
                </div>
                <button
                  onClick={() => onSelectPharmacy(null)}
                  className="absolute top-2 left-2 bg-black/20 hover:bg-black/40 text-white rounded-full p-1 border-none cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    close
                  </span>
                </button>
              </div>
              <div
                className="hidden md:block w-32 shrink-0 bg-gray-100 dark:bg-gray-700 rounded-xl bg-cover bg-center m-1 relative"
                style={{ backgroundImage: `url(${selectedPharmacy.image})` }}
              ></div>

              {/* Content */}
              <div className="flex-1 p-3 pt-0 md:pt-3 md:pr-0 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-xl font-bold text-primary dark:text-blue-400 leading-tight">
                        {selectedPharmacy.name}
                      </h2>
                      <div className="hidden md:flex bg-secondary/10 text-secondary text-xs px-2 py-0.5 rounded-full font-bold items-center gap-1 border border-secondary/20 uppercase tracking-wide">
                        {selectedPharmacy.availabilityStatus}
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        location_on
                      </span>
                      {selectedPharmacy.address}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="flex items-center gap-1 text-[#0d131b] dark:text-white font-bold text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-lg">
                      <span className="material-symbols-outlined text-[16px] text-yellow-500 fill-current">
                        star
                      </span>
                      {selectedPharmacy.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-700/50 px-2 py-1 rounded-md border border-gray-100 dark:border-gray-600">
                    <span className="material-symbols-outlined text-[18px] text-primary dark:text-blue-400">
                      distance
                    </span>
                    <span>{selectedPharmacy.distance} كم</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-700/50 px-2 py-1 rounded-md border border-gray-100 dark:border-gray-600">
                    <span className="material-symbols-outlined text-[18px] text-primary dark:text-blue-400">
                      directions_car
                    </span>
                    <span>5 دقائق</span>
                  </div>
                </div>

                <div className="flex gap-2 mt-auto">
                  <button className="flex-1 bg-primary hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary/30 border-none cursor-pointer">
                    <span className="material-symbols-outlined rtl:rotate-180">
                      navigation
                    </span>
                    ابدأ الملاحة
                  </button>
                  <button className="w-12 h-12 flex items-center justify-center border border-gray-200 dark:border-gray-600 rounded-xl text-primary dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer bg-white dark:bg-gray-800">
                    <span className="material-symbols-outlined">call</span>
                  </button>
                  <button
                    onClick={() => onSelectPharmacy(null)}
                    className="md:hidden w-12 h-12 flex items-center justify-center border border-gray-200 dark:border-gray-600 rounded-xl text-gray-400 hover:text-red-500 dark:hover:bg-red-900/20 transition-colors cursor-pointer bg-white dark:bg-gray-800"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                  <button className="hidden md:flex w-12 h-12 items-center justify-center border border-gray-200 dark:border-gray-600 rounded-xl text-gray-400 hover:text-red-500 dark:hover:bg-red-900/20 transition-colors cursor-pointer bg-white dark:bg-gray-800">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapOverlay;
