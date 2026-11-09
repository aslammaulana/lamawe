import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  TransparansiNavTabs,
  ApbdesHeroSection,
  ApbdesSummaryCards,
  ApbdesVisualBars,
  ApbdesTableSection,
  ApbdesLegalDownloads,
  ApbdesCommunityBanner,
} from "@/features/transparansi/components";

export const metadata: Metadata = {
  title: "Transparansi APBDes & Keuangan Desa 2026 - Gampong Lam Awe",
  description:
    "Keterbukaan informasi pengelolaan keuangan publik, alokasi Dana Desa (DD), ADG, dan Pendapatan Asli Desa Gampong Lam Awe, Kec. Peukan Bada, Kab. Aceh Besar.",
};

export default function APBDesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8 pb-16">
      <Breadcrumb
        items={[
          { label: "Transparansi", href: "/transparansi/apbdes" },
          { label: "APBDes & Realisasi" },
        ]}
      />
      <ApbdesHeroSection />
      <TransparansiNavTabs activeTab="apbdes" />
      <ApbdesSummaryCards />
      <ApbdesVisualBars />
      <ApbdesTableSection />
      <ApbdesLegalDownloads />
      <ApbdesCommunityBanner />
    </div>
  );
}
