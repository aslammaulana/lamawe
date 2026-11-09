import { Clock } from "lucide-react";
import { operatingHoursData } from "../data/kontakData";

export function KontakHoursSection() {
  return (
    <div className="bg-white rounded-2xl shadow-xs border border-[var(--color-brand-border)] p-6 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Clock size={20} className="text-[var(--color-brand-primary)]" />
        <h2 className="text-base font-bold text-[var(--color-brand-heading)]">
          Jadwal &amp; Jam Operasional Loket
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {operatingHoursData.map((item, idx) => {
          if (item.isClosed) {
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex flex-col justify-between gap-2"
              >
                <div>
                  <span className="text-xs font-semibold text-slate-500 block">
                    {item.day}
                  </span>
                  <span className="font-bold text-sm text-slate-500 block mt-1">
                    {item.time}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">{item.note}</p>
              </div>
            );
          }

          const isFriday = item.day.includes("Jumat");
          return (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] flex flex-col justify-between gap-2"
            >
              <div>
                <span
                  className={`text-xs font-semibold block ${
                    isFriday
                      ? "text-[var(--color-brand-accent)]"
                      : "text-[var(--color-brand-primary)]"
                  }`}
                >
                  {item.day}
                </span>
                <span className="font-mono font-bold text-sm text-[var(--color-brand-heading)] block mt-1">
                  {item.time}
                </span>
              </div>
              <p className="text-[11px] text-[var(--color-brand-body)]/80">
                {item.note}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

