import type { Metadata } from "next";
import {
  PartisipasiBreadcrumb,
  PartisipasiNavTabs,
  AspirasiHeaderSection,
  AspirasiCtaGrid,
} from "@/features/partisipasi/components";

export const metadata: Metadata = {
  title: "Kotak Aspirasi & Rembug Warga - Gampong Lam Awe",
  description:
    "Salurkan ide, masukan pembangunan, dan usulan kegiatan kemasyarakatan untuk kemajuan Gampong Lam Awe, Kecamatan Peukan Bada.",
};

export default function AspirasiPage() {
  return (
    <div className="flex flex-col gap-8 pb-16">
      <PartisipasiBreadcrumb items={[{ label: "Aspirasi & Rembug" }]} />

      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
        <AspirasiHeaderSection />
        <PartisipasiNavTabs activeTab="aspirasi" />
      </section>

      <AspirasiCtaGrid />
    </div>
  );
}
