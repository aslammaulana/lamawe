import { Gavel } from "lucide-react";

export function MusdesHeaderSection() {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
        <Gavel className="w-3.5 h-3.5" />
        MUSYAWARAH & MUFAKAT ADAT MEUNASAH
      </div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
        Musyawarah Gampong (Musdes)
      </h1>
      <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 leading-relaxed">
        Forum musyawarah tertinggi pengambilan keputusan pembangunan gampong yang diselenggarakan secara demokratis, terbuka, dan menjunjung tinggi kearifan mufakat di meunasah.
      </p>
    </div>
  );
}

