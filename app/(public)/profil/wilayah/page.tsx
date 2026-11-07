import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  ChevronRight,
  Compass,
  Globe2,
  Navigation,
  Layers,
  Trees,
  Waves,
  Building2,
  Wheat,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Wilayah & Geografis Desa - Gampong Lam Awe",
  description:
    "Profil batas wilayah, pembagian 4 Jurong, topografi pesisir, dan tata guna lahan Gampong Lam Awe, Kecamatan Peukan Bada, Aceh Besar.",
};

const jurongs = [
  {
    nama: "Jurong Cot Meurak",
    kepala: "Ulee Jurong: Saifuddin",
    deskripsi:
      "Kawasan pesisir utara gampong yang berhadapan langsung dengan Selat Malaka. Merupakan sentra aktivitas nelayan tradisional, tambat perahu, dan pengolahan hasil laut.",
    karakteristik: "Pesisir & Perikanan Laut",
    icon: Waves,
    stats: "Luas: 52 Ha • 68 KK",
  },
  {
    nama: "Jurong Meunasah Tuha",
    kepala: "Ulee Jurong: Marzuki, S.Pd",
    deskripsi:
      "Pusat keagamaan dan sejarah awal gampong tempat berdirinya Meunasah utama, balai adat pengajian, dan makam leluhur desa.",
    karakteristik: "Pusat Religi & Sejarah",
    icon: Building2,
    stats: "Luas: 48 Ha • 84 KK",
  },
  {
    nama: "Jurong Lampoh Peukan",
    kepala: "Ulee Jurong: T. Zulkifli",
    deskripsi:
      "Kawasan perdagangan dan jasa di sepanjang jalur lintas Banda Aceh–Meulaboh. Sentra pertokoan sembako, warung kopi, dan UMKM olahan.",
    karakteristik: "Pusat Ekonomi & Niaga",
    icon: Navigation,
    stats: "Luas: 45 Ha • 92 KK",
  },
  {
    nama: "Jurong Cot Cut",
    kepala: "Ulee Jurong: Bukhari",
    deskripsi:
      "Kawasan persawahan subur dan perkebunan palawija di perbatasan selatan gampong dengan sistem irigasi teknis mandiri warga.",
    karakteristik: "Pertanian & Sawah Produktif",
    icon: Wheat,
    stats: "Luas: 70 Ha • 74 KK",
  },
];

const landUse = [
  { tipe: "Lahan Persawahan & Pertanian", luas: "85 Ha", persen: "39.5%", icon: Wheat, color: "bg-emerald-500" },
  { tipe: "Permukiman & Pekarangan Warga", luas: "60 Ha", persen: "27.9%", icon: Building2, color: "bg-blue-500" },
  { tipe: "Wilayah Pesisir, Pantai & Tambat Labuh", luas: "45 Ha", persen: "20.9%", icon: Waves, color: "bg-cyan-500" },
  { tipe: "Fasilitas Umum, Jalan, & Tempat Ibadah", luas: "25 Ha", persen: "11.7%", icon: Trees, color: "bg-amber-500" },
];

