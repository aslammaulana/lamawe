import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import type { ProductItem } from "../../types";

interface UmkmProductGridProps {
  products: ProductItem[];
}

export function UmkmProductGrid({ products }: UmkmProductGridProps) {
  return (
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
  );
}

