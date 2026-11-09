import Link from "next/link";

interface PartisipasiNavTabsProps {
  activeTab?: "komunitas" | "musdes" | "aspirasi";
}

export function PartisipasiNavTabs({ activeTab = "komunitas" }: PartisipasiNavTabsProps) {
  const tabs = [
    { id: "komunitas", label: "Lembaga Warga", href: "/partisipasi/komunitas" },
    { id: "musdes", label: "Musyawarah Gampong (Musdes)", href: "/partisipasi/musdes" },
    { id: "aspirasi", label: "Aspirasi & Rembug", href: "/partisipasi/aspirasi" },
  ];

  return (
    <div className="w-full bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] rounded-xl p-1.5 overflow-x-auto shadow-xs mt-6">
      <nav aria-label="Seksi Partisipasi" className="flex items-center space-x-1 min-w-max">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`px-4 py-2 rounded-lg text-xs transition-colors ${
                isActive
                  ? "font-semibold bg-[var(--color-brand-primary)] text-white shadow-xs"
                  : "font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-white"
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

