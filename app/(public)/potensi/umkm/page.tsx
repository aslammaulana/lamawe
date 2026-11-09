import type { Metadata } from "next";
import { productsData } from "@/features/potensi/data/umkmData";
import {
  PotensiBreadcrumb,
  PotensiNavTabs,
  UmkmHeaderSection,
  BumgBannerCard,
  UmkmProductGrid,
} from "@/features/potensi/components";

export const metadata: Metadata = {
  title: "Potensi UMKM & BUMG Bungong Seulanga - Gampong Lam Awe",
  description:
    "Katalog produk usaha mikro warga dan profil Badan Usaha Milik Gampong (BUMG) Bungong Seulanga Gampong Lam Awe, Aceh Besar.",
};

export default function UMKMPage() {
  return (
    <div className="flex flex-col gap-8 pb-16">
      <PotensiBreadcrumb
        items={[
          { label: "Data & Potensi", href: "/data" },
          { label: "UMKM & BUMG" },
        ]}
      />

      <section className="flex flex-col gap-6">
        <UmkmHeaderSection />
        <PotensiNavTabs activeTab="umkm" />
      </section>

      <BumgBannerCard />

      <UmkmProductGrid products={productsData} />
    </div>
  );
}
