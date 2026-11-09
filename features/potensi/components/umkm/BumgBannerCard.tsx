import { Phone } from "lucide-react";

export function BumgBannerCard() {
  return (
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
  );
}

