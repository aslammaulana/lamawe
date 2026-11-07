import { Scale, Sprout, HeartHandshake, Check } from "lucide-react";
import { lembagaAdatData } from "../data/struktur";

const iconMap = {
  scale: Scale,
  sprout: Sprout,
  users: HeartHandshake,
};

export function LembagaAdatSection() {
  return (
    <section className="mb-14">
      <div className="bg-surface rounded-2xl shadow-xs border border-border-soft p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2 border-b border-border-soft pb-4">
          <div>
            <span className="font-mono text-xs text-btn-blue uppercase tracking-wider font-semibold">
              Kearifan Lokal &amp; Permusyawaratan
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-heading">
              Tuha Peut &amp; Lembaga Adat Gampong
            </h2>
          </div>
          <span className="text-xs text-foreground/80">
            Penjaga Hukum Adat Aceh &amp; Badan Permusyawaratan
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lembagaAdatData.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="bg-background border border-border-soft rounded-xl p-6 flex flex-col justify-between gap-4"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-btn-blue flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-heading">
                      {item.title}
                    </h3>
                    <p className="text-xs text-btn-blue font-semibold mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-heading bg-surface p-2.5 rounded-lg border border-border-soft">
                    {item.ketua}
                  </div>
                  <p className="text-xs text-foreground leading-relaxed">
                    {item.deskripsi}
                  </p>
                </div>

                <div className="pt-3 border-t border-border-soft space-y-1.5 text-xs text-foreground">
                  {item.items.map((line, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <Check size={14} className="text-btn-blue shrink-0 mt-0.5" />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
