import type { JurongDataItem } from "../../types";

interface DataDemografiTableProps {
  jurongData: JurongDataItem[];
  totalPenduduk: number;
  totalKK: number;
}

export function DataDemografiTable({
  jurongData,
  totalPenduduk,
  totalKK,
}: DataDemografiTableProps) {
  return (
    <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-[var(--color-brand-border)]">
        <h2 className="text-lg font-bold text-[var(--color-brand-heading)]">
          Distribusi Kependudukan per Jurong (Dusun Adat)
        </h2>
        <p className="text-xs text-[var(--color-brand-body)] mt-0.5">
          Data registrasi buku induk kependudukan mutasi semester I tahun 2026.
        </p>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-[var(--color-brand-surface)] text-[var(--color-brand-heading)] border-b border-[var(--color-brand-border)] font-semibold">
              <th className="py-3 px-6">Nama Jurong</th>
              <th className="py-3 px-6 text-right">Laki-laki</th>
              <th className="py-3 px-6 text-right">Perempuan</th>
              <th className="py-3 px-6 text-right">Jumlah Penduduk</th>
              <th className="py-3 px-6 text-right">Jumlah KK</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-brand-border)]">
            {jurongData.map((j, i) => (
              <tr key={i} className="hover:bg-blue-50/40 transition-colors">
                <td className="py-3.5 px-6 font-bold text-[var(--color-brand-heading)]">
                  {j.nama}
                </td>
                <td className="py-3.5 px-6 text-right font-mono text-[var(--color-brand-body)]">
                  {j.l} Jiwa
                </td>
                <td className="py-3.5 px-6 text-right font-mono text-[var(--color-brand-body)]">
                  {j.p} Jiwa
                </td>
                <td className="py-3.5 px-6 text-right font-mono font-bold text-[var(--color-brand-primary)]">
                  {j.penduduk} Jiwa
                </td>
                <td className="py-3.5 px-6 text-right font-mono font-semibold text-[var(--color-brand-heading)]">
                  {j.kk} KK
                </td>
              </tr>
            ))}
            <tr className="bg-[var(--color-brand-surface)] font-bold text-[var(--color-brand-heading)]">
              <td className="py-3.5 px-6">TOTAL KESELURUHAN</td>
              <td className="py-3.5 px-6 text-right font-mono">810 Jiwa</td>
              <td className="py-3.5 px-6 text-right font-mono">794 Jiwa</td>
              <td className="py-3.5 px-6 text-right font-mono text-[var(--color-brand-primary)]">
                {totalPenduduk} Jiwa
              </td>
              <td className="py-3.5 px-6 text-right font-mono">{totalKK} KK</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

