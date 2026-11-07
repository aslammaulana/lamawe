import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  ProfilNavTabs,
  StrukturHeroSection,
  KeuchikExecutiveSection,
  SekretariatSection,
  PelaksanaTeknisSection,
  KewilayahanSection,
  LembagaAdatSection,
  TupoksiMatriksSection,
  DasarHukumSection,
} from "@/features/profil/components";

export const metadata: Metadata = {
  title: "Struktur Organisasi & Perangkat Desa | Pemerintah Desa Lam Awe",
  description:
    "Bagan Struktur Organisasi dan Tata Kerja (SOTK) Pemerintah Gampong Lam Awe, Kecamatan Peukan Bada, Kabupaten Aceh Besar.",
};

export default function StrukturPage() {
  return (
    <div className="w-full pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumb
          items={[
            { label: "Profil", href: "/profil/sejarah" },
            { label: "Struktur Organisasi" },
          ]}
        />
        <ProfilNavTabs activeTab="struktur" />
        <StrukturHeroSection />
        <KeuchikExecutiveSection />
        <SekretariatSection />
        <PelaksanaTeknisSection />
        <KewilayahanSection />
        <LembagaAdatSection />
        <TupoksiMatriksSection />
        <DasarHukumSection />
      </div>
    </div>
  );
}
