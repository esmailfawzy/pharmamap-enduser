import React from "react";
import { Pharmacy } from "../../types";

interface PharmacyCardProps {
  pharmacy: Pharmacy;
  onMapView?: (pharmacy: Pharmacy) => void;
}

const PharmacyCard: React.FC<PharmacyCardProps> = ({ pharmacy, onMapView }) => {
  const {
    name,
    address,
    distance,
    rating,
    reviewCount,
    isOpen,
    image,
    availabilityStatus = "متوفر",
  } = pharmacy;

  return (
    <article className="bg-white dark:bg-[#1a2636] rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col gap-4 group cursor-pointer">
      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-gray-100">
        <div className="absolute top-3 right-3 z-10 flex gap-2">
          <span
            className={`text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm backdrop-blur-sm ${
              availabilityStatus === "متوفر"
                ? "bg-success"
                : availabilityStatus === "محدود"
                ? "bg-orange-500"
                : "bg-red-500"
            }`}
          >
            {availabilityStatus}
          </span>
        </div>
        <img
          alt={name}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
            !isOpen && availabilityStatus === "غير متوفر" ? "grayscale" : ""
          }`}
          src={image}
        />
        <div className="absolute bottom-3 left-3 z-10">
          <span className="bg-white/90 dark:bg-black/60 backdrop-blur text-[#0d131b] dark:text-white text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
            <span className="material-symbols-outlined text-[16px] text-amber-400">
              star
            </span>
            {rating} ({reviewCount})
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3
              className={`text-xl font-bold leading-tight ${
                availabilityStatus === "غير متوفر"
                  ? "text-gray-500 dark:text-gray-400"
                  : "text-primary dark:text-blue-400"
              }`}
            >
              {name}
            </h3>
            <p className="text-[#4c6b9a] text-sm mt-1">{address}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-1 text-sm text-[#0d131b] dark:text-slate-300 bg-[#f6f7f8] dark:bg-[#2a3849] px-2 py-1 rounded-md transition-colors">
            <span className="material-symbols-outlined text-primary text-[18px]">
              near_me
            </span>
            <span className="font-bold">{distance} كم</span>
          </div>
          <div
            className={`flex items-center gap-1 text-sm ${
              isOpen ? "text-success" : "text-[#4c6b9a]"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">
              schedule
            </span>
            <span>{isOpen ? "مفتوح الآن" : "مغلق"}</span>
          </div>
        </div>

        <div className="mt-auto pt-4 flex gap-3">
          <button className="flex-1 h-10 flex items-center justify-center gap-2 bg-[#e7ecf3] hover:bg-[#dbe2eb] dark:bg-[#2a3849] dark:hover:bg-[#364659] text-primary dark:text-blue-300 text-sm font-bold rounded-xl transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">call</span>
            اتصال
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMapView?.(pharmacy);
            }}
            disabled={availabilityStatus === "غير متوفر"}
            className={`flex-[2] h-10 flex items-center justify-center gap-2 text-sm font-bold rounded-xl shadow-lg transition-all cursor-pointer ${
              availabilityStatus === "غير متوفر"
                ? "bg-gray-200 text-gray-400 dark:bg-[#2a3849] dark:text-gray-500 cursor-not-allowed shadow-none"
                : "bg-primary hover:bg-primary/90 text-white shadow-primary/20"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">map</span>
            عرض على الخريطة
          </button>
        </div>
      </div>
    </article>
  );
};

export default PharmacyCard;
