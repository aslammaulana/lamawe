import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  TransparansiNavTabs,
  PpidHeroSection,
  PpidMaklumatSection,
  PpidInfoCategorySection,
  PpidProcedureContactSection,
} from "@/features/transparansi/components";

export const metadata: Metadata = {
  title: "PPID Desa (Pejabat Pengelola Informasi & Dokumentasi) - Gampong Lam Awe",
  description:
    "Layanan permohonan informasi publik resmi Gampong Lam Awe sesuai amanat UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik.",
};

export default function PPIDPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8 pb-16">
      <Breadcrumb
        items={[
          { label: "Transparansi", href: "/transparansi/apbdes" },
          { label: "PPID Desa" },
        ]}
      />
      <PpidHeroSection />
      <TransparansiNavTabs activeTab="ppid" />
      <PpidMaklumatSection />
      <PpidInfoCategorySection />
      <PpidProcedureContactSection />
    </div>
  );
}
