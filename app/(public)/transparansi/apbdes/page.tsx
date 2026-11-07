import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  ShoppingCart,
  Scale,
  Download,
  Calendar,
  ChevronRight,
  ShieldCheck,
  FileText,
  FileSpreadsheet,
  FileDown,
  Info,
  HelpCircle,
  MessageSquareWarning,
  ExternalLink,
  Wallet,
  CalendarCheck,
  CheckCircle2,
  Building2,
  HardHat,
  Users2,
  Sprout,
  HeartPulse,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Transparansi APBDes & Keuangan Desa 2026 - Gampong Lam Awe",
  description:
    "Keterbukaan informasi pengelolaan keuangan publik, alokasi Dana Desa (DD), ADG, dan Pendapatan Asli Desa Gampong Lam Awe, Kec. Peukan Bada, Kab. Aceh Besar.",
};

const apbdesBidang = [
  {
    kode: "01",
    nama: "Bidang Penyelenggaraan Pemerintahan Desa",
    deskripsi:
      "Penghasilan tetap Keuchik & perangkat, operasional kantor gampong, BUMG, dan tata kelola administrasi",
    pagu: 380000000,
    realisasi: 304000000,
    persen: 80,
    icon: Building2,
    color: "bg-blue-500",
  },
  {
    kode: "02",
    nama: "Bidang Pelaksanaan Pembangunan Desa",
    deskripsi:
      "Drainase lingkungan, rabat beton lorong gampong, perbaikan meunasah, dan sarana posyandu",
    pagu: 450200000,
    realisasi: 301634000,
    persen: 67,
    icon: HardHat,
    color: "bg-emerald-500",
  },
  {
    kode: "03",
    nama: "Bidang Pembinaan Kemasyarakatan Desa",
    deskripsi:
      "Kegiatan pemuda & olahraga, pengajian balai meunasah, serta peringatan hari besar Islam (PHBI)",
    pagu: 120000000,
    realisasi: 84000000,
    persen: 70,
    icon: Users2,
    color: "bg-amber-500",
  },
  {
    kode: "04",
    nama: "Bidang Pemberdayaan Masyarakat Desa",
    deskripsi:
      "Pelatihan UMKM pengolahan hasil laut, bantuan bibit pertanian nelayan, dan ketahanan pangan",
    pagu: 110000000,
    realisasi: 60506000,
    persen: 55,
    icon: Sprout,
    color: "bg-cyan-500",
  },
  {
    kode: "05",
    nama: "Bidang Penanggulangan Bencana, Darurat & Mendesak",
    deskripsi:
      "Bantuan Langsung Tunai (BLT Dana Desa), mitigasi tanggap darurat pasang air laut & abrasi",
    pagu: 80000000,
    realisasi: 48000000,
    persen: 60,
    icon: HeartPulse,
    color: "bg-rose-500",
  },
];

function formatRupiah(num: number): string {
  return "Rp " + num.toLocaleString("id-ID");
}

