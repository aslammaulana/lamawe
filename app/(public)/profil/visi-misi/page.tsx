import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  ChevronRight,
  Target,
  Sparkles,
  Building,
  Anchor,
  HeartHandshake,
  Shield,
  GraduationCap,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Visi & Misi Gampong Lam Awe (2023 - 2029)",
  description:
    "Arah kebijakan, visi, dan misi Pemerintah Gampong Lam Awe periode 2023–2029 di bawah kepemimpinan Keuchik terpilih.",
};

const missions = [
  {
    nomor: "01",
    judul: "Tata Kelola Pemerintahan Bersih & Digital",
    deskripsi:
      "Menyelenggarakan tata kelola pemerintahan gampong yang transparan, akuntabel, partisipatif, serta berbasis teknologi informasi digital guna memberikan pelayanan publik prima dan bebas pungli.",
    icon: Building,
    fokus: ["Transparansi Keuangan APBDes", "Pelayanan Administrasi Digital", "Peningkatan Disiplin Perangkat"],
  },
  {
    nomor: "02",
    judul: "Penguatan Ekonomi Maritim & BUMG",
    deskripsi:
      "Mengembangkan sektor kelautan perikanan tangkap, pertanian produktif, serta memperkuat permodalan Badan Usaha Milik Gampong (BUMG) Bungong Seulanga untuk membuka lapangan kerja.",
    icon: Anchor,
    fokus: ["Bantuan Sarana Alat Tangkap Nelayan", "Pelatihan Pengolahan Hasil Laut", "Akses Pasar Digital Produk UMKM"],
  },
  {
    nomor: "03",
    judul: "Penegakan Syariat Islam & Adat Gampong",
    deskripsi:
      "Menumbuhkembangkan nilai-nilai keagamaan, memakmurkan meunasah gampong, serta melestarikan kearifan lokal berlandaskan falsafah adat Aceh.",
    icon: HeartHandshake,
    fokus: ["Pengajian Balai & PHBI Rutin", "Pemberdayaan Tuha Peut & Adat", "Revitalisasi Gotong Royong Meunasah"],
  },
  {
    nomor: "04",
    judul: "Infrastruktur Tanggap Bencana & Lingkungan",
    deskripsi:
      "Membangun infrastruktur desa yang merata, jalan lingkungan berkualitas, drainase penahan banjir pasang rob, serta mitigasi kebencanaan pesisir.",
    icon: Shield,
    fokus: ["Talud & Tanggul Pemecah Ombak", "Penerangan Jalan Gampong", "Penataan Ruang Hijau & Sampah"],
  },
  {
    nomor: "05",
    judul: "Kesehatan Terpadu & Mutu Generasi Muda",
    deskripsi:
      "Meningkatkan mutu kesehatan masyarakat, pencegahan stunting pada balita, serta memfasilitasi beasiswa dan pelatihan kecakapan generasi muda gampong.",
    icon: GraduationCap,
    fokus: ["Gerakan Bebas Stunting Posyandu", "Beasiswa Santri & Pelajar Kurang Mampu", "Sarana Olahraga Pemuda Karang Taruna"],
  },
];

export default function VisiMisiPage() {
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
            Visi & Misi
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="flex flex-col gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            ARAH KEBIJAKAN PEMBANGUNAN GAMPONG 2023 - 2029
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
            Visi & Misi Gampong Lam Awe
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 max-w-3xl leading-relaxed">
            Komitmen terarah Pemerintah Gampong Lam Awe, Kecamatan Peukan Bada, Kabupaten Aceh Besar dalam membangun kemakmuran bersama yang berkeadilan, bermartabat, dan berlandaskan syariat Islam.
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
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-[var(--color-brand-primary)] text-white shadow-xs"
            >
              Visi & Misi
            </Link>
            <Link
              href="/profil/wilayah"
              className="px-4 py-2 rounded-lg text-xs font-medium text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-[var(--color-brand-surface)] transition-colors"
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

      {/* Visi Card */}
      <section className="bg-gradient-to-br from-[var(--color-brand-primary)] to-blue-900 text-white rounded-3xl p-8 lg:p-12 shadow-md relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-wider mb-4">
            <Target className="w-4 h-4 text-blue-200" />
            Visi Pembangunan 2023 - 2029
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
            &ldquo;Mewujudkan Gampong Lam Awe yang Maju, Mandiri, Religius, dan Berkeadilan Berbasis Potensi Maritim dan Nilai Syariat Islam&rdquo;
          </h2>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
            Menegaskan tekad bersama seluruh elemen warga untuk bangkit mandiri, mengoptimalkan letak strategis pesisir Selat Malaka, serta memperkokoh tatanan masyarakat yang agamis, tertib, dan berkeadilan sosial.
          </p>
        </div>
      </section>

      {/* Misi Section */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-[var(--color-brand-accent)] uppercase tracking-wider mb-1">
              Pilar Pembangunan
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-brand-heading)]">
              5 Misi Utama Gampong Lam Awe
            </h2>
          </div>
          <span className="text-xs text-[var(--color-brand-body)]">
            Ditetapkan dalam RPJMDes TA 2023–2029
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {missions.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.nomor}
                className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-[var(--color-brand-accent)] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[var(--color-brand-primary)] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xl font-bold text-gray-300">
                      {m.nomor}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-brand-heading)] mb-2">
                    {m.judul}
                  </h3>
                  <p className="text-xs text-[var(--color-brand-body)] leading-relaxed mb-4">
                    {m.deskripsi}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--color-brand-border)]">
                  <span className="text-[11px] font-semibold text-[var(--color-brand-heading)] block mb-1.5">
                    Fokus Target:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {m.fokus.map((f, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-gray-50 border border-gray-100 text-[11px] text-[var(--color-brand-body)]"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Falsafah Adat Aceh Section */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Quote className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">
              Falsafah Kepemimpinan & Adat Aceh
            </div>
            <h3 className="text-lg font-bold text-[var(--color-brand-heading)] italic">
              &ldquo;Adat bak Po Teumeureuhom, Hukom bak Syiah Kuala, Qanun bak Putroe Phang, Reusam bak Laksamana.&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-brand-body)] mt-2 leading-relaxed">
              Pemerintah Gampong Lam Awe senantiasa memadukan ketegasan hukum formal negara dengan kearifan adat istiadat Aceh, menjunjung tinggi musyawarah mufakat di meunasah, serta menjaga keharmonisan antar warga dan jurong.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

