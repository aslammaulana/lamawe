import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  ChevronRight,
  Send,
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kotak Aspirasi & Rembug Warga - Gampong Lam Awe",
  description:
    "Salurkan ide, masukan pembangunan, dan usulan kegiatan kemasyarakatan untuk kemajuan Gampong Lam Awe, Kecamatan Peukan Bada.",
};

export default function AspirasiPage() {
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
            Aspirasi & Rembug
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
            <Lightbulb className="w-3.5 h-3.5" />
            PARTISIPASI PEMBANGUNAN GAMPONG
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
            Kotak Aspirasi & Rembug Warga
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 leading-relaxed">
            Setiap gagasan dan usulan warga sangat berharga bagi masa depan Lam Awe. Sampaikan ide inovatif Anda untuk dibahas pada rembug dusun dan musyawarah gampong.
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
              className="px-4 py-2 rounded-lg text-xs font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-white transition-colors"
            >
              Musyawarah Gampong (Musdes)
            </Link>
            <Link
              href="/partisipasi/aspirasi"
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-[var(--color-brand-primary)] text-white shadow-xs"
            >
              Aspirasi & Rembug
            </Link>
          </nav>
        </div>
      </section>

      {/* CTA Box to Official Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[var(--color-brand-primary)] flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-[var(--color-brand-heading)] mb-2">
              Kirim Aspirasi Digital
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed mb-4">
              Gunakan formulir digital terpadu gampong untuk menyampaikan aspirasi atau pengaduan secara terdata dan memperoleh nomor tiket pemantauan.
            </p>
          </div>
          <Link
            href="/layanan/pengaduan"
            className="w-full h-11 rounded-xl bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <Send className="w-4 h-4" />
            <span>Buka Formulir Pengaduan & Aspirasi</span>
          </Link>
        </div>

        <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-[var(--color-brand-heading)] mb-2">
              Konsultasi WhatsApp Keuchik
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed mb-4">
              Warga juga dapat berkonsultasi langsung melalui pesan WhatsApp meja pelayanan Keuchik untuk aspirasi mendesak atau hal penting lainnya.
            </p>
          </div>
          <a
            href="https://wa.me/628123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-11 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Hubungi WhatsApp Keuchik</span>
          </a>
        </div>
      </div>
    </div>
  );
}

