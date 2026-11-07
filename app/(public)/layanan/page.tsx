import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  ChevronRight,
  Clock,
  ShieldCheck,
  Search,
  MessageSquare,
  Headphones,
  MapPin,
  ExternalLink,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import LayananCatalog from "@/components/layanan/LayananCatalog";

export const metadata: Metadata = {
  title: "Pusat Layanan Mandiri & Administrasi Publik - Gampong Lam Awe",
  description:
    "Katalog resmi pengurusan surat keterangan, perizinan usaha, dan administrasi kependudukan warga Gampong Lam Awe, Kecamatan Peukan Bada, Aceh Besar.",
};

export default function LayananRootPage() {
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
          <li aria-current="page" className="font-semibold text-[var(--color-brand-heading)]">
            Layanan Desa
          </li>
        </ol>
      </nav>

      {/* Header Banner */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              PELAYANAN ADMINISTRASI TERPADU GAMPONG
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
              Layanan Mandiri & Administrasi Desa
            </h1>
            <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 leading-relaxed">
              Akses pengurusan surat keterangan, perizinan usaha, dan administrasi kependudukan desa secara transparan, mudah, dan bebas pungli bagi seluruh warga Gampong Lam Awe.
            </p>
          </div>

          {/* Jam Pelayanan Card */}
          <div className="flex items-center gap-3.5 p-4 bg-white border border-[var(--color-brand-border)] rounded-2xl shadow-sm shrink-0">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[var(--color-brand-primary)] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-[var(--color-brand-heading)] block">
                Jam Layanan Kantor
              </span>
              <span className="text-xs font-mono text-[var(--color-brand-body)]">
                Senin - Jumat: 08.30 - 15.30 WIB
              </span>
            </div>
          </div>
        </div>

        {/* Sub-nav Tabs */}
        <div className="w-full bg-white border border-[var(--color-brand-border)] rounded-xl p-1.5 overflow-x-auto shadow-xs">
          <nav aria-label="Seksi Layanan" className="flex items-center space-x-1 min-w-max">
            <Link
              href="/layanan"
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-[var(--color-brand-primary)] text-white shadow-xs"
            >
              Katalog Layanan
            </Link>
            <Link
              href="/layanan/pengaduan"
              className="px-4 py-2 rounded-lg text-xs font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-[var(--color-brand-surface)] transition-colors"
            >
              Pengaduan & Aspirasi Warga
            </Link>
            <Link
              href="/layanan/status"
              className="px-4 py-2 rounded-lg text-xs font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-[var(--color-brand-surface)] transition-colors"
            >
              Lacak Status Permohonan
            </Link>
          </nav>
        </div>
      </section>

      {/* Interactive Catalog Section */}
      <LayananCatalog />

      {/* Tracking & Helpdesk Double Bento Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
        {/* Tracking Card */}
        <div className="lg:col-span-7 bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-[var(--color-brand-primary)] flex items-center justify-center shrink-0">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[var(--color-brand-heading)]">
                  Lacak Status Permohonan Berkas
                </h2>
                <p className="text-xs text-[var(--color-brand-body)]">
                  Pantau alur verifikasi berkas surat Anda secara real-time.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed mb-5">
              Sudah mengajukan surat keterangan atau permohonan online? Masukkan Nomor Tiket Registrasi Anda untuk melihat progres pengesahan oleh Kasi Pelayanan dan Keuchik.
            </p>

            <form
              action="/layanan/status"
              method="GET"
              className="flex flex-col sm:flex-row gap-2.5"
            >
              <div className="relative flex-1">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-mono text-xs">
                  #
                </span>
                <input
                  type="text"
                  name="ticket"
                  placeholder="Contoh: LMA-2026-001"
                  className="w-full h-11 pl-8 pr-3 bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] rounded-xl text-xs font-mono uppercase text-[var(--color-brand-heading)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]"
                />
              </div>
              <button
                type="submit"
                className="h-11 px-5 rounded-xl bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white text-xs font-semibold shadow-xs flex items-center justify-center gap-2 transition-colors shrink-0"
              >
                <span>Cek Berkas</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="pt-4 border-t border-[var(--color-brand-border)] mt-6 flex items-center justify-between text-xs text-[var(--color-brand-body)]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Tersambung ke Database Administrasi Gampong
            </span>
            <Link
              href="/layanan/status"
              className="text-[var(--color-brand-accent)] font-semibold hover:underline"
            >
              Halaman Lacak Penuh &rarr;
            </Link>
          </div>
        </div>

        {/* Helpdesk Card */}
        <div className="lg:col-span-5 bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[var(--color-brand-heading)]">
                  Butuh Bantuan Administrasi?
                </h2>
                <p className="text-xs text-[var(--color-brand-body)]">
                  Pendampingan pengisian bagi lansia & disabilitas
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed mb-4">
              Mengalami kendala unggah dokumen atau membutuhkan layanan jemput bola di rumah? Petugas loket kami siap membantu:
            </p>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-[var(--color-brand-accent)] shrink-0" />
                <div>
                  <span className="font-bold text-[var(--color-brand-heading)] block">
                    Kasi Pelayanan Umum: Teuku Ridwan
                  </span>
                  <span className="font-mono text-gray-500 text-[11px]">
                    0812-3456-7890 (WhatsApp Aktif)
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[var(--color-brand-accent)] shrink-0" />
                <div>
                  <span className="font-bold text-[var(--color-brand-heading)] block">
                    Loket Kantor Keuchik Lam Awe
                  </span>
                  <span className="text-gray-500 text-[11px]">
                    Jl. Meulaboh - Banda Aceh KM 7.5
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[var(--color-brand-border)] mt-4">
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-11 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Konsultasi Langsung via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

