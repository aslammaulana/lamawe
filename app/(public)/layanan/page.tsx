import type { Metadata } from "next";
import LayananCatalog from "@/components/layanan/LayananCatalog";
import {
  LayananBreadcrumb,
  LayananHeaderSection,
  LayananNavTabs,
  LayananTrackingHelpdeskSection,
} from "@/features/layanan/components";

export const metadata: Metadata = {
  title: "Pusat Layanan Mandiri & Administrasi Publik - Gampong Lam Awe",
  description:
    "Katalog resmi pengurusan surat keterangan, perizinan usaha, dan administrasi kependudukan warga Gampong Lam Awe, Kecamatan Peukan Bada, Aceh Besar.",
};

export default function LayananRootPage() {
  return (
    <div className="flex flex-col gap-8 pb-16">
      <LayananBreadcrumb />

      <section className="flex flex-col gap-6">
        <LayananHeaderSection />
        <LayananNavTabs activeTab="katalog" />
      </section>

      <LayananCatalog />

      <LayananTrackingHelpdeskSection />
    </div>
  );
}
