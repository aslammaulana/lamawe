import {
  Building,
  Anchor,
  HeartHandshake,
  Shield,
  GraduationCap,
} from "lucide-react";
import { misiData } from "../data/visiMisi";

const iconMap = {
  building: Building,
  anchor: Anchor,
  heartHandshake: HeartHandshake,
  shield: Shield,
  graduationCap: GraduationCap,
};

export function MisiSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-btn-blue uppercase tracking-wider mb-1">
            Pilar Pembangunan
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-heading">
            5 Misi Utama Gampong Lam Awe
          </h2>
        </div>
        <span className="text-xs text-foreground/80">
          Ditetapkan dalam RPJMDes TA 2023–2029
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {misiData.map((m) => {
          const Icon = iconMap[m.icon];
          return (
            <div
              key={m.nomor}
              className="bg-surface border border-border-soft rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-btn-blue transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-btn-blue flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xl font-bold text-slate-300">
                    {m.nomor}
                  </span>
                </div>
                <h3 className="text-base font-bold text-heading mb-2">
                  {m.judul}
                </h3>
                <p className="text-xs text-foreground leading-relaxed mb-4">
                  {m.deskripsi}
                </p>
              </div>

              <div className="pt-3 border-t border-border-soft">
                <span className="text-[11px] font-semibold text-heading block mb-1.5">
                  Fokus Target:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {m.fokus.map((f, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-background border border-border-soft text-[11px] text-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
