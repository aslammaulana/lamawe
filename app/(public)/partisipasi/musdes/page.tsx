import type { Metadata } from "next";
import { musdesListData } from "@/features/partisipasi/data/musdesData";
import {
  PartisipasiBreadcrumb,
  PartisipasiNavTabs,
  MusdesHeaderSection,
  MusdesListSection,
} from "@/features/partisipasi/components";

export const metadata: Metadata = {
  title: "Musyawarah Gampong (Musdes) & Perencanaan Partisipatif - Gampong Lam Awe",
  description:
    "Jadwal dan dokumentasi Berita Acara Musyawarah Perencanaan Pembangunan Gampong (Musrenbangdes) Lam Awe, Kecamatan Peukan Bada.",
};

export default function MusdesPage() {
  return (
    <div className="flex flex-col gap-8 pb-16">
      <PartisipasiBreadcrumb items={[{ label: "Musyawarah Gampong" }]} />

      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
        <MusdesHeaderSection />
        <PartisipasiNavTabs activeTab="musdes" />
      </section>

      <MusdesListSection items={musdesListData} />
    </div>
  );
}
