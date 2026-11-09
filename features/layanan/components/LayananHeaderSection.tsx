import { ShieldCheck, Clock } from "lucide-react";
import { helpdeskData } from "../data/helpdesk";

export function LayananHeaderSection() {
  return (
    <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          PELAYANAN ADMINISTRASI TERPADU GAMPONG
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
          Layanan Mandiri & Administrasi Desa
        </h1>
        <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 leading-relaxed">
          Akses pengurusan surat keterangan, perizinan usaha, dan administrasi kependudukan desa secara transparan, mudah, dan bebas pungli bagi seluruh warga Gampong Lam Awe.
        </p>
      </div>

      {/* Jam Pelayanan Card */}
      <div className="flex items-center gap-3.5 p-4 bg-white border border-[var(--color-brand-border)] rounded-2xl shadow-sm shrink-0">
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[var(--color-brand-primary)] flex items-center justify-center shrink-0">
          <Clock className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-bold text-[var(--color-brand-heading)] block">
            Jam Layanan Kantor
          </span>
          <span className="text-xs font-mono text-[var(--color-brand-body)]">
            {helpdeskData.office.hours}
          </span>
        </div>
      </div>
    </section>
  );
}

