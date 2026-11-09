import type { Metadata } from "next";
import PengaduanFormClient from "@/components/layanan/PengaduanFormClient";
import {
  LayananBreadcrumb,
  LayananNavTabs,
  PengaduanHeaderSection,
  PengaduanSidebarInfo,
} from "@/features/layanan/components";

export const metadata: Metadata = {
  title: "Layanan Pengaduan & Aspirasi Warga - Gampong Lam Awe",
  description:
    "Kanal resmi penyampaian aspirasi, saran, dan pengaduan pembangunan atau pelayanan publik Gampong Lam Awe, Kecamatan Peukan Bada.",
};

export default function PengaduanPage() {
  return (
    <div className="flex flex-col gap-8 pb-16">
      <LayananBreadcrumb items={[{ label: "Pengaduan Warga" }]} />

      <section className="flex flex-col gap-6">
        <PengaduanHeaderSection />
        <LayananNavTabs activeTab="pengaduan" />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <PengaduanFormClient />
        </div>

        <PengaduanSidebarInfo />
      </div>
    </div>
  );
}
