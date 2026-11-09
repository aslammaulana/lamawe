import type { Metadata } from "next";
import { organizationsData } from "@/features/partisipasi/data/komunitasData";
import {
  PartisipasiBreadcrumb,
  PartisipasiNavTabs,
  KomunitasHeaderSection,
  OrganizationGrid,
} from "@/features/partisipasi/components";

export const metadata: Metadata = {
  title: "Partisipasi Komunitas & Lembaga Warga - Gampong Lam Awe",
  description:
    "Profil lembaga kemasyarakatan desa (LKD): Karang Taruna Bina Remaja, TP-PKK Bungong Jeumpa, Majelis Taklim BKMT, dan Posyandu Gampong Lam Awe.",
};

export default function KomunitasPage() {
  return (
    <div className="flex flex-col gap-8 pb-16">
      <PartisipasiBreadcrumb items={[{ label: "Komunitas & Lembaga" }]} />

      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
        <KomunitasHeaderSection />
        <PartisipasiNavTabs activeTab="komunitas" />
      </section>

      <OrganizationGrid organizations={organizationsData} />
    </div>
  );
}
