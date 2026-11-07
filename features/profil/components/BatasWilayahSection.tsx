import { Compass, Waves, Navigation, MapPin } from "lucide-react";
import { batasWilayahData } from "../data/wilayah";

const iconMap = {
  waves: Waves,
  navigation: Navigation,
  mapPin: MapPin,
};

export function BatasWilayahSection() {
  return (
    <div className="bg-surface border border-border-soft rounded-2xl p-6 lg:p-8 shadow-xs">
      <h2 className="text-xl font-bold text-heading mb-2 flex items-center gap-2">
        <Compass className="w-5 h-5 text-accent-blue" />
        <span>Batas Wilayah Administratif</span>
      </h2>
      <p className="text-xs sm:text-sm text-foreground mb-6">
        Berdasarkan penetapan batas wilayah Kabupaten Aceh Besar dan berita acara musyawarah tapal batas antar gampong:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {batasWilayahData.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={item.arah}
              className={`p-4 rounded-xl border flex flex-col justify-between ${item.colorClass}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-bold uppercase tracking-wider ${item.badgeClass}`}>
                  {item.arah}
                </span>
                <Icon className={`w-4 h-4 ${item.badgeClass}`} />
              </div>
              <div className="text-sm font-bold text-heading">{item.nama}</div>
              <span className="text-xs text-foreground/80 mt-1">{item.keterangan}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

