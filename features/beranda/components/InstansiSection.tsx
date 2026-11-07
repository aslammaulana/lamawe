import {
  Landmark,
  Building2,
  Shield,
  Radio,
  FileCheck,
  PieChart,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { instansiData } from "../data/instansi";

const iconMap = {
  landmark: Landmark,
  building: Building2,
  shield: Shield,
  radio: Radio,
  fileCheck: FileCheck,
  pieChart: PieChart,
};

export function InstansiSection() {
  return (
    <section className="w-full bg-surface py-12 lg:py-16">
      <Container className="flex flex-col gap-8">
        <SectionHeader
          align="center"
          eyebrow="Konektivitas Pemerintahan"
          title="Instansi & Lembaga Terkait"
          description="Kemitraan dan portal resmi pemerintahan terhubung untuk sinergi pelayanan publik."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {instansiData.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <a
                key={item.id}
                href={item.url}
                rel="noopener noreferrer"
                target="_blank"
                className="bg-surface rounded-xl shadow-xs border border-border-soft p-4 flex flex-col items-center text-center gap-3 hover:shadow-md hover:border-btn-blue transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-background border border-border-soft flex items-center justify-center text-btn-blue group-hover:scale-110 group-hover:bg-btn-blue group-hover:text-white transition-all">
                  <Icon size={22} />
                </div>
                <span className="text-xs font-semibold text-heading group-hover:text-btn-blue transition-colors leading-tight">
                  {item.title}
                </span>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

