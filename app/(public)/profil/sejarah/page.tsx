import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProfilNavTabs, SejarahContentSection } from "@/features/profil/components";

export const metadata: Metadata = {
  title: "Sejarah Desa | Pemerintah Desa Lam Awe",
  description:
    "Asal usul dan sejarah perkembangan Gampong Lam Awe, Kecamatan Peukan Bada, Kabupaten Aceh Besar.",
};

export default function SejarahPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Profil", href: "/profil/sejarah" },
          { label: "Sejarah Desa" },
        ]}
      />
      <ProfilNavTabs activeTab="sejarah" />
      <SejarahContentSection />
    </div>
  );
}
