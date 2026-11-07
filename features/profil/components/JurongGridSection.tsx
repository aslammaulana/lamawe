import { Waves, Building2, Navigation, Wheat } from "lucide-react";
import { jurongWilayahData } from "../data/wilayah";

const iconMap = {
  waves: Waves,
  building: Building2,
  navigation: Navigation,
  wheat: Wheat,
};

export function JurongGridSection() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="text-xs font-semibold text-btn-blue uppercase tracking-wider mb-1">
          Pembagian Teritorial Adat
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-heading">
          4 Jurong di Gampong Lam Awe
        </h2>
        <p className="text-xs sm:text-sm text-foreground mt-1">
          Masing-masing jurong dipimpin oleh seorang Kepala Dusun/Ulee Jurong yang bertanggung jawab langsung kepada Keuchik.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jurongWilayahData.map((j) => {
          const Icon = iconMap[j.icon];
          return (
            <div
              key={j.nama}
              className="bg-surface border border-border-soft rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-btn-blue transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-btn-blue text-xs font-semibold">
                    {j.karakteristik}
                  </span>
                  <Icon className="w-5 h-5 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-heading mb-1">
                  {j.nama}
                </h3>
                <div className="text-xs font-mono font-semibold text-accent-blue mb-3">
                  {j.kepala}
                </div>
                <p className="text-xs sm:text-sm text-foreground leading-relaxed mb-4">
                  {j.deskripsi}
                </p>
              </div>
              <div className="pt-3 border-t border-border-soft font-mono text-xs text-heading font-semibold">
                {j.stats}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

