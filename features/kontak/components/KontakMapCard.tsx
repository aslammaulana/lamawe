import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { officeLocationData } from "../data/kontakData";

export function KontakMapCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xs border border-[var(--color-brand-border)] p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin size={20} className="text-[var(--color-brand-primary)]" />
          <h2 className="text-base font-bold text-[var(--color-brand-heading)]">
            Peta Lokasi Kantor Keuchik
          </h2>
        </div>
        <span className="font-mono text-xs text-[var(--color-brand-primary)] font-semibold bg-[var(--color-brand-subtle)] px-2 py-0.5 rounded">
          GPS Ready
        </span>
      </div>

      <div className="relative w-full h-64 rounded-xl overflow-hidden border border-[var(--color-brand-border)]">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url("${officeLocationData.mapImageUrl}")`,
          }}
        />
        <div className="absolute inset-x-3 bottom-3 p-3 bg-white/95 backdrop-blur-xs rounded-lg flex items-center justify-between shadow-xs border border-[var(--color-brand-border)]">
          <div className="flex items-center gap-2 min-w-0">
            <MapPin size={18} className="text-rose-600 shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold text-[var(--color-brand-heading)] truncate">
                {officeLocationData.name}
              </span>
              <span className="font-mono text-[11px] text-[var(--color-brand-body)]/70">
                {officeLocationData.coordinates}
              </span>
            </div>
          </div>
          <a
            href={officeLocationData.mapsDirectCoordsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md bg-[var(--color-brand-primary)] text-white hover:bg-[var(--color-brand-primary-hover)] transition flex items-center justify-center shrink-0"
            title="Buka Navigasi Rute"
          >
            <Navigation size={15} />
          </a>
        </div>
      </div>

      <a
        href={officeLocationData.mapsQueryUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="h-11 px-4 rounded-lg bg-[var(--color-brand-surface)] hover:bg-[var(--color-brand-subtle)] border border-[var(--color-brand-border)] text-[var(--color-brand-primary)] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition"
      >
        <span>Buka Navigasi Rute di Google Maps</span>
        <ExternalLink size={15} />
      </a>
    </div>
  );
}

