import { CheckCircle2 } from "lucide-react";
import type { OrganizationItem } from "../../types";

interface OrganizationGridProps {
  organizations: OrganizationItem[];
}

export function OrganizationGrid({ organizations }: OrganizationGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {organizations.map((org, idx) => (
        <div
          key={idx}
          className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-[var(--color-brand-accent)] transition-all"
        >
          <div>
            <span className="text-xs font-mono font-bold text-[var(--color-brand-primary)] bg-blue-50 px-2.5 py-0.5 rounded-full inline-block mb-3">
              {org.anggota}
            </span>
            <h2 className="text-lg font-bold text-[var(--color-brand-heading)] mb-1">
              {org.nama}
            </h2>
            <span className="text-xs text-[var(--color-brand-body)] block mb-3 font-medium">
              {org.peran}
            </span>

            <div className="p-3 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] text-xs text-[var(--color-brand-heading)] mb-4">
              <span className="text-gray-400 block text-[11px]">Koordinator / Ketua:</span>
              <strong>{org.ketua}</strong>
            </div>

            <span className="text-xs font-bold text-[var(--color-brand-heading)] block mb-2">
              Program Kerja Unggulan:
            </span>
            <ul className="space-y-2 text-xs text-[var(--color-brand-body)]">
              {org.program.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

