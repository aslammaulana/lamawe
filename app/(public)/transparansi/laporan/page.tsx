import type { Metadata } from "next";
import Link from "next/link";
import {
  FileSpreadsheet,
  ChevronRight,
  Download,
  FileText,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Building2,
  FileCheck2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Laporan Pertanggungjawaban (LPJ) & Realisasi Dana Desa - Gampong Lam Awe",
  description:
    "Arsip Laporan Pertanggungjawaban (LPJ) APBDes dan laporan realisasi Dana Desa (DD) Gampong Lam Awe, Kecamatan Peukan Bada.",
};

const lpjFiles = [
  {
    tahun: "2025",
    judul: "Laporan Realisasi Anggaran (LRA) APBDes TA 2025 Audited",
    nomor: "LPJ/LRA-01/2025",
    tanggal: "28 Februari 2026",
    status: "Diterima Tuha Peut & Inspektorat",
    size: "4.2 MB",
    type: "PDF",
  },
  {
    tahun: "2025",
    judul: "Laporan Penyelenggaraan Pemerintahan Desa (LPPD) Akhir Tahun Anggaran 2025",
    nomor: "LPPD-02/2025",
    tanggal: "15 Maret 2026",
    status: "Diserahkan ke Camat Peukan Bada",
    size: "6.8 MB",
    type: "PDF",
  },
  {
    tahun: "2025",
    judul: "Laporan Pertanggungjawaban Realisasi Dana Desa (DDS) Tahap I, II, & III TA 2025",
    nomor: "DDS/LPJ-03/2025",
    tanggal: "10 Januari 2026",
    status: "Tuntas 100% Salur",
    size: "3.5 MB",
    type: "PDF",
  },
  {
    tahun: "2024",
    judul: "Laporan Pertanggungjawaban (LPJ) Realisasi APBDes TA 2024 Audited",
    nomor: "LPJ-01/2024",
    tanggal: "25 Februari 2025",
    status: "Opini Wajar Tanpa Pengecualian (WTP)",
    size: "5.1 MB",
    type: "PDF",
  },
];

export default function LaporanPage() {
  return (
    <div className="flex flex-col gap-8 pb-16">
      {/* Breadcrumb */}
      <nav aria-label="Jalur Navigasi" className="pt-2">
        <ol className="flex items-center flex-wrap gap-2 text-xs text-[var(--color-brand-body)]">
          <li className="flex items-center gap-1.5">
            <Link href="/" className="hover:text-[var(--color-brand-accent)] transition-colors">
              Beranda
            </Link>
          </li>
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li className="text-[var(--color-brand-body)]">Transparansi</li>
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="font-semibold text-[var(--color-brand-heading)]">
            Laporan Realisasi & LPJ
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="flex flex-col gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
            <FileCheck2 className="w-3.5 h-3.5" />
            AKUNTABILITAS & PERTANGGUNGJAWABAN
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
            Laporan Pertanggungjawaban (LPJ)
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 max-w-3xl leading-relaxed">
            Arsip resmi Laporan Pertanggungjawaban Keuangan Desa (LPJ APBDes), Laporan Penyelenggaraan Pemerintahan Desa (LPPD), dan realisasi Dana Desa yang telah diaudit dan disahkan.
          </p>
        </div>

        {/* Sub-nav Tabs */}
        <div className="w-full bg-white border border-[var(--color-brand-border)] rounded-xl p-1.5 overflow-x-auto shadow-xs">
          <nav aria-label="Seksi Transparansi" className="flex items-center space-x-1 min-w-max">
            <Link
              href="/transparansi/apbdes"
              className="px-4 py-2 rounded-lg text-xs font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-[var(--color-brand-surface)] transition-colors"
            >
              APBDes 2026
            </Link>
            <Link
              href="/transparansi/perencanaan"
              className="px-4 py-2 rounded-lg text-xs font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-[var(--color-brand-surface)] transition-colors"
            >
              Perencanaan (RPJM & RKP)
            </Link>
            <Link
              href="/transparansi/program"
              className="px-4 py-2 rounded-lg text-xs font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-[var(--color-brand-surface)] transition-colors"
            >
              Program & Kegiatan
            </Link>
            <Link
              href="/transparansi/laporan"
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-[var(--color-brand-primary)] text-white shadow-xs"
            >
              Laporan Realisasi & LPJ
            </Link>
            <Link
              href="/transparansi/ppid"
              className="px-4 py-2 rounded-lg text-xs font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-[var(--color-brand-surface)] transition-colors"
            >
              PPID & Informasi Publik
            </Link>
          </nav>
        </div>
      </section>

      {/* List of LPJ */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[var(--color-brand-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-[var(--color-brand-heading)]">
              Daftar Laporan Keuangan Audited & Sah
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-brand-body)] mt-1">
              Seluruh laporan telah melalui uji petik lapangan dan pemeriksaan Badan Permusyawaratan Gampong (Tuha Peut).
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" />
            Audit Terverifikasi
          </span>
        </div>

        <div className="divide-y divide-[var(--color-brand-border)]">
          {lpjFiles.map((doc, idx) => (
            <div
              key={idx}
              className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-blue-50/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded bg-gray-100 text-[var(--color-brand-heading)] font-mono text-[11px] font-bold">
                      TA {doc.tahun}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-semibold">
                      {doc.status}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[var(--color-brand-heading)]">
                    {doc.judul}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-[var(--color-brand-body)] mt-1">
                    <span>No: {doc.nomor}</span>
                    <span>•</span>
                    <span>Disahkan: {doc.tanggal}</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 self-end sm:self-center">
                <a
                  href={`#download-${idx}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-brand-surface)] hover:bg-[var(--color-brand-subtle)] border border-[var(--color-brand-border)] text-[var(--color-brand-accent)] text-xs font-semibold transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Unduh {doc.type} ({doc.size})</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

