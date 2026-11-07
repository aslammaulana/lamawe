import Link from "next/link";
import {
  Megaphone,
  CheckCircle,
  FileText,
  BadgeAlert,
  Search,
  MessageSquare,
  Users,
  Home as HomeIcon,
  Maximize2,
  Building2,
  TrendingUp,
  Award,
  Quote,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  ChevronRight,
  DollarSign,
  ShoppingBag,
  PiggyBank,
  Compass,
  Store,
  Sprout,
  Palmtree,
  Play,
  Landmark,
  Shield,
  Radio,
  FileCheck,
  PieChart,
} from "lucide-react";

export const metadata = {
  title: "Beranda | Pemerintah Desa Lam Awe",
  description:
    "Portal Resmi Pemerintah Desa Lam Awe, Kecamatan Peukan Bada, Kabupaten Aceh Besar, Provinsi Aceh. Layanan kependudukan online, transparansi APBDes, berita, dan potensi gampong.",
};

export default function BerandaPage() {
  return (
    <div className="flex flex-col w-full">
      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION & TICKER                          */}
      {/* ========================================================= */}
      <section className="w-full bg-[#F5F9FF] py-6 sm:py-10 lg:py-12 border-b border-[#E1EDFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
          {/* Ticker / Pengumuman Terkini */}
          <div className="w-full bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[#252525]">
            <div className="flex items-center gap-3 min-w-0">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#E1EDFC] text-[#1769C2] shrink-0">
                <Megaphone size={18} />
              </span>
              <div className="flex items-center gap-2 flex-wrap min-w-0">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#E1EDFC] text-[#1769C2]">
                  Pengumuman
                </span>
                <span className="text-xs sm:text-sm text-[#252525] font-medium truncate">
                  Verifikasi Berkas Bantuan Langsung Tunai (BLT) Triwulan I Aktif
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 bg-[#F5F9FF] border border-[#E1EDFC] px-3 py-1.5 rounded-lg">
              <span className="text-xs text-[#3A3F3E]/70 font-medium">Tiket Verifikasi:</span>
              <span className="font-mono text-xs font-bold text-[#1769C2]">
                #LMA-2026-001
              </span>
            </div>
          </div>

          {/* Hero Content Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs border border-[#E1EDFC] relative overflow-hidden">
            <div className="lg:col-span-7 flex flex-col gap-5 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F9FF] border border-[#E1EDFC] text-[#1769C2] w-fit">
                <CheckCircle size={15} />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Portal Resmi Gampong
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-extrabold text-[#252525] tracking-tight">
                Selamat Datang di Portal Resmi{" "}
                <span className="text-[#1769C2]">Desa Lam Awe</span>
              </h1>

              <p className="text-base sm:text-lg text-[#3A3F3E] max-w-2xl leading-relaxed">
                Mewujudkan Tata Kelola Pemerintahan Gampong yang Transparan,
                Akuntabel, Mandiri, dan Berkelanjutan demi kesejahteraan warga
                Kecamatan Peukan Bada.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/layanan"
                  className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-[#1769C2] hover:bg-[#12549E] text-white font-medium text-sm transition-colors shadow-xs gap-2"
                >
                  <FileText size={18} />
                  <span>Layanan Desa</span>
                </Link>
                <Link
                  href="/transparansi/apbdes"
                  className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-white text-[#1769C2] hover:bg-[#F5F9FF] border border-[#E1EDFC] font-medium text-sm transition-colors shadow-2xs gap-2"
                >
                  <Landmark size={18} />
                  <span>Transparansi APBDes</span>
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4 text-xs text-[#3A3F3E]/80 border-t border-slate-100 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <Building2 size={15} className="text-[#1769C2]" />
                  <span>Kec. Peukan Bada</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={15} className="text-[#1769C2]" />
                  <span>Kab. Aceh Besar</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Compass size={15} className="text-[#1769C2]" />
                  <span>Provinsi Aceh</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 relative w-full h-[300px] sm:h-[360px] lg:h-[400px] rounded-xl overflow-hidden shadow-sm border border-[#E1EDFC]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8yWywc2Uy-BXlBAwUfLHSOBJiSaLcpgZWsRwp5VNLvY3iyXKZjtUbFx7ZJxM3pbE80ktxLLfB3ky71KfJEOOSmp-4kqVu6JSSzY2zTdilhLvsjAtT_v79iwhhp6iJJb6AP7kFJDHXDGZFeC3dOtKiIfBvZATPTLUBD7Awxc7ACAmvK6WNVIWLjoBWaqxJFsONUfiKbg7i2Tbz38UPKsn7amKKfykohTXb0gPuIMsN"
                alt="Pemandangan lanskap persawahan hijau membentang dan perbukitan tropis di Gampong Lam Awe, Peukan Bada, Aceh Besar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3.5 rounded-lg shadow-xs flex items-center justify-between border border-[#E1EDFC]">
                <div>
                  <p className="text-xs font-bold text-[#252525]">
                    Lanskap Persawahan &amp; Pesisir
                  </p>
                  <p className="text-[11px] text-[#3A3F3E]/80">
                    Wilayah Agrikultur Gampong Lam Awe
                  </p>
                </div>
                <span className="inline-flex p-1.5 rounded-md bg-[#E1EDFC] text-[#1769C2]">
                  <Compass size={18} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: STATISTIK DEMOGRAFI & WILAYAH                   */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-12 lg:py-16 border-b border-[#E1EDFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <div className="flex flex-col gap-1.5 max-w-2xl">
            <span className="font-mono text-xs font-semibold text-[#1769C2] uppercase tracking-wider">
              Demografi &amp; Wilayah
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#252525]">
              Statistik Demografi &amp; Wilayah
            </h2>
            <p className="text-sm text-[#3A3F3E]">
              Data ringkasan kependudukan dan luas wilayah Gampong Lam Awe terkini tahun anggaran berjalan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 flex flex-col justify-between gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#3A3F3E]/80 font-medium">Jumlah Penduduk</span>
                <div className="w-10 h-10 rounded-lg bg-[#E1EDFC] flex items-center justify-center text-[#1769C2]">
                  <Users size={20} />
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-[#252525]">
                    2.485
                  </span>
                  <span className="text-sm text-[#3A3F3E]/80 font-medium">Jiwa</span>
                </div>
                <div className="flex items-center gap-1.5 mt-2 text-xs font-semibold text-[#1769C2]">
                  <TrendingUp size={14} />
                  <span>+2.1% tahun ini</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 flex flex-col justify-between gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#3A3F3E]/80 font-medium">Kepala Keluarga</span>
                <div className="w-10 h-10 rounded-lg bg-[#E1EDFC] flex items-center justify-center text-[#1769C2]">
                  <HomeIcon size={20} />
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-[#252525]">
                    642
                  </span>
                  <span className="text-sm text-[#3A3F3E]/80 font-medium">KK</span>
                </div>
                <p className="text-xs text-[#3A3F3E]/80 mt-2">
                  Tersebar di 4 Jurong binaan
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 flex flex-col justify-between gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#3A3F3E]/80 font-medium">Luas Wilayah</span>
                <div className="w-10 h-10 rounded-lg bg-[#E1EDFC] flex items-center justify-center text-[#1769C2]">
                  <Maximize2 size={20} />
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-[#252525]">
                    318,5
                  </span>
                  <span className="text-sm text-[#3A3F3E]/80 font-medium">Ha</span>
                </div>
                <p className="text-xs text-[#3A3F3E]/80 mt-2">
                  72% persawahan produktif
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 flex flex-col justify-between gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#3A3F3E]/80 font-medium">Jumlah Dusun</span>
                <div className="w-10 h-10 rounded-lg bg-[#E1EDFC] flex items-center justify-center text-[#1769C2]">
                  <Building2 size={20} />
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-[#252525]">
                    4
                  </span>
                  <span className="text-sm text-[#3A3F3E]/80 font-medium">Jurong</span>
                </div>
                <p className="text-[11px] text-[#3A3F3E]/80 mt-2 line-clamp-1">
                  Lam Minyet, Cot Meurak, Meunasah, Mon Kleng
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: LAYANAN CEPAT WARGA                            */}
      {/* ========================================================= */}
      <section className="w-full bg-[#F5F9FF] py-12 lg:py-16 border-b border-[#E1EDFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <div className="flex flex-col gap-1.5 max-w-2xl">
            <span className="font-mono text-xs font-semibold text-[#1769C2] uppercase tracking-wider">
              Aksesibilitas Warga
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#252525]">
              Layanan Cepat Warga
            </h2>
            <p className="text-sm text-[#3A3F3E]">
              Akses kemudahan administrasi dan pengaduan masyarakat secara daring tanpa hambatan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Layanan Card 1 */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 flex flex-col justify-between gap-6 hover:shadow-md hover:border-[#1769C2] transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#E1EDFC] flex items-center justify-center text-[#1769C2]">
                    <FileText size={22} />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#E1EDFC] text-[#1769C2]">
                    Online 24 Jam
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#252525]">
                    Ajukan Layanan
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3A3F3E] mt-2 leading-relaxed">
                    Surat Keterangan Usaha, Domisili, Surat Pengantar SKCK, dan perizinan gampong lainnya.
                  </p>
                </div>
              </div>
              <Link
                href="/layanan"
                className="inline-flex items-center justify-center h-11 w-full rounded-lg bg-[#1769C2] hover:bg-[#12549E] text-white font-medium text-sm transition-colors gap-2"
              >
                <span>Buka Formulir</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Layanan Card 2 */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 flex flex-col justify-between gap-6 hover:shadow-md hover:border-[#1769C2] transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#E1EDFC] flex items-center justify-center text-[#1769C2]">
                    <BadgeAlert size={22} />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#F5F9FF] text-[#2176CA] border border-[#E1EDFC]">
                    Responsif
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#252525]">
                    Pengaduan Warga (Lapor)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3A3F3E] mt-2 leading-relaxed">
                    Salurkan aspirasi, saran, dan kendala fasilitas infrastruktur desa untuk ditindaklanjuti.
                  </p>
                </div>
              </div>
              <Link
                href="/layanan/pengaduan"
                className="inline-flex items-center justify-center h-11 w-full rounded-lg bg-[#1769C2] hover:bg-[#12549E] text-white font-medium text-sm transition-colors gap-2"
              >
                <span>Buat Laporan</span>
                <Megaphone size={16} />
              </Link>
            </div>

            {/* Layanan Card 3 */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 flex flex-col justify-between gap-6 hover:shadow-md hover:border-[#1769C2] transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#E1EDFC] flex items-center justify-center text-[#1769C2]">
                    <Search size={22} />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#F5F9FF] text-[#2176CA] border border-[#E1EDFC]">
                    Real-time
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#252525]">
                    Cek Status Berkas
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3A3F3E] mt-2 leading-relaxed">
                    Pantau progres berkas permohonan menggunakan Kode Tiket (cth.{" "}
                    <span className="font-mono font-semibold text-[#1769C2]">
                      #LMA-2026-001
                    </span>).
                  </p>
                </div>
              </div>
              <form action="/layanan/status" className="flex gap-2">
                <input
                  name="kode"
                  className="w-full h-11 px-3 bg-[#F5F9FF] border border-[#E1EDFC] rounded-lg font-mono text-xs text-[#252525] outline-hidden focus:border-[#1769C2] focus:bg-white"
                  placeholder="#LMA-..."
                  type="text"
                />
                <button
                  type="submit"
                  aria-label="Cari tiket"
                  className="h-11 px-3.5 bg-[#1769C2] text-white rounded-lg hover:bg-[#12549E] shrink-0 flex items-center justify-center transition"
                >
                  <Search size={16} />
                </button>
              </form>
            </div>

            {/* Layanan Card 4 */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 flex flex-col justify-between gap-6 hover:shadow-md hover:border-[#1769C2] transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#E1EDFC] flex items-center justify-center text-[#1769C2]">
                    <MessageSquare size={22} />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#E1EDFC] text-[#1769C2]">
                    Kantor Desa
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#252525]">
                    Kontak &amp; WhatsApp
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3A3F3E] mt-2 leading-relaxed">
                    Layanan komunikasi langsung dengan Sekretariat Geuchik dan perangkat gampong berwenang.
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/628123456789"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center h-11 w-full rounded-lg bg-white text-[#1769C2] hover:bg-[#F5F9FF] border border-[#E1EDFC] font-medium text-sm transition-colors gap-2 shadow-2xs"
              >
                <MessageSquare size={16} />
                <span>Hubungi Operator</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: SAMBUTAN KEPALA DESA                           */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-12 lg:py-16 border-b border-[#E1EDFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <div className="flex flex-col gap-1.5 max-w-2xl">
            <span className="font-mono text-xs font-semibold text-[#1769C2] uppercase tracking-wider">
              Amanat Pemerintahan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#252525]">
              Sambutan Kepala Desa
            </h2>
            <p className="text-sm text-[#3A3F3E]">
              Prakata Geuchik Gampong Lam Awe untuk kemajuan dan transparansi gampong.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#E1EDFC] shadow-xs p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
            {/* Foto Geuchik */}
            <div className="relative shrink-0 flex flex-col items-center">
              <div className="w-48 h-56 sm:w-56 sm:h-64 rounded-xl overflow-hidden shadow-xs bg-[#F5F9FF] border border-[#E1EDFC]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZbm3m4y7qArYZfYKH7kXC_vn802TmXrREWJOobfYYsa05i6AGLrZGmm6Y4KGsfkmyZq29Fo2ZYh6OUGaVgEJwHndryV4aQ9x6PQQtCeXkfB28qvLtSTY4KXmFhu87h2JIT1hmd_Gp2ckw-1FRFovx_pigSRflKo7r6BGBjqDPQ03ZYDerxBM1EOlXLGzA_rnx_hyI2pXISkZqzvzerA-N75Fo_ATCABNhX6a0pcUZ"
                  alt="Potret resmi Kepala Desa atau Geuchik Gampong Lam Awe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E1EDFC] text-[#1769C2] text-xs font-semibold">
                <Award size={14} />
                <span>Geuchik Gampong</span>
              </div>
            </div>

            {/* Narasi Sambutan */}
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex items-center gap-2 text-[#1769C2]">
                <Quote size={28} />
              </div>
              <blockquote className="text-base sm:text-lg text-[#3A3F3E] italic leading-relaxed">
                “Assalamu’alaikum Warahmatullahi Wabarakatuh. Puji syukur ke hadirat Allah SWT, portal ini kami hadirkan sebagai wujud komitmen keterbukaan informasi publik dan peningkatan mutu pelayanan birokrasi yang cepat, tepat, serta akuntabel bagi seluruh warga Lam Awe. Mari bersama kita pelihara persaudaraan dan gotong royong membangun gampong tercinta.”
              </blockquote>
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#252525]">
                    Teuku Rahmat Syahputra, S.Sos.
                  </h4>
                  <p className="text-xs sm:text-sm text-[#3A3F3E]/80">
                    Kepala Desa / Geuchik Gampong Lam Awe (Periode 2023 - 2029)
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-[#F5F9FF] border border-[#E1EDFC] px-3.5 py-2 rounded-lg">
                  <CheckCircle size={16} className="text-[#1769C2]" />
                  <span className="font-mono text-xs font-semibold text-[#1769C2]">
                    Tanda Tangan Digital Terverifikasi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: KABAR & BERITA DESA                            */}
      {/* ========================================================= */}
      <section className="w-full bg-[#F5F9FF] py-12 lg:py-16 border-b border-[#E1EDFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1.5 max-w-2xl">
              <span className="font-mono text-xs font-semibold text-[#1769C2] uppercase tracking-wider">
                Publikasi Informasi
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#252525]">
                Kabar &amp; Berita Desa
              </h2>
              <p className="text-sm text-[#3A3F3E]">
                Informasi terkini pembangunan, kegiatan masyarakat, dan pemberitahuan penting gampong.
              </p>
            </div>
            <Link
              href="/berita"
              className="inline-flex items-center justify-center h-11 px-5 rounded-lg bg-white text-[#1769C2] hover:bg-[#E1EDFC] border border-[#E1EDFC] font-medium text-sm transition-colors gap-2 self-start md:self-auto shadow-2xs"
            >
              <span>Lihat Semua Berita</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* News Card 1 */}
            <article className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] overflow-hidden flex flex-col justify-between group hover:shadow-md transition">
              <div>
                <div className="h-48 w-full relative overflow-hidden bg-[#EBF3FC]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqR--buG2rBQZRKYHkwEWPrZHSm0yzLbujCBfXUm_yDtZSyetCk_VNPtdOX5uGVTvI9Fvf6l9JnmmEKRnYrjnJO_1Lg6pRSXgLmp1WXUp-AGZ8944CDIYuAsPsddpJJxKP7OohzI-srQ0b2wIcmA0N9tmCecjD4RnJ1OblQyoTOXQrGMuknLT8o3xX2VeTvLRot8YtofitJbOL5C2755XdqQ5ZvBOD0Dg5ckCzq5ZO"
                    alt="Pembangunan saluran irigasi beton"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-[#1769C2] text-white">
                    Pembangunan
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-[#3A3F3E]/70 font-mono">
                    <Calendar size={13} />
                    <span>18 Maret 2026</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#252525] group-hover:text-[#1769C2] transition-colors line-clamp-2">
                    Penyelesaian Saluran Irigasi Tersier Sawah Jurong Cot Meurak
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3A3F3E] line-clamp-3 leading-relaxed">
                    Pembangunan infrastruktur air desa telah rampung tepat waktu untuk mendukung masa tanam padi warga dan memperkuat ketahanan pangan gampong.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/berita/saluran-irigasi-cot-meurak"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1769C2] hover:underline"
                >
                  <span>Baca Selengkapnya</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </article>

            {/* News Card 2 */}
            <article className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] overflow-hidden flex flex-col justify-between group hover:shadow-md transition">
              <div>
                <div className="h-48 w-full relative overflow-hidden bg-[#EBF3FC]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh9sGSDZDz4-KjQ3ZEEayxGavyj8jWxxmdXJTgR7EdbggVvTbgRXmodvTAhYgooAV-WMqQloGErS_OiqNQA4Do95W0obbgkH_oBIQ3tGy6MH2CVe15zradfSIEv6cx2ilxvTAUTcFqa9tTvgAWFFau7n8EhMx0W4na0oS6WsIIQOayaVV_JdVAwsExq-MzyVONFkMs-EkmppfuqKave0ovI9OXv1IvMNzCNDowXZKg"
                    alt="Posyandu balita dan lansia"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-[#1769C2] text-white">
                    Kesehatan
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-[#3A3F3E]/70 font-mono">
                    <Calendar size={13} />
                    <span>12 Maret 2026</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#252525] group-hover:text-[#1769C2] transition-colors line-clamp-2">
                    Posyandu Balita &amp; Lansia Rutin di Meunasah Gampong
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3A3F3E] line-clamp-3 leading-relaxed">
                    Pemeriksaan berkala, imunisasi balita, dan pemberian vitamin tambahan bagi lansia berlangsung tertib dengan antusiasme masyarakat yang tinggi.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/berita/posyandu-meunasah-gampong"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1769C2] hover:underline"
                >
                  <span>Baca Selengkapnya</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </article>

            {/* News Card 3 */}
            <article className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] overflow-hidden flex flex-col justify-between group hover:shadow-md transition">
              <div>
                <div className="h-48 w-full relative overflow-hidden bg-[#EBF3FC]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkjp4udKonc_eOURh3YF85R9r4KbnEn7z63S35MCmkLJlo1AmJPwewUBcFvb10_JSjOOAPI9kqNTDnrJhzXbnj-XeoiylNWkxdb3i_EdP4URdy5P9dbIqLO83nASZRjV1A3oKaeXE6ZRMy3RfIrRaN7rLeyrPjveJbGkiHb_JuNw7_4CkrsfxgZbdV_ilWum2A448diI7fJGkHcHhBjHC-_Zhu_O6aB0iac4DE-P6F"
                    alt="Penyaluran BLT Dana Desa"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-[#1769C2] text-white">
                    Sosial
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-[#3A3F3E]/70 font-mono">
                    <Calendar size={13} />
                    <span>05 Maret 2026</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#252525] group-hover:text-[#1769C2] transition-colors line-clamp-2">
                    Penyaluran Bantuan Langsung Tunai (BLT) Dana Desa Triwulan I
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3A3F3E] line-clamp-3 leading-relaxed">
                    Transparansi verifikasi penerima manfaat dilakukan bersama Tuha Peuet demi memastikan ketepatan sasaran keluarga prasejahtera yang berhak.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/berita/penyaluran-blt-triwulan-1"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1769C2] hover:underline"
                >
                  <span>Baca Selengkapnya</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: AGENDA KEGIATAN MENDATANG                      */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-12 lg:py-16 border-b border-[#E1EDFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <div className="flex flex-col gap-1.5 max-w-2xl">
            <span className="font-mono text-xs font-semibold text-[#1769C2] uppercase tracking-wider">
              Jadwal Gampong
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#252525]">
              Agenda Mendatang
            </h2>
            <p className="text-sm text-[#3A3F3E]">
              Jadwal musyawarah, gotong royong, dan kegiatan kemasyarakatan yang akan berlangsung.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Event Item 1 */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
              <div className="flex items-start md:items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-[#E1EDFC] text-[#1769C2] flex flex-col items-center justify-center shrink-0">
                  <span className="font-mono text-lg font-bold leading-none">25</span>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider mt-1">MAR 2026</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-[#252525]">
                    Musrenbangdes Penetapan RKP Gampong Tahun 2027
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#3A3F3E]/80">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-[#1769C2]" />
                      Balai Pertemuan Gampong Lam Awe
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} className="text-[#1769C2]" />
                      09:00 - 12:30 WIB
                    </span>
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#E1EDFC] text-[#1769C2] self-start md:self-auto">
                <span className="w-2 h-2 rounded-full bg-[#1769C2] animate-pulse"></span>
                Musyawarah Umum
              </span>
            </div>

            {/* Event Item 2 */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
              <div className="flex items-start md:items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-[#E1EDFC] text-[#1769C2] flex flex-col items-center justify-center shrink-0">
                  <span className="font-mono text-lg font-bold leading-none">28</span>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider mt-1">MAR 2026</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-[#252525]">
                    Gotong Royong Kebersihan Lingkungan &amp; Saluran Air
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#3A3F3E]/80">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-[#1769C2]" />
                      Seluruh Dusun / Jurong Lam Awe
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} className="text-[#1769C2]" />
                      07:30 WIB - Selesai
                    </span>
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#E1EDFC] text-[#1769C2] self-start md:self-auto">
                Sosial Kemasyarakatan
              </span>
            </div>

            {/* Event Item 3 */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
              <div className="flex items-start md:items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-[#E1EDFC] text-[#1769C2] flex flex-col items-center justify-center shrink-0">
                  <span className="font-mono text-lg font-bold leading-none">04</span>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider mt-1">APR 2026</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-[#252525]">
                    Pengajian Bulanan &amp; Silaturahmi Warga
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#3A3F3E]/80">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-[#1769C2]" />
                      Meunasah Utama Lam Awe
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} className="text-[#1769C2]" />
                      Ba’da Isya (20:15 WIB)
                    </span>
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#E1EDFC] text-[#1769C2] self-start md:self-auto">
                Keagamaan
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: TRANSPARANSI APBDES 2026                       */}
      {/* ========================================================= */}
      <section className="w-full bg-[#F5F9FF] py-12 lg:py-16 border-b border-[#E1EDFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1.5 max-w-2xl">
              <span className="font-mono text-xs font-semibold text-[#1769C2] uppercase tracking-wider">
                Akuntabilitas Finansial
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#252525]">
                Transparansi APBDes Tahun Anggaran 2026
              </h2>
              <p className="text-sm text-[#3A3F3E]">
                Laporan akuntabilitas keuangan Anggaran Pendapatan dan Belanja Desa (APBG) secara transparan.
              </p>
            </div>
            <Link
              href="/transparansi/apbdes"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#1769C2] hover:underline self-start md:self-auto"
            >
              <span>Lihat Detail Transparansi APBDes Lengkap</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* 3 Financial Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#3A3F3E]/80 font-medium">Pendapatan Desa</span>
                <DollarSign size={20} className="text-[#1769C2]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-2xl font-bold text-[#1769C2]">
                  Rp 1.185.450.000
                </span>
                <div className="flex items-center justify-between text-xs mt-2">
                  <span className="text-[#3A3F3E]/70">Realisasi Berjalan</span>
                  <span className="font-mono font-semibold text-[#1769C2]">78%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#EBF3FC] overflow-hidden mt-1">
                  <div className="h-full bg-[#1769C2] rounded-full" style={{ width: "78%" }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#3A3F3E]/80 font-medium">Belanja Desa</span>
                <ShoppingBag size={20} className="text-[#252525]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-2xl font-bold text-[#252525]">
                  Rp 1.140.200.000
                </span>
                <div className="flex items-center justify-between text-xs mt-2">
                  <span className="text-[#3A3F3E]/70">Realisasi Berjalan</span>
                  <span className="font-mono font-semibold text-[#252525]">72%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#EBF3FC] overflow-hidden mt-1">
                  <div className="h-full bg-[#2176CA] rounded-full" style={{ width: "72%" }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#3A3F3E]/80 font-medium">Pembiayaan Netto</span>
                <PiggyBank size={20} className="text-[#2176CA]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-2xl font-bold text-[#2176CA]">
                  Rp 45.250.000
                </span>
                <div className="flex items-center justify-between text-xs mt-2">
                  <span className="text-[#3A3F3E]/70">Realisasi Berjalan</span>
                  <span className="font-mono font-semibold text-[#2176CA]">100%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#EBF3FC] overflow-hidden mt-1">
                  <div className="h-full bg-[#2176CA] rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Breakdown Realisasi Berdasarkan Bidang */}
          <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 sm:p-8 flex flex-col gap-6">
            <h3 className="text-base font-semibold text-[#252525]">
              Realisasi Berdasarkan Bidang Kegiatan Utama
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <span className="text-sm font-medium text-[#252525]">
                    Bidang Penyelenggaraan Pemerintahan Desa
                  </span>
                  <span className="font-mono text-[#3A3F3E]/80">
                    Realisasi: <strong className="text-[#1769C2]">Rp 380.000.000</strong> / Anggaran: Rp 420.000.000 (90%)
                  </span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#EBF3FC] overflow-hidden">
                  <div className="h-full bg-[#1769C2] rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <span className="text-sm font-medium text-[#252525]">
                    Bidang Pelaksanaan Pembangunan Desa
                  </span>
                  <span className="font-mono text-[#3A3F3E]/80">
                    Realisasi: <strong className="text-[#1769C2]">Rp 480.200.000</strong> / Anggaran: Rp 550.000.000 (87%)
                  </span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#EBF3FC] overflow-hidden">
                  <div className="h-full bg-[#1769C2] rounded-full" style={{ width: "87%" }}></div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <span className="text-sm font-medium text-[#252525]">
                    Bidang Pembinaan &amp; Pemberdayaan Masyarakat
                  </span>
                  <span className="font-mono text-[#3A3F3E]/80">
                    Realisasi: <strong className="text-[#1769C2]">Rp 280.000.000</strong> / Anggaran: Rp 320.000.000 (87%)
                  </span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#EBF3FC] overflow-hidden">
                  <div className="h-full bg-[#1769C2] rounded-full" style={{ width: "87%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8: DATA DESA & INDEKS DESA MEMBANGUN (IDM)        */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-12 lg:py-16 border-b border-[#E1EDFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <div className="flex flex-col gap-1.5 max-w-2xl">
            <span className="font-mono text-xs font-semibold text-[#1769C2] uppercase tracking-wider">
              Indikator Kinerja Desa
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#252525]">
              Data Desa &amp; Indeks Desa Membangun (IDM)
            </h2>
            <p className="text-sm text-[#3A3F3E]">
              Status kemandirian desa dan sebaran kelompok umur penduduk terkini.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card A: IDM Score Card */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-base font-semibold text-[#252525]">Status IDM Kemendesa</span>
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#E1EDFC] text-[#1769C2]">
                    DESA MANDIRI
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-4xl sm:text-5xl font-bold text-[#1769C2]">
                    0.8425
                  </span>
                  <span className="text-xs text-[#3A3F3E]/80 font-medium">
                    (Target nasional 0.75 terlampaui)
                  </span>
                </div>
                <p className="text-sm text-[#3A3F3E] leading-relaxed">
                  Gampong Lam Awe dinilai memiliki ketahanan sosial, ekonomi, dan ekologis yang berkelanjutan untuk meningkatkan taraf hidup warga secara swasembada.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-[#F5F9FF] border border-[#E1EDFC] p-3 rounded-lg flex flex-col items-center text-center">
                  <span className="text-[11px] text-[#3A3F3E]/80">Dimensi Sosial</span>
                  <span className="font-mono text-base font-bold text-[#252525] mt-1">0.86</span>
                </div>
                <div className="bg-[#F5F9FF] border border-[#E1EDFC] p-3 rounded-lg flex flex-col items-center text-center">
                  <span className="text-[11px] text-[#3A3F3E]/80">Dimensi Ekonomi</span>
                  <span className="font-mono text-base font-bold text-[#252525] mt-1">0.79</span>
                </div>
                <div className="bg-[#F5F9FF] border border-[#E1EDFC] p-3 rounded-lg flex flex-col items-center text-center">
                  <span className="text-[11px] text-[#3A3F3E]/80">Dimensi Ekologi</span>
                  <span className="font-mono text-base font-bold text-[#252525] mt-1">0.88</span>
                </div>
              </div>
            </div>

            {/* Card B: Demografi & Usia */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-[#252525]">Distribusi Umur &amp; Gender</span>
                  <span className="font-mono text-xs font-semibold text-[#3A3F3E]/70">Sensus 2026</span>
                </div>
                <div className="flex flex-col gap-4 pt-1">
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-[#252525]">Usia Produktif (15 - 64 tahun)</span>
                      <span className="font-mono font-bold text-[#1769C2]">68%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-[#EBF3FC] overflow-hidden">
                      <div className="h-full bg-[#1769C2] rounded-full" style={{ width: "68%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-[#252525]">Usia Anak &amp; Remaja (0 - 14 tahun)</span>
                      <span className="font-mono font-bold text-[#252525]">22%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-[#EBF3FC] overflow-hidden">
                      <div className="h-full bg-[#2176CA] rounded-full" style={{ width: "22%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-[#252525]">Lansia (65+ tahun)</span>
                      <span className="font-mono font-bold text-[#3A3F3E]/80">10%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-[#EBF3FC] overflow-hidden">
                      <div className="h-full bg-slate-400 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#F5F9FF] border border-[#E1EDFC] p-3.5 rounded-lg flex items-center justify-around text-center text-xs">
                <div>
                  <span className="text-[#3A3F3E]/70">Laki-laki:</span>
                  <span className="font-mono font-bold text-[#252525] ml-1">51%</span>
                </div>
                <div className="h-4 w-px bg-[#E1EDFC]"></div>
                <div>
                  <span className="text-[#3A3F3E]/70">Perempuan:</span>
                  <span className="font-mono font-bold text-[#252525] ml-1">49%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 9: PETA WILAYAH & LOKASI KANTOR                   */}
      {/* ========================================================= */}
      <section className="w-full bg-[#F5F9FF] py-12 lg:py-16 border-b border-[#E1EDFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <div className="flex flex-col gap-1.5 max-w-2xl">
            <span className="font-mono text-xs font-semibold text-[#1769C2] uppercase tracking-wider">
              Geografis Gampong
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#252525]">
              Peta Wilayah &amp; Lokasi Kantor
            </h2>
            <p className="text-sm text-[#3A3F3E]">
              Titik koordinat dan peta interaktif pusat pelayanan administrasi desa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Map Container */}
            <div className="lg:col-span-8 bg-white rounded-xl shadow-xs border border-[#E1EDFC] overflow-hidden p-2 flex flex-col">
              <div
                className="w-full h-80 lg:h-[420px] rounded-lg bg-cover bg-center relative"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxffjEUbuoJWEUoqermZKBp_aa5NO6_Rhmv77Y2Jjfo2Gvn9FCt0Sh_sRmis4kg-74fwqVknfjIozmHSIfp4vMWwePIOhod9z7UTzdYuReQ_fxzvks0zToewII73Z_GXmYtoRqUwtfUOkDTbcDe0XDEp4BWuo_A9l0BBOicVknBDX8lct4hFLSi58947pUR0p7D8bCyI2nDIFtNIdC-Oj3iyWV2pFhX62e2P9kyXwz")',
                }}
              >
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-lg shadow-xs flex items-center gap-2 border border-[#E1EDFC]">
                  <Compass size={16} className="text-[#1769C2]" />
                  <span className="font-mono text-xs font-semibold text-[#252525]">
                    5°31'12.4"N 95°17'40.2"E
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="flex flex-col items-center">
                    <MapPin size={38} className="text-rose-600 drop-shadow-md animate-bounce" />
                    <span className="px-2.5 py-0.5 rounded bg-black/80 text-white text-[11px] font-medium shadow">
                      Kantor Geuchik Lam Awe
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Contact Details */}
            <div className="lg:col-span-4 bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E1EDFC] flex items-center justify-center text-[#1769C2]">
                    <Landmark size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#252525]">
                      Kantor Keuchik Gampong Lam Awe
                    </h3>
                    <p className="text-xs text-[#3A3F3E]/80">Pusat Pelayanan Terpadu Warga</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#1769C2] shrink-0 mt-0.5" />
                    <p className="text-[#3A3F3E] leading-relaxed">
                      Jl. Meulaboh - Banda Aceh KM 7.5, Gampong Lam Awe, Kec. Peukan Bada, Kab. Aceh Besar, Aceh 23351
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-[#1769C2] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#252525] block">Jam Operasional Pelayanan:</strong>
                      <span className="text-[#3A3F3E]">Senin – Jumat: 08.30 – 16.30 WIB</span>
                      <span className="block text-rose-600 text-[11px] mt-0.5 font-medium">
                        Sabtu, Minggu &amp; Libur Nasional Tutup
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileCheck size={16} className="text-[#1769C2] shrink-0 mt-0.5" />
                    <span className="text-[#3A3F3E] font-mono">(0651) 7552-019 / 0812-3456-789</span>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center h-11 w-full rounded-lg bg-[#1769C2] hover:bg-[#12549E] text-white font-medium text-sm transition-colors gap-2"
              >
                <Compass size={16} />
                <span>Buka Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 10: POTENSI UNGGULAN GAMPONG                      */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-12 lg:py-16 border-b border-[#E1EDFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <div className="flex flex-col gap-1.5 max-w-2xl">
            <span className="font-mono text-xs font-semibold text-[#1769C2] uppercase tracking-wider">
              Kekayaan Lokal
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#252525]">
              Potensi Unggulan Gampong
            </h2>
            <p className="text-sm text-[#3A3F3E]">
              Komoditas andalan, unit usaha BUMDes, dan daya tarik lokal yang mendorong kemandirian warga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Potensi 1 */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 flex flex-col justify-between gap-6 hover:shadow-md transition">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E1EDFC] flex items-center justify-center text-[#1769C2]">
                  <Store size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#252525]">
                    UMKM &amp; BUMDes Lam Awe
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3A3F3E] mt-2 leading-relaxed">
                    Unit simpan pinjam desa, produksi keripik dan hasil olahan kuliner lokal, serta pabrik pengolahan pakan ternak mandiri.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#1769C2]">
                <CheckCircle size={16} />
                <span>12 Kelompok Binaan Aktif</span>
              </div>
            </div>

            {/* Potensi 2 */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 flex flex-col justify-between gap-6 hover:shadow-md transition">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E1EDFC] flex items-center justify-center text-[#1769C2]">
                  <Sprout size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#252525]">
                    Sektor Pertanian &amp; Perkebunan
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3A3F3E] mt-2 leading-relaxed">
                    Lahan persawahan produktif beririgasi teknis terintegrasi, komoditas kelapa, serta sentra tanaman hortikultura dataran pesisir.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#1769C2]">
                <CheckCircle size={16} />
                <span>Luas Panen &gt; 200 Hektar</span>
              </div>
            </div>

            {/* Potensi 3 */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 flex flex-col justify-between gap-6 hover:shadow-md transition">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E1EDFC] flex items-center justify-center text-[#1769C2]">
                  <Palmtree size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#252525]">
                    Potensi Wisata Desa &amp; Budaya
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3A3F3E] mt-2 leading-relaxed">
                    Agrowisata sawah dengan latar perbukitan pesisir Peukan Bada, situs peninggalan budaya, serta festival adat kenduri blang tahunan.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#1769C2]">
                <CheckCircle size={16} />
                <span>Destinasi Ramah Keluarga</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 11: GALERI FOTO & DOKUMENTASI                     */}
      {/* ========================================================= */}
      <section className="w-full bg-[#F5F9FF] py-12 lg:py-16 border-b border-[#E1EDFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1.5 max-w-2xl">
              <span className="font-mono text-xs font-semibold text-[#1769C2] uppercase tracking-wider">
                Dokumentasi Warga
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#252525]">
                Galeri Foto &amp; Dokumentasi
              </h2>
              <p className="text-sm text-[#3A3F3E]">
                Arsip visual kegiatan kemasyarakatan, budaya lokal, dan program pembangunan gampong.
              </p>
            </div>
            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#1769C2] text-white">
                Semua
              </span>
              <span className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white border border-[#E1EDFC] text-[#3A3F3E]">
                Pembangunan
              </span>
              <span className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white border border-[#E1EDFC] text-[#3A3F3E]">
                Sosial
              </span>
              <span className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white border border-[#E1EDFC] text-[#3A3F3E]">
                Keagamaan
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Photo 1 */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] overflow-hidden group flex flex-col">
              <div className="h-48 relative overflow-hidden bg-[#EBF3FC]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXIuE07harQbSiOSh34Avw2zWVvHIz0DjdskGqOX4TfqFDCCoVgFqX316G_U8R-s7nGX-WgdnVyGyGUMaIDsWi_71p-EmKsKJ1FeGRiru0rhJqoizNPsFeGQWcpby14ocEg3jotnBcv5ftRY4dU0P9fegejY0DbxDFvQAobYpICnrhj9AklZdKaT3FWUaZp-jUJ0xaTTfPBAuuEV310q4IfBRQTse2GleBFOhfv1b1"
                  alt="Musyawarah penetapan RKP"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded">
                  10 Mar 2026
                </div>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <h4 className="text-sm font-semibold text-[#252525] line-clamp-1">
                  Musyawarah Penetapan RKP
                </h4>
                <p className="text-xs text-[#3A3F3E]/70">Jurong Meunasah</p>
              </div>
            </div>

            {/* Photo 2 (Video badge) */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] overflow-hidden group flex flex-col">
              <div className="h-48 relative overflow-hidden bg-[#EBF3FC]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuATa3U4MT9n5zkmAZ5zi8MBvV_R1Vycs__tJw3lEjfX3c47lbfzu0GRMdq5FMTsjIVKXfQEviy5_F8u6kCgicLzz44bXRwJJVYEDZyD6cWc0MYjxSWWNWLeDLKNnFCxrh0qgIQptl0fCmy2gfSUvoQtAQqv3b6pSU43Pk2Uyl0kAqNXXtNP4XMv_P7m8SjP4L76PcsBk22B0pdxoqPs0vyjZjLNqF_yojNj8ELkV9Ld"
                  alt="Video gotong royong rutin"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-xs text-[#1769C2] flex items-center justify-center shadow-md">
                    <Play size={20} className="fill-[#1769C2] ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded">
                  08 Mar 2026
                </div>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <h4 className="text-sm font-semibold text-[#252525] line-clamp-1">
                  Video: Gotong Royong Rutin
                </h4>
                <p className="text-xs text-[#3A3F3E]/70">Jurong Cot Meurak</p>
              </div>
            </div>

            {/* Photo 3 */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] overflow-hidden group flex flex-col">
              <div className="h-48 relative overflow-hidden bg-[#EBF3FC]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9Gvx-eRBt595py6TccBOFSBpqkMNuvNBT_5Fy8FThziWGjQHwUcmAu-ToY5Z0Nx0zd83O8qRORCbmYxlqnrQ8vAxIwKO5Jy86hGuYNAScQ640qWpgrT_WCeJB4KVGbV63eJYd5TzQQuXXhltZQLqdd7GLEu0AdSrMNF6dBVAe2qLK1chI38VZdJRM-4qORejmUgRjyG3TeoygADnVDKdPpnqZfaHBl9DNDYuTFqp-"
                  alt="Pelatihan kewirausahaan PKK"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded">
                  01 Mar 2026
                </div>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <h4 className="text-sm font-semibold text-[#252525] line-clamp-1">
                  Pelatihan Kewirausahaan PKK
                </h4>
                <p className="text-xs text-[#3A3F3E]/70">Gedung Serbaguna</p>
              </div>
            </div>

            {/* Photo 4 */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] overflow-hidden group flex flex-col">
              <div className="h-48 relative overflow-hidden bg-[#EBF3FC]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkLYDYl8W2XxfVIpbArr7gurUfF8D2C-CjxuJX-GJ2R2NXxuI4yDo3u4H_4CqLJLPOsQAl3fXIrL6ksmUVwg5Aa7U1In3LclKziWw-INkDl6fsMkUfg3GaJ-4YczeFdWMQiGvETOgZWC7QmB-BD3Xx14EnyFCsVUuCcJ-VrgqWu_8F2RzAGormcymbhVn9Zm9mA_qkRsjyNo1ZlziAPNuQ7_MwKBkYowX7LVY0VFgV"
                  alt="Adat kenduri blang petani"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded">
                  24 Feb 2026
                </div>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <h4 className="text-sm font-semibold text-[#252525] line-clamp-1">
                  Adat Kenduri Blang Petani
                </h4>
                <p className="text-xs text-[#3A3F3E]/70">Jurong Lam Minyet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 12: INSTANSI & LEMBAGA TERKAIT                    */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <div className="flex flex-col gap-1.5 text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs font-semibold text-[#1769C2] uppercase tracking-wider">
              Konektivitas Pemerintahan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#252525]">
              Instansi &amp; Lembaga Terkait
            </h2>
            <p className="text-sm text-[#3A3F3E]">
              Kemitraan dan portal resmi pemerintahan terhubung untuk sinergi pelayanan publik.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              {
                title: "Pemkab Aceh Besar",
                url: "https://acehbesarkab.go.id",
                icon: Landmark,
              },
              {
                title: "Kemendesa PDTT RI",
                url: "https://kemendesa.go.id",
                icon: Building2,
              },
              {
                title: "Kemendagri RI",
                url: "https://kemendagri.go.id",
                icon: Shield,
              },
              {
                title: "Diskominfo Aceh Besar",
                url: "https://diskominfo.acehbesarkab.go.id",
                icon: Radio,
              },
              {
                title: "DPMPTSP Aceh Besar",
                url: "https://dpmptsp.acehbesarkab.go.id",
                icon: FileCheck,
              },
              {
                title: "Bappeda Aceh Besar",
                url: "https://bappeda.acehbesarkab.go.id",
                icon: PieChart,
              },
            ].map((instansi, idx) => {
              const Icon = instansi.icon;
              return (
                <a
                  key={idx}
                  href={instansi.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-4 flex flex-col items-center text-center gap-3 hover:shadow-md hover:border-[#1769C2] transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F5F9FF] border border-[#E1EDFC] flex items-center justify-center text-[#1769C2] group-hover:scale-110 group-hover:bg-[#1769C2] group-hover:text-white transition-all">
                    <Icon size={22} />
                  </div>
                  <span className="text-xs font-semibold text-[#252525] group-hover:text-[#1769C2] transition-colors leading-tight">
                    {instansi.title}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
