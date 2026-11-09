import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  TransparansiNavTabs,
  ProgramHeroSection,
  ProgramGridSection,
} from "@/features/transparansi/components";

export const metadata: Metadata = {
  title: "Program & Kegiatan Desa 2026 - Gampong Lam Awe",
  description:
    "Monitoring program kerja dan realisasi kegiatan pembangunan fisik dan non-fisik Gampong Lam Awe Tahun Anggaran 2026.",
};

export default function ProgramPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8 pb-16">
      <Breadcrumb
        items={[
          { label: "Transparansi", href: "/transparansi/apbdes" },
          { label: "Program & Kegiatan" },
        ]}
      />
      <ProgramHeroSection />
      <TransparansiNavTabs activeTab="program" />
      <ProgramGridSection />
    </div>
  );
}
