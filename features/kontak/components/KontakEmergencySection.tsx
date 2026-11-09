import { Shield, ShieldCheck, Ambulance } from "lucide-react";
import { emergencyContactsData } from "../data/kontakData";

export function KontakEmergencySection() {
  return (
    <div className="bg-white rounded-2xl shadow-xs border border-[var(--color-brand-border)] p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck size={20} className="text-rose-600" />
          <h2 className="text-base font-bold text-[var(--color-brand-heading)]">
            Kontak Siaga &amp; Darurat Desa (24 Jam)
          </h2>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold border border-rose-200">
          Prioritas Tinggi
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {emergencyContactsData.map((item, idx) => {
          const isAmbulance = item.iconType === "ambulance";
          const isPolice = item.iconType === "police";

          return (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] flex flex-col justify-between gap-3"
            >
              <div className="flex items-center gap-2">
                {isAmbulance ? (
                  <Ambulance size={18} className="text-rose-600" />
                ) : isPolice ? (
                  <ShieldCheck size={18} className="text-[var(--color-brand-primary)]" />
                ) : (
                  <Shield size={18} className="text-[var(--color-brand-primary)]" />
                )}
                <span className="text-xs font-semibold text-[var(--color-brand-heading)]">
                  {item.label}
                </span>
              </div>
              <div>
                <span className="font-mono text-sm font-bold text-[var(--color-brand-heading)] block">
                  {item.phone}
                </span>
                <span className="text-[11px] text-[var(--color-brand-body)]/70">
                  {item.role}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

