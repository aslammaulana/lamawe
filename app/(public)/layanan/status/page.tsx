import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";
import StatusTrackerClient from "@/components/layanan/StatusTrackerClient";

export const metadata: Metadata = {
  title: "Lacak Status Permohonan & Pengaduan - Gampong Lam Awe",
  description:
    "Periksa perkembangan berkas administrasi surat atau tindak lanjut pengaduan Anda secara real-time menggunakan kode tiket resmi gampong.",
};

export default function LacakStatusPage() {
  return (
    <div className="flex flex-col gap-8 pb-16">
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
          <li>
            <Link
              href="/layanan"
              className="hover:text-[var(--color-brand-accent)] transition-colors"
            >
              Layanan Desa
            </Link>
          </li>
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="font-semibold text-[var(--color-brand-heading)]"
          >
            Lacak Status Tiket
          </li>
        </ol>
      </nav>

      {/* Header Banner */}
      <section className="flex flex-col gap-2 max-w-3xl">
        <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          TRANSPARANSI PELAYANAN PUBLIK
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
          Lacak Status Permohonan & Pengaduan
        </h1>
        <p className="text-sm sm:text-base text-[var(--color-brand-body)] leading-relaxed">
          Periksa perkembangan berkas administrasi surat atau tindak lanjut pengaduan Anda secara real-time menggunakan kode tiket resmi Gampong Lam Awe.
        </p>
      </section>

      {/* Interactive Tracker */}
      <Suspense
        fallback={
          <div className="p-12 text-center text-xs text-[var(--color-brand-body)] bg-white rounded-2xl border border-[var(--color-brand-border)]">
            Memuat sistem pelacakan tiket...
          </div>
        }
      >
        <StatusTrackerClient />
      </Suspense>
    </div>
  );
}