export default function WilayahPage() {
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
          <li className="text-[var(--color-brand-body)]">Profil Desa</li>
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="font-semibold text-[var(--color-brand-heading)]">
            Peta & Wilayah
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="flex flex-col gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
            <Globe2 className="w-3.5 h-3.5" />
            GEOGRAFIS & TATA RUANG GAMPONG
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
            Wilayah & Geografis Gampong Lam Awe
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 max-w-3xl leading-relaxed">
            Gampong Lam Awe memiliki luas wilayah 215 Hektar yang membentang dari garis pantai pesisir Selat Malaka di utara hingga persawahan subur di selatan, terbagi ke dalam 4 (empat) wilayah Jurong adat.
          </p>
        </div>

        {/* Sub-nav Tabs */}
        <div className="w-full bg-white border border-[var(--color-brand-border)] rounded-xl p-1.5 overflow-x-auto shadow-xs">
          <nav aria-label="Seksi Profil" className="flex items-center space-x-1 min-w-max">
            <Link
              href="/profil/sejarah"
              className="px-4 py-2 rounded-lg text-xs font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-[var(--color-brand-surface)] transition-colors"
            >
              Sejarah Desa
            </Link>
            <Link
              href="/profil/visi-misi"
              className="px-4 py-2 rounded-lg text-xs font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-[var(--color-brand-surface)] transition-colors"
            >
              Visi & Misi
            </Link>
            <Link
              href="/profil/wilayah"
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-[var(--color-brand-primary)] text-white shadow-xs"
            >
              Peta & Wilayah
            </Link>
            <Link
              href="/profil/struktur"
              className="px-4 py-2 rounded-lg text-xs font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-[var(--color-brand-surface)] transition-colors"
            >
              Struktur Organisasi
            </Link>
          </nav>
        </div>
      </section>

      {/* Batas Wilayah Cards */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
        <h2 className="text-xl font-bold text-[var(--color-brand-heading)] mb-2 flex items-center gap-2">
          <Compass className="w-5 h-5 text-[var(--color-brand-accent)]" />
          Batas Wilayah Administratif
        </h2>
        <p className="text-xs sm:text-sm text-[var(--color-brand-body)] mb-6">
          Berdasarkan penetapan batas wilayah Kabupaten Aceh Besar dan berita acara musyawarah tapal batas antar gampong:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Utara</span>
              <Waves className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-sm font-bold text-[var(--color-brand-heading)]">Selat Malaka</div>
            <span className="text-xs text-[var(--color-brand-body)] mt-1">Garis Pantai & Laut Teritorial</span>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Selatan</span>
              <Navigation className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-sm font-bold text-[var(--color-brand-heading)]">Gampong Rima Keuneurom</div>
            <span className="text-xs text-[var(--color-brand-body)] mt-1">Kawasan Persawahan</span>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-100 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Timur</span>
              <MapPin className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-sm font-bold text-[var(--color-brand-heading)]">Gampong Ajuen</div>
            <span className="text-xs text-[var(--color-brand-body)] mt-1">Batas Lorong Penghubung</span>
          </div>

          <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">Barat</span>
              <MapPin className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="text-sm font-bold text-[var(--color-brand-heading)]">Gampong Lampisang</div>
            <span className="text-xs text-[var(--color-brand-body)] mt-1">Saluran Irigasi Utama</span>
          </div>
        </div>
      </section>

      {/* 4 Jurong Breakdown */}
      <section className="flex flex-col gap-6">
        <div>
          <div className="text-xs font-semibold text-[var(--color-brand-accent)] uppercase tracking-wider mb-1">
            Pembagian Teritorial Adat
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-brand-heading)]">
            4 Jurong di Gampong Lam Awe
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-brand-body)] mt-1">
            Masing-masing jurong dipimpin oleh seorang Kepala Dusun/Ulee Jurong yang bertanggung jawab langsung kepada Keuchik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jurongs.map((j, i) => {
            const Icon = j.icon;
            return (
              <div
                key={i}
                className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-[var(--color-brand-accent)] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[var(--color-brand-primary)] text-xs font-semibold">
                      {j.karakteristik}
                    </span>
                    <Icon className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-brand-heading)] mb-1">
                    {j.nama}
                  </h3>
                  <div className="text-xs font-mono font-semibold text-[var(--color-brand-accent)] mb-3">
                    {j.kepala}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed mb-4">
                    {j.deskripsi}
                  </p>
                </div>
                <div className="pt-3 border-t border-[var(--color-brand-border)] font-mono text-xs text-[var(--color-brand-heading)] font-semibold">
                  {j.stats}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Land Use Section */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
        <h2 className="text-xl font-bold text-[var(--color-brand-heading)] mb-2 flex items-center gap-2">
          <Layers className="w-5 h-5 text-[var(--color-brand-accent)]" />
          Tata Guna Lahan (Luas Total: 215 Ha)
        </h2>
        <p className="text-xs sm:text-sm text-[var(--color-brand-body)] mb-6">
          Distribusi peruntukan ruang dan pemanfaatan tanah di wilayah Gampong Lam Awe:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {landUse.map((l, i) => {
            const Icon = l.icon;
            return (
              <div
                key={i}
                className="p-4 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="w-5 h-5 text-[var(--color-brand-accent)]" />
                    <span className="font-mono text-xs font-bold text-[var(--color-brand-primary)]">
                      {l.persen}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-[var(--color-brand-heading)] mb-1">
                    {l.tipe}
                  </div>
                </div>
                <div className="font-mono text-base font-bold text-[var(--color-brand-heading)] mt-2">
                  {l.luas}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stacked bar visual */}
        <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden flex">
          <div style={{ width: "39.5%" }} className="h-full bg-emerald-500" title="Sawah: 39.5%" />
          <div style={{ width: "27.9%" }} className="h-full bg-blue-500" title="Permukiman: 27.9%" />
          <div style={{ width: "20.9%" }} className="h-full bg-cyan-500" title="Pesisir: 20.9%" />
          <div style={{ width: "11.7%" }} className="h-full bg-amber-500" title="Fasum: 11.7%" />
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl font-bold text-[var(--color-brand-heading)] flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-500" />
              Peta Lokasi & Koordinat GPS Kantor Keuchik
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-brand-body)] mt-1">
              Koordinat: 5.5392° LU, 95.2847° BT • Jalur strategis lintas Banda Aceh - Meulaboh
            </p>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=5.5392,95.2847"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white text-xs font-semibold shadow-xs transition-colors shrink-0"
          >
            <Navigation className="w-4 h-4" />
            <span>Buka di Google Maps</span>
          </a>
        </div>

        <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-[var(--color-brand-border)] relative">
          <iframe
            title="Peta Lokasi Desa Lam Awe"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.openstreetmap.org/export/embed.html?bbox=95.2600%2C5.5200%2C95.3100%2C5.5600&amp;layer=mapnik&amp;marker=5.5392%2C95.2847"
          />
        </div>
      </section>
    </div>
  );
}

