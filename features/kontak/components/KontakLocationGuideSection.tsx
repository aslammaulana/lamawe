import { Building2, Compass, MapPin } from "lucide-react";
import { officeLocationData } from "../data/kontakData";

export function KontakLocationGuideSection() {
  return (
    <div className="bg-white rounded-2xl shadow-xs border border-[var(--color-brand-border)] p-6 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Building2 size={20} className="text-[var(--color-brand-primary)]" />
        <h2 className="text-base font-bold text-[var(--color-brand-heading)]">
          Alamat Fisik Kantor &amp; Panduan Menuju Lokasi
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        <div className="p-4 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] flex flex-col gap-1">
          <span className="font-bold text-sm text-[var(--color-brand-heading)]">
            {officeLocationData.name}
          </span>
          <p className="text-xs text-[var(--color-brand-body)] leading-relaxed">
            {officeLocationData.address}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex items-start gap-3 p-3.5 bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] rounded-lg">
            <Compass size={18} className="text-[var(--color-brand-primary)] mt-0.5 shrink-0" />
            <div>
              <span className="text-xs font-semibold text-[var(--color-brand-heading)] block">
                Patokan Lokasi
              </span>
              <span className="text-xs text-[var(--color-brand-body)]/80 leading-relaxed">
                {officeLocationData.landmark}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] rounded-lg">
            <MapPin size={18} className="text-[var(--color-brand-primary)] mt-0.5 shrink-0" />
            <div>
              <span className="text-xs font-semibold text-[var(--color-brand-heading)] block">
                Registrasi Wilayah
              </span>
              <span className="font-mono text-xs text-[var(--color-brand-body)]/80">
                Kodepos: {officeLocationData.postalCode}
                <br />
                Kode Wilayah: {officeLocationData.regionCode}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

