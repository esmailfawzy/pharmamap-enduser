import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PharmacyCard from "../components/features/PharmacyCard";
import MapView from "../components/features/MapView";
import MapOverlay from "../components/features/MapOverlay";
import Navbar from "../components/layout/Navbar";
import useSearchStore from "../store/useSearchStore";
import { Pharmacy } from "../types";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { query, setQuery } = useSearchStore();
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [selectedPharmacy, setSelectedPharmacy] = useState<Pharmacy | null>(
    null
  );

  // Sync store with URL params on mount
  useEffect(() => {
    const q = searchParams.get("q");
    if (q) {
      setQuery(q);
    }
  }, []);

  const handleSearch = () => {
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    }
  };

  const pharmacies = [
    {
      id: 1,
      name: "صيدلية النهدي",
      address: "شارع الملك فهد، الرياض",
      distance: "0.5",
      rating: "4.8",
      reviewCount: "120",
      isOpen: true,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAPzFvKB9KFnW6b6vI_Ag2_4WVa3zfSugnkEltPaQNfT8K52kecIY8gKeossn0HG8dGWpt0S4Ux-FBm98wOs7jtvxa6FAVkjSbvJYSiot2Bd0slkjR8XezTLPSwE-7grfGPCWgOkYhIbrqM5nnKUMVnXqD6SnA8Lx40379Sb_ikAJP4sYVMXaOB680FQDnFK7RgdR9KAIKfTukle285HvpeRimb3lSE_ma2Y7YCR313WhfTe5qNerTYLRpfLqhc2DvNHU0_XT4T3s2N",
      lat: 24.6877,
      lng: 46.7219,
      availabilityStatus: "متوفر",
    },
    {
      id: 2,
      name: "صيدلية الدواء",
      address: "حي العليا، الرياض",
      distance: "1.2",
      rating: "4.5",
      reviewCount: "85",
      isOpen: true,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBeVOGJcnFMtvZD4qBOloUPSwbBsn90-rqhznlZhmnn-ZJGe_KIp-ThsT0YdGsDMbrq3gM8TKxgDWtAnc4F6YhkqD-wGeNLml16mmHg_p7tQERywokvwJBrXfK_dam13cJWTO4AOldhowQeH9YFamW0Fsaj-CSXyZy70OHY6yI1dneht4LnlYNAg_oW7H9G2MAdkhv1ywjbuspvHMi-F8Ew_U6RCJhcdvmS35tWYQlYBCnYvJGt_pbW4MS9wh-n10a_y2yqS2w5kZex",
      lat: 24.7136,
      lng: 46.6753,
      availabilityStatus: "متوفر",
    },
    {
      id: 3,
      name: "صيدلية المجتمع",
      address: "طريق التخصصي، الرياض",
      distance: "2.4",
      rating: "4.9",
      reviewCount: "200+",
      isOpen: false,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAGYGDjFtKY0H1mMQ-CoEndtM9zXKle9-NMcsmGMJ-uLAR6UlEQuls-Z-qs5zBPiHgmOK4ItZOJpkwDlBU3p8KmdZ6i74O6ECaH9nXWsfxr7gjR43A5J1Q1T_nQL4y9JDEQJY4URtdtuNc3uPjxd9YFFzDtTicmb0g_vnkabqv_utY-4KWXiMmHgoBX5xM8PAq1OO_F1Zujc-CVqJRqbyBK7mvL035fGvbinT_xSvqZEFhYt5s42e5mFwGpWHfRWxPOTfA25slc9sIH",
      lat: 24.7236,
      lng: 46.6653,
      availabilityStatus: "محدود",
    },
    {
      id: 4,
      name: "صيدلية كنوز",
      address: "النسيم الغربي، الرياض",
      distance: "5.0",
      rating: "4.0",
      reviewCount: "30",
      isOpen: true,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ7xTwtCuUfuqDBxB2kLdPaMsDefvnVVfGV2iPKpOSbzvfFby4YoogV5AGo8SyLLccwlf0YOdPfoUv5WnAEY4YpXlf6coXShKyT-ma6bOEpiOin12nqBTyNPcGeO9HBtcVWpSPmuiMm84V9WBobuqtn93JqU1HzOHsQaHohuYvdMlH42UUTH_0UzYQf0o55G31Uk2nRuyYP4UJqkk3-NUoNWSOZOiNnQ34Q5fWKOnw2JulK3jxMvTgz-bDXGrqetOPxlqsrrLXYGWu",
      lat: 24.7436,
      lng: 46.8253,
      availabilityStatus: "متوفر",
    },
    {
      id: 5,
      name: "صيدلية أدمة",
      address: "طريق خريص، الرياض",
      distance: "6.1",
      rating: "4.3",
      reviewCount: "12",
      isOpen: false,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBgvPugJ_RKh2tyNdaRjnT_b8HWdE9lE5oZcAt572OIqyTOUIqI7XbLVtxpPQMEKcPCDdQQEBCHq3tX3MI3mfMGoTlvl1i1IrIpJ4xz8biyJaq8_jz32QgBhBEMQdqYLZfKg_HIuxPl70H-zHmcrza0ZEYQJYuPyIBUb6mvfW8nFGXLnzj-mbLHt0sQGAOO3QMZfy5H0VolrVtRv9309xxzoXb1IvB3M-9izF7gFxSttXw3HZ7kN83ZMhtsKwiOYdIUyQJ54oUTPrMS",
      lat: 24.7036,
      lng: 46.7553,
      availabilityStatus: "غير متوفر",
    },
    {
      id: 6,
      name: "صيدلية وايتس",
      address: "الرياض جاليري، الرياض",
      distance: "8.2",
      rating: "4.7",
      reviewCount: "310",
      isOpen: true,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCdxb6d1WVelp_D2DUZt2uDs4DW1K6qjUGVeXEaUjlWC6Sl_8htT6aphRwfF_aEGXurXnPxW-CLw4D21K5zYHOpVF8zBEPSaw7vzFBKsS44TtsVYzOW0eMgwg6uX69tZrPlOZpFRvSTqx2wEaF5Q_UxsLQkHec1NVYyt6CQJR4ROh9t1tNxquZDJDXk5bGaHp3LwUg8QQRqWN4HmjY_SGf7x3942TDsD-xDmC4S_uFZBaPhLj7EzG_ZPSZtzqTz0QaYHVSDnM0ciGl6",
      lat: 24.7436,
      lng: 46.6553,
      availabilityStatus: "متوفر",
    },
  ];

  if (viewMode === "map") {
    return (
      <div className="h-screen w-screen overflow-hidden relative bg-background-light dark:bg-background-dark">
        {/* Background Map canvas */}
        <div className="absolute inset-0 z-0">
          <MapView
            pharmacies={pharmacies}
            selectedPharmacy={selectedPharmacy}
            onSelectPharmacy={setSelectedPharmacy}
          />
        </div>

        {/* UI Overlay */}
        <MapOverlay
          pharmacies={pharmacies}
          query={query}
          setQuery={setQuery}
          onSearch={handleSearch}
          onToggleView={() => setViewMode("list")}
          selectedPharmacy={selectedPharmacy}
          onSelectPharmacy={setSelectedPharmacy}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark transition-colors duration-300">
      {/* Navbar */}
      <Navbar
        showSearch={true}
        onSearch={handleSearch}
        showViewToggle={true}
        viewMode={viewMode}
        onToggleView={() => setViewMode(viewMode === "list" ? "map" : "list")}
      />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 lg:px-8 py-6">
        {/* Filters & Result Count */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Filter Chips */}
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1">
            <button className="flex items-center justify-center h-10 px-5 rounded-full bg-primary text-white text-sm font-medium shadow-sm shrink-0 transition-all cursor-pointer">
              <span>الأقرب مسافة</span>
            </button>
            <button className="flex items-center justify-center h-10 px-5 rounded-full bg-white dark:bg-[#1a2636] border border-[#e7ecf3] dark:border-[#2a3849] text-[#0d131b] dark:text-slate-200 text-sm font-medium hover:border-primary/50 shrink-0 transition-all cursor-pointer">
              <span>الأعلى تقييماً</span>
            </button>
            <button className="flex items-center justify-center h-10 px-5 rounded-full bg-white dark:bg-[#1a2636] border border-[#e7ecf3] dark:border-[#2a3849] text-[#0d131b] dark:text-slate-200 text-sm font-medium hover:border-primary/50 shrink-0 transition-all cursor-pointer">
              <span>مفتوح الآن</span>
            </button>
            <button className="flex items-center justify-center size-10 rounded-full bg-white dark:bg-[#1a2636] border border-[#e7ecf3] dark:border-[#2a3849] text-[#4c6b9a] shrink-0 cursor-pointer">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
          {/* Count */}
          <h2 className="text-[#0d131b] dark:text-white text-lg font-bold shrink-0">
            تم العثور على {pharmacies.length} صيدلية
          </h2>
        </div>

        {/* Pharmacy Grid or Map */}
        {viewMode === "list" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pharmacies.map((pharmacy) => (
              <PharmacyCard
                key={pharmacy.id}
                pharmacy={pharmacy}
                onMapView={(p: Pharmacy) => {
                  setSelectedPharmacy(p);
                  setViewMode("map");
                }}
              />
            ))}
          </div>
        ) : null}
      </main>

      {/* Floating Action Button (Mobile) */}
      <div className="fixed bottom-6 left-6 z-40 md:hidden">
        <button
          onClick={() => setViewMode(viewMode === "list" ? "map" : "list")}
          className="flex items-center gap-2 bg-primary hover:bg-[#09357a] text-white rounded-full px-6 py-4 shadow-[0_4px_12px_rgba(13,72,160,0.4)] transition-all active:scale-95 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[24px]">
            {viewMode === "list" ? "map" : "format_list_bulleted"}
          </span>
          <span className="font-bold text-base">
            {viewMode === "list" ? "عرض الخريطة" : "عرض القائمة"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default SearchResults;
