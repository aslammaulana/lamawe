import { MapPin, Navigation } from "lucide-react";
import { petaWilayahCoordinates } from "../data/wilayah";

export function PetaWilayahSection() {
  return (
    <div className="bg-surface border border-border-soft rounded-2xl p-6 lg:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div>
          <h2 className="text-xl font-bold text-heading flex items-center gap-2">
            <MapPin className="w-5 h-5 text-rose-500" />
            <span>Peta Lokasi & Koordinat GPS Kantor Keuchik</span>
          </h2>
          <p className="text-xs sm:text-sm text-foreground mt-1">
            {petaWilayahCoordinates.coordinateText}
          </p>
        </div>
        <a
          href={petaWilayahCoordinates.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-btn-blue hover:bg-btn-blue-hover text-white text-xs font-semibold shadow-xs transition-colors shrink-0"
        >
          <Navigation className="w-4 h-4" />
          <span>Buka di Google Maps</span>
        </a>
      </div>

      <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-border-soft relative">
        <iframe
          title="Peta Lokasi Desa Lam Awe"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={petaWilayahCoordinates.embedUrl}
        />
      </div>
    </div>
  );
}
