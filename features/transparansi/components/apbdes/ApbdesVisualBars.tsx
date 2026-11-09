import {
  Building2,
  HardHat,
  Users2,
  Sprout,
  HeartPulse,
} from "lucide-react";
import { apbdesBidangData } from "../../data/apbdes";

const iconMap = {
  building: Building2,
  hardHat: HardHat,
  users: Users2,
  sprout: Sprout,
  heartPulse: HeartPulse,
};

function formatRupiah(num: number): string {
  return "Rp " + num.toLocaleString("id-ID");
}

export function ApbdesVisualBars() {
  const totalPagu = apbdesBidangData.reduce((acc, curr) => acc + curr.pagu, 0);
  const totalRealisasi = apbdesBidangData.reduce(
    (acc, curr) => acc + curr.realisasi,
    0
  );
  const totalPersen = Math.round((totalRealisasi / totalPagu) * 100);

  return (
    <div className="bg-surface border border-border-soft rounded-2xl p-6 lg:p-8 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border-soft mb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent-blue uppercase tracking-wider mb-1">
            Visualisasi Anggaran &amp; Serapan
          </div>
          <h2 className="text-xl font-bold text-heading">
            Perbandingan Anggaran vs Realisasi per Bidang Belanja
          </h2>
        </div>
        <div className="flex items-center gap-4 bg-background border border-border-soft p-3 rounded-xl">
          <div>
            <span className="text-xs text-foreground block">Total Serapan Belanja</span>
            <span className="text-base font-bold text-heading font-mono">
              {formatRupiah(totalRealisasi)}
            </span>
          </div>
          <div className="h-8 w-px bg-border-soft" />
          <div className="text-right">
            <span className="text-xs text-foreground block">Persentase</span>
            <span className="text-base font-bold text-btn-blue font-mono">
              {totalPersen}%
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {apbdesBidangData.map((b) => {
          const Icon = iconMap[b.icon];
          return (
            <div key={b.kode} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-btn-blue flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-heading text-sm">
                    {b.kode}. {b.nama}
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="text-foreground">
                    Pagu: {formatRupiah(b.pagu)}
                  </span>
                  <span className="text-heading font-semibold">
                    Realisasi: {formatRupiah(b.realisasi)}
                  </span>
                  <span className="px-2 py-0.5 rounded font-bold bg-blue-50 text-btn-blue text-[11px]">
                    {b.persen}%
                  </span>
                </div>
              </div>

              <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden relative">
                <div
                  className={`h-full ${b.color} rounded-full transition-all duration-500`}
                  style={{ width: `${b.persen}%` }}
                />
              </div>

              <p className="text-[11px] text-foreground/80 pl-9">
                {b.deskripsi}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

