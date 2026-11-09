import Link from "next/link";

interface LayananNavTabsProps {
  activeTab?: "katalog" | "pengaduan" | "status";
}

export function LayananNavTabs({ activeTab = "katalog" }: LayananNavTabsProps) {
  const tabs = [
    {
      id: "katalog",
      label: "Katalog Layanan",
      href: "/layanan",
    },
    {
      id: "pengaduan",
      label: "Pengaduan & Aspirasi Warga",
      href: "/layanan/pengaduan",
    },
    {
      id: "status",
      label: "Lacak Status Permohonan",
      href: "/layanan/status",
    },
  ];

  return (
    <div className="w-full bg-white border border-[var(--color-brand-border)] rounded-xl p-1.5 overflow-x-auto shadow-xs">
      <nav aria-label="Seksi Layanan" className="flex items-center space-x-1 min-w-max">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                isActive
                  ? "bg-[var(--color-brand-primary)] text-white shadow-xs"
                  : "text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-[var(--color-brand-surface)]"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

