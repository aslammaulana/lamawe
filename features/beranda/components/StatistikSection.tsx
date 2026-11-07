import { Users, Home as HomeIcon, Maximize2, Building2, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { statistikData } from "../data/statistik";

const iconMap = {
  users: Users,
  home: HomeIcon,
  maximize: Maximize2,
  building: Building2,
};

export function StatistikSection() {
  return (
    <section className="w-full bg-surface py-12 lg:py-16 border-b border-border-soft">
      <Container className="flex flex-col gap-8">
        <SectionHeader
          eyebrow="Demografi & Wilayah"
          title="Statistik Demografi & Wilayah"
          description="Data ringkasan kependudukan dan luas wilayah Gampong Lam Awe terkini tahun anggaran berjalan."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistikData.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className="bg-surface rounded-xl shadow-xs border border-border-soft p-6 flex flex-col justify-between gap-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/80 font-medium">
                    {item.label}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-btn-blue">
                    <Icon size={20} />
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-heading">
                      {item.value}
                    </span>
                    <span className="text-sm text-foreground/80 font-medium">
                      {item.unit}
                    </span>
                  </div>
                  {item.trend && (
                    <div className="flex items-center gap-1.5 mt-2 text-xs font-semibold text-btn-blue">
                      <TrendingUp size={14} />
                      <span>{item.trend}</span>
                    </div>
                  )}
                  {item.note && (
                    <p className="text-xs text-foreground/80 mt-2 line-clamp-1">
                      {item.note}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

