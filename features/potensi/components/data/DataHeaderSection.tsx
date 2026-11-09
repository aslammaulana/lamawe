import { BarChart3 } from "lucide-react";

export function DataHeaderSection() {
  return (
    <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
          <BarChart3 className="w-3.5 h-3.5" />
          SATU DATA GAMPONG LAM AWE
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
          Data Statistik & Kependudukan
        </h1>
        <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 leading-relaxed">
          Pusat data digital resmi Pemerintah Gampong Lam Awe menyajikan statistik demografi, mata pencaharian warga, dan indikator Indeks Desa Membangun (IDM) berbasis data riil.
        </p>
      </div>
    </section>
  );
}

