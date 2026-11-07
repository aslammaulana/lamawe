import { Layers, Wheat, Building2, Waves, Trees } from "lucide-react";
import { landUseData } from "../data/wilayah";

const iconMap = {
  wheat: Wheat,
  building: Building2,
  waves: Waves,
  trees: Trees,
};

export function TataGunaLahanSection() {
  return (
    <div className="bg-surface border border-border-soft rounded-2xl p-6 lg:p-8 shadow-xs">
      <h2 className="text-xl font-bold text-heading mb-2 flex items-center gap-2">
        <Layers className="w-5 h-5 text-accent-blue" />
        <span>Tata Guna Lahan (Luas Total: 215 Ha)</span>
      </h2>
      <p className="text-xs sm:text-sm text-foreground mb-6">
        Distribusi peruntukan ruang dan pemanfaatan tanah di wilayah Gampong Lam Awe:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {landUseData.map((l, i) => {
          const Icon = iconMap[l.icon];
          return (
            <div
              key={i}
              className="p-4 rounded-xl bg-background border border-border-soft flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Icon className="w-5 h-5 text-accent-blue" />
                  <span className="font-mono text-xs font-bold text-btn-blue">
                    {l.persen}
                  </span>
                </div>
                <div className="text-xs font-bold text-heading mb-1">
                  {l.tipe}
                </div>
              </div>
              <div className="font-mono text-base font-bold text-heading mt-2">
                {l.luas}
              </div>
            </div>
          );
        })}
      </div>

      {/* Stacked bar visual */}
      <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden flex">
        <div style={{ width: "39.5%" }} className="h-full bg-emerald-500" title="Sawah: 39.5%" />
        <div style={{ width: "27.9%" }} className="h-full bg-blue-500" title="Permukiman: 27.9%" />
        <div style={{ width: "20.9%" }} className="h-full bg-cyan-500" title="Pesisir: 20.9%" />
        <div style={{ width: "11.7%" }} className="h-full bg-amber-500" title="Fasum: 11.7%" />
      </div>
    </div>
  );
}
