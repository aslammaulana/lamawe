import type { Metadata } from "next";
import {
  jurongData,
  pekerjaanData,
  usiaData,
} from "@/features/potensi/data/demografiData";
import {
  PotensiBreadcrumb,
  PotensiNavTabs,
  DataHeaderSection,
  DataSummaryCards,
  DataDemografiTable,
  DataPekerjaanUsiaSection,
} from "@/features/potensi/components";

export const metadata: Metadata = {
  title: "Data & Statistik Kependudukan Desa - Gampong Lam Awe",
  description:
    "Infografis data statistik kependudukan, status IDM Mandiri, piramida usia, dan mata pencaharian warga Gampong Lam Awe, Kecamatan Peukan Bada, Aceh Besar.",
};

export default function DataPage() {
  const totalPenduduk = jurongData.reduce((acc, curr) => acc + curr.penduduk, 0);
  const totalKK = jurongData.reduce((acc, curr) => acc + curr.kk, 0);

  return (
    <div className="flex flex-col gap-8 pb-16">
      <PotensiBreadcrumb items={[{ label: "Data & Statistik Desa" }]} />

      <section className="flex flex-col gap-6">
        <DataHeaderSection />
        <PotensiNavTabs activeTab="data" />
      </section>

      <DataSummaryCards totalPenduduk={totalPenduduk} totalKK={totalKK} />

      <DataDemografiTable
        jurongData={jurongData}
        totalPenduduk={totalPenduduk}
        totalKK={totalKK}
      />

      <DataPekerjaanUsiaSection
        pekerjaanData={pekerjaanData}
        usiaData={usiaData}
      />
    </div>
  );
}
