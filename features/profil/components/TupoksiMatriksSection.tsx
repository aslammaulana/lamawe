import { Users } from "lucide-react";
import { tupoksiMatriksData } from "../data/struktur";

export function TupoksiMatriksSection() {
  return (
    <section className="bg-surface rounded-2xl shadow-xs border border-border-soft p-6 lg:p-8 mb-12">
      <div className="flex items-center justify-between mb-6 pb-4 bg-background -mx-6 -mt-6 p-6 rounded-t-2xl border-b border-border-soft">
        <div className="flex items-center gap-2">
          <Users size={20} className="text-btn-blue" />
          <h2 className="text-base sm:text-lg font-bold text-heading">
            Matriks Tugas Pokok &amp; Fungsi (Tupoksi) Ringkas
          </h2>
        </div>
        <span className="font-mono text-xs text-foreground/70 hidden sm:inline">
          Standar Pelayanan Prima
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="bg-background text-heading border-b border-border-soft">
              <th className="py-3 px-4 rounded-l-lg font-semibold">Jabatan Aparatur</th>
              <th className="py-3 px-4 font-semibold">Pejabat Definitif</th>
              <th className="py-3 px-4 font-semibold">Fungsi Strategis</th>
              <th className="py-3 px-4 font-semibold">Dasar Hukum Penugasan</th>
              <th className="py-3 px-4 rounded-r-lg font-semibold text-right">Status</th>
            </tr>
          </thead>
          <tbody className="text-foreground divide-y divide-slate-100">
            {tupoksiMatriksData.map((row) => (
              <tr key={row.jabatan} className="hover:bg-background/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-heading">{row.jabatan}</td>
                <td className="py-3.5 px-4">{row.pejabat}</td>
                <td className="py-3.5 px-4">{row.fungsi}</td>
                <td className="py-3.5 px-4 font-mono text-xs">{row.dasarHukum}</td>
                <td className="py-3.5 px-4 text-right">
                  <span className="inline-flex items-center gap-1 text-btn-blue font-semibold text-xs">
                    <span className="w-2 h-2 rounded-full bg-btn-blue" /> {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
