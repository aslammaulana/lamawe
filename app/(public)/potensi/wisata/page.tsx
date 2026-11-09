import type { Metadata } from "next";
import { attractionsData } from "@/features/potensi/data/wisataData";
import {
  PotensiBreadcrumb,
  PotensiNavTabs,
  WisataHeaderSection,
  WisataAttractionsGrid,
} from "@/features/potensi/components";

export const metadata: Metadata = {
  title: "Potensi Wisata Bahari & Pesisir - Gampong Lam Awe",
  description:
    "Eksplorasi destinasi wisata bahari pesisir Selat Malaka, kuliner ikan bakar segar, dan panorama matahari terbenam Gampong Lam Awe, Aceh Besar.",
};

export default function WisataPage() {
  return (
    <div className="flex flex-col gap-8 pb-16">
      <PotensiBreadcrumb
        items={[
          { label: "Data & Potensi", href: "/data" },
          { label: "Potensi Wisata" },
        ]}
      />

      <section className="flex flex-col gap-6">
        <WisataHeaderSection />
        <PotensiNavTabs activeTab="wisata" />
      </section>

      <WisataAttractionsGrid attractions={attractionsData} />
    </div>
  );
}
