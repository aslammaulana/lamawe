import { Clock, Banknote } from "lucide-react";

interface LayananQuickFactsProps {
  waktu: string;
  biaya: string;
}

export function LayananQuickFacts({ waktu, biaya }: LayananQuickFactsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[var(--color-brand-primary)] flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-blue-50 text-[var(--color-brand-primary)] font-bold">
            SOP Efektif
          </span>
        </div>
        <div>
          <span className="text-xs text-[var(--color-brand-body)] block">
            Estimasi Waktu Proses
          </span>
          <span className="text-xl font-bold text-[var(--color-brand-heading)] font-mono">
            {waktu}
          </span>
        </div>
        <p className="text-[11px] text-[var(--color-brand-body)] mt-3 pt-3 border-t border-[var(--color-brand-border)]">
          Jika berkas lengkap terunggah dan Keuchik berada di tempat kerja.
        </p>
      </div>

      <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Banknote className="w-5 h-5" />
          </div>
          <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold">
            Resmi Gampong
          </span>
        </div>
        <div>
          <span className="text-xs text-[var(--color-brand-body)] block">
            Biaya Retribusi Administrasi
          </span>
          <span className="text-xl font-bold text-emerald-700 font-mono">
            {biaya}
          </span>
        </div>
        <p className="text-[11px] text-[var(--color-brand-body)] mt-3 pt-3 border-t border-[var(--color-brand-border)]">
          Bebas segala bentuk pungutan liar sesuai ketentuan Perdes No. 03/2024.
        </p>
      </div>
    </div>
  );
}

