import React, { useMemo, useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Pharmacy } from "../../types";

const containerStyle = {
  width: "100%",
  height: "100%",
};

interface MapViewProps {
  pharmacies: Pharmacy[];
  selectedPharmacy: Pharmacy | null;
  onSelectPharmacy: (pharmacy: Pharmacy) => void;
}

const MapView: React.FC<MapViewProps> = ({
  pharmacies,
  selectedPharmacy,
  onSelectPharmacy,
}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
  });

  const center = useMemo(
    () => ({
      lat: 24.7136,
      lng: 46.6753,
    }),
    []
  );

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(
    function callback(map: google.maps.Map) {
      const bounds = new window.google.maps.LatLngBounds();
      pharmacies.forEach((p) => bounds.extend({ lat: p.lat, lng: p.lng }));
      map.fitBounds(bounds);
      setMap(map);
    },
    [pharmacies]
  );

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  if (!import.meta.env.VITE_GOOGLE_MAPS_API_KEY) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gray-100 dark:bg-gray-900 overflow-hidden relative">
        {/* Mock Map Background */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center grayscale"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbI1_rCNLB8cGK_TQpBXSnrnOs6OiC3g-20pR6wrclXFiu2olSi7QVd7tH7E6Bc3YX4PdXH6sp4Ldtbh5ES7HgsVNRWJksskvHhGVnnUohHugD0x2Rp9IhTDHwVL1ZvDiBnQS4IgzpLtoHNQPFJCwGuVZHDrda7LhhQRpeM6hvpU-w5af-hhu4TbSgALjdBO1vmtHloY0MswGxqu-tHzmhB0PpnRV2CQwICPLGpSH13lXySMpkJ6hPfezKHy96PwcVsTa5ka8AJScl')",
          }}
        ></div>
        <div className="relative z-10 flex flex-col items-center">
          <span className="material-symbols-outlined text-6xl text-primary/40 dark:text-blue-400/40 mb-4 animate-pulse">
            map
          </span>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 leading-tight">
            يرجى إضافة مفتاح الخريطة
          </h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-xs font-medium">
            لعرض الخريطة التفاعلية، يجب إضافة{" "}
            <code>VITE_GOOGLE_MAPS_API_KEY</code> في ملف <code>.env</code>.
          </p>
        </div>
      </div>
    );
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#0d46a0" }],
          },
        ],
        disableDefaultUI: true, // Clean look
        zoomControl: false, // We use custom controls in Overlay
        streetViewControl: false,
        mapTypeControl: false,
      }}
    >
      {pharmacies.map((pharmacy) => (
        <Marker
          key={pharmacy.id}
          position={{ lat: pharmacy.lat, lng: pharmacy.lng }}
          onClick={() => onSelectPharmacy(pharmacy)}
          icon={{
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor:
              pharmacy.availabilityStatus === "متوفر" ? "#22c55e" : "#ef4444",
            fillOpacity: 1,
            strokeColor:
              selectedPharmacy?.id === pharmacy.id ? "#0d46a0" : "#ffffff",
            strokeWeight: selectedPharmacy?.id === pharmacy.id ? 4 : 2,
            scale: 10,
          }}
        />
      ))}
    </GoogleMap>
  ) : (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
      <div className="size-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="text-text-sub dark:text-gray-400 font-medium">
        جاري تحميل الخريطة...
      </p>
    </div>
  );
};

export default MapView;
