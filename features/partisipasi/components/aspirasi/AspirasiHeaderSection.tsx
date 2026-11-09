import { Lightbulb } from "lucide-react";

export function AspirasiHeaderSection() {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
        <Lightbulb className="w-3.5 h-3.5" />
        PARTISIPASI PEMBANGUNAN GAMPONG
      </div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
        Kotak Aspirasi & Rembug Warga
      </h1>
      <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 leading-relaxed">
        Setiap gagasan dan usulan warga sangat berharga bagi masa depan Lam Awe. Sampaikan ide inovatif Anda untuk dibahas pada rembug dusun dan musyawarah gampong.
      </p>
    </div>
  );
}

