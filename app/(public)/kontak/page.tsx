import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Compass,
  ArrowRight,
  ExternalLink,
  Shield,
  ShieldCheck,
  Ambulance,
  Lock,
  Building2,
  Navigation,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak & Lokasi Kantor",
  description:
    "Saluran komunikasi terpadu Kantor Keuchik Gampong Lam Awe, Kecamatan Peukan Bada, Kabupaten Aceh Besar. Jam pelayanan, nomor darurat 24 jam, dan peta lokasi.",
};

export default function KontakPage() {
  return (
    <div className="w-full pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumb items={[{ label: "Kontak & Layanan Aduan Langsung" }]} />

        {/* ========================================================= */}
        {/* HEADER HERO KONTAK                                       */}
        {/* ========================================================= */}
        <section className="relative bg-white rounded-2xl shadow-xs border border-[#E1EDFC] p-6 lg:p-10 overflow-hidden mb-8">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-[#E1EDFC]/50 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1EDFC] text-[#1769C2] w-fit text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#1769C2] animate-pulse"></span>
              <span>Pusat Bantuan &amp; Komunikasi Publik</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#252525] tracking-tight">
              Hubungi Pemerintah Desa Lam Awe
            </h1>
            <p className="text-sm text-[#3A3F3E] leading-relaxed">
              Saluran komunikasi terpadu Kantor Keuchik Gampong Lam Awe,
              Kecamatan Peukan Bada. Kami siap melayani konsultasi administrasi
              kependudukan, pengaduan sarana warga, serta koordinasi siaga
              darurat secara transparan dan tanpa biaya.
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2-COLUMN RESPONSIVE GRID                                  */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* 1. KANAL KOMUNIKASI LANGSUNG */}
            <div className="bg-white rounded-2xl shadow-xs border border-[#E1EDFC] p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone size={20} className="text-[#1769C2]" />
                  <h2 className="text-base font-bold text-[#252525]">
                    Kanal Komunikasi Langsung
                  </h2>
                </div>
                <span className="text-xs text-[#2176CA] font-semibold bg-[#F5F9FF] border border-[#E1EDFC] px-2.5 py-0.5 rounded-full">
                  Respons Cepat
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/628123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl bg-[#F5F9FF] border border-[#E1EDFC] hover:border-[#1769C2] hover:bg-white transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white text-[#1769C2] border border-[#E1EDFC] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#1769C2] group-hover:text-white transition">
                      <Phone size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#252525] group-hover:text-[#1769C2] transition-colors">
                        Kirim Pesan WhatsApp Resmi
                      </span>
                      <span className="text-xs text-[#3A3F3E]/80">
                        Respon cepat loket 08.30 - 15.30 WIB
                      </span>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-slate-400 group-hover:text-[#1769C2] group-hover:translate-x-1 transition-all"
                  />
                </a>

                {/* Telepon Kantor */}
                <a
                  href="tel:+626517552019"
                  className="group flex items-center justify-between p-4 rounded-xl bg-[#F5F9FF] border border-[#E1EDFC] hover:border-[#1769C2] hover:bg-white transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white text-[#1769C2] border border-[#E1EDFC] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#1769C2] group-hover:text-white transition">
                      <Phone size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#252525] group-hover:text-[#1769C2] transition-colors">
                        Panggil Telepon Kantor Pelayanan
                      </span>
                      <span className="font-mono text-xs text-[#3A3F3E]/80">
                        (0651) 7552-019 • Jam Dinas
                      </span>
                    </div>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-slate-400 group-hover:text-[#1769C2] transition-all"
                  />
                </a>

                {/* Email */}
                <a
                  href="mailto:kontak@desa-lamawe.id"
                  className="group flex items-center justify-between p-4 rounded-xl bg-[#F5F9FF] border border-[#E1EDFC] hover:border-[#1769C2] hover:bg-white transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white text-[#1769C2] border border-[#E1EDFC] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#1769C2] group-hover:text-white transition">
                      <Mail size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#252525] group-hover:text-[#1769C2] transition-colors">
                        Surel Resmi PPID &amp; Pelayanan
                      </span>
                      <span className="font-mono text-xs text-[#3A3F3E]/80">
                        kontak@desa-lamawe.id
                      </span>
                    </div>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-slate-400 group-hover:text-[#1769C2] transition-all"
                  />
                </a>
              </div>
            </div>

            {/* 2. JAM OPERASIONAL LOKET */}
            <div className="bg-white rounded-2xl shadow-xs border border-[#E1EDFC] p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-[#1769C2]" />
                <h2 className="text-base font-bold text-[#252525]">
                  Jadwal &amp; Jam Operasional Loket
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#E1EDFC] flex flex-col justify-between gap-2">
                  <div>
                    <span className="text-xs font-semibold text-[#1769C2] block">
                      Senin – Kamis
                    </span>
                    <span className="font-mono font-bold text-sm text-[#252525] block mt-1">
                      08.30 – 15.30 WIB
                    </span>
                  </div>
                  <p className="text-[11px] text-[#3A3F3E]/80">
                    Istirahat: 12.30 – 14.00 WIB
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#E1EDFC] flex flex-col justify-between gap-2">
                  <div>
                    <span className="text-xs font-semibold text-[#2176CA] block">
                      Jumat Berkah
                    </span>
                    <span className="font-mono font-bold text-sm text-[#252525] block mt-1">
                      08.30 – 11.30 WIB
                    </span>
                  </div>
                  <p className="text-[11px] text-[#3A3F3E]/80">
                    Tutup persiapan Shalat Jumat
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex flex-col justify-between gap-2">
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block">
                      Sabtu – Minggu
                    </span>
                    <span className="font-bold text-sm text-slate-500 block mt-1">
                      Loket Tutup
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Layanan daring 24 jam aktif
                  </p>
                </div>
              </div>
            </div>

            {/* 3. ALAMAT FISIK KANTOR & PATOKAN */}
            <div className="bg-white rounded-2xl shadow-xs border border-[#E1EDFC] p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Building2 size={20} className="text-[#1769C2]" />
                <h2 className="text-base font-bold text-[#252525]">
                  Alamat Fisik Kantor &amp; Panduan Menuju Lokasi
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#E1EDFC] flex flex-col gap-1">
                  <span className="font-bold text-sm text-[#252525]">
                    Kantor Keuchik Gampong Lam Awe
                  </span>
                  <p className="text-xs text-[#3A3F3E] leading-relaxed">
                    Jl. Meulaboh - Banda Aceh KM 7.5, Gampong Lam Awe, Kecamatan
                    Peukan Bada, Kabupaten Aceh Besar, Aceh.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3 p-3.5 bg-[#F5F9FF] border border-[#E1EDFC] rounded-lg">
                    <Compass size={18} className="text-[#1769C2] mt-0.5 shrink-0" />
                    <div>
                      <span className="text-xs font-semibold text-[#252525] block">
                        Patokan Lokasi
                      </span>
                      <span className="text-xs text-[#3A3F3E]/80 leading-relaxed">
                        Samping Meunasah Lam Awe, ± 15 menit dari Kota Banda Aceh.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-[#F5F9FF] border border-[#E1EDFC] rounded-lg">
                    <MapPin size={18} className="text-[#1769C2] mt-0.5 shrink-0" />
                    <div>
                      <span className="text-xs font-semibold text-[#252525] block">
                        Registrasi Wilayah
                      </span>
                      <span className="font-mono text-xs text-[#3A3F3E]/80">
                        Kodepos: 23351<br />Kode Wilayah: 11.06.08.2001
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. KONTAK SIAGA & DARURAT 24 JAM */}
            <div className="bg-white rounded-2xl shadow-xs border border-[#E1EDFC] p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={20} className="text-rose-600" />
                  <h2 className="text-base font-bold text-[#252525]">
                    Kontak Siaga &amp; Darurat Desa (24 Jam)
                  </h2>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold border border-rose-200">
                  Prioritas Tinggi
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#E1EDFC] flex flex-col justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Shield size={18} className="text-[#1769C2]" />
                    <span className="text-xs font-semibold text-[#252525]">
                      Pos Kamling &amp; Bencana
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-sm font-bold text-[#252525] block">
                      0852-6011-XXXX
                    </span>
                    <span className="text-[11px] text-[#3A3F3E]/70">
                      Koordinator Lapangan
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#E1EDFC] flex flex-col justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={18} className="text-[#1769C2]" />
                    <span className="text-xs font-semibold text-[#252525]">
                      Babinsa &amp; Bhabin
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-sm font-bold text-[#252525] block">
                      0813-7720-XXXX
                    </span>
                    <span className="text-[11px] text-[#3A3F3E]/70">
                      Polsek &amp; Koramil
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#E1EDFC] flex flex-col justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Ambulance size={18} className="text-rose-600" />
                    <span className="text-xs font-semibold text-[#252525]">
                      Ambulans Siaga
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-sm font-bold text-[#252525] block">
                      0821-6900-XXXX
                    </span>
                    <span className="text-[11px] text-[#3A3F3E]/70">
                      Driver Medis Siaga 24 Jam
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Span 5): Map & Form */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* 1. Map Pin Card */}
            <div className="bg-white rounded-2xl shadow-xs border border-[#E1EDFC] p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-[#1769C2]" />
                  <h2 className="text-base font-bold text-[#252525]">
                    Peta Lokasi Kantor Keuchik
                  </h2>
                </div>
                <span className="font-mono text-xs text-[#1769C2] font-semibold bg-[#E1EDFC] px-2 py-0.5 rounded">
                  GPS Ready
                </span>
              </div>

              <div className="relative w-full h-64 rounded-xl overflow-hidden border border-[#E1EDFC]">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUbfsmpO5cLjB1_AJjRqFmVPZcIoS5K1SBgS3lh25Iy7xVfkdtu0Gk_b5RXb2RBuwZmaGFotqwpSO4utq1Dh7nkdbxy2aUsXv2l-utoL1yMtqK_QKJuxMKQJEhwPBck0HIYBbULReEhN8vgKlTlDk_6B-_Xhqz5ZdsAe63WWeIwjYDFFOqe8Eh61AS7W-N9zMAi2_yy--9bio-a5tKct3m1-8WHPlviYUw-bwWRSo0")',
                  }}
                ></div>
                <div className="absolute inset-x-3 bottom-3 p-3 bg-white/95 backdrop-blur-xs rounded-lg flex items-center justify-between shadow-xs border border-[#E1EDFC]">
                  <div className="flex items-center gap-2 min-w-0">
                    <MapPin size={18} className="text-rose-600 shrink-0" />
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-bold text-[#252525] truncate">
                        Kantor Keuchik Desa Lam Awe
                      </span>
                      <span className="font-mono text-[11px] text-[#3A3F3E]/70">
                        5°31'22.4"N 95°17'46.2"E
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=5.522889,95.296167"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md bg-[#1769C2] text-white hover:bg-[#12549E] transition flex items-center justify-center shrink-0"
                    title="Buka Navigasi Rute"
                  >
                    <Navigation size={15} />
                  </a>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Kantor+Keuchik+Gampong+Lam+Awe+Peukan+Bada"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-4 rounded-lg bg-[#F5F9FF] hover:bg-[#E1EDFC] border border-[#E1EDFC] text-[#1769C2] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition"
              >
                <span>Buka Navigasi Rute di Google Maps</span>
                <ExternalLink size={15} />
              </a>
            </div>

            {/* 2. Form Pengaduan / Pesan Cepat */}
            <ContactForm />
          </div>
        </div>

        {/* ========================================================= */}
        {/* INTEGRITY & PUBLIC SERVICE BANNER (Aspek 8 Lomba)         */}
        {/* ========================================================= */}
        <div className="mt-8 p-6 rounded-2xl bg-white border border-[#E1EDFC] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E1EDFC] flex items-center justify-center shrink-0 text-[#1769C2]">
              <ShieldCheck size={22} />
            </div>
            <p className="text-xs sm:text-sm text-[#3A3F3E] leading-snug">
              <strong className="font-bold text-[#252525]">
                Integritas Pelayanan Publik:
              </strong>{" "}
              Setiap laporan, saran, dan permohonan informasi publik ditangani
              resmi oleh Tim Pelayanan Gampong Lam Awe{" "}
              <span className="font-semibold text-[#1769C2] underline">
                tanpa dipungut biaya apa pun (100% Gratis)
              </span>.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F9FF] border border-[#E1EDFC] text-[#3A3F3E] text-xs font-medium">
              <Lock size={13} className="text-[#1769C2]" />
              Kerahasiaan Terjaga
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

