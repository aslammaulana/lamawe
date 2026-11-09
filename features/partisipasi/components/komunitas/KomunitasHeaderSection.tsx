import { Users2 } from "lucide-react";

export function KomunitasHeaderSection() {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
        <Users2 className="w-3.5 h-3.5" />
        LEMBAGA KEMASYARAKATAN GAMPONG
      </div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
        Partisipasi Lembaga Warga & Komunitas
      </h1>
      <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 leading-relaxed">
        Membangun desa secara inklusif dan kolaboratif melalui peranan aktif generasi muda, kaum perempuan, dan majelis adat keagamaan Gampong Lam Awe.
      </p>
    </div>
  );
}