export default function APBDesPage() {
  const totalPagu = apbdesBidang.reduce((acc, curr) => acc + curr.pagu, 0);
  const totalRealisasi = apbdesBidang.reduce(
    (acc, curr) => acc + curr.realisasi,
    0
  );
  const totalPersen = ((totalRealisasi / totalPagu) * 100).toFixed(1);

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
          <li className="text-[var(--color-brand-body)]">Transparansi</li>
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="font-semibold text-[var(--color-brand-heading)]">
            APBDes 2026
          </li>
        </ol>
      </nav>

      {/* Header & Controls */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-primary)] animate-pulse" />
              PORTAL INFORMASI KEUANGAN PUBLIK GAMPONG
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
              Transparansi APBDes & Keuangan Desa
            </h1>
            <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 leading-relaxed">
              Keterbukaan informasi pengelolaan anggaran publik, alokasi Dana Desa (DD), Alokasi Dana Gampong (ADG), Bagi Hasil Pajak, dan Pendapatan Asli Desa demi pembangunan berkeadilan serta kemakmuran masyarakat Gampong Lam Awe, Kecamatan Peukan Bada.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="relative inline-flex items-center bg-white border border-[var(--color-brand-border)] rounded-lg shadow-sm px-3 py-2 text-xs font-semibold text-[var(--color-brand-heading)]">
              <Calendar className="w-4 h-4 text-[var(--color-brand-accent)] mr-2" />
              <span>Tahun Anggaran 2026 (Berjalan)</span>
            </div>
            <a
              href="#dokumen-resmi"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Dokumen Lengkap</span>
              <span className="px-1.5 py-0.5 rounded bg-white/20 text-[10px]">
                PDF 3.4 MB
              </span>
            </a>
          </div>
        </div>

        {/* Sub-nav Tabs */}
        <div className="w-full bg-white border border-[var(--color-brand-border)] rounded-xl p-1.5 overflow-x-auto shadow-xs">
          <nav aria-label="Seksi Transparansi" className="flex items-center space-x-1 min-w-max">
            <Link
              href="/transparansi/apbdes"
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-[var(--color-brand-primary)] text-white flex items-center gap-2 shadow-xs"
            >
              <Wallet className="w-4 h-4" />
              <span>APBDes 2026</span>
            </Link>
            <Link
              href="/transparansi/perencanaan"
              className="px-4 py-2 rounded-lg text-xs font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-[var(--color-brand-surface)] transition-colors flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Perencanaan (RPJM & RKP)</span>
            </Link>
            <Link
              href="/transparansi/program"
              className="px-4 py-2 rounded-lg text-xs font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-[var(--color-brand-surface)] transition-colors flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Program & Kegiatan</span>
            </Link>
            <Link
              href="/transparansi/laporan"
              className="px-4 py-2 rounded-lg text-xs font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-[var(--color-brand-surface)] transition-colors flex items-center gap-2"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Laporan Realisasi & LPJ</span>
            </Link>
            <Link
              href="/transparansi/ppid"
              className="px-4 py-2 rounded-lg text-xs font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-[var(--color-brand-surface)] transition-colors flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>PPID & Informasi Publik</span>
            </Link>
          </nav>
        </div>
      </section>

      {/* 3 Summary Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Pendapatan */}
        <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[var(--color-brand-primary)] flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[var(--color-brand-body)] block font-medium">
                    Sektor Pemasukan
                  </span>
                  <h3 className="text-base font-bold text-[var(--color-brand-heading)]">
                    Pendapatan Desa
                  </h3>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[var(--color-brand-primary)] text-xs font-bold font-mono">
                78.0%
              </span>
            </div>

            <div className="space-y-1.5 my-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-[var(--color-brand-body)]">Realisasi</span>
                <span className="text-xl font-bold text-[var(--color-brand-primary)] font-mono">
                  Rp 924.650.000
                </span>
              </div>
              <div className="flex items-baseline justify-between text-xs text-[var(--color-brand-body)]">
                <span>Target Anggaran</span>
                <span className="font-mono font-medium">Rp 1.185.450.000</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--color-brand-border)]">
            <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden mb-2">
              <div
                className="h-full bg-[var(--color-brand-primary)] rounded-full transition-all duration-500"
                style={{ width: "78%" }}
              />
            </div>
            <div className="flex items-center justify-between text-xs text-[var(--color-brand-body)]">
              <span>Dana Desa, PADes, Bagi Hasil</span>
              <span className="font-mono">Sisa: Rp 260.800.000</span>
            </div>
          </div>
        </div>

        {/* Card 2: Belanja */}
        <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[var(--color-brand-body)] block font-medium">
                    Sektor Pengeluaran
                  </span>
                  <h3 className="text-base font-bold text-[var(--color-brand-heading)]">
                    Belanja Desa
                  </h3>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold font-mono">
                70.0%
              </span>
            </div>

            <div className="space-y-1.5 my-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-[var(--color-brand-body)]">Realisasi</span>
                <span className="text-xl font-bold text-[var(--color-brand-heading)] font-mono">
                  Rp 798.140.000
                </span>
              </div>
              <div className="flex items-baseline justify-between text-xs text-[var(--color-brand-body)]">
                <span>Pagu Anggaran</span>
                <span className="font-mono font-medium">Rp 1.140.200.000</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--color-brand-border)]">
            <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden mb-2">
              <div
                className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                style={{ width: "70%" }}
              />
            </div>
            <div className="flex items-center justify-between text-xs text-[var(--color-brand-body)]">
              <span>5 Bidang Kegiatan APBDes</span>
              <span className="font-mono">Sisa: Rp 342.060.000</span>
            </div>
          </div>
        </div>

        {/* Card 3: Pembiayaan Netto */}
        <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[var(--color-brand-body)] block font-medium">
                    Keseimbangan Kas
                  </span>
                  <h3 className="text-base font-bold text-[var(--color-brand-heading)]">
                    Pembiayaan Netto
                  </h3>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold font-mono">
                100.0%
              </span>
            </div>

            <div className="space-y-1.5 my-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-[var(--color-brand-body)]">Realisasi</span>
                <span className="text-xl font-bold text-amber-700 font-mono">
                  Rp 45.250.000
                </span>
              </div>
              <div className="flex items-baseline justify-between text-xs text-[var(--color-brand-body)]">
                <span>Rencana SiLPA</span>
                <span className="font-mono font-medium">Rp 45.250.000</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--color-brand-border)]">
            <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden mb-2">
              <div
                className="h-full bg-amber-600 rounded-full transition-all duration-500"
                style={{ width: "100%" }}
              />
            </div>
            <div className="flex items-center justify-between text-xs text-[var(--color-brand-body)]">
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Seimbang (Surplus Kas)
              </span>
              <span className="font-mono">SiLPA TA 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Bars Section */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[var(--color-brand-border)] mb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-brand-accent)] uppercase tracking-wider mb-1">
              Visualisasi Anggaran & Serapan
            </div>
            <h2 className="text-xl font-bold text-[var(--color-brand-heading)]">
              Perbandingan Anggaran vs Realisasi per Bidang Belanja
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-brand-body)] mt-1">
              Pemantauan serapan pagu anggaran belanja APBDes Lam Awe per Triwulan III Tahun 2026.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-[var(--color-brand-surface)] px-4 py-2 rounded-lg shrink-0 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-gray-300 inline-block" />
              <span className="font-medium text-[var(--color-brand-heading)]">Pagu Anggaran</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-[var(--color-brand-primary)] inline-block" />
              <span className="font-medium text-[var(--color-brand-heading)]">Realisasi</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {apbdesBidang.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.kode} className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-1">
                  <div className="flex items-center gap-2 font-semibold text-[var(--color-brand-heading)]">
                    <Icon className="w-4 h-4 text-[var(--color-brand-accent)] shrink-0" />
                    <span>
                      {b.kode}. {b.nama}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="text-[var(--color-brand-body)]">
                      Pagu: <strong className="text-[var(--color-brand-heading)]">{formatRupiah(b.pagu)}</strong>
                    </span>
                    <span className="text-[var(--color-brand-primary)] font-bold">
                      Realisasi: {formatRupiah(b.realisasi)} ({b.persen}%)
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 w-full bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="w-14 font-mono text-[11px] text-gray-500 text-right">PAGU</span>
                    <div className="flex-1 h-3.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-400 rounded-full" style={{ width: "100%" }} />
                    </div>
                    <span className="w-16 text-right font-mono text-xs text-gray-500">100%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-14 font-mono text-[11px] text-[var(--color-brand-primary)] font-semibold text-right">SERAPAN</span>
                    <div className="flex-1 h-3.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[var(--color-brand-primary)] rounded-full transition-all duration-500"
                        style={{ width: `${b.persen}%` }}
                      />
                    </div>
                    <span className="w-16 text-right font-mono text-xs font-bold text-[var(--color-brand-primary)]">
                      {b.persen.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Detailed Table */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[var(--color-brand-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-[var(--color-brand-heading)]">
              Rincian Belanja per Bidang Pelaksanaan
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-brand-body)] mt-1">
              Klasifikasi belanja berdasarkan struktur Anggaran Pendapatan dan Belanja Gampong (APBG) Lam Awe 2026.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-[var(--color-brand-primary)] text-xs font-semibold self-start sm:self-auto">
            <ShieldCheck className="w-4 h-4" />
            Data Terverifikasi Tuha Peut
          </span>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[var(--color-brand-surface)] text-[var(--color-brand-heading)] border-b border-[var(--color-brand-border)] font-semibold">
                <th className="py-3.5 px-6" scope="col">Kode & Bidang Pelaksanaan</th>
                <th className="py-3.5 px-6 text-right" scope="col">Anggaran (Rp)</th>
                <th className="py-3.5 px-6 text-right" scope="col">Realisasi (Rp)</th>
                <th className="py-3.5 px-6 text-right" scope="col">Persentase</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-brand-border)]">
              {apbdesBidang.map((item) => (
                <tr key={item.kode} className="hover:bg-blue-50/40 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex flex-col">
                      <span className="font-bold text-[var(--color-brand-heading)]">
                        {item.kode}. {item.nama}
                      </span>
                      <span className="text-xs text-[var(--color-brand-body)] mt-0.5">
                        {item.deskripsi}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-medium text-[var(--color-brand-heading)]">
                    {formatRupiah(item.pagu)}
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-bold text-[var(--color-brand-primary)]">
                    {formatRupiah(item.realisasi)}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="inline-flex items-center gap-2 justify-end">
                      <span className="font-mono font-bold text-[var(--color-brand-heading)]">
                        {item.persen.toFixed(1)}%
                      </span>
                      <span className="w-16 h-2 rounded-full bg-gray-200 inline-block overflow-hidden">
                        <span
                          className="h-full bg-[var(--color-brand-primary)] block rounded-full"
                          style={{ width: `${item.persen}%` }}
                        />
                      </span>
                    </div>
                  </td>
                </tr>
              ))}

              {/* Subtotal */}
              <tr className="bg-[var(--color-brand-surface)] font-bold text-[var(--color-brand-heading)]">
                <td className="py-4 px-6">TOTAL BELANJA GAMPONG (BIDANG 1 - 5)</td>
                <td className="py-4 px-6 text-right font-mono">{formatRupiah(totalPagu)}</td>
                <td className="py-4 px-6 text-right font-mono text-[var(--color-brand-primary)]">
                  {formatRupiah(totalRealisasi)}
                </td>
                <td className="py-4 px-6 text-right font-mono">{totalPersen}%</td>
              </tr>

              {/* Surplus Row */}
              <tr className="bg-emerald-50/70 font-bold text-emerald-900 border-t-2 border-emerald-200">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>SURPLUS / (DEFISIT) ANGGARAN BERJALAN</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-right font-mono">+Rp 45.250.000</td>
                <td className="py-4 px-6 text-right font-mono text-emerald-700">+Rp 126.510.000</td>
                <td className="py-4 px-6 text-right">
                  <span className="px-2.5 py-1 rounded-full bg-white text-emerald-700 text-xs font-mono font-bold shadow-xs">
                    SURPLUS KAS
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-[var(--color-brand-surface)] border-t border-[var(--color-brand-border)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--color-brand-body)] gap-2">
          <span className="flex items-center gap-1.5">
            <Info className="w-4 h-4 text-[var(--color-brand-accent)] shrink-0" />
            Status per Triwulan III (30 September 2026). Laporan final tahunan disahkan melalui Musyawarah Desa Pertanggungjawaban.
          </span>
          <span className="font-mono font-semibold text-[var(--color-brand-heading)]">
            Aplikasi Siskeudes V2.0 Kemendagri
          </span>
        </div>
      </section>

      {/* Legal Basis & Document Downloads */}
      <section id="dokumen-resmi" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Legal Card */}
        <div className="lg:col-span-2 bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-brand-accent)] uppercase tracking-wider mb-2">
              <Scale className="w-4 h-4" />
              Dasar Hukum & Kepatuhan Regulasi
            </div>
            <h3 className="text-xl font-bold text-[var(--color-brand-heading)] mb-2">
              Landasan Yuridis Pengelolaan Keuangan Gampong Lam Awe
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed mb-6">
              Anggaran Pendapatan dan Belanja Gampong (APBG) Lam Awe Tahun Anggaran 2026 disusun secara partisipatif melalui Musyawarah Rencana Pembangunan Gampong (Musrenbangdes) bersama Tuha Peut Gampong berlandaskan undang-undang:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs text-[var(--color-brand-heading)]">
              <div className="p-3.5 bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] rounded-xl flex items-start gap-3">
                <FileText className="w-5 h-5 text-[var(--color-brand-accent)] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Qanun Gampong Lam Awe No. 01/2026</span>
                  <span className="text-[var(--color-brand-body)] text-[11px] block mt-0.5">
                    Tentang Penetapan APBDes TA 2026 (Diundangkan 12 Januari 2026)
                  </span>
                </div>
              </div>

              <div className="p-3.5 bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] rounded-xl flex items-start gap-3">
                <FileText className="w-5 h-5 text-[var(--color-brand-accent)] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Permendagri No. 20 Tahun 2018</span>
                  <span className="text-[var(--color-brand-body)] text-[11px] block mt-0.5">
                    Pengelolaan Keuangan Desa dan Standar Akuntabilitas Penatausahaan
                  </span>
                </div>
              </div>

              <div className="p-3.5 bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] rounded-xl flex items-start gap-3">
                <FileText className="w-5 h-5 text-[var(--color-brand-accent)] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Permendes PDTT No. 13 Tahun 2025</span>
                  <span className="text-[var(--color-brand-body)] text-[11px] block mt-0.5">
                    Prioritas Penggunaan Dana Desa: Ketahanan Pangan & Stunting
                  </span>
                </div>
              </div>

              <div className="p-3.5 bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] rounded-xl flex items-start gap-3">
                <FileText className="w-5 h-5 text-[var(--color-brand-accent)] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Qanun Kab. Aceh Besar No. 04/2019</span>
                  <span className="text-[var(--color-brand-body)] text-[11px] block mt-0.5">
                    Pedoman Tata Kelola Pemerintahan Mukim dan Gampong
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[var(--color-brand-border)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--color-brand-body)] gap-3">
            <span>
              Pengawasan Resmi: <strong>Inspektorat Kab. Aceh Besar & Tuha Peut Gampong</strong>
            </span>
            <Link
              href="/transparansi/perencanaan"
              className="text-[var(--color-brand-accent)] font-semibold hover:underline inline-flex items-center gap-1"
            >
              Lihat Berita Acara Musrenbangdes
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Document Downloads Card */}
        <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-brand-accent)] uppercase tracking-wider mb-2">
              <FileDown className="w-4 h-4" />
              Dokumen Publik Terbuka
            </div>
            <h3 className="text-xl font-bold text-[var(--color-brand-heading)] mb-2">
              Berkas & Lampiran Resmi
            </h3>
            <p className="text-xs text-[var(--color-brand-body)] mb-4">
              Unduh dokumen sumber primer dalam format terbuka untuk audit warga dan pemantauan independen:
            </p>

            <div className="flex flex-col gap-2.5">
              <a
                href="#download-pdf"
                className="p-3 rounded-xl bg-[var(--color-brand-surface)] hover:bg-blue-50 border border-[var(--color-brand-border)] transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[var(--color-brand-heading)] group-hover:text-[var(--color-brand-accent)] block">
                      Buku Lengkap APBG Lam Awe 2026
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">
                      PDF • 4.8 MB • Update Jan 2026
                    </span>
                  </div>
                </div>
                <Download className="w-4 h-4 text-gray-400 group-hover:text-[var(--color-brand-accent)]" />
              </a>

              <a
                href="#download-infografis"
                className="p-3 rounded-xl bg-[var(--color-brand-surface)] hover:bg-blue-50 border border-[var(--color-brand-border)] transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-[var(--color-brand-primary)] flex items-center justify-center shrink-0">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[var(--color-brand-heading)] group-hover:text-[var(--color-brand-accent)] block">
                      Infografis Baliho APBDes Resmi
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">
                      JPG/PNG • 8.2 MB • Siap Cetak
                    </span>
                  </div>
                </div>
                <Download className="w-4 h-4 text-gray-400 group-hover:text-[var(--color-brand-accent)]" />
              </a>

              <a
                href="#download-xlsx"
                className="p-3 rounded-xl bg-[var(--color-brand-surface)] hover:bg-blue-50 border border-[var(--color-brand-border)] transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[var(--color-brand-heading)] group-hover:text-[var(--color-brand-accent)] block">
                      Matriks Realisasi Triwulan III
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">
                      XLSX • 620 KB • Update Okt 2026
                    </span>
                  </div>
                </div>
                <Download className="w-4 h-4 text-gray-400 group-hover:text-[var(--color-brand-accent)]" />
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-[var(--color-brand-border)] mt-4">
            <Link
              href="/transparansi/ppid"
              className="w-full h-10 px-4 rounded-lg bg-[var(--color-brand-surface)] hover:bg-[var(--color-brand-subtle)] border border-[var(--color-brand-border)] text-[var(--color-brand-accent)] font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Pengajuan Permohonan Informasi (PPID)</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Participation Banner */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <MessageSquareWarning className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-[var(--color-brand-heading)]">
              Ada Masukan, Pertanyaan, atau Temuan Lapangan?
            </h4>
            <p className="text-xs sm:text-sm text-[var(--color-brand-body)] mt-1">
              Laporkan temuan secara aman melalui kanal partisipasi warga atau konsultasikan langsung pada Musyawarah Gampong reguler.
            </p>
          </div>
        </div>
        <div className="shrink-0 w-full md:w-auto">
          <Link
            href="/layanan/pengaduan"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white text-xs font-semibold shadow-sm transition-colors"
          >
            <MessageSquareWarning className="w-4 h-4" />
            <span>Kirim Pengaduan & Aspirasi</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

