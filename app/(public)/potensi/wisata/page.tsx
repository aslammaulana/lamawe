import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Palmtree,
  ChevronRight,
  Waves,
  MapPin,
  Camera,
  Compass,
  Utensils,
  Navigation,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Potensi Wisata Bahari & Pesisir - Gampong Lam Awe",
  description:
    "Eksplorasi destinasi wisata bahari pesisir Selat Malaka, kuliner ikan bakar segar, dan panorama matahari terbenam Gampong Lam Awe, Aceh Besar.",
};

const attractions = [
  {
    nama: "Kawasan Pesisir Pantai Lam Awe",
    kategori: "Wisata Alam Bahari",
    lokasi: "Jurong Cot Meurak",
    deskripsi:
      "Garis pantai alami menghadap Selat Malaka dengan pasir bersih, angin laut sejuk, dan panorama matahari terbenam (sunset) yang memukau. Sangat cocok untuk wisata santai keluarga.",
    fasilitas: ["Parkir Luas", "Musholla/Meunasah Pesisir", "Pondok Santai", "Toilet Bersih"],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFcBVUM6lXJl1ZL6tNpHSLNtZfAsR_AaWthL0upRFDpff5WacR8kqp0by_dZ3OU2cYB4tmNSv91wb_SG3cNFhKWv5XPJPYiddM6-_F-n4ypP22NOg_6uh2UPT4eaF8gq1a4kJR79CEhmOcGotUubIXOQWwxbDuCgwvgHfdkgBkR37GpuAT5NYsAcuiBqSj8r9-QQch-mApUBrbVcBCg4-uyoxs7vCXiyQrOhLmi07v",
  },
  {
    nama: "Sentra Kuliner Ikan Bakar & Kopi Pesisir",
    kategori: "Wisata Kuliner",
    lokasi: "Jalan Lintas Banda Aceh - Meulaboh",
    deskripsi:
      "Deretan warung kopi khas Aceh dan sentra kuliner hasil laut tangkapan segar nelayan (ikan kakap, kuwe, cumi) yang disajikan dengan bumbu asam keueung dan sambal ganja khas Aceh.",
    fasilitas: ["Wi-Fi Gratis", "Area Santap Keluarga", "Live Cooking Nelayan"],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9LxPgER1G81F6zJC_52rljbZXnlDqapDennjvpHXZ6cjbxURNfqXAWbrNAfLlahkXC9UhJASM9En3nEdLwGTnvu_Uohd6sT0DW81p-xpYb2wTWwT_fAVbYciGsE2SC6Wba9-MWwmY-8DlCfU8qtjcBYDqBR1E7p4fs-lCFsFBiKs7aZkmMahFwgluckm75JywrCJCaDiRjGBMTqSex1jyyhrz3L2YX9r2rJZjLPAq",
  },
];

export default function WisataPage() {
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
          <li className="text-[var(--color-brand-body)]">Data & Potensi</li>
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="font-semibold text-[var(--color-brand-heading)]">
            Potensi Wisata
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
            <Palmtree className="w-3.5 h-3.5" />
            DESTINASI PESISIR ACEH BESAR
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
            Potensi Wisata Bahari & Kuliner Pesisir
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 leading-relaxed">
            Menikmati pesona keindahan pantai Selat Malaka, sajian kuliner ikan laut segar tangkapan nelayan, serta suasana kedai kopi tradisional yang ramah dan bersahaja.
          </p>
        </div>
      </section>

      {/* Attractions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {attractions.map((att, idx) => (
          <div
            key={idx}
            className="bg-white border border-[var(--color-brand-border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[var(--color-brand-accent)] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-video w-full bg-gray-100 overflow-hidden">
                <Image
                  src={att.imageUrl}
                  alt={att.nama}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-white/90 text-[var(--color-brand-primary)] text-xs font-bold shadow-xs">
                  {att.kategori}
                </span>
              </div>

              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center gap-1.5 text-xs text-[var(--color-brand-body)] font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-brand-accent)]" />
                  <span>{att.lokasi}</span>
                </div>

                <h2 className="text-lg font-bold text-[var(--color-brand-heading)]">
                  {att.nama}
                </h2>

                <p className="text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed">
                  {att.deskripsi}
                </p>

                <div className="pt-3 border-t border-[var(--color-brand-border)] mt-2">
                  <span className="text-[11px] font-bold text-[var(--color-brand-heading)] uppercase tracking-wider block mb-2">
                    Fasilitas Tersedia:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {att.fasilitas.map((f, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-lg bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] text-[11px] text-[var(--color-brand-body)] font-medium"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 mt-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Lam+Awe+Peukan+Bada"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-10 rounded-xl bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Petunjuk Arah Rute Google Maps</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

