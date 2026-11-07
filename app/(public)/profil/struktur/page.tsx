import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  CheckCircle,
  FileText,
  Calendar,
  Download,
  MessageSquare,
  MapPin,
  Clock,
  MessageCircle,
  Scale,
  Award,
  Users,
  Shield,
  Sprout,
  HeartHandshake,
  Check,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Struktur Organisasi & Perangkat Desa",
  description:
    "Bagan Struktur Organisasi dan Tata Kerja (SOTK) Pemerintah Gampong Lam Awe, Kecamatan Peukan Bada, Kabupaten Aceh Besar.",
};

export default function StrukturPage() {
  return (
    <div className="w-full pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumb
          items={[
            { label: "Profil", href: "/profil/sejarah" },
            { label: "Struktur Organisasi" },
          ]}
        />

        {/* ========================================================= */}
        {/* HEADER HERO STRUKTUR                                     */}
        {/* ========================================================= */}
        <div className="mt-2 mb-8 bg-white rounded-2xl shadow-xs border border-[#E1EDFC] p-6 lg:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1EDFC] text-[#1769C2] text-xs font-semibold w-fit">
              <CheckCircle size={14} />
              <span>Aparatur Pemerintahan Gampong</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#252525] tracking-tight">
              Struktur Organisasi &amp; Perangkat Desa Lam Awe
            </h1>
            <p className="text-sm text-[#3A3F3E] leading-relaxed">
              Penyelenggaraan tata kelola Pemerintahan Gampong Lam Awe, Kecamatan
              Peukan Bada, Kabupaten Aceh Besar masa bakti 2023–2029 berlandaskan
              asas keterbukaan, akuntabilitas, dan nilai kearifan lokal syariat
              Islam.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-[#3A3F3E]/80 font-mono">
              <span className="flex items-center gap-1.5 bg-[#F5F9FF] border border-[#E1EDFC] px-2.5 py-1 rounded-md">
                <Shield size={14} className="text-[#1769C2]" />
                SK Bupati Aceh Besar: No. 141/428/2023
              </span>
              <span className="flex items-center gap-1.5 bg-[#F5F9FF] border border-[#E1EDFC] px-2.5 py-1 rounded-md">
                <Calendar size={14} className="text-[#2176CA]" />
                Masa Bakti: 2023 – 2029
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <a
              href="#unduh-dokumen"
              className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg bg-[#1769C2] text-white text-xs sm:text-sm font-semibold hover:bg-[#12549E] shadow-xs transition-all"
            >
              <Download size={16} />
              <span>Bagan SK PDF</span>
            </a>
            <a
              href="https://wa.me/628123456789"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg bg-[#F5F9FF] text-[#1769C2] border border-[#E1EDFC] text-xs sm:text-sm font-semibold hover:bg-[#E1EDFC] transition-all"
            >
              <MessageSquare size={16} />
              <span>Sekretariat Gampong</span>
            </a>
          </div>
        </div>

        {/* Sub-nav Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          <Link
            href="/profil/struktur"
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-[#1769C2] text-white whitespace-nowrap shadow-xs"
          >
            Struktur Organisasi
          </Link>
          <Link
            href="/profil/sejarah"
            className="px-4 py-2 rounded-lg text-xs font-medium text-[#3A3F3E] hover:text-[#1769C2] bg-white border border-[#E1EDFC] hover:bg-[#F5F9FF] transition whitespace-nowrap"
          >
            Profil &amp; Sejarah
          </Link>
          <Link
            href="/profil/visi-misi"
            className="px-4 py-2 rounded-lg text-xs font-medium text-[#3A3F3E] hover:text-[#1769C2] bg-white border border-[#E1EDFC] hover:bg-[#F5F9FF] transition whitespace-nowrap"
          >
            Visi &amp; Misi
          </Link>
          <Link
            href="/profil/wilayah"
            className="px-4 py-2 rounded-lg text-xs font-medium text-[#3A3F3E] hover:text-[#1769C2] bg-white border border-[#E1EDFC] hover:bg-[#F5F9FF] transition whitespace-nowrap"
          >
            Wilayah &amp; Dusun
          </Link>
        </div>

        {/* ========================================================= */}
        {/* EXECUTIVE CARD: KEUCHIK GAMPONG                           */}
        {/* ========================================================= */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-xs border border-[#E1EDFC] p-6 lg:p-10 relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-gradient-to-br from-[#1769C2]/10 via-[#2176CA]/5 to-transparent blur-2xl pointer-events-none"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-4 flex flex-col items-center sm:flex-row lg:flex-col gap-6">
                <div className="relative w-48 h-56 sm:w-52 sm:h-64 rounded-xl overflow-hidden shadow-xs shrink-0 bg-[#F5F9FF] border border-[#E1EDFC]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtfwZZjQOZRpMUP4zMy-CtX5CdAE_8u8RdhvgQumC4c4XzfSSmW5G0mS5o0fagLND5MQBmLKmXnnVFSsvujhwLx6xorBdBjnHosZTOtmwAXoTe1OZ9tXsvhyvC16bm0GqV1vlooz8_CwLN2qbIotAOeQcVWGn-hyX5UI1CtRiu7-uzjfW1cmiaIix0MR1Je33sYgUkzHXnkrjEjamGSl-3uwKzLyLcMIM7tUdjtC89"
                    alt="Potret formal Keuchik Gampong Lam Awe"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-xs text-white px-2.5 py-1 rounded text-center font-mono text-[11px]">
                    NIPD: 11.06.09.2001
                  </div>
                </div>
                <div className="text-center sm:text-left lg:text-center flex flex-col items-center sm:items-start lg:items-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E1EDFC] text-[#1769C2] text-xs font-semibold mb-2">
                    <Award size={14} />
                    Keuchik Gampong Definitif
                  </span>
                  <p className="text-lg font-bold text-[#252525]">
                    Teuku Rahmat Syahputra, S.Sos.
                  </p>
                  <p className="text-xs text-[#3A3F3E]/80 mt-0.5">
                    Kepala Desa Lam Awe
                  </p>
                  <div className="inline-block mt-3 px-3 py-1 bg-[#F5F9FF] border border-[#E1EDFC] text-[#3A3F3E] font-mono text-xs rounded">
                    SK Pengesahan 2023 - 2029
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#1769C2] font-semibold text-sm">
                    <Scale size={18} />
                    <span>Pimpinan Pemerintahan &amp; Pengemban Amanah Mukim</span>
                  </div>
                  <blockquote className="italic text-base sm:text-lg text-[#3A3F3E] border-l-4 border-[#1769C2] pl-4 py-1 leading-relaxed">
                    "Mewujudkan Gampong Lam Awe yang berkeadaban islami, mandiri
                    secara ekonomi pesisir dan pertanian, serta transparan dalam
                    setiap rupiah dana gampong untuk kesejahteraan bersama."
                  </blockquote>
                  <p className="text-sm text-[#3A3F3E] leading-relaxed">
                    Keuchik Gampong bertindak sebagai pemimpin eksekutif gampong
                    yang bertanggung jawab memimpin penyelenggaraan administrasi,
                    pembinaan kemasyarakatan, pemberdayaan ekonomi, serta menjaga
                    keterpaduan dengan Imum Mukim dan Tuha Peut Gampong (TPG)
                    sesuai Qanun Aceh No. 9 Tahun 2008.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#E1EDFC] flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[#3A3F3E]/80 mb-2">
                      <span className="text-xs">Wilayah Administrasi</span>
                      <MapPin size={18} className="text-[#1769C2]" />
                    </div>
                    <div className="font-mono text-xl font-bold text-[#252525]">
                      4 Jurong
                    </div>
                    <p className="text-[11px] text-[#3A3F3E]/80 mt-1">
                      Cot Meurak, Lam Wek, Meunasah Barat, Pante
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#E1EDFC] flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[#3A3F3E]/80 mb-2">
                      <span className="text-xs">Jam Kerja Kantor</span>
                      <Clock size={18} className="text-[#1769C2]" />
                    </div>
                    <div className="text-sm font-bold text-[#252525]">
                      Senin – Jumat
                    </div>
                    <p className="text-[11px] text-[#3A3F3E]/80 mt-1">
                      08:30 – 16:30 WIB di Kantor Keuchik
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#E1EDFC] flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[#3A3F3E]/80 mb-2">
                      <span className="text-xs">Layanan Aspirasi</span>
                      <MessageCircle size={18} className="text-[#1769C2]" />
                    </div>
                    <div className="text-sm font-bold text-[#252525]">
                      Tatap Muka &amp; WA
                    </div>
                    <p className="text-[11px] text-[#3A3F3E]/80 mt-1">
                      Aspirasi Jumat Berkah &amp; Pos Pengaduan
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://wa.me/628123456789?text=Assalamualaikum%20Pak%20Keuchik%20Lam%20Awe"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-[#1769C2] text-white text-xs sm:text-sm font-semibold hover:bg-[#12549E] transition-all shadow-xs"
                  >
                    <MessageSquare size={16} />
                    <span>Hubungi Langsung Keuchik</span>
                  </a>
                  <Link
                    href="/layanan/pengaduan"
                    className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-[#F5F9FF] border border-[#E1EDFC] text-[#252525] text-xs sm:text-sm font-semibold hover:bg-[#E1EDFC] transition-colors"
                  >
                    <FileText size={16} className="text-[#1769C2]" />
                    <span>Kirim Aspirasi Resmi</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator Line */}
        <div className="flex items-center justify-center my-6">
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-8 bg-[#E1EDFC]"></div>
            <div className="w-3 h-3 rounded-full bg-[#1769C2] ring-4 ring-[#E1EDFC]"></div>
            <div className="w-0.5 h-8 bg-[#E1EDFC]"></div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* LEVEL 1: SEKRETARIAT GAMPONG                              */}
        {/* ========================================================= */}
        <section className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div>
              <span className="font-mono text-xs text-[#1769C2] uppercase tracking-wider font-semibold">
                Level 1 - Sekretariat Gampong
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#252525]">
                Unsur Pimpinan &amp; Pembantu Pimpinan
              </h2>
            </div>
            <span className="text-xs text-[#3A3F3E]/80">
              Penanggung Jawab Administrasi &amp; Keuangan Pusat
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sekdes */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 hover:shadow-md transition flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#EBF3FC] shrink-0 border border-[#E1EDFC]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWO2gtIGEH0Ws6n2tQiZFiP85KPnR02dec3HW64nI--1FivLg-qhuYEJDGxlWJtkQUSEUZJRBbH5SuDDvneg3k6SrpQV--1gRuIOa3fvFBQj36CmbCDoTOyx5NxLilpZUVVuay_Oogn4kjuX6IYlYMEZmN1ceGaU1sRIF3rnstojZ1IjnNz_XXxcb95UMeUIXeNBpw7Bui_z6EpKBTZMDjl2ZoM_swv32n8kKZEZve"
                    alt="Sekretaris Desa Lam Awe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#E1EDFC] text-[#1769C2] text-[11px] font-semibold w-fit mb-1">
                    Sekretaris Desa (Sekdes)
                  </span>
                  <h3 className="text-base font-bold text-[#252525] truncate">
                    Zulkifli, S.E.
                  </h3>
                  <p className="font-mono text-xs text-[#3A3F3E]/70">
                    ID: AP-LMA-002
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 bg-[#F5F9FF] border border-[#E1EDFC] -mx-6 -mb-6 p-4 rounded-b-xl flex flex-col gap-2">
                <div className="text-[11px] font-semibold text-[#1769C2] uppercase font-mono">
                  Tugas Utama
                </div>
                <p className="text-xs text-[#3A3F3E] leading-relaxed">
                  Memimpin kesekretariatan gampong, perumusan kebijakan teknis
                  administrasi umum, kearsipan persuratan dinas, serta
                  mengoordinasikan penyusunan APBG.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-xs text-[#3A3F3E]/80">
                  <span>Masa Bakti: 2023–2029</span>
                  <span className="text-[#1769C2] font-semibold flex items-center gap-1">
                    <CheckCircle size={13} /> Aktif
                  </span>
                </div>
              </div>
            </div>

            {/* Kaur Keuangan */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 hover:shadow-md transition flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#EBF3FC] shrink-0 border border-[#E1EDFC]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb04-GRt2LH8MjTNvCks_nTn230MJmcaNeS3dzoop0Kggt7fv_Pw2f3anDIrALaaGQn4SIkoCOSnSpgxgBacVfRzg_sLnZzHd2g9VJvjYqxl0dbKXc6bxC1N15VN28Or8ks58e21tusKCooW6yTAjHU4EQIaRgcC2H6WvhjqWRmWjz5CcVh5I-IjNVIXaAM79FxMg4X5Eape8mbx5vl7-YltMvcwJ--hQTHYxobQLM"
                    alt="Kaur Keuangan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#E1EDFC] text-[#1769C2] text-[11px] font-semibold w-fit mb-1">
                    Kaur Keuangan
                  </span>
                  <h3 className="text-base font-bold text-[#252525] truncate">
                    Munawir, A.Md.
                  </h3>
                  <p className="font-mono text-xs text-[#3A3F3E]/70">
                    ID: AP-LMA-003
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 bg-[#F5F9FF] border border-[#E1EDFC] -mx-6 -mb-6 p-4 rounded-b-xl flex flex-col gap-2">
                <div className="text-[11px] font-semibold text-[#1769C2] uppercase font-mono">
                  Tugas Utama
                </div>
                <p className="text-xs text-[#3A3F3E] leading-relaxed">
                  Pengelolaan penatausahaan keuangan desa, sistem Siskeudes,
                  penyusunan Surat Permintaan Pembayaran (SPP), serta pembukuan
                  kas belanja desa.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-xs text-[#3A3F3E]/80">
                  <span>Masa Bakti: 2023–2029</span>
                  <span className="text-[#1769C2] font-semibold flex items-center gap-1">
                    <CheckCircle size={13} /> Aktif
                  </span>
                </div>
              </div>
            </div>

            {/* Kaur Umum & Perencanaan */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 hover:shadow-md transition flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#EBF3FC] shrink-0 border border-[#E1EDFC]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJPJAow1mQ-8Q6t7V_UqAqx6TgcVxuNXUQtoqFgjDd1TUSV0xFhP6ZGFz1F4Wu5zWaz43Ig8f5tGgvatS71bAqY7gfKkYA1N-G1QEUumrn-sMYozDWZxtGtt51z968wU1agJ93xrr97h8s1ZU8N3VIu7rsdXIo5pAFTVYKH5cjzptkoYeoBDoY-eLWXz8TksFL5hK2g852vLYVxIS_Sn-K2eccFrFesQDWIBEVB2om"
                    alt="Kaur Umum dan Perencanaan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#E1EDFC] text-[#1769C2] text-[11px] font-semibold w-fit mb-1">
                    Kaur Umum &amp; Perencanaan
                  </span>
                  <h3 className="text-base font-bold text-[#252525] truncate">
                    Nurul Fitriani, S.Pd.
                  </h3>
                  <p className="font-mono text-xs text-[#3A3F3E]/70">
                    ID: AP-LMA-004
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 bg-[#F5F9FF] border border-[#E1EDFC] -mx-6 -mb-6 p-4 rounded-b-xl flex flex-col gap-2">
                <div className="text-[11px] font-semibold text-[#1769C2] uppercase font-mono">
                  Tugas Utama
                </div>
                <p className="text-xs text-[#3A3F3E] leading-relaxed">
                  Inventarisasi aset barang milik gampong, ketatausahaan kantor,
                  penyusunan RKP Gampong, serta fasilitas musyawarah perencanaan
                  desa (Musrenbang).
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-xs text-[#3A3F3E]/80">
                  <span>Masa Bakti: 2023–2029</span>
                  <span className="text-[#1769C2] font-semibold flex items-center gap-1">
                    <CheckCircle size={13} /> Aktif
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator Line */}
        <div className="flex items-center justify-center my-6">
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-8 bg-[#E1EDFC]"></div>
            <div className="w-3 h-3 rounded-full bg-[#2176CA] ring-4 ring-[#E1EDFC]"></div>
            <div className="w-0.5 h-8 bg-[#E1EDFC]"></div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* LEVEL 2: SEKSI PELAKSANA TEKNIS LAPANGAN                  */}
        {/* ========================================================= */}
        <section className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div>
              <span className="font-mono text-xs text-[#1769C2] uppercase tracking-wider font-semibold">
                Level 2 - Pelaksana Teknis Lapangan
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#252525]">
                Seksi Pelaksana Teknis &amp; Pelayanan
              </h2>
            </div>
            <span className="text-xs text-[#3A3F3E]/80">
              Kepala Seksi Pelaksana Program Kerja
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Kasi Pemerintahan */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 hover:shadow-md transition flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#EBF3FC] shrink-0 border border-[#E1EDFC]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCazrDg1yGN7rUhtZsVGkp2vKhfuasicjZ2YNbD_rlJtBvja4j5rB3YVPEmZ_Dd08DnMB5VTjlq15jBkvoc_GBJyGO2pnJqKQb51vepw3fq6YSSItCekN2Pm1wBsC7pMDTpfxvSj157lNxM9ryPjry4ja9OyrTwgarZmIecRcCDDwlDgHy2LB5I8HlecOHHndmdrtv9cJAwFRU05-dlwx2bSlllvhPmJtcuqeYjLtzJ"
                    alt="Kasi Pemerintahan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#E1EDFC] text-[#1769C2] text-[11px] font-semibold w-fit mb-1">
                    Kasi Pemerintahan
                  </span>
                  <h3 className="text-base font-bold text-[#252525] truncate">
                    M. Syahrul, S.IP.
                  </h3>
                  <p className="font-mono text-xs text-[#3A3F3E]/70">
                    ID: AP-LMA-005
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 bg-[#F5F9FF] border border-[#E1EDFC] -mx-6 -mb-6 p-4 rounded-b-xl flex flex-col gap-2">
                <div className="text-[11px] font-semibold text-[#1769C2] uppercase font-mono">
                  Ruang Lingkup Tugas
                </div>
                <p className="text-xs text-[#3A3F3E] leading-relaxed">
                  Pelayanan perizinan dan surat pengantar warga, administrasi
                  kependudukan (KTP/KK), ketertiban umum kemasyarakatan, serta
                  koordinasi muspika Peukan Bada.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-xs text-[#3A3F3E]/80">
                  <span>Layanan Kependudukan</span>
                  <span className="text-[#1769C2] font-semibold">Online &amp; Offline</span>
                </div>
              </div>
            </div>

            {/* Kasi Kesejahteraan / Kesra */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 hover:shadow-md transition flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#EBF3FC] shrink-0 border border-[#E1EDFC]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd2HccS2ebgcMIlkBFquPYc-chKZGDjEZ41RQgdLwSEnnaHNE4seOiezObZUfE5uLn7fcrLbj0ZMRmI8K_60Y7XUiBVU9C3YAYe4eQgui_KVE4K-UeEbj7fJd1kj2DaqOweIzy6yhZebqjnl1tPDtJXbyxztcUWKKw8X1ikRpx20-h7rX-4X219JZ9kBPUMkDSqtDZ5tPLW0ghLiln7BsCt1zFQXUW0n1X6A3GldDQ"
                    alt="Kasi Kesejahteraan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#E1EDFC] text-[#1769C2] text-[11px] font-semibold w-fit mb-1">
                    Kasi Kesejahteraan &amp; Kesra
                  </span>
                  <h3 className="text-base font-bold text-[#252525] truncate">
                    Cut Salmiah, S.Sos.
                  </h3>
                  <p className="font-mono text-xs text-[#3A3F3E]/70">
                    ID: AP-LMA-006
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 bg-[#F5F9FF] border border-[#E1EDFC] -mx-6 -mb-6 p-4 rounded-b-xl flex flex-col gap-2">
                <div className="text-[11px] font-semibold text-[#1769C2] uppercase font-mono">
                  Ruang Lingkup Tugas
                </div>
                <p className="text-xs text-[#3A3F3E] leading-relaxed">
                  Verifikasi bantuan sosial (PKH, BLT Desa), pembinaan
                  pemberdayaan perempuan, posyandu gampong, serta kegiatan syariat
                  Islam dan keagamaan meunasah.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-xs text-[#3A3F3E]/80">
                  <span>Fokus Pelayanan</span>
                  <span className="text-[#1769C2] font-semibold">Sosial &amp; Bansos</span>
                </div>
              </div>
            </div>

            {/* Kaur Pembangunan */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-6 hover:shadow-md transition flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#EBF3FC] shrink-0 border border-[#E1EDFC]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIn3zJKLSb5QPiornXaneQwzk4j5zm0eG8XhWmIxosmYneOSR_0p9NnAvKJKpHNiPCa-GVWc_5hGdm_eeYOpOv4M-q0k5x1LRYdLnSC7UMZjgcc7LJfzxAapmodJMMM1XxYt1zLD-hoeHbFR-h-btXNYS1dOeuRglHU4_KTKecNbdDbzsYwJWmbuE8UpU_gpxkpqOMescnv_77XZa20dcHvwgI0L1ly5mgpUR2SAKi"
                    alt="Kaur Pembangunan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#E1EDFC] text-[#1769C2] text-[11px] font-semibold w-fit mb-1">
                    Kaur Pembangunan
                  </span>
                  <h3 className="text-base font-bold text-[#252525] truncate">
                    Faisal Rizal, S.T.
                  </h3>
                  <p className="font-mono text-xs text-[#3A3F3E]/70">
                    ID: AP-LMA-007
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 bg-[#F5F9FF] border border-[#E1EDFC] -mx-6 -mb-6 p-4 rounded-b-xl flex flex-col gap-2">
                <div className="text-[11px] font-semibold text-[#1769C2] uppercase font-mono">
                  Ruang Lingkup Tugas
                </div>
                <p className="text-xs text-[#3A3F3E] leading-relaxed">
                  Pengawasan fisik infrastruktur gampong (jalan rabat beton,
                  drainase jurong, tanggul pesisir), tata ruang gampong, dan
                  program padat karya tunai (PKT).
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-xs text-[#3A3F3E]/80">
                  <span>Fokus Pelayanan</span>
                  <span className="text-[#1769C2] font-semibold">Infrastruktur</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* LEVEL 3: KEWILAYAHAN (ULEE JURONG)                        */}
        {/* ========================================================= */}
        <section className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div>
              <span className="font-mono text-xs text-[#1769C2] uppercase tracking-wider font-semibold">
                Level 3 - Kewilayahan (Ulee Jurong)
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#252525]">
                Kepala Dusun / Ulee Jurong
              </h2>
            </div>
            <span className="text-xs text-[#3A3F3E]/80">
              Penghubung Warga di 4 Wilayah Pemukiman
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Jurong 01 */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-5 hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#EBF3FC] shrink-0 border border-[#E1EDFC]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK_T_VvfRonON07_bc2zdt8ZM-PmPiy5WCfW73G94MuhQiy7WaxVCqv6B_7b8vWc1bIhGkuFiFaRT_fdsmOvHkws_bYcqb-G29fAWINF1fextP9_UojINL4ttGwQWlMiqLfi_u1Oc3Tjwwe_GvLkoigDyxmr3TvCYXVs04IQn4BsEJDjbu3mVfCa6dPEIvjBULiPZzJJZFUJT4IzZ49WtvkWBF_QyHqLK9PC7NTJLq"
                      alt="Ulee Jurong Cot Meurak"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-[#E1EDFC] text-[#1769C2] font-mono">
                      Jurong 01
                    </span>
                    <h3 className="text-sm font-bold text-[#252525] truncate">
                      Tgk. Ibrahim Ali
                    </h3>
                  </div>
                </div>
                <div className="text-xs font-semibold text-[#1769C2] mb-1">
                  Ulee Jurong Cot Meurak
                </div>
                <p className="text-xs text-[#3A3F3E] leading-relaxed">
                  Memimpin koordinasi ketentraman warga, kebersihan lingkungan,
                  dan pos ronda di wilayah perbukitan &amp; permukiman Cot Meurak.
                </p>
              </div>
              <div className="mt-4 pt-3 bg-[#F5F9FF] border border-[#E1EDFC] -mx-5 -mb-5 px-5 py-3 rounded-b-xl flex items-center justify-between text-xs">
                <span className="text-[#3A3F3E]/70">Cakupan RT: 03 RT</span>
                <span className="font-mono text-[#1769C2] font-bold">~210 KK</span>
              </div>
            </div>

            {/* Jurong 02 */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-5 hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#EBF3FC] shrink-0 border border-[#E1EDFC]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBohzsDMS6yCZXFZX4OMJ29t7JcllrWGsNItKsdsqMDBYVkuq23Zsw1nQ_Hbhh4DAspUdI_dT2wgniNPhUYP5lQKy3qr1jT2zZz95c_E6Tj1ECOxk5xMJGBs98iJpFLU2yaH3HZoJOrgIzpDJwD700WONIznHJwII9A-zO8ACo2pV3FdetK041K-NK7Ul6so3hRTJAUiUUb60HvSO4CDNIIykKmNs4tF8VKh3-7FNQk"
                      alt="Ulee Jurong Lam Wek"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-[#E1EDFC] text-[#1769C2] font-mono">
                      Jurong 02
                    </span>
                    <h3 className="text-sm font-bold text-[#252525] truncate">
                      Mukhlis Ismail
                    </h3>
                  </div>
                </div>
                <div className="text-xs font-semibold text-[#1769C2] mb-1">
                  Ulee Jurong Lam Wek
                </div>
                <p className="text-xs text-[#3A3F3E] leading-relaxed">
                  Mengakomodasi administrasi kependudukan dan kegiatan gotong
                  royong sawah serta pemukiman warga kawasan sentra Lam Wek.
                </p>
              </div>
              <div className="mt-4 pt-3 bg-[#F5F9FF] border border-[#E1EDFC] -mx-5 -mb-5 px-5 py-3 rounded-b-xl flex items-center justify-between text-xs">
                <span className="text-[#3A3F3E]/70">Cakupan RT: 04 RT</span>
                <span className="font-mono text-[#1769C2] font-bold">~275 KK</span>
              </div>
            </div>

            {/* Jurong 03 */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-5 hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#EBF3FC] shrink-0 border border-[#E1EDFC]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfhTD5p2H2GjCoGhttzTSYiPebBm1jGjYWfVKqLk4brr8xk94tidEPcAaw6_3YczYSje5YhMo6uiSfxysxf7CjOnvJX-rzn2Ay5DOiT4ndG-jr5SDicE9HZrUy-6MXP7KCSfZHhnz_hkVq0Htxw4LdZ0vEB3Dir8dSM_lwbfQUjbLqhdheyWUubKZpMFfKs4kWgEdUQQ4mSUorqs60m77eZHZdmTqtaB5QYj2ZU2yy"
                      alt="Ulee Jurong Meunasah Barat"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-[#E1EDFC] text-[#1769C2] font-mono">
                      Jurong 03
                    </span>
                    <h3 className="text-sm font-bold text-[#252525] truncate">
                      H. Bakhtiar Usman
                    </h3>
                  </div>
                </div>
                <div className="text-xs font-semibold text-[#1769C2] mb-1">
                  Ulee Jurong Meunasah Barat
                </div>
                <p className="text-xs text-[#3A3F3E] leading-relaxed">
                  Mengawal ketertiban peribadatan di lingkungan pusat Meunasah
                  gampong serta pengelolaan fasilitas umum bersama warga.
                </p>
              </div>
              <div className="mt-4 pt-3 bg-[#F5F9FF] border border-[#E1EDFC] -mx-5 -mb-5 px-5 py-3 rounded-b-xl flex items-center justify-between text-xs">
                <span className="text-[#3A3F3E]/70">Cakupan RT: 03 RT</span>
                <span className="font-mono text-[#1769C2] font-bold">~195 KK</span>
              </div>
            </div>

            {/* Jurong 04 */}
            <div className="bg-white rounded-xl shadow-xs border border-[#E1EDFC] p-5 hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#EBF3FC] shrink-0 border border-[#E1EDFC]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyUvB5gvI6-96mpA45PW7u3dOltk8iS8f3YmD-KOowT0gbbQk0XaLw9eIVEZtyooUa2AGEAaOZhXjJUvl7PQ6h4RCGt1OuGzUUvdoiruZtknRL0WCH1Cbm11FexcVTdz5wrW4eazfnSiqmkvV013ppUApO5RZqk1dIfYrt__NmNoqffb-I-7HU3w53w9m7QyfcTlTp64P-aQlGRJwr8zE8VJrLXncNBowM8T6IWFFU"
                      alt="Ulee Jurong Pante"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-[#E1EDFC] text-[#1769C2] font-mono">
                      Jurong 04
                    </span>
                    <h3 className="text-sm font-bold text-[#252525] truncate">
                      Saifullah Ramli
                    </h3>
                  </div>
                </div>
                <div className="text-xs font-semibold text-[#1769C2] mb-1">
                  Ulee Jurong Pante
                </div>
                <p className="text-xs text-[#3A3F3E] leading-relaxed">
                  Fasilitator koordinasi nelayan, kelompok usaha tambak, serta
                  kesiapsiagaan mitigasi bencana pesisir di garis pantai gampong.
                </p>
              </div>
              <div className="mt-4 pt-3 bg-[#F5F9FF] border border-[#E1EDFC] -mx-5 -mb-5 px-5 py-3 rounded-b-xl flex items-center justify-between text-xs">
                <span className="text-[#3A3F3E]/70">Cakupan RT: 04 RT</span>
                <span className="font-mono text-[#1769C2] font-bold">~240 KK</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* LEMBAGA ADAT & TUHA PEUT GAMPONG (TPG)                    */}
        {/* ========================================================= */}
        <section className="mb-14">
          <div className="bg-[#F5F9FF] border border-[#E1EDFC] rounded-2xl p-6 lg:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
              <div>
                <span className="font-mono text-xs text-[#2176CA] uppercase tracking-wider font-semibold">
                  Mitra Strategis &amp; Lembaga Adat
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#252525]">
                  Lembaga Tuha Peut (TPG) &amp; Perangkat Adat Istiadat
                </h2>
              </div>
              <p className="text-xs text-[#3A3F3E]/80 max-w-md">
                Unsur pengawasan legislatif gampong dan pemangku adat sesuai
                kekhususan otonomi Aceh.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* TPG */}
              <div className="bg-white p-5 rounded-xl shadow-xs border border-[#E1EDFC] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Scale size={26} className="text-[#1769C2]" />
                    <span className="text-[11px] font-mono bg-[#E1EDFC] text-[#1769C2] px-2 py-0.5 rounded font-semibold">
                      Legislatif Desa
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#252525]">
                    Tuha Peut Gampong (TPG)
                  </h3>
                  <p className="text-xs text-[#3A3F3E] mt-2 leading-relaxed">
                    Dipimpin oleh Ketua TPG bersama 6 anggota perwakilan jurong.
                    Berfungsi membahas rancangan Qanun Gampong, menyerap aspirasi
                    warga, dan mengawasi APBG.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#3A3F3E]/80">
                  <span>Ketua TPG: <strong>Tgk. H. Marzuki</strong></span>
                  <CheckCircle size={14} className="text-[#1769C2]" />
                </div>
              </div>

              {/* Lembaga Adat Blang & Laot */}
              <div className="bg-white p-5 rounded-xl shadow-xs border border-[#E1EDFC] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Sprout size={26} className="text-[#2176CA]" />
                    <span className="text-[11px] font-mono bg-[#E1EDFC] text-[#2176CA] px-2 py-0.5 rounded font-semibold">
                      Hukum Adat Laot &amp; Blang
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#252525]">
                    Keujruen Blang &amp; Panglima Laot
                  </h3>
                  <p className="text-xs text-[#3A3F3E] mt-2 leading-relaxed">
                    Mengatur jadwal turun ke sawah, distribusi irigasi persawahan,
                    serta memelihara adat istiadat kearifan lokal nelayan di pesisir
                    Peukan Bada.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#3A3F3E]/80">
                  <span>Keujruen: <strong>Pak Meurah Hasan</strong></span>
                  <CheckCircle size={14} className="text-[#2176CA]" />
                </div>
              </div>

              {/* Pemuda & PKK */}
              <div className="bg-white p-5 rounded-xl shadow-xs border border-[#E1EDFC] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <HeartHandshake size={26} className="text-[#1769C2]" />
                    <span className="text-[11px] font-mono bg-[#E1EDFC] text-[#1769C2] px-2 py-0.5 rounded font-semibold">
                      Kader &amp; Pemuda
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#252525]">
                    Ketua Pemuda &amp; TP-PKK Gampong
                  </h3>
                  <p className="text-xs text-[#3A3F3E] mt-2 leading-relaxed">
                    Menggerakkan kepemudaan, keamanan sosial malam hari, ketahanan
                    keluarga, pencegahan stunting melalui Posyandu dan kegiatan
                    dasawisma.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#3A3F3E]/80">
                  <span>Ketua Pemuda: <strong>Rizki Ananda</strong></span>
                  <CheckCircle size={14} className="text-[#1769C2]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* MATRIKS TUPOKSI RINGKAS                                   */}
        {/* ========================================================= */}
        <section className="bg-white rounded-2xl shadow-xs border border-[#E1EDFC] p-6 lg:p-8 mb-12">
          <div className="flex items-center justify-between mb-6 pb-4 bg-[#F5F9FF] -mx-6 -mt-6 p-6 rounded-t-2xl border-b border-[#E1EDFC]">
            <div className="flex items-center gap-2">
              <Users size={20} className="text-[#1769C2]" />
              <h2 className="text-base sm:text-lg font-bold text-[#252525]">
                Matriks Tugas Pokok &amp; Fungsi (Tupoksi) Ringkas
              </h2>
            </div>
            <span className="font-mono text-xs text-[#3A3F3E]/70 hidden sm:inline">
              Standar Pelayanan Prima
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#F5F9FF] text-[#252525] border-b border-[#E1EDFC]">
                  <th className="py-3 px-4 rounded-l-lg font-semibold">Jabatan Aparatur</th>
                  <th className="py-3 px-4 font-semibold">Pejabat Definitif</th>
                  <th className="py-3 px-4 font-semibold">Fungsi Strategis</th>
                  <th className="py-3 px-4 font-semibold">Dasar Hukum Penugasan</th>
                  <th className="py-3 px-4 rounded-r-lg font-semibold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="text-[#3A3F3E] divide-y divide-slate-100">
                <tr className="hover:bg-[#F5F9FF]/60 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-[#252525]">Keuchik Gampong</td>
                  <td className="py-3.5 px-4">Teuku Rahmat Syahputra, S.Sos.</td>
                  <td className="py-3.5 px-4">Penanggung Jawab Umum Kebijakan &amp; Keuangan Gampong</td>
                  <td className="py-3.5 px-4 font-mono text-xs">SK Bupati Aceh Besar 2023</td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="inline-flex items-center gap-1 text-[#1769C2] font-semibold text-xs">
                      <span className="w-2 h-2 rounded-full bg-[#1769C2]"></span> Bertugas
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-[#F5F9FF]/60 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-[#252525]">Sekretaris Desa</td>
                  <td className="py-3.5 px-4">Zulkifli, S.E.</td>
                  <td className="py-3.5 px-4">Koordinator PPKD &amp; Penyelenggara Administrasi Dinas</td>
                  <td className="py-3.5 px-4 font-mono text-xs">SK Keuchik No. 02/2023</td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="inline-flex items-center gap-1 text-[#1769C2] font-semibold text-xs">
                      <span className="w-2 h-2 rounded-full bg-[#1769C2]"></span> Bertugas
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-[#F5F9FF]/60 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-[#252525]">Kaur Keuangan</td>
                  <td className="py-3.5 px-4">Munawir, A.Md.</td>
                  <td className="py-3.5 px-4">Bendahara Pengeluaran &amp; Pengarsipan Bukti Transaksi</td>
                  <td className="py-3.5 px-4 font-mono text-xs">SK Keuchik No. 04/2023</td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="inline-flex items-center gap-1 text-[#1769C2] font-semibold text-xs">
                      <span className="w-2 h-2 rounded-full bg-[#1769C2]"></span> Bertugas
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-[#F5F9FF]/60 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-[#252525]">Kasi Pemerintahan</td>
                  <td className="py-3.5 px-4">M. Syahrul, S.IP.</td>
                  <td className="py-3.5 px-4">Pelayanan Surat Pengantar &amp; Verifikasi Data Kependudukan</td>
                  <td className="py-3.5 px-4 font-mono text-xs">SK Keuchik No. 05/2023</td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="inline-flex items-center gap-1 text-[#1769C2] font-semibold text-xs">
                      <span className="w-2 h-2 rounded-full bg-[#1769C2]"></span> Bertugas
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-[#F5F9FF]/60 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-[#252525]">4 Ulee Jurong</td>
                  <td className="py-3.5 px-4">Ulee Jurong (Kolektif)</td>
                  <td className="py-3.5 px-4">Ketentraman, Kerukunan Masyarakat &amp; Pembagian Undangan</td>
                  <td className="py-3.5 px-4 font-mono text-xs">SK Keuchik No. 08/2023</td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="inline-flex items-center gap-1 text-[#1769C2] font-semibold text-xs">
                      <span className="w-2 h-2 rounded-full bg-[#1769C2]"></span> Bertugas
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================= */}
        {/* DASAR HUKUM & UNDUH DOKUMEN PDF                           */}
        {/* ========================================================= */}
        <section className="bg-white rounded-2xl shadow-xs border border-[#E1EDFC] p-6 lg:p-8" id="unduh-dokumen">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E1EDFC] text-[#1769C2] text-xs font-semibold">
                <Shield size={14} />
                <span>Landasan Yuridis Penyelenggaraan</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#252525]">
                Dasar Hukum &amp; Legalitas Struktur Organisasi
              </h2>
              <p className="text-sm text-[#3A3F3E] leading-relaxed">
                Struktur Organisasi dan Tata Kerja (SOTK) Pemerintah Gampong Lam Awe disusun secara sah berdasarkan ketentuan perundang-undangan:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#3A3F3E]">
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-[#1769C2] shrink-0 mt-0.5" />
                  <span><strong>Undang-Undang Republik Indonesia No. 6 Tahun 2014</strong> tentang Desa.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-[#1769C2] shrink-0 mt-0.5" />
                  <span><strong>Undang-Undang Republik Indonesia No. 11 Tahun 2006</strong> tentang Pemerintahan Aceh (UUPA).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-[#1769C2] shrink-0 mt-0.5" />
                  <span><strong>Qanun Aceh No. 9 Tahun 2008</strong> tentang Pembinaan Kehidupan Adat dan Adat Istiadat.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-[#1769C2] shrink-0 mt-0.5" />
                  <span><strong>Peraturan Bupati Aceh Besar</strong> tentang Susunan Organisasi dan Tata Kerja Pemerintah Gampong.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 bg-[#F5F9FF] border border-[#E1EDFC] p-6 rounded-xl flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                  <FileText size={24} />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-[#252525] truncate">
                    SOTK-LamAwe-2023.pdf
                  </div>
                  <div className="font-mono text-xs text-[#3A3F3E]/70">
                    Ukuran File: 2.4 MB
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#3A3F3E] leading-relaxed">
                Dokumen resmi memuat lampiran bagan grafis garis koordinasi, tupoksi lengkap, dan salinan Surat Keputusan.
              </p>
              <button
                type="button"
                className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-lg bg-[#1769C2] text-white text-xs sm:text-sm font-semibold hover:bg-[#12549E] transition-colors shadow-xs"
              >
                <Download size={16} />
                <span>Unduh Bagan Lengkap (PDF)</span>
              </button>
              <span className="text-center font-mono text-[11px] text-[#3A3F3E]/70">
                Terakhir diperbarui: 15 Januari 2024
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

