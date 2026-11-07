import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  ChevronRight,
  Users,
  Home,
  MapPin,
  TrendingUp,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Award,
  Layers,
  PieChart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Data & Statistik Kependudukan Desa - Gampong Lam Awe",
  description:
    "Infografis data statistik kependudukan, status IDM Mandiri, piramida usia, dan mata pencaharian warga Gampong Lam Awe, Kecamatan Peukan Bada, Aceh Besar.",
};

const jurongData = [
  { nama: "Jurong Cot Meurak", penduduk: 362, kk: 68, l: 184, p: 178 },
  { nama: "Jurong Meunasah Tuha", penduduk: 418, kk: 84, l: 209, p: 209 },
  { nama: "Jurong Lampoh Peukan", penduduk: 442, kk: 92, l: 226, p: 216 },
  { nama: "Jurong Cot Cut", penduduk: 382, kk: 74, l: 191, p: 191 },
];

const pekerjaanData = [
  { job: "Nelayan & Pengolahan Laut", count: 215, persen: "29.4%" },
  { job: "Petani & Buruh Tani Sawah", count: 182, persen: "24.9%" },
  { job: "Pedagang / Pelaku UMKM", count: 148, persen: "20.2%" },
  { job: "PNS / Guru / TNI-Polri", count: 68, persen: "9.3%" },
  { job: "Karyawan Swasta & Jasa", count: 118, persen: "16.2%" },
];

const usiaData = [
  { group: "Balita & Anak (0 - 14 th)", count: 328, persen: "20.4%" },
  { group: "Usia Produktif (15 - 64 th)", count: 1124, persen: "70.1%" },
  { group: "Lansia (> 65 th)", count: 152, persen: "9.5%" },
];

