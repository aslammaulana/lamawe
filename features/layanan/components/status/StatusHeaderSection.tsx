import { ShieldCheck } from "lucide-react";

export function StatusHeaderSection() {
  return (
    <section className="flex flex-col gap-2 max-w-3xl">
      <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold">
        <ShieldCheck className="w-3.5 h-3.5" />
        TRANSPARANSI PELAYANAN PUBLIK
      </div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
        Lacak Status Permohonan & Pengaduan
      </h1>
      <p className="text-sm sm:text-base text-[var(--color-brand-body)] leading-relaxed">
        Periksa perkembangan berkas administrasi surat atau tindak lanjut pengaduan Anda secara real-time menggunakan kode tiket resmi Gampong Lam Awe.
      </p>
    </section>
  );
}

