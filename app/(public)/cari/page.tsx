import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import GlobalSearchClient from "@/components/search/GlobalSearchClient";

export const metadata: Metadata = {
  title: "Pencarian Informasi & Layanan - Gampong Lam Awe",
  description:
    "Pencarian cepat seluruh layanan administrasi, transparansi APBDes, berita warta gampong, dan data profil Desa Lam Awe.",
};

export default function SearchPage() {
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
          <li aria-current="page" className="font-semibold text-[var(--color-brand-heading)]">
            Pencarian
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
          <Search className="w-3.5 h-3.5" />
          PENCARIAN PORTAL TERPADU
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-brand-heading)] tracking-tight">
          Cari Layanan & Informasi Gampong
        </h1>
        <p className="text-xs sm:text-sm text-[var(--color-brand-body)] mt-2 leading-relaxed">
          Temukan formulir surat, laporan APBDes, warta desa, atau data kependudukan secara instan.
        </p>
      </section>

      {/* Client Search with Suspense */}
      <Suspense
        fallback={
          <div className="p-8 text-center text-xs text-gray-500 bg-white rounded-2xl border border-[var(--color-brand-border)]">
            Memuat indeks pencarian...
          </div>
        }
      >
        <GlobalSearchClient />
      </Suspense>
    </div>
  );
}
