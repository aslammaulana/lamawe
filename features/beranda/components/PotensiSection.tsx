import { Store, Sprout, Palmtree, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { potensiData } from "../data/potensi";

const iconMap = {
  store: Store,
  sprout: Sprout,
  palmtree: Palmtree,
};

export function PotensiSection() {
  return (
    <section className="w-full bg-surface py-12 lg:py-16 border-b border-border-soft">
      <Container className="flex flex-col gap-8">
        <SectionHeader
          eyebrow="Kekayaan Lokal"
          title="Potensi Unggulan Gampong"
          description="Komoditas andalan, unit usaha BUMDes, dan daya tarik lokal yang mendorong kemandirian warga."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {potensiData.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className="bg-surface rounded-xl shadow-xs border border-border-soft p-6 flex flex-col justify-between gap-6 hover:shadow-md transition"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-btn-blue">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-heading">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-btn-blue">
                  <CheckCircle size={16} />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

