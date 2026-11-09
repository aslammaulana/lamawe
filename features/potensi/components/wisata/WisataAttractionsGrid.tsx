import Image from "next/image";
import { MapPin, Navigation } from "lucide-react";
import type { AttractionItem } from "../../types";

interface WisataAttractionsGridProps {
  attractions: AttractionItem[];
}

export function WisataAttractionsGrid({ attractions }: WisataAttractionsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {attractions.map((att, idx) => (
        <div
          key={idx}
          className="bg-white border border-[var(--color-brand-border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[var(--color-brand-accent)] transition-all flex flex-col justify-between"
        >
          <div>
            <div className="relative aspect-video w-full bg-gray-100 overflow-hidden">
              <Image
                src={att.imageUrl}
                alt={att.nama}
                fill
                className="object-cover"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-white/90 text-[var(--color-brand-primary)] text-xs font-bold shadow-xs">
                {att.kategori}
              </span>
            </div>

            <div className="p-6 flex flex-col gap-3">
              <div className="flex items-center gap-1.5 text-xs text-[var(--color-brand-body)] font-medium">
                <MapPin className="w-3.5 h-3.5 text-[var(--color-brand-accent)]" />
                <span>{att.lokasi}</span>
              </div>

              <h2 className="text-lg font-bold text-[var(--color-brand-heading)]">
                {att.nama}
              </h2>

              <p className="text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed">
                {att.deskripsi}
              </p>

              <div className="pt-3 border-t border-[var(--color-brand-border)] mt-2">
                <span className="text-[11px] font-bold text-[var(--color-brand-heading)] uppercase tracking-wider block mb-2">
                  Fasilitas Tersedia:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {att.fasilitas.map((f, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-lg bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] text-[11px] text-[var(--color-brand-body)] font-medium"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 pt-0 mt-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Lam+Awe+Peukan+Bada"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-10 rounded-xl bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <Navigation className="w-4 h-4" />
              <span>Petunjuk Arah Rute Google Maps</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

