import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  ProfilNavTabs,
  VisiHeroSection,
  MisiSection,
  FalsafahAdatSection,
} from "@/features/profil/components";

export const metadata: Metadata = {
  title: "Visi & Misi Gampong Lam Awe (2023 - 2029)",
  description:
    "Arah kebijakan, visi, dan misi Pemerintah Gampong Lam Awe periode 2023–2029 di bawah kepemimpinan Keuchik terpilih.",
};

export default function VisiMisiPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8 pb-16">
      <Breadcrumb
        items={[
          { label: "Profil", href: "/profil/sejarah" },
          { label: "Visi & Misi" },
        ]}
      />
      <ProfilNavTabs activeTab="visi-misi" />
      <VisiHeroSection />
      <MisiSection />
      <FalsafahAdatSection />
    </div>
  );
}
