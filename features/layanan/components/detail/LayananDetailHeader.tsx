import { Store, ShieldCheck, CheckCircle2, ChevronRight, FolderDown } from "lucide-react";
import type { LayananDetailConfig } from "../../types";

interface LayananDetailHeaderProps {
  service: LayananDetailConfig;
}

export function LayananDetailHeader({ service }: LayananDetailHeaderProps) {
  return (
    <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm relative overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold">
              <Store className="w-3.5 h-3.5" />
              {service.kategori}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-mono text-xs font-bold">
              AKTIF • REGULASI 2026
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
            {service.nama}
          </h1>
          <p className="text-xs sm:text-sm text-[var(--color-brand-body)] mt-3 leading-relaxed">
            {service.deskripsi}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-4 text-xs">
            <div className="flex items-center gap-1.5 font-mono font-semibold text-[var(--color-brand-primary)] bg-[var(--color-brand-surface)] px-3 py-1.5 rounded-lg border border-[var(--color-brand-border)]">
              <ShieldCheck className="w-4 h-4" />
              <span>KODE RESMI: {service.kodeSOP}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[var(--color-brand-body)]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Sah Hukum untuk Keperluan Bank, NIB, & Instansi Resmi</span>
            </div>
          </div>
        </div>

        <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-2.5">
          <a
            href="#persyaratan-berkas"
            className="h-11 px-5 rounded-xl bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <span>Ajukan Sekarang</span>
            <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href="#unduh-blangko"
            className="h-11 px-5 rounded-xl bg-[var(--color-brand-surface)] hover:bg-gray-100 border border-[var(--color-brand-border)] text-[var(--color-brand-heading)] font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <FolderDown className="w-4 h-4 text-[var(--color-brand-accent)]" />
            <span>Unduh Blangko</span>
          </a>
        </div>
      </div>
    </section>
  );
}

