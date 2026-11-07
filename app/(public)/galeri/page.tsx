import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  ChevronRight,
  Maximize2,
  Calendar,
  MapPin,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Galeri Foto & Dokumentasi Desa - Gampong Lam Awe",
  description:
    "Arsip dokumentasi visual kegiatan pembangunan, kemaritiman pesisir, gotong royong meunasah, dan budaya Gampong Lam Awe, Aceh Besar.",
};

const galleryItems = [
  {
    id: 1,
    title: "Pembangunan Saluran Irigasi Tersier Jurong Cot Meurak",
    kategori: "Pembangunan",
    tanggal: "Maret 2026",
    lokasi: "Jurong Cot Meurak",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFcBVUM6lXJl1ZL6tNpHSLNtZfAsR_AaWthL0upRFDpff5WacR8kqp0by_dZ3OU2cYB4tmNSv91wb_SG3cNFhKWv5XPJPYiddM6-_F-n4ypP22NOg_6uh2UPT4eaF8gq1a4kJR79CEhmOcGotUubIXOQWwxbDuCgwvgHfdkgBkR37GpuAT5NYsAcuiBqSj8r9-QQch-mApUBrbVcBCg4-uyoxs7vCXiyQrOhLmi07v",
  },
  {
    id: 2,
    title: "Pelayanan Posyandu Balita & Skrining Lansia Terpadu",
    kategori: "Kesehatan",
    tanggal: "Maret 2026",
    lokasi: "Meunasah Gampong",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5kjNCL8pKMpFQHHB8wxotERGJDyYi-KV6mNAvjS7urBZkMl7A38IzAuAQBvbsqF3D63dkCAX9Y_oqbU9R-r7fwHsQ2To8r3EEs9nDEldh4lM76xjyvYKjPnwaUX4OcLtmbXHkajN0SyN1d8NugabXSWDYjdzs8TOXFVQUF8n_W-l5iuYbH8xKx9DIEroi3keEEmaAjSh35Cb_7tIU8FH6DCcMW_StgaYBBs2EEaLv",
  },
  {
    id: 3,
    title: "Penyaluran Bantuan Langsung Tunai (BLT Dana Desa) Tahap I",
    kategori: "Sosial",
    tanggal: "Maret 2026",
    lokasi: "Aula Kantor Keuchik",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYzWX44Xr0IvxzjSyhBZ4OZIoMapVxBFizGBFnHHEaVcyTuNyaSJ1S9jGrohxscjuyKeW5i6ZrVSR-gyX9AP-RyCB_PiADYK9y2aWjN2e9L_n1yoOPpo4vMAARSdok0NVcTv6vYgWJT16oNrk_rb_T6rVygOdL2iJEZY3Ff3yE7vnyUq2gH-3PWCBp-I37o3Tq-ukkuYE6MnONvkkyNVtPsqiY8tIvcDHRXwLMdAvH",
  },
  {
    id: 4,
    title: "Pelatihan Wirausaha Olahan Ikan Asin & Keumamah BUMG",
    kategori: "Pemberdayaan",
    tanggal: "Februari 2026",
    lokasi: "Balai Warga Lam Awe",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9LxPgER1G81F6zJC_52rljbZXnlDqapDennjvpHXZ6cjbxURNfqXAWbrNAfLlahkXC9UhJASM9En3nEdLwGTnvu_Uohd6sT0DW81p-xpYb2wTWwT_fAVbYciGsE2SC6Wba9-MWwmY-8DlCfU8qtjcBYDqBR1E7p4fs-lCFsFBiKs7aZkmMahFwgluckm75JywrCJCaDiRjGBMTqSex1jyyhrz3L2YX9r2rJZjLPAq",
  },
  {
    id: 5,
    title: "Aksi Bersih Lingkungan & Gotong Royong Meunasah",
    kategori: "Gotong Royong",
    tanggal: "Februari 2026",
    lokasi: "Kompleks Meunasah Tuha",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9grPboIJvUeAZ_jQT3RXJg040ZtLD75kfvRpbjdARy2F-ghJJ0UWT8hbxBmjktsd-uz63U2CvNrOMxiDwjCgkpyGG4_26K6Qt4arhn2J22rfYUFYru3slLFeQwD_QCkppepiWsSt2iJ9WmIC5KG9sVKOAwyrX1kJyzLUxFfo7uYOcHgnoPAqbunSNto_-eQ_S8OQVRSg-B9SG5v4RP0x0GSus8-LI8-JfGA0Kv52J",
  },
  {
    id: 6,
    title: "Musyawarah Perencanaan Pembangunan Gampong (Musrenbang)",
    kategori: "Pemerintahan",
    tanggal: "Januari 2026",
    lokasi: "Balai Desa",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnzbfkGIseFKzIx1kxW33ge_voMuv_1rZL7bKLPE9WrKtP8jFvdB4NAWlkqVLwInJE9OxWlbQIGtA6P1VSP8IUG3W3t7IcBSeTU5S4SLmh70rOHdUJhjzjYiSJZEAyMLGMKkz4Eex-H89y0qMkmSRLFhPOo12IHNtYyHfh6c7omGpmvWnL1WvcESj4HYXKXc_Lr6aTim_iMJOE3nexw7TzCHRZUClDCZr9xd7GHbz8",
  },
];

export default function GaleriPage() {
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
          <li className="text-[var(--color-brand-body)]">Informasi</li>
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="font-semibold text-[var(--color-brand-heading)]"
          >
            Galeri Desa
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
            <Camera className="w-3.5 h-3.5" />
            DOKUMENTASI VISUAL GAMPONG
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
            Galeri Foto & Dokumentasi Gampong Lam Awe
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 leading-relaxed">
            Koleksi arsip foto dan kegiatan pembangunan, kemaritiman pesisir, aktivitas gotong royong warga, serta dinamika kehidupan sosial bermasyarakat.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((img) => (
          <div
            key={img.id}
            className="group bg-white border border-[var(--color-brand-border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[var(--color-brand-accent)] transition-all flex flex-col"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
              <Image
                src={img.imageUrl}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[var(--color-brand-primary)] text-xs font-semibold shadow-xs">
                  {img.kategori}
                </span>
              </div>
            </div>

            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[var(--color-brand-heading)] leading-snug">
                  {img.title}
                </h3>
              </div>
              <div className="flex items-center justify-between text-xs text-[var(--color-brand-body)] mt-4 pt-3 border-t border-[var(--color-brand-border)] font-mono">
                <span className="flex items-center gap-1 font-sans">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  {img.lokasi}
                </span>
                <span>{img.tanggal}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

