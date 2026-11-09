import { Calendar as CalendarIcon, Clock, MapPin, Users } from "lucide-react";
import type { AgendaItem } from "../../types";

interface AgendaListSectionProps {
  items: AgendaItem[];
}

export function AgendaListSection({ items }: AgendaListSectionProps) {
  return (
    <section className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[var(--color-brand-accent)] transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4 flex-1">
            {/* Date Box */}
            <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 text-[var(--color-brand-primary)] flex flex-col items-center justify-center shrink-0">
              <CalendarIcon className="w-5 h-5 mb-0.5" />
              <span className="text-[11px] font-bold font-mono text-center leading-tight">
                {item.tanggal.split(",")[1]?.trim().substring(0, 6) || "2026"}
              </span>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-[var(--color-brand-surface)] text-[var(--color-brand-accent)] text-xs font-semibold border border-[var(--color-brand-border)]">
                  {item.kategori}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                    item.status === "Mendatang"
                      ? "bg-blue-100 text-[var(--color-brand-primary)]"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <h2 className="text-base sm:text-lg font-bold text-[var(--color-brand-heading)]">
                {item.title}
              </h2>
              <p className="text-xs text-[var(--color-brand-body)] mt-1 leading-relaxed">
                {item.deskripsi}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 pt-3 border-t border-[var(--color-brand-border)] text-xs text-[var(--color-brand-body)]">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  {item.waktu}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  {item.lokasi}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-gray-400" />
                  {item.penanggungJawab}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

