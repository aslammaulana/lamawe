import { Store } from "lucide-react";

export function UmkmHeaderSection() {
  return (
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
  );
}

