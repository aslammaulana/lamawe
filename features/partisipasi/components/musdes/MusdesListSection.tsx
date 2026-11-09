import { Download } from "lucide-react";
import type { MusdesItem } from "../../types";

interface MusdesListSectionProps {
  items: MusdesItem[];
}

export function MusdesListSection({ items }: MusdesListSectionProps) {
  return (
    <section className="space-y-4">
      {items.map((m, idx) => (
        <div
          key={idx}
          className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-[var(--color-brand-primary)] font-bold">
                {m.tanggal}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold">
                {m.status}
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-[var(--color-brand-heading)]">
              {m.nama}
            </h2>
            <p className="text-xs text-[var(--color-brand-body)] mt-1 leading-relaxed">
              <strong>Keputusan Musyawarah:</strong> {m.hasil}
            </p>
            <span className="text-[11px] text-gray-400 mt-2 block">
              Kehadiran: {m.peserta}
            </span>
          </div>

          <div className="shrink-0">
            <a
              href="#unduh-ba"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-brand-surface)] hover:bg-gray-100 border border-[var(--color-brand-border)] text-[var(--color-brand-accent)] text-xs font-semibold transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Berita Acara</span>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

