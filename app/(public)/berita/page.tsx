import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import BeritaCatalog from "@/components/berita/BeritaCatalog";

export const metadata: Metadata = {
  title: "Warta Gampong & Berita Resmi Desa - Gampong Lam Awe",
  description:
    "Kabar terkini pembangunan desa, pengumuman resmi keuchik, kegiatan gotong royong meunasah, dan dinamika warga Gampong Lam Awe, Kecamatan Peukan Bada, Aceh Besar.",
};

export default function BeritaPage() {
  return (
    <div className="flex flex-col gap-6 pb-16">
      {/* Breadcrumb */}
      <nav aria-label="Jalur Navigasi" className="pt-2">
        <ol className="flex items-center flex-wrap gap-2 text-xs text-[var(--color-brand-body)]">
          <li className="flex items-center gap-1.5">
            <Link
              href="/"
              className="hover:text-[var(--color-brand-accent)] transition-colors"
            >
              Beranda
            </Link>
          </li>
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li className="text-[var(--color-brand-body)]">Informasi</li>
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="font-semibold text-[var(--color-brand-heading)]"
          >
            Warta Gampong
          </li>
        </ol>
      </nav>

      {/* Catalog */}
      <BeritaCatalog />
    </div>
  );
}