export default function DataPage() {
  const totalPenduduk = jurongData.reduce((acc, curr) => acc + curr.penduduk, 0);
  const totalKK = jurongData.reduce((acc, curr) => acc + curr.kk, 0);

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
          <li aria-current="page" className="font-semibold text-[var(--color-brand-heading)]">
            Data & Statistik Desa
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            SATU DATA GAMPONG LAM AWE
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
            Data Statistik & Kependudukan
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 leading-relaxed">
            Pusat data digital resmi Pemerintah Gampong Lam Awe menyajikan statistik demografi, mata pencaharian warga, dan indikator Indeks Desa Membangun (IDM) berbasis data riil.
          </p>
        </div>
      </section>

      {/* 4 Summary Stat Cards */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[var(--color-brand-primary)] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase font-bold text-gray-400 font-mono">
              Sensus 2026
            </span>
          </div>
          <span className="text-xs text-[var(--color-brand-body)] block">Total Penduduk</span>
          <span className="text-2xl font-bold font-mono text-[var(--color-brand-heading)]">
            {totalPenduduk.toLocaleString("id-ID")} Jiwa
          </span>
          <span className="text-[11px] text-gray-400 mt-1 block">810 Laki-laki • 794 Perempuan</span>
        </div>

        <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Home className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase font-bold text-gray-400 font-mono">
              Kartu Keluarga
            </span>
          </div>
          <span className="text-xs text-[var(--color-brand-body)] block">Kepala Keluarga (KK)</span>
          <span className="text-2xl font-bold font-mono text-[var(--color-brand-heading)]">
            {totalKK} KK
          </span>
          <span className="text-[11px] text-gray-400 mt-1 block">Rata-rata 4.9 Jiwa/KK</span>
        </div>

        <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-mono">
              Kemendes PDT
            </span>
          </div>
          <span className="text-xs text-[var(--color-brand-body)] block">Status IDM Desa</span>
          <span className="text-2xl font-bold font-mono text-emerald-700">DESA MANDIRI</span>
          <span className="text-[11px] text-gray-400 mt-1 block">Skor: 0.8412 (Tinggi)</span>
        </div>

        <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase font-bold text-gray-400 font-mono">
              Kewilayahan
            </span>
          </div>
          <span className="text-xs text-[var(--color-brand-body)] block">Wilayah & Dusun</span>
          <span className="text-2xl font-bold font-mono text-[var(--color-brand-heading)]">
            4 Jurong
          </span>
          <span className="text-[11px] text-gray-400 mt-1 block">Luas Wilayah: 215 Hektar</span>
        </div>
      </section>

      {/* Demografi per Jurong Table */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[var(--color-brand-border)]">
          <h2 className="text-lg font-bold text-[var(--color-brand-heading)]">
            Distribusi Kependudukan per Jurong (Dusun Adat)
          </h2>
          <p className="text-xs text-[var(--color-brand-body)] mt-0.5">
            Data registrasi buku induk kependudukan mutasi semester I tahun 2026.
          </p>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[var(--color-brand-surface)] text-[var(--color-brand-heading)] border-b border-[var(--color-brand-border)] font-semibold">
                <th className="py-3 px-6">Nama Jurong</th>
                <th className="py-3 px-6 text-right">Laki-laki</th>
                <th className="py-3 px-6 text-right">Perempuan</th>
                <th className="py-3 px-6 text-right">Jumlah Penduduk</th>
                <th className="py-3 px-6 text-right">Jumlah KK</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-brand-border)]">
              {jurongData.map((j, i) => (
                <tr key={i} className="hover:bg-blue-50/40 transition-colors">
                  <td className="py-3.5 px-6 font-bold text-[var(--color-brand-heading)]">
                    {j.nama}
                  </td>
                  <td className="py-3.5 px-6 text-right font-mono text-[var(--color-brand-body)]">
                    {j.l} Jiwa
                  </td>
                  <td className="py-3.5 px-6 text-right font-mono text-[var(--color-brand-body)]">
                    {j.p} Jiwa
                  </td>
                  <td className="py-3.5 px-6 text-right font-mono font-bold text-[var(--color-brand-primary)]">
                    {j.penduduk} Jiwa
                  </td>
                  <td className="py-3.5 px-6 text-right font-mono font-semibold text-[var(--color-brand-heading)]">
                    {j.kk} KK
                  </td>
                </tr>
              ))}
              <tr className="bg-[var(--color-brand-surface)] font-bold text-[var(--color-brand-heading)]">
                <td className="py-3.5 px-6">TOTAL KESELURUHAN</td>
                <td className="py-3.5 px-6 text-right font-mono">810 Jiwa</td>
                <td className="py-3.5 px-6 text-right font-mono">794 Jiwa</td>
                <td className="py-3.5 px-6 text-right font-mono text-[var(--color-brand-primary)]">
                  {totalPenduduk} Jiwa
                </td>
                <td className="py-3.5 px-6 text-right font-mono">{totalKK} KK</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Mata Pencaharian & Usia 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pekerjaan */}
        <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-[var(--color-brand-accent)]" />
            <h3 className="text-base font-bold text-[var(--color-brand-heading)]">
              Mata Pencaharian Utama Warga
            </h3>
          </div>
          <div className="space-y-3">
            {pekerjaanData.map((p, i) => (
              <div key={i} className="flex flex-col gap-1 text-xs">
                <div className="flex items-center justify-between font-semibold text-[var(--color-brand-heading)]">
                  <span>{p.job}</span>
                  <span className="font-mono text-[var(--color-brand-primary)]">
                    {p.count} Orang ({p.persen})
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full bg-[var(--color-brand-primary)] rounded-full"
                    style={{ width: p.persen }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kelompok Usia */}
        <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <PieChart className="w-5 h-5 text-[var(--color-brand-accent)]" />
            <h3 className="text-base font-bold text-[var(--color-brand-heading)]">
              Komposisi Kelompok Usia
            </h3>
          </div>
          <div className="space-y-4">
            {usiaData.map((u, i) => (
              <div key={i} className="flex flex-col gap-1 text-xs">
                <div className="flex items-center justify-between font-semibold text-[var(--color-brand-heading)]">
                  <span>{u.group}</span>
                  <span className="font-mono text-emerald-700">
                    {u.count} Jiwa ({u.persen})
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full"
                    style={{ width: u.persen }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] text-xs text-[var(--color-brand-body)] mt-6">
            <span className="font-bold text-[var(--color-brand-heading)] block mb-0.5">
              Bonus Demografi Produktif:
            </span>
            Sebanyak 70.1% penduduk berada dalam usia kerja produktif, menjadi modal sosial utama kemajuan perekonomian maritim dan pertanian gampong.
          </div>
        </div>
      </div>
    </div>
  );
}

