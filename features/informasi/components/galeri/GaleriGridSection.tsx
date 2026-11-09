import Image from "next/image";
import { MapPin } from "lucide-react";
import type { GalleryItem } from "../../types";

interface GaleriGridSectionProps {
  items: GalleryItem[];
}

export function GaleriGridSection({ items }: GaleriGridSectionProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((img) => (
        <div
          key={img.id}
          className="group bg-white border border-[var(--color-brand-border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[var(--color-brand-accent)] transition-all flex flex-col"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
            <Image
              src={img.imageUrl}
              alt={img.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[var(--color-brand-primary)] text-xs font-semibold shadow-xs">
                {img.kategori}
              </span>
            </div>
          </div>

          <div className="p-5 flex flex-col justify-between flex-1">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[var(--color-brand-heading)] leading-snug">
                {img.title}
              </h3>
            </div>
            <div className="flex items-center justify-between text-xs text-[var(--color-brand-body)] mt-4 pt-3 border-t border-[var(--color-brand-border)] font-mono">
              <span className="flex items-center gap-1 font-sans">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                {img.lokasi}
              </span>
              <span>{img.tanggal}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

