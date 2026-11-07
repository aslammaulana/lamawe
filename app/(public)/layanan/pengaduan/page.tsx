import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquareWarning,
  ChevronRight,
  Clock,
  ShieldCheck,
  PhoneCall,
  CheckCircle2,
  AlertTriangle,
  Building,
} from "lucide-react";
import PengaduanFormClient from "@/components/layanan/PengaduanFormClient";

export const metadata: Metadata = {
  title: "Layanan Pengaduan & Aspirasi Warga - Gampong Lam Awe",
  description:
    "Kanal resmi penyampaian aspirasi, saran, dan pengaduan pembangunan atau pelayanan publik Gampong Lam Awe, Kecamatan Peukan Bada.",
};

export default function PengaduanPage() {
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
            Pengaduan Warga
          </li>
        </ol>
      </nav>

      {/* Header Banner */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
            <MessageSquareWarning className="w-3.5 h-3.5" />
            KANAL RESMI ASPIRASI & PENGADUAN WARGA
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
            Layanan Pengaduan & Aspirasi Gampong Lam Awe
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 leading-relaxed">
            Sampaikan keluhan, aspirasi pembangunan, atau kendala fasilitas publik secara transparan, aman, dan dapat dipantau langsung oleh perangkat gampong.
          </p>
        </div>
      </section>

      {/* 2-Column Grid: Left (Form 8 cols) + Right (Sidebar 4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <PengaduanFormClient />
        </div>

        {/* Right Sidebar (4 cols) */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          {/* Card 1: Standar Waktu Respon */}
          <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-[var(--color-brand-primary)]">
              <Clock className="w-5 h-5" />
              <h3 className="font-bold text-sm text-[var(--color-brand-heading)]">
                Standar Waktu Respon (SOP)
              </h3>
            </div>
            <p className="text-xs text-[var(--color-brand-body)] leading-relaxed">
              Pemerintah Gampong Lam Awe berkomitmen memproses aspirasi masyarakat sesuai prosedur operasional standar:
            </p>

            <div className="space-y-2 text-xs pt-1">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)]">
                <span className="font-semibold text-[var(--color-brand-heading)]">
                  Verifikasi Berkas Awal
                </span>
                <span className="font-mono font-bold text-[var(--color-brand-primary)]">
                  Maks. 1x24 Jam
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)]">
                <span className="font-semibold text-[var(--color-brand-heading)]">
                  Survei Lapangan
                </span>
                <span className="font-mono font-bold text-[var(--color-brand-primary)]">
                  1 - 2 Hari Kerja
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)]">
                <span className="font-semibold text-[var(--color-brand-heading)]">
                  Tindak Lanjut Eksekusi
                </span>
                <span className="font-mono font-bold text-[var(--color-brand-primary)]">
                  3 - 7 Hari Kerja
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Pengawasan & Lembaga Tuha Peut */}
          <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-emerald-700">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <h3 className="font-bold text-sm text-[var(--color-brand-heading)]">
                Pengawasan & Integritas
              </h3>
            </div>
            <p className="text-xs text-[var(--color-brand-body)] leading-relaxed">
              Pengaduan masyarakat diawasi langsung oleh <strong>Badan Permusyawaratan Gampong (Tuha Peut Lam Awe)</strong> dan diteruskan ke Inspektorat Kabupaten Aceh Besar bila memerlukan penanganan khusus.
            </p>
            <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 text-emerald-900 text-xs">
              <span className="font-bold block mb-0.5">Bebas Pungutan & Intervensi:</span>
              Pelapor dijamin keamanannya dan tidak dikenakan biaya sepeser pun.
            </div>
          </div>

          {/* Card 3: Hotline Darurat */}
          <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-amber-700">
              <PhoneCall className="w-5 h-5 text-amber-600" />
              <h3 className="font-bold text-sm text-[var(--color-brand-heading)]">
                Kontak Cepat & Darurat (24 Jam)
              </h3>
            </div>
            <p className="text-xs text-[var(--color-brand-body)] leading-relaxed">
              Untuk kejadian darurat (bencana alam, pasang laut rob, kebakaran, atau gangguan kamtibmas):
            </p>
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] flex items-center justify-between">
                <span className="font-sans font-semibold text-[var(--color-brand-heading)]">
                  Posko Tanggap Bencana:
                </span>
                <span className="font-bold text-red-600">0852-6000-XXXX</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] flex items-center justify-between">
                <span className="font-sans font-semibold text-[var(--color-brand-heading)]">
                  Bhabinkamtibmas:
                </span>
                <span className="font-bold text-[var(--color-brand-primary)]">0812-7000-XXXX</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

