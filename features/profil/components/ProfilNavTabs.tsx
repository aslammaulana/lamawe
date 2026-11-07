import Link from "next/link";

interface ProfilNavTabsProps {
  activeTab: "sejarah" | "visi-misi" | "wilayah" | "struktur";
}

const tabs = [
  { id: "sejarah", label: "Sejarah Desa", href: "/profil/sejarah" },
  { id: "visi-misi", label: "Visi & Misi", href: "/profil/visi-misi" },
  { id: "wilayah", label: "Peta & Wilayah", href: "/profil/wilayah" },
  { id: "struktur", label: "Struktur Organisasi", href: "/profil/struktur" },
];

export function ProfilNavTabs({ activeTab }: ProfilNavTabsProps) {
  return (
    <div className="w-full bg-surface border border-border-soft rounded-xl p-1.5 overflow-x-auto shadow-xs mb-8">
      <nav aria-label="Seksi Profil" className="flex items-center space-x-1 min-w-max">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                isActive
                  ? "bg-btn-blue text-white shadow-xs"
                  : "text-foreground hover:text-heading hover:bg-background"
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

