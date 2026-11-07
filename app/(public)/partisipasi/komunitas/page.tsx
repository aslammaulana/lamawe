import type { Metadata } from "next";
import Link from "next/link";
import {
  Users2,
  ChevronRight,
  Heart,
  Trophy,
  BookOpen,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partisipasi Komunitas & Lembaga Warga - Gampong Lam Awe",
  description:
    "Profil lembaga kemasyarakatan desa (LKD): Karang Taruna Bina Remaja, TP-PKK Bungong Jeumpa, Majelis Taklim BKMT, dan Posyandu Gampong Lam Awe.",
};

const organizations = [
  {
    nama: "Karang Taruna Bina Remaja Lam Awe",
    peran: "Wadah Kepemudaan, Olahraga & Tanggap Bencana",
    ketua: "Teuku Zulfikar, S.T",
    anggota: "45 Pemuda Aktif",
    program: [
      "Turnamen Bola Voli & Futsal Antar Jurong",
      "Tim Satgas Tanggap Darurat & Evakuasi Bencana Pasang Laut",
      "Pengelolaan Sound System & Tenda Meunasah Warga",
    ],
  },
  {
    nama: "Tim Penggerak PKK Bungong Jeumpa",
    peran: "Pemberdayaan Kesejahteraan Keluarga & Perempuan",
    ketua: "Hj. Nurhayati Daud",
    anggota: "38 Kader Posyandu & PKK",
    program: [
      "Pelatihan Olahan Ikan Asin & Keumamah Higienis",
      "Pencegahan Stunting Balita Lewat Dapur Gizi Dahsat",
      "Pemanfaatan Lahan Pekarangan Organik (Hatinya PKK)",
    ],
  },
  {
    nama: "Majelis Taklim & Pengajian Balai Meunasah",
    peran: "Pembinaan Moral, Fikih & Nilai Syariat Islam",
    ketua: "Ustadz H. Marzuki, Lc",
    anggota: "120 Jamaah Rutin",
    program: [
      "Pengajian Rutin Malam Kamis di Meunasah Tuha",
      "Peringatan Hari Besar Islam (Maulid Nabi & Isra Mi'raj)",
      "Pendidikan Al-Qur'an (TPA) untuk Anak-anak Usia Dini",
    ],
  },
];

export default function KomunitasPage() {
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
            Komunitas & Lembaga
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
            <Users2 className="w-3.5 h-3.5" />
            LEMBAGA KEMASYARAKATAN GAMPONG
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
            Partisipasi Lembaga Warga & Komunitas
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 leading-relaxed">
            Membangun desa secara inklusif dan kolaboratif melalui peranan aktif generasi muda, kaum perempuan, dan majelis adat keagamaan Gampong Lam Awe.
          </p>
        </div>

        {/* Sub-nav Tabs */}
        <div className="w-full bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] rounded-xl p-1.5 overflow-x-auto shadow-xs mt-6">
          <nav aria-label="Seksi Partisipasi" className="flex items-center space-x-1 min-w-max">
            <Link
              href="/partisipasi/komunitas"
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-[var(--color-brand-primary)] text-white shadow-xs"
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
              className="px-4 py-2 rounded-lg text-xs font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-white transition-colors"
            >
              Aspirasi & Rembug
            </Link>
          </nav>
        </div>
      </section>

      {/* Organization Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {organizations.map((org, idx) => (
          <div
            key={idx}
            className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-[var(--color-brand-accent)] transition-all"
          >
            <div>
              <span className="text-xs font-mono font-bold text-[var(--color-brand-primary)] bg-blue-50 px-2.5 py-0.5 rounded-full inline-block mb-3">
                {org.anggota}
              </span>
              <h2 className="text-lg font-bold text-[var(--color-brand-heading)] mb-1">
                {org.nama}
              </h2>
              <span className="text-xs text-[var(--color-brand-body)] block mb-3 font-medium">
                {org.peran}
              </span>

              <div className="p-3 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] text-xs text-[var(--color-brand-heading)] mb-4">
                <span className="text-gray-400 block text-[11px]">Koordinator / Ketua:</span>
                <strong>{org.ketua}</strong>
              </div>

              <span className="text-xs font-bold text-[var(--color-brand-heading)] block mb-2">
                Program Kerja Unggulan:
              </span>
              <ul className="space-y-2 text-xs text-[var(--color-brand-body)]">
                {org.program.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

