import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  ProfilNavTabs,
  WilayahHeroSection,
  BatasWilayahSection,
  JurongGridSection,
  TataGunaLahanSection,
  PetaWilayahSection,
} from "@/features/profil/components";

export const metadata: Metadata = {
  title: "Wilayah & Geografis Desa - Gampong Lam Awe",
  description:
    "Profil batas wilayah, pembagian 4 Jurong, topografi pesisir, dan tata guna lahan Gampong Lam Awe, Kecamatan Peukan Bada, Aceh Besar.",
};

export default function WilayahPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8 pb-16">
      <Breadcrumb
        items={[
          { label: "Profil", href: "/profil/sejarah" },
          { label: "Peta & Wilayah" },
        ]}
      />
      <ProfilNavTabs activeTab="wilayah" />
      <WilayahHeroSection />
      <BatasWilayahSection />
      <JurongGridSection />
      <TataGunaLahanSection />
      <PetaWilayahSection />
    </div>
  );
}
