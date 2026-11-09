import { Users, Home, Award, MapPin } from "lucide-react";

interface DataSummaryCardsProps {
  totalPenduduk: number;
  totalKK: number;
}

export function DataSummaryCards({ totalPenduduk, totalKK }: DataSummaryCardsProps) {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[var(--color-brand-primary)] flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <span className="text-[10px] uppercase font-bold text-gray-400 font-mono">
            Sensus 2026
          </span>
        </div>
        <span className="text-xs text-[var(--color-brand-body)] block">Total Penduduk</span>
        <span className="text-2xl font-bold font-mono text-[var(--color-brand-heading)]">
          {totalPenduduk.toLocaleString("id-ID")} Jiwa
        </span>
        <span className="text-[11px] text-gray-400 mt-1 block">810 Laki-laki • 794 Perempuan</span>
      </div>

      <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Home className="w-5 h-5" />
          </div>
          <span className="text-[10px] uppercase font-bold text-gray-400 font-mono">
            Kartu Keluarga
          </span>
        </div>
        <span className="text-xs text-[var(--color-brand-body)] block">Kepala Keluarga (KK)</span>
        <span className="text-2xl font-bold font-mono text-[var(--color-brand-heading)]">
          {totalKK} KK
        </span>
        <span className="text-[11px] text-gray-400 mt-1 block">Rata-rata 4.9 Jiwa/KK</span>
      </div>

      <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-mono">
            Kemendes PDT
          </span>
        </div>
        <span className="text-xs text-[var(--color-brand-body)] block">Status IDM Desa</span>
        <span className="text-2xl font-bold font-mono text-emerald-700">DESA MANDIRI</span>
        <span className="text-[11px] text-gray-400 mt-1 block">Skor: 0.8412 (Tinggi)</span>
      </div>

      <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <span className="text-[10px] uppercase font-bold text-gray-400 font-mono">
            Kewilayahan
          </span>
        </div>
        <span className="text-xs text-[var(--color-brand-body)] block">Wilayah & Dusun</span>
        <span className="text-2xl font-bold font-mono text-[var(--color-brand-heading)]">
          4 Jurong
        </span>
        <span className="text-[11px] text-gray-400 mt-1 block">Luas Wilayah: 215 Hektar</span>
      </div>
    </section>
  );
}

