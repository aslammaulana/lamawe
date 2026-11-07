import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Store,
  ChevronRight,
  ShoppingBag,
  Building2,
  Award,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Potensi UMKM & BUMG Bungong Seulanga - Gampong Lam Awe",
  description:
    "Katalog produk usaha mikro warga dan profil Badan Usaha Milik Gampong (BUMG) Bungong Seulanga Gampong Lam Awe, Aceh Besar.",
};

const products = [
  {
    nama: "Ikan Keumamah Kayu Lam Awe",
    produsen: "Kelompok Olahan Ikan Jurong Cot Meurak",
    harga: "Rp 35.000 / bungkus (250g)",
    deskripsi:
      "Ikan tongkol olahan tradisional Aceh yang dikeringkan secara higienis, tahan lama tanpa bahan pengawet kimia, dan kaya protein alami.",
    kategori: "Kuliner Khas",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9LxPgER1G81F6zJC_52rljbZXnlDqapDennjvpHXZ6cjbxURNfqXAWbrNAfLlahkXC9UhJASM9En3nEdLwGTnvu_Uohd6sT0DW81p-xpYb2wTWwT_fAVbYciGsE2SC6Wba9-MWwmY-8DlCfU8qtjcBYDqBR1E7p4fs-lCFsFBiKs7aZkmMahFwgluckm75JywrCJCaDiRjGBMTqSex1jyyhrz3L2YX9r2rJZjLPAq",
  },
  {
    nama: "Kerupuk Ikan Tenggiri Gurih",
    produsen: "UMKM Pesisir Sejahtera",
    harga: "Rp 15.000 / bungkus (150g)",
    deskripsi:
      "Camilan renyah berbahan dasar ikan tenggiri segar tangkapan nelayan pesisir Lam Awe dengan bumbu rempah khas Aceh.",
    kategori: "Snack Olahan",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9LxPgER1G81F6zJC_52rljbZXnlDqapDennjvpHXZ6cjbxURNfqXAWbrNAfLlahkXC9UhJASM9En3nEdLwGTnvu_Uohd6sT0DW81p-xpYb2wTWwT_fAVbYciGsE2SC6Wba9-MWwmY-8DlCfU8qtjcBYDqBR1E7p4fs-lCFsFBiKs7aZkmMahFwgluckm75JywrCJCaDiRjGBMTqSex1jyyhrz3L2YX9r2rJZjLPAq",
  },
  {
    nama: "Terasi Udang Rebon Asli Pesisir",
    produsen: "Kelompok Nelayan Jurong Cot Meurak",
    harga: "Rp 20.000 / pack (200g)",
    deskripsi:
      "Terasi olahan udang rebon fermentasi alami tanpa pewarna sintetis, beraroma sedap khas bumbu dapur nusantara.",
    kategori: "Bumbu Dapur",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9LxPgER1G81F6zJC_52rljbZXnlDqapDennjvpHXZ6cjbxURNfqXAWbrNAfLlahkXC9UhJASM9En3nEdLwGTnvu_Uohd6sT0DW81p-xpYb2wTWwT_fAVbYciGsE2SC6Wba9-MWwmY-8DlCfU8qtjcBYDqBR1E7p4fs-lCFsFBiKs7aZkmMahFwgluckm75JywrCJCaDiRjGBMTqSex1jyyhrz3L2YX9r2rJZjLPAq",
  },
];

export default function UMKMPage() {
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
            UMKM & BUMG
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
            <Store className="w-3.5 h-3.5" />
            EKONOMI MANDIRI & PEMBERDAYAAN
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
            Potensi UMKM & BUMG Bungong Seulanga
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 leading-relaxed">
            Penguatan perekonomian gampong melalui pembinaan usaha mikro warga, diversifikasi hasil tangkapan laut, serta pengelolaan unit usaha profesional oleh Badan Usaha Milik Gampong (BUMG).
          </p>
        </div>
      </section>

      {/* BUMG Banner Card */}
      <section className="bg-gradient-to-r from-blue-900 to-[var(--color-brand-primary)] text-white rounded-3xl p-8 lg:p-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <div className="inline-block px-3 py-1 rounded bg-white/20 text-xs font-mono font-semibold mb-3">
            LEMBAGA USAHA DESA
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            BUMG Bungong Seulanga Lam Awe
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
            Didirikan berdasarkan Qanun Gampong Lam Awe No. 03/2021 sebagai lokomotif perekonomian warga. Mengelola 4 unit usaha produktif: penyediaan sarana produksi nelayan/petani, kios sembako murah, jasa sewa balai pertemuan, dan pemasaran produk olahan perikanan.
          </p>
        </div>
        <div className="shrink-0 flex flex-col gap-2 w-full md:w-auto">
          <a
            href="https://wa.me/628123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 px-6 rounded-xl bg-white text-[var(--color-brand-primary)] font-semibold text-xs flex items-center justify-center gap-2 shadow-sm hover:bg-blue-50 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Kontak Manajer BUMG</span>
          </a>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-bold text-[var(--color-brand-heading)]">
            Produk Unggulan UMKM Gampong
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-brand-body)] mt-1">
            Produk olahan warga yang telah mendapatkan pendampingan higienitas dan izin edar resmi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p, idx) => (
            <div
              key={idx}
              className="bg-white border border-[var(--color-brand-border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[var(--color-brand-accent)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={p.imageUrl}
                    alt={p.nama}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-white/90 text-[var(--color-brand-primary)] text-xs font-semibold">
                    {p.kategori}
                  </span>
                </div>

                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-base font-bold text-[var(--color-brand-heading)]">
                    {p.nama}
                  </h3>
                  <span className="text-xs text-[var(--color-brand-body)]">
                    Oleh: {p.produsen}
                  </span>
                  <p className="text-xs text-[var(--color-brand-body)] leading-relaxed mt-1 line-clamp-3">
                    {p.deskripsi}
                  </p>
                  <div className="text-sm font-bold font-mono text-[var(--color-brand-primary)] mt-2">
                    {p.harga}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 mt-2">
                <a
                  href={`https://wa.me/628123456789?text=Halo%20Admin%20BUMG%20Lam%20Awe,%20saya%20tertarik%20membeli%20produk%20${encodeURIComponent(
                    p.nama
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-10 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Pesan via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

