import type { Metadata } from "next";
import Link from "next/link";
import {
  Gavel,
  ChevronRight,
  Calendar,
  FileText,
  Users,
  CheckCircle2,
  Download,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Musyawarah Gampong (Musdes) & Perencanaan Partisipatif - Gampong Lam Awe",
  description:
    "Jadwal dan dokumentasi Berita Acara Musyawarah Perencanaan Pembangunan Gampong (Musrenbangdes) Lam Awe, Kecamatan Peukan Bada.",
};

const musdesList = [
  {
    nama: "Musrenbangdes Penetapan RKP Gampong TA 2027",
    tanggal: "08 Maret 2026",
    peserta: "65 Perwakilan Warga, Tuha Peut, & Pendamping Desa",
    hasil: "Penetapan prioritas drainase Cot Meurak, irigasi sawah, dan bantuan modal UMKM.",
    dokumen: "BA-Musrenbang-2027.pdf",
    status: "Selesai Disahkan",
  },
  {
    nama: "Musdes Khusus Validasi KPM BLT Dana Desa TA 2026",
    tanggal: "12 Januari 2026",
    peserta: "Seluruh Ulee Jurong, Bhabinkamtibmas, Babinsa, & Tuha Peut",
    hasil: "Penetapan 45 KPM BLT Dana Desa berdasarkan kriteria kemiskinan ekstrem dan lansia tunggal.",
    dokumen: "SK-Keuchik-BLT-2026.pdf",
    status: "Selesai Disahkan",
  },
  {
    nama: "Musdes Laporan Pertanggungjawaban (LPJ) Realisasi APBDes 2025",
    tanggal: "28 Februari 2026",
    peserta: "Aparatur Gampong, Tuha Peut, & Tokoh Masyarakat",
    hasil: "Penerimaan LPJ APBDes 2025 dengan status Wajar Tanpa Catatan Khusus.",
    dokumen: "BA-LPJ-APBDes-2025.pdf",
    status: "Selesai Disahkan",
  },
];

export default function MusdesPage() {
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
          <li className="text-[var(--color-brand-body)]">Partisipasi</li>
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="font-semibold text-[var(--color-brand-heading)]">
            Musyawarah Gampong
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
            <Gavel className="w-3.5 h-3.5" />
            MUSYAWARAH & MUFAKAT ADAT MEUNASAH
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
            Musyawarah Gampong (Musdes)
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 leading-relaxed">
            Forum musyawarah tertinggi pengambilan keputusan pembangunan gampong yang diselenggarakan secara demokratis, terbuka, dan menjunjung tinggi kearifan mufakat di meunasah.
          </p>
        </div>

        {/* Sub-nav Tabs */}
        <div className="w-full bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] rounded-xl p-1.5 overflow-x-auto shadow-xs mt-6">
          <nav aria-label="Seksi Partisipasi" className="flex items-center space-x-1 min-w-max">
            <Link
              href="/partisipasi/komunitas"
              className="px-4 py-2 rounded-lg text-xs font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-white transition-colors"
            >
              Lembaga Warga
            </Link>
            <Link
              href="/partisipasi/musdes"
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-[var(--color-brand-primary)] text-white shadow-xs"
            >
              Musyawarah Gampong (Musdes)
            </Link>
            <Link
              href="/partisipasi/aspirasi"
              className="px-4 py-2 rounded-lg text-xs font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-white transition-colors"
            >
              Aspirasi & Rembug
            </Link>
          </nav>
        </div>
      </section>

      {/* Musdes History List */}
      <section className="space-y-4">
        {musdesList.map((m, idx) => (
          <div
            key={idx}
            className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-[var(--color-brand-primary)] font-bold">
                  {m.tanggal}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold">
                  {m.status}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-[var(--color-brand-heading)]">
                {m.nama}
              </h2>
              <p className="text-xs text-[var(--color-brand-body)] mt-1 leading-relaxed">
                <strong>Keputusan Musyawarah:</strong> {m.hasil}
              </p>
              <span className="text-[11px] text-gray-400 mt-2 block">
                Kehadiran: {m.peserta}
              </span>
            </div>

            <div className="shrink-0">
              <a
                href="#unduh-ba"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-brand-surface)] hover:bg-gray-100 border border-[var(--color-brand-border)] text-[var(--color-brand-accent)] text-xs font-semibold transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Unduh Berita Acara</span>
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

