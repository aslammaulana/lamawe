import Image from "next/image";
import Link from "next/link";
import { Award, Scale, MapPin, Clock, MessageCircle, MessageSquare, FileText } from "lucide-react";
import { keuchikExecutiveData } from "../data/struktur";

export function KeuchikExecutiveSection() {
  return (
    <section className="mb-12">
      <div className="bg-surface rounded-2xl shadow-xs border border-border-soft p-6 lg:p-10 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-gradient-to-br from-btn-blue/10 via-accent-blue/5 to-transparent blur-2xl pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-4 flex flex-col items-center sm:flex-row lg:flex-col gap-6">
            <div className="relative w-48 h-56 sm:w-52 sm:h-64 rounded-xl overflow-hidden shadow-xs shrink-0 bg-background border border-border-soft">
              <Image
                src={keuchikExecutiveData.foto}
                alt="Potret formal Keuchik Gampong Lam Awe"
                fill
                sizes="(max-width: 640px) 192px, 208px"
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-xs text-white px-2.5 py-1 rounded text-center font-mono text-[11px] z-10">
                NIPD: {keuchikExecutiveData.nipd}
              </div>
            </div>
            <div className="text-center sm:text-left lg:text-center flex flex-col items-center sm:items-start lg:items-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-btn-blue text-xs font-semibold mb-2">
                <Award size={14} />
                <span>{keuchikExecutiveData.badge}</span>
              </span>
              <p className="text-lg font-bold text-heading">
                {keuchikExecutiveData.nama}
              </p>
              <p className="text-xs text-foreground/80 mt-0.5">
                {keuchikExecutiveData.jabatan}
              </p>
              <div className="inline-block mt-3 px-3 py-1 bg-background border border-border-soft text-foreground font-mono text-xs rounded">
                {keuchikExecutiveData.skPengesahan}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-between h-full space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-btn-blue font-semibold text-sm">
                <Scale size={18} />
                <span>Pimpinan Pemerintahan &amp; Pengemban Amanah Mukim</span>
              </div>
              <blockquote className="italic text-base sm:text-lg text-foreground border-l-4 border-btn-blue pl-4 py-1 leading-relaxed">
                {keuchikExecutiveData.quote}
              </blockquote>
              <p className="text-sm text-foreground leading-relaxed">
                {keuchikExecutiveData.bio}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-background border border-border-soft flex flex-col justify-between">
                <div className="flex items-center justify-between text-foreground/80 mb-2">
                  <span className="text-xs">Wilayah Administrasi</span>
                  <MapPin size={18} className="text-btn-blue" />
                </div>
                <div className="font-mono text-xl font-bold text-heading">
                  4 Jurong
                </div>
                <p className="text-[11px] text-foreground/80 mt-1">
                  Cot Meurak, Lam Wek, Meunasah Barat, Pante
                </p>
              </div>

              <div className="p-4 rounded-xl bg-background border border-border-soft flex flex-col justify-between">
                <div className="flex items-center justify-between text-foreground/80 mb-2">
                  <span className="text-xs">Jam Kerja Kantor</span>
                  <Clock size={18} className="text-btn-blue" />
                </div>
                <div className="text-sm font-bold text-heading">
                  Senin – Jumat
                </div>
                <p className="text-[11px] text-foreground/80 mt-1">
                  08:30 – 16:30 WIB di Kantor Keuchik
                </p>
              </div>

              <div className="p-4 rounded-xl bg-background border border-border-soft flex flex-col justify-between">
                <div className="flex items-center justify-between text-foreground/80 mb-2">
                  <span className="text-xs">Layanan Aspirasi</span>
                  <MessageCircle size={18} className="text-btn-blue" />
                </div>
                <div className="text-sm font-bold text-heading">
                  Tatap Muka &amp; WA
                </div>
                <p className="text-[11px] text-foreground/80 mt-1">
                  Aspirasi Jumat Berkah &amp; Pos Pengaduan
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={keuchikExecutiveData.waContactUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-btn-blue text-white text-xs sm:text-sm font-semibold hover:bg-btn-blue-hover transition-all shadow-xs"
              >
                <MessageSquare size={16} />
                <span>Hubungi Langsung Keuchik</span>
              </a>
              <Link
                href="/layanan/pengaduan"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-background border border-border-soft text-heading text-xs sm:text-sm font-semibold hover:bg-blue-50 transition-colors"
              >
                <FileText size={16} className="text-btn-blue" />
                <span>Kirim Aspirasi Resmi</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
