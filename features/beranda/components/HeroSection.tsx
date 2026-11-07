import Link from "next/link";
import Image from "next/image";
import {
  Megaphone,
  CheckCircle,
  FileText,
  Landmark,
  Building2,
  MapPin,
  Compass,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { heroData, heroTickerData } from "../data/hero";

export function HeroSection() {
  return (
    <section className="w-full bg-background py-6 sm:py-10 lg:py-12 border-b border-border-soft">
      <Container className="flex flex-col gap-6">
        {/* Ticker / Pengumuman Terkini */}
        <div className="w-full bg-surface rounded-xl shadow-xs border border-border-soft p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-heading">
          <div className="flex items-center gap-3 min-w-0">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-btn-blue shrink-0">
              <Megaphone size={18} />
            </span>
            <div className="flex items-center gap-2 flex-wrap min-w-0">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-btn-blue">
                {heroTickerData.tag}
              </span>
              <span className="text-xs sm:text-sm text-heading font-medium truncate">
                {heroTickerData.message}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 bg-background border border-border-soft px-3 py-1.5 rounded-lg">
            <span className="text-xs text-foreground/70 font-medium">Tiket Verifikasi:</span>
            <span className="font-mono text-xs font-bold text-btn-blue">
              {heroTickerData.ticketNumber}
            </span>
          </div>
        </div>

        {/* Hero Content Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs border border-border-soft relative overflow-hidden">
          <div className="lg:col-span-7 flex flex-col gap-5 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background border border-border-soft text-btn-blue w-fit">
              <CheckCircle size={15} />
              <span className="text-xs font-semibold uppercase tracking-wider">
                {heroData.officialBadge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-extrabold text-heading tracking-tight">
              {heroData.headlinePrefix}{" "}
              <span className="text-btn-blue">{heroData.headlineHighlight}</span>
            </h1>

            <p className="text-base sm:text-lg text-foreground max-w-2xl leading-relaxed">
              {heroData.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/layanan"
                className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-btn-blue hover:bg-btn-blue-hover text-white font-medium text-sm transition-colors shadow-xs gap-2"
              >
                <FileText size={18} />
                <span>Layanan Desa</span>
              </Link>
              <Link
                href="/transparansi/apbdes"
                className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-surface text-btn-blue hover:bg-background border border-border-soft font-medium text-sm transition-colors shadow-2xs gap-2"
              >
                <Landmark size={18} />
                <span>Transparansi APBDes</span>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4 text-xs text-foreground/80 border-t border-slate-100 flex-wrap">
              <div className="flex items-center gap-1.5">
                <Building2 size={15} className="text-btn-blue" />
                <span>{heroData.locationBadges.kecamatan}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={15} className="text-btn-blue" />
                <span>{heroData.locationBadges.kabupaten}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Compass size={15} className="text-btn-blue" />
                <span>{heroData.locationBadges.provinsi}</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5 relative w-full h-[300px] sm:h-[360px] lg:h-[400px] rounded-xl overflow-hidden shadow-sm border border-border-soft">
            <Image
              src={heroData.image.src}
              alt={heroData.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 bg-surface/95 backdrop-blur-xs p-3.5 rounded-lg shadow-xs flex items-center justify-between border border-border-soft">
              <div>
                <p className="text-xs font-bold text-heading">
                  {heroData.image.captionTitle}
                </p>
                <p className="text-[11px] text-foreground/80">
                  {heroData.image.captionSubtitle}
                </p>
              </div>
              <span className="inline-flex p-1.5 rounded-md bg-blue-50 text-btn-blue">
                <Compass size={18} />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

