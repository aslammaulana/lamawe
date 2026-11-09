import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  TransparansiNavTabs,
  PerencanaanHeroSection,
  RpjmdesHighlightSection,
  PrioritasRkpGrid,
} from "@/features/transparansi/components";

export const metadata: Metadata = {
  title: "Perencanaan Pembangunan Desa (RPJMDes & RKPDes) - Gampong Lam Awe",
  description:
    "Dokumen Rencana Pembangunan Jangka Menengah Desa (RPJMDes 2023-2029) dan Rencana Kerja Pemerintah Desa (RKPDes 2026) Gampong Lam Awe.",
};

export default function PerencanaanPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8 pb-16">
      <Breadcrumb
        items={[
          { label: "Transparansi", href: "/transparansi/apbdes" },
          { label: "Perencanaan Desa" },
        ]}
      />
      <PerencanaanHeroSection />
      <TransparansiNavTabs activeTab="perencanaan" />
      <RpjmdesHighlightSection />
      <PrioritasRkpGrid />
    </div>
  );
}
