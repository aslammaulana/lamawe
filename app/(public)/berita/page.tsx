import type { Metadata } from "next";
import BeritaCatalog from "@/components/berita/BeritaCatalog";
import { InformasiBreadcrumb } from "@/features/informasi/components";

export const metadata: Metadata = {
  title: "Warta Gampong & Berita Resmi Desa - Gampong Lam Awe",
  description:
    "Kabar terkini pembangunan desa, pengumuman resmi keuchik, kegiatan gotong royong meunasah, dan dinamika warga Gampong Lam Awe, Kecamatan Peukan Bada, Aceh Besar.",
};

export default function BeritaPage() {
  return (
    <div className="flex flex-col gap-6 pb-16">
      <InformasiBreadcrumb items={[{ label: "Warta Gampong" }]} />
      <BeritaCatalog />
    </div>
  );
}
