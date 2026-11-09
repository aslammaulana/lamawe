import Link from "next/link";

interface PotensiNavTabsProps {
  activeTab?: "data" | "umkm" | "wisata" | "pertanian";
}

export function PotensiNavTabs({ activeTab = "data" }: PotensiNavTabsProps) {
  const tabs = [
    { id: "data", label: "Data Kependudukan", href: "/data" },
    { id: "umkm", label: "UMKM & BUMG", href: "/potensi/umkm" },
    { id: "wisata", label: "Wisata Bahari", href: "/potensi/wisata" },
    { id: "pertanian", label: "Pertanian & Kelautan", href: "/potensi/pertanian" },
  ];

  return (
    <div className="w-full bg-white border border-[var(--color-brand-border)] rounded-xl p-1.5 overflow-x-auto shadow-xs">
      <nav aria-label="Seksi Data & Potensi" className="flex items-center space-x-1 min-w-max">
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

