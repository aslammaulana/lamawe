import type { Metadata } from "next";
import {
  PotensiBreadcrumb,
  PotensiNavTabs,
  PertanianHeaderSection,
  PertanianKelautanBento,
} from "@/features/potensi/components";

export const metadata: Metadata = {
  title: "Potensi Pertanian & Kelautan Nelayan - Gampong Lam Awe",
  description:
    "Profil komoditas ketahanan pangan padi sawah dan perikanan tangkap laut Selat Malaka Gampong Lam Awe, Kecamatan Peukan Bada, Aceh Besar.",
};

export default function PertanianPage() {
  return (
    <div className="flex flex-col gap-8 pb-16">
      <PotensiBreadcrumb
        items={[
          { label: "Data & Potensi", href: "/data" },
          { label: "Pertanian & Kelautan" },
        ]}
      />

      <section className="flex flex-col gap-6">
        <PertanianHeaderSection />
        <PotensiNavTabs activeTab="pertanian" />
      </section>

      <PertanianKelautanBento />
    </div>
  );
}
