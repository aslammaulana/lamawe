import type { LayananStep } from "../../types";

interface LayananSopTimelineProps {
  steps: LayananStep[];
}

export function LayananSopTimeline({ steps }: LayananSopTimelineProps) {
  return (
    <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col gap-6">
      <div>
        <span className="text-xs font-semibold text-[var(--color-brand-accent)] uppercase tracking-wider block">
          Tahapan Pengurusan
        </span>
        <h2 className="text-xl font-bold text-[var(--color-brand-heading)] mt-0.5">
          Standar Operasional Prosedur (SOP)
        </h2>
        <p className="text-xs text-[var(--color-brand-body)] mt-1">
          Alur pengajuan dirancang singkat, transparan, dan dapat dipantau langsung setiap tahapannya.
        </p>
      </div>

      <div className="space-y-4">
        {steps.map((st, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-4 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)]"
          >
            <div className="w-9 h-9 rounded-xl bg-[var(--color-brand-primary)] text-white font-bold text-sm flex items-center justify-center shrink-0">
              {i + 1}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <h3 className="text-sm font-bold text-[var(--color-brand-heading)]">
                  {st.title}
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white text-[var(--color-brand-accent)] font-semibold border border-[var(--color-brand-border)]">
                  {st.actor}
                </span>
              </div>
              <p className="text-xs text-[var(--color-brand-body)] leading-relaxed">
                {st.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

