import { Scale } from "lucide-react";
import { prioritasRkpData } from "../../data/perencanaan";

export function PrioritasRkpGrid() {
  return (
    <div className="bg-surface border border-border-soft rounded-2xl shadow-xs overflow-hidden">
      <div className="p-6 border-b border-border-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-heading">
            Daftar Program Prioritas RKPDes 2026
          </h2>
          <p className="text-xs sm:text-sm text-foreground mt-1">
            Hasil pemufakatan Musyawarah Rencana Pembangunan Desa (Musrenbangdes) Lam Awe.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-btn-blue text-xs font-semibold">
          <Scale className="w-4 h-4" />
          <span>Kesepakatan Tuha Peut No. 04/2025</span>
        </span>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-background text-heading border-b border-border-soft font-semibold">
              <th className="py-3 px-6" scope="col">No</th>
              <th className="py-3 px-6" scope="col">Nama Program / Kegiatan</th>
              <th className="py-3 px-6" scope="col">Lokasi</th>
              <th className="py-3 px-6 text-right" scope="col">Pagu Anggaran</th>
              <th className="py-3 px-6" scope="col">Sumber Dana</th>
              <th className="py-3 px-6 text-center" scope="col">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-foreground">
            {prioritasRkpData.map((p) => (
              <tr key={p.nomor} className="hover:bg-blue-50/40 transition-colors">
                <td className="py-4 px-6 font-mono font-bold text-heading">
                  {p.nomor}
                </td>
                <td className="py-4 px-6">
                  <span className="font-bold text-heading block">
                    {p.judul}
                  </span>
                  <span className="text-xs text-foreground/80">{p.kategori}</span>
                </td>
                <td className="py-4 px-6">{p.lokasi}</td>
                <td className="py-4 px-6 text-right font-mono font-bold text-btn-blue">
                  {p.anggaran}
                </td>
                <td className="py-4 px-6 text-xs">{p.sumber}</td>
                <td className="py-4 px-6 text-center">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
