import { Briefcase, PieChart } from "lucide-react";
import type { PekerjaanDataItem, UsiaDataItem } from "../../types";

interface DataPekerjaanUsiaSectionProps {
  pekerjaanData: PekerjaanDataItem[];
  usiaData: UsiaDataItem[];
}

export function DataPekerjaanUsiaSection({
  pekerjaanData,
  usiaData,
}: DataPekerjaanUsiaSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Pekerjaan */}
      <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-5 h-5 text-[var(--color-brand-accent)]" />
          <h3 className="text-base font-bold text-[var(--color-brand-heading)]">
            Mata Pencaharian Utama Warga
          </h3>
        </div>
        <div className="space-y-3">
          {pekerjaanData.map((p, i) => (
            <div key={i} className="flex flex-col gap-1 text-xs">
              <div className="flex items-center justify-between font-semibold text-[var(--color-brand-heading)]">
                <span>{p.job}</span>
                <span className="font-mono text-[var(--color-brand-primary)]">
                  {p.count} Orang ({p.persen})
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className="h-full bg-[var(--color-brand-primary)] rounded-full"
                  style={{ width: p.persen }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kelompok Usia */}
      <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <PieChart className="w-5 h-5 text-[var(--color-brand-accent)]" />
          <h3 className="text-base font-bold text-[var(--color-brand-heading)]">
            Komposisi Kelompok Usia
          </h3>
        </div>
        <div className="space-y-4">
          {usiaData.map((u, i) => (
            <div key={i} className="flex flex-col gap-1 text-xs">
              <div className="flex items-center justify-between font-semibold text-[var(--color-brand-heading)]">
                <span>{u.group}</span>
                <span className="font-mono text-emerald-700">
                  {u.count} Jiwa ({u.persen})
                </span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full"
                  style={{ width: u.persen }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] text-xs text-[var(--color-brand-body)] mt-6">
          <span className="font-bold text-[var(--color-brand-heading)] block mb-0.5">
            Bonus Demografi Produktif:
          </span>
          Sebanyak 70.1% penduduk berada dalam usia kerja produktif, menjadi modal sosial utama kemajuan perekonomian maritim dan pertanian gampong.
        </div>
      </div>
    </div>
  );
}

