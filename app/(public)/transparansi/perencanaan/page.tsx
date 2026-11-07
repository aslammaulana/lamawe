import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarCheck,
  ChevronRight,
  Download,
  FileText,
  Target,
  Clock,
  CheckCircle2,
  Scale,
  Users,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Perencanaan Pembangunan Desa (RPJMDes & RKPDes) - Gampong Lam Awe",
  description:
    "Dokumen Rencana Pembangunan Jangka Menengah Desa (RPJMDes 2023-2029) dan Rencana Kerja Pemerintah Desa (RKPDes 2026) Gampong Lam Awe.",
};

const priorities = [
  {
    nomor: "01",
    judul: "Penguatan Tanggul Abrasi & Drainase Utama",
    kategori: "Infrastruktur & Mitigasi Pesisir",
    lokasi: "Jurong Cot Meurak & Meunasah Tuha",
    anggaran: "Rp 180.000.000",
    sumber: "Dana Desa 2026",
    status: "Sedang Berjalan",
  },
  {
    nomor: "02",
    judul: "Revitalisasi Balai Pertemuan & Meunasah Gampong",
    kategori: "Sarana Sosial & Keagamaan",
    lokasi: "Pusat Gampong Lam Awe",
    anggaran: "Rp 95.000.000",
    sumber: "ADG & Swadaya Warga",
    status: "Tahap Persiapan",
  },
  {
    nomor: "03",
    judul: "Pengadaan Perahu & Alat Tangkap Nelayan Tradisional",
    kategori: "Pemberdayaan Ekonomi Nelayan",
    lokasi: "Jurong Pesisir Lam Awe",
    anggaran: "Rp 120.000.000",
    sumber: "Dana Desa (Ketahanan Pangan)",
    status: "Sedang Berjalan",
  },
  {
    nomor: "04",
    judul: "Program Pencegahan Stunting & Posyandu Terpadu",
    kategori: "Kesehatan Ibu & Anak",
    lokasi: "Seluruh Jurong Lam Awe",
    anggaran: "Rp 65.000.000",
    sumber: "Dana Desa 2026",
    status: "Rutin Bulanan",
  },
];

export default function PerencanaanPage() {
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
            Perencanaan Desa
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="flex flex-col gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            DOKUMEN STRATEGIS DESA
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
            Perencanaan Pembangunan Desa
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 max-w-3xl leading-relaxed">
            Arah kebijakan pembangunan Gampong Lam Awe yang tertuang dalam Rencana Pembangunan Jangka Menengah Desa (RPJMDes 2023–2029) dan Rencana Kerja Pemerintah Desa (RKPDes) Tahun Anggaran 2026 yang disepakati melalui Musyawarah Perencanaan Pembangunan Gampong (Musrenbangdes).
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
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-[var(--color-brand-primary)] text-white shadow-xs"
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
              className="px-4 py-2 rounded-lg text-xs font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-[var(--color-brand-surface)] transition-colors"
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

      {/* RPJMDes Overview Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-[var(--color-brand-primary)] text-xs font-bold font-mono">
                Periode 6 Tahun
              </span>
              <FileText className="w-5 h-5 text-gray-400" />
            </div>
            <h2 className="text-xl font-bold text-[var(--color-brand-heading)] mb-2">
              RPJMDes 2023 - 2029
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed mb-4">
              Rencana Pembangunan Jangka Menengah Gampong Lam Awe merupakan penjabaran dari visi dan misi Keuchik terpilih untuk masa jabatan 6 tahun, memuat arah kebijakan keuangan, strategi pembangunan kawasan pesisir, dan kebijakan umum partisipatif warga.
            </p>
            <div className="space-y-2 text-xs text-[var(--color-brand-heading)]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Peningkatan ketahanan ekonomi nelayan dan petani</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Modernisasi layanan administrasi gampong berbasis digital</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pemberdayaan kepemudaan, olahraga, dan balai adat meunasah</span>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-[var(--color-brand-border)] mt-6">
            <a
              href="#download-rpjmdes"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-brand-surface)] hover:bg-blue-50 border border-[var(--color-brand-border)] text-[var(--color-brand-accent)] text-xs font-semibold transition-colors w-full justify-center"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Dokumen RPJMDes (PDF • 5.1 MB)</span>
            </a>
          </div>
        </div>

        <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold font-mono">
                Rencana Tahunan (2026)
              </span>
              <CalendarCheck className="w-5 h-5 text-gray-400" />
            </div>
            <h2 className="text-xl font-bold text-[var(--color-brand-heading)] mb-2">
              RKPDes Tahun 2026
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed mb-4">
              Rencana Kerja Pemerintah Gampong Lam Awe Tahun Anggaran 2026 yang memuat program prioritas tahun berjalan hasil rembug jurong dan Musrenbangdes bersama BPD/Tuha Peut.
            </p>
            <div className="space-y-2 text-xs text-[var(--color-brand-heading)]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pemberian Bantuan Langsung Tunai (BLT Dana Desa)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pembangunan rabat beton jalan usaha tani Jurong Cot Cut</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Penyelenggaraan Festival Seni Budaya & Maulid Raya</span>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-[var(--color-brand-border)] mt-6">
            <a
              href="#download-rkpdes"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-brand-surface)] hover:bg-blue-50 border border-[var(--color-brand-border)] text-[var(--color-brand-accent)] text-xs font-semibold transition-colors w-full justify-center"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Dokumen RKPDes 2026 (PDF • 3.2 MB)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Program Prioritas Table */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[var(--color-brand-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-[var(--color-brand-heading)]">
              Daftar Program Prioritas RKPDes 2026
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-brand-body)] mt-1">
              Hasil pemufakatan Musyawarah Rencana Pembangunan Desa (Musrenbangdes) Lam Awe.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-[var(--color-brand-primary)] text-xs font-semibold">
            <Scale className="w-4 h-4" />
            Kesepakatan Tuha Peut No. 04/2025
          </span>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[var(--color-brand-surface)] text-[var(--color-brand-heading)] border-b border-[var(--color-brand-border)] font-semibold">
                <th className="py-3 px-6" scope="col">No</th>
                <th className="py-3 px-6" scope="col">Nama Program / Kegiatan</th>
                <th className="py-3 px-6" scope="col">Lokasi</th>
                <th className="py-3 px-6 text-right" scope="col">Pagu Anggaran</th>
                <th className="py-3 px-6" scope="col">Sumber Dana</th>
                <th className="py-3 px-6 text-center" scope="col">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-brand-border)]">
              {priorities.map((p) => (
                <tr key={p.nomor} className="hover:bg-blue-50/40 transition-colors">
                  <td className="py-4 px-6 font-mono font-bold text-[var(--color-brand-heading)]">
                    {p.nomor}
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-[var(--color-brand-heading)] block">
                      {p.judul}
                    </span>
                    <span className="text-xs text-[var(--color-brand-body)]">{p.kategori}</span>
                  </td>
                  <td className="py-4 px-6 text-[var(--color-brand-body)]">{p.lokasi}</td>
                  <td className="py-4 px-6 text-right font-mono font-bold text-[var(--color-brand-primary)]">
                    {p.anggaran}
                  </td>
                  <td className="py-4 px-6 text-[var(--color-brand-body)] text-xs">{p.sumber}</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

