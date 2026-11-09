import { ShieldCheck, Lock } from "lucide-react";

export function KontakIntegrityBanner() {
  return (
    <div className="mt-8 p-6 rounded-2xl bg-white border border-[var(--color-brand-border)] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[var(--color-brand-subtle)] flex items-center justify-center shrink-0 text-[var(--color-brand-primary)]">
          <ShieldCheck size={22} />
        </div>
        <p className="text-xs sm:text-sm text-[var(--color-brand-body)] leading-snug">
          <strong className="font-bold text-[var(--color-brand-heading)]">
            Integritas Pelayanan Publik:
          </strong>{" "}
          Setiap laporan, saran, dan permohonan informasi publik ditangani
          resmi oleh Tim Pelayanan Gampong Lam Awe{" "}
          <span className="font-semibold text-[var(--color-brand-primary)] underline">
            tanpa dipungut biaya apa pun (100% Gratis)
          </span>.
        </p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] text-[var(--color-brand-body)] text-xs font-medium">
          <Lock size={13} className="text-[var(--color-brand-primary)]" />
          Kerahasiaan Terjaga
        </span>
      </div>
    </div>
  );
}

