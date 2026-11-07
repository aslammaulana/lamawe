import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  ChevronRight,
  FileText,
  Mail,
  Clock,
  HelpCircle,
  AlertCircle,
  ExternalLink,
  BookOpen,
  Send,
} from "lucide-react";

export const metadata: Metadata = {
  title: "PPID Desa (Pejabat Pengelola Informasi & Dokumentasi) - Gampong Lam Awe",
  description:
    "Layanan permohonan informasi publik resmi Gampong Lam Awe sesuai amanat UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik.",
};

const daftarInformasi = [
  {
    kategori: "Informasi Berkala",
    items: [
      "Profil Lengkap Gampong & Struktur Organisasi Aparatur",
      "Ringkasan APBDes, Realisasi Dana Desa, & LPJ Tahunan",
      "Rencana Kerja Pemerintah Gampong (RKPDes) & RPJMDes",
      "Peraturan Desa (Qanun Gampong) yang telah diundangkan",
    ],
  },
  {
    kategori: "Informasi Serta-Merta",
    items: [
      "Peringatan dini kebencanaan pesisir, gelombang pasang & abrasi",
      "Informasi keadaan darurat kesehatan warga & mitigasi wabah",
      "Prosedur evakuasi kebencanaan tsunami dan peta titik kumpul",
    ],
  },
  {
    kategori: "Informasi Setiap Saat",
    items: [
      "Daftar lengkap aset milik Gampong Lam Awe (tanah wakaf, balai, inventaris)",
      "Surat Keputusan (SK) Keuchik tentang pengangkatan pengurus lembaga",
      "Dokumen perjanjian kerjasama antar desa atau dengan pihak ketiga",
      "Standar Operasional Prosedur (SOP) seluruh layanan publik desa",
    ],
  },
];

export default function PPIDPage() {
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
            PPID Desa
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="flex flex-col gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            UU KIP NO. 14 TAHUN 2008
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
            PPID Gampong Lam Awe
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 max-w-3xl leading-relaxed">
            Pejabat Pengelola Informasi dan Dokumentasi (PPID) bertugas mengelola dan melayani permohonan informasi publik secara cepat, tepat waktu, biaya ringan, dan proporsional demi mewujudkan tata kelola desa yang transparan dan akuntabel.
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
              className="px-4 py-2 rounded-lg text-xs font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-[var(--color-brand-surface)] transition-colors"
            >
              Laporan Realisasi & LPJ
            </Link>
            <Link
              href="/transparansi/ppid"
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-[var(--color-brand-primary)] text-white shadow-xs"
            >
              PPID & Informasi Publik
            </Link>
          </nav>
        </div>
      </section>

      {/* Maklumat Pelayanan Card */}
      <section className="bg-gradient-to-r from-blue-900 to-[var(--color-brand-primary)] text-white rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 rounded bg-white/20 text-xs font-mono font-semibold mb-3">
            MAKLUMAT PELAYANAN INFORMASI PUBLIK
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            &ldquo;Kami Berkomitmen Memberikan Pelayanan Informasi Publik yang Transparan, Akuntabel, dan Bebas Pungutan Liar&rdquo;
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
            Setiap warga berhak memperoleh informasi publik sesuai ketentuan peraturan perundang-undangan. Kami menjamin waktu respon maksimal 10 hari kerja (dapat diperpanjang 7 hari kerja dengan pemberitahuan tertulis).
          </p>
        </div>
      </section>

      {/* Daftar Kategori Informasi Publik (DIP) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {daftarInformasi.map((info, idx) => (
          <div
            key={idx}
            className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-[var(--color-brand-accent)]" />
                <h3 className="text-base font-bold text-[var(--color-brand-heading)]">
                  {info.kategori}
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs text-[var(--color-brand-body)]">
                {info.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Prosedur Permohonan & Kontak Petugas PPID */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-[var(--color-brand-heading)] mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-[var(--color-brand-accent)]" />
            Alur Permohonan Informasi Publik
          </h3>
          <ol className="space-y-4 text-xs sm:text-sm text-[var(--color-brand-body)]">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-[var(--color-brand-primary)] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                1
              </span>
              <div>
                <strong className="text-[var(--color-brand-heading)] block">Pengajuan Permohonan:</strong>
                Pemohon mengisi formulir permohonan informasi secara online atau datang langsung ke Kantor Keuchik Lam Awe dengan membawa KTP/tanda pengenal sah.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-[var(--color-brand-primary)] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                2
              </span>
              <div>
                <strong className="text-[var(--color-brand-heading)] block">Pemeriksaan & Registrasi:</strong>
                Petugas PPID memeriksa kelengkapan berkas dan memberikan tanda terima permohonan resmi dalam 1 x 24 jam.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-[var(--color-brand-primary)] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                3
              </span>
              <div>
                <strong className="text-[var(--color-brand-heading)] block">Tanggapan & Penyerahan:</strong>
                PPID memberikan pemberitahuan tertulis mengenai ketersediaan informasi maksimal dalam tempo 10 hari kerja.
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-[var(--color-brand-heading)] mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-[var(--color-brand-accent)]" />
              Kontak Desk Layanan PPID
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed mb-4">
              Silakan menghubungi Sekretaris Gampong selaku Pejabat Pengelola Informasi dan Dokumentasi (PPID) Utama Gampong Lam Awe:
            </p>
            <div className="space-y-2.5 text-xs text-[var(--color-brand-heading)] bg-[var(--color-brand-surface)] p-4 rounded-xl border border-[var(--color-brand-border)]">
              <div>
                <span className="text-[var(--color-brand-body)] block">Pejabat PPID:</span>
                <span className="font-bold">Sekretaris Gampong Lam Awe (M. Ridwan, S.Sos)</span>
              </div>
              <div>
                <span className="text-[var(--color-brand-body)] block">Alamat Sekretariat:</span>
                <span className="font-semibold">Kantor Keuchik Gampong Lam Awe, Jl. Meulaboh - Banda Aceh KM 7.5</span>
              </div>
              <div>
                <span className="text-[var(--color-brand-body)] block">Email Resmi:</span>
                <span className="font-mono text-[var(--color-brand-accent)]">ppid@desa-lamawe.id</span>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-[var(--color-brand-border)]">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Hubungi Petugas PPID Langsung</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

