import { Wheat, Waves, CheckCircle2 } from "lucide-react";
import { sektorPertanianData, sektorKelautanData } from "../../data/pertanianData";

export function PertanianKelautanBento() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Sektor Pertanian */}
      <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Wheat className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-[var(--color-brand-body)] block">
                  {sektorPertanianData.sektor}
                </span>
                <h2 className="text-xl font-bold text-[var(--color-brand-heading)]">
                  {sektorPertanianData.nama}
                </h2>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono text-xs font-bold">
              {sektorPertanianData.luas}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed mb-4">
            {sektorPertanianData.deskripsi}
          </p>

          <div className="space-y-2 text-xs text-[var(--color-brand-heading)] bg-[var(--color-brand-surface)] p-4 rounded-xl border border-[var(--color-brand-border)] mb-4">
            {sektorPertanianData.stats.map((st, i) => (
              <div key={i} className="flex items-center justify-between">
                <span>{st.label}</span>
                <strong
                  className={
                    st.highlight
                      ? "font-mono text-emerald-700"
                      : "font-semibold"
                  }
                >
                  {st.value}
                </strong>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-[var(--color-brand-border)] flex items-center gap-2 text-xs text-emerald-700 font-medium">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{sektorPertanianData.footerNote}</span>
        </div>
      </div>

      {/* Sektor Kelautan & Perikanan Tangkap */}
      <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-[var(--color-brand-primary)] flex items-center justify-center">
                <Waves className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-[var(--color-brand-body)] block">
                  {sektorKelautanData.sektor}
                </span>
                <h2 className="text-xl font-bold text-[var(--color-brand-heading)]">
                  {sektorKelautanData.nama}
                </h2>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[var(--color-brand-primary)] font-mono text-xs font-bold">
              {sektorKelautanData.armada}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed mb-4">
            {sektorKelautanData.deskripsi}
          </p>

          <div className="space-y-2 text-xs text-[var(--color-brand-heading)] bg-[var(--color-brand-surface)] p-4 rounded-xl border border-[var(--color-brand-border)] mb-4">
            {sektorKelautanData.stats.map((st, i) => (
              <div key={i} className="flex items-center justify-between">
                <span>{st.label}</span>
                <strong
                  className={
                    st.highlight
                      ? "font-mono text-[var(--color-brand-primary)]"
                      : "font-semibold"
                  }
                >
                  {st.value}
                </strong>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-[var(--color-brand-border)] flex items-center gap-2 text-xs text-blue-700 font-medium">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{sektorKelautanData.footerNote}</span>
        </div>
      </div>
    </div>
  );
}

