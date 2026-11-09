import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  TransparansiNavTabs,
  LaporanHeroSection,
  LpjGridSection,
} from "@/features/transparansi/components";

export const metadata: Metadata = {
  title: "Laporan Pertanggungjawaban (LPJ) & Realisasi Dana Desa - Gampong Lam Awe",
  description:
    "Arsip Laporan Pertanggungjawaban (LPJ) APBDes dan laporan realisasi Dana Desa (DD) Gampong Lam Awe, Kecamatan Peukan Bada.",
};

export default function LaporanPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8 pb-16">
      <Breadcrumb
        items={[
          { label: "Transparansi", href: "/transparansi/apbdes" },
          { label: "Laporan Realisasi & LPJ" },
        ]}
      />
      <LaporanHeroSection />
      <TransparansiNavTabs activeTab="laporan" />
      <LpjGridSection />
    </div>
  );
}
