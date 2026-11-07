import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ChevronRight,
  Filter,
  Layers,
  MapPin,
  Calendar,
  Building,
  Wrench,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Program & Kegiatan Desa 2026 - Gampong Lam Awe",
  description:
    "Monitoring program kerja dan realisasi kegiatan pembangunan fisik dan non-fisik Gampong Lam Awe Tahun Anggaran 2026.",
};

const programs = [
  {
    id: 1,
    title: "Pembangunan Saluran Drainase & Tanggul Banjir Rob",
    bidang: "Pembangunan Fisik",
    jurong: "Jurong Cot Meurak",
    progress: 85,
    anggaran: "Rp 145.000.000",
    sumber: "Dana Desa (DDS) Tahap I & II",
    jadwal: "Maret - Agustus 2026",
    status: "Tahap Penyelesaian",
    deskripsi:
      "Pembangunan talud penahan tanah dan drainase sepanjang 350 meter untuk mencegah genangan pasang laut di pemukiman warga.",
  },
  {
    id: 2,
    title: "Pemberian Makanan Tambahan (PMT) & Posyandu Lansia/Balita",
    bidang: "Kesehatan & Sosial",
    jurong: "Semua Jurong (4 Jurong)",
    progress: 75,
    anggaran: "Rp 42.000.000",
    sumber: "Dana Desa 2026",
    jadwal: "Januari - Desember 2026",
    status: "Rutin Berjalan",
    deskripsi:
      "Intervensi gizi spesifik untuk 48 anak balita dan pemeriksaan tensi rutin untuk 62 lansia gampong.",
  },
  {
    id: 3,
    title: "Pelatihan Digital Marketing & Sertifikasi Halal Produk UMKM",
    bidang: "Pemberdayaan Ekonomi",
    jurong: "Balai Pelatihan Gampong",
    progress: 100,
    anggaran: "Rp 28.500.000",
    sumber: "Alokasi Dana Gampong (ADG)",
    jadwal: "Mei 2026",
    status: "Selesai 100%",
    deskripsi:
      "Pelatihan kemasan dan pemasaran daring olahan kerupuk ikan dan terasi khas Lam Awe untuk 25 pelaku UMKM perempuan.",
  },
  {
    id: 4,
    title: "Rehabilitasi Lantai & Tempat Wudhu Meunasah Gampong",
    bidang: "Sarana Ibadah",
    jurong: "Jurong Meunasah Tuha",
    progress: 60,
    anggaran: "Rp 55.000.000",
    sumber: "Swadaya & Bantuan Keuangan Kabupaten",
    jadwal: "Juli - Oktober 2026",
    status: "Dalam Pengerjaan",
    deskripsi:
      "Pemasangan keramik granit dan penambahan instalasi kran air wudhu modern di kompleks meunasah utama.",
  },
];

export default function ProgramPage() {
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
            Program & Kegiatan
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="flex flex-col gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            REALISASI PROGRAM LAPANGAN
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
            Program & Kegiatan Kerja 2026
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 max-w-3xl leading-relaxed">
            Pantau langsung kemajuan pelaksanaan proyek fisik, program pemberdayaan warga, dan bantuan sosial di seluruh wilayah Gampong Lam Awe secara real-time.
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
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-[var(--color-brand-primary)] text-white shadow-xs"
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

      {/* Program Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programs.map((prog) => (
          <div
            key={prog.id}
            className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-[var(--color-brand-accent)] transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[var(--color-brand-primary)] text-xs font-semibold">
                  {prog.bidang}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                  {prog.status}
                </span>
              </div>

              <h2 className="text-lg font-bold text-[var(--color-brand-heading)] mb-2">
                {prog.title}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed mb-4">
                {prog.deskripsi}
              </p>

              <div className="grid grid-cols-2 gap-3 py-3 border-y border-[var(--color-brand-border)] text-xs mb-4">
                <div>
                  <span className="text-[var(--color-brand-body)] block">Lokasi:</span>
                  <span className="font-semibold text-[var(--color-brand-heading)] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-brand-accent)]" /> {prog.jurong}
                  </span>
                </div>
                <div>
                  <span className="text-[var(--color-brand-body)] block">Jadwal Pelaksanaan:</span>
                  <span className="font-semibold text-[var(--color-brand-heading)] flex items-center gap-1 mt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-[var(--color-brand-accent)]" /> {prog.jadwal}
                  </span>
                </div>
                <div>
                  <span className="text-[var(--color-brand-body)] block">Alokasi Anggaran:</span>
                  <span className="font-bold text-[var(--color-brand-primary)] font-mono mt-0.5 block">
                    {prog.anggaran}
                  </span>
                </div>
                <div>
                  <span className="text-[var(--color-brand-body)] block">Sumber Dana:</span>
                  <span className="font-semibold text-[var(--color-brand-heading)] mt-0.5 block">
                    {prog.sumber}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs mb-1.5 font-semibold">
                <span className="text-[var(--color-brand-body)]">Progres Fisik</span>
                <span className="text-[var(--color-brand-primary)] font-mono">{prog.progress}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className="h-full bg-[var(--color-brand-primary)] rounded-full transition-all duration-500"
                  style={{ width: `${prog.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

