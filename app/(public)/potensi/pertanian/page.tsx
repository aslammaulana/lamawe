import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Wheat,
  ChevronRight,
  Waves,
  Anchor,
  Compass,
  Sprout,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Potensi Pertanian & Kelautan Nelayan - Gampong Lam Awe",
  description:
    "Profil komoditas ketahanan pangan padi sawah dan perikanan tangkap laut Selat Malaka Gampong Lam Awe, Kecamatan Peukan Bada, Aceh Besar.",
};

export default function PertanianPage() {
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
          <li className="text-[var(--color-brand-body)]">Data & Potensi</li>
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="font-semibold text-[var(--color-brand-heading)]">
            Pertanian & Kelautan
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
            <Wheat className="w-3.5 h-3.5" />
            KETAHANAN PANGAN & MARITIM
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
            Potensi Pertanian Sawah & Perikanan Tangkap
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 leading-relaxed">
            Sinergi dua pilar ketahanan pangan warga: 85 Hektar sawah produktif beririgasi teknis di Jurong Cot Cut & Meurak, serta armada perikanan tangkap tradisional di pesisir Selat Malaka.
          </p>
        </div>
      </section>

      {/* 2-Column Bento: Sektor Pertanian & Sektor Kelautan */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sektor Pertanian */}
        <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Wheat className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[var(--color-brand-body)] block">Sektor Pangan</span>
                  <h2 className="text-xl font-bold text-[var(--color-brand-heading)]">
                    Pertanian Sawah Produktif
                  </h2>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono text-xs font-bold">
                85 Ha Sawah
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed mb-4">
              Hamparan persawahan di Jurong Cot Cut dan Cot Meurak dengan sistem pengairan irigasi teknis tersier yang baru saja direhabilitasi melalui Dana Desa 2026. Didukung kelembagaan adat <strong>Keujruen Blang</strong> yang mengatur pembagian air secara adil dan tradisi Khanduri Blang.
            </p>

            <div className="space-y-2 text-xs text-[var(--color-brand-heading)] bg-[var(--color-brand-surface)] p-4 rounded-xl border border-[var(--color-brand-border)] mb-4">
              <div className="flex items-center justify-between">
                <span>Produktivitas Rata-rata:</span>
                <strong className="font-mono text-emerald-700">5.8 Ton Gabah Kering / Ha</strong>
              </div>
              <div className="flex items-center justify-between">
                <span>Musim Tanam:</span>
                <strong className="font-mono">2 Kali Setahun (Rendengan & Gadu)</strong>
              </div>
              <div className="flex items-center justify-between">
                <span>Lembaga Pengelola Adat:</span>
                <strong className="font-semibold">Keujruen Blang Chiek Lam Awe</strong>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--color-brand-border)] flex items-center gap-2 text-xs text-emerald-700 font-medium">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Swasembada beras mandiri mencukupi konsumsi seluruh warga gampong.</span>
          </div>
        </div>

        {/* Sektor Kelautan & Perikanan Tangkap */}
        <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[var(--color-brand-primary)] flex items-center justify-center">
                  <Waves className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[var(--color-brand-body)] block">Sektor Maritim</span>
                  <h2 className="text-xl font-bold text-[var(--color-brand-heading)]">
                    Perikanan Laut & Pesisir
                  </h2>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[var(--color-brand-primary)] font-mono text-xs font-bold">
                68 Boat Nelayan
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed mb-4">
              Aktivitas nelayan tradisional berpusat di pangkalan tambat perahu Jurong Cot Meurak, beroperasi dengan kaidah adat laut Aceh di bawah naungan <strong>Panglima Laot Lhok</strong>. Mengutamakan penangkapan ramah lingkungan tanpa pukat harimau.
            </p>

            <div className="space-y-2 text-xs text-[var(--color-brand-heading)] bg-[var(--color-brand-surface)] p-4 rounded-xl border border-[var(--color-brand-border)] mb-4">
              <div className="flex items-center justify-between">
                <span>Komoditas Utama:</span>
                <strong className="font-semibold">Tongkol, Tenggiri, Kuwe, Cumi & Udang</strong>
              </div>
              <div className="flex items-center justify-between">
                <span>Estimasi Tangkapan Harian:</span>
                <strong className="font-mono text-[var(--color-brand-primary)]">1.2 - 2.5 Ton / Hari</strong>
              </div>
              <div className="flex items-center justify-between">
                <span>Lembaga Pengawas Adat Laut:</span>
                <strong className="font-semibold">Panglima Laot Lhok Lam Awe</strong>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--color-brand-border)] flex items-center gap-2 text-xs text-[var(--color-brand-primary)] font-medium">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Penyuplai ikan segar utama ke pasar Peukan Bada dan Banda Aceh.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

