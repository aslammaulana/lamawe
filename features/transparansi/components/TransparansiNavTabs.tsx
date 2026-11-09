import Link from "next/link";
import {
  TrendingUp,
  CalendarCheck,
  Layers,
  FileSpreadsheet,
  ShieldCheck,
} from "lucide-react";

interface TransparansiNavTabsProps {
  activeTab: "apbdes" | "perencanaan" | "program" | "laporan" | "ppid";
}

const tabs = [
  {
    id: "apbdes",
    label: "APBDes 2026",
    href: "/transparansi/apbdes",
    icon: TrendingUp,
  },
  {
    id: "perencanaan",
    label: "Perencanaan & RKP",
    href: "/transparansi/perencanaan",
    icon: CalendarCheck,
  },
  {
    id: "program",
    label: "Program & Kegiatan",
    href: "/transparansi/program",
    icon: Layers,
  },
  {
    id: "laporan",
    label: "Laporan & LPJ",
    href: "/transparansi/laporan",
    icon: FileSpreadsheet,
  },
  {
    id: "ppid",
    label: "Layanan PPID",
    href: "/transparansi/ppid",
    icon: ShieldCheck,
  },
];

export function TransparansiNavTabs({ activeTab }: TransparansiNavTabsProps) {
  return (
    <div className="w-full bg-surface border border-border-soft rounded-xl p-1.5 overflow-x-auto shadow-xs mb-8">
      <nav aria-label="Seksi Transparansi" className="flex items-center space-x-1 min-w-max">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          const Icon = tab.icon;
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors ${
                isActive
                  ? "bg-btn-blue text-white shadow-xs"
                  : "text-foreground hover:text-heading hover:bg-background"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

