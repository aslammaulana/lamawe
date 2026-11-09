import { FileSpreadsheet, Download } from "lucide-react";
import { apbdesBidangData } from "../../data/apbdes";

function formatRupiah(num: number): string {
  return "Rp " + num.toLocaleString("id-ID");
}

export function ApbdesTableSection() {
  const totalPagu = apbdesBidangData.reduce((acc, curr) => acc + curr.pagu, 0);
  const totalRealisasi = apbdesBidangData.reduce(
    (acc, curr) => acc + curr.realisasi,
    0
  );
  const totalSisa = totalPagu - totalRealisasi;
  const totalPersen = Math.round((totalRealisasi / totalPagu) * 100);

  return (
    <div className="bg-surface border border-border-soft rounded-2xl shadow-xs overflow-hidden">
      <div className="p-6 border-b border-border-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent-blue uppercase tracking-wider mb-1">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            Tabel Akuntabilitas
          </div>
          <h2 className="text-xl font-bold text-heading">
            Rincian Anggaran &amp; Realisasi Belanja Desa TA 2026
          </h2>
        </div>
        <a
          href="#download-xlsx"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-soft text-foreground hover:bg-background text-xs font-medium transition-colors shrink-0"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Ekspor XLSX</span>
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-background text-heading font-semibold border-b border-border-soft">
            <tr>
              <th className="py-3 px-4 sm:px-6">Kode &amp; Bidang Kegiatan</th>
              <th className="py-3 px-4 text-right">Pagu Anggaran</th>
              <th className="py-3 px-4 text-right">Realisasi (Rp)</th>
              <th className="py-3 px-4 text-right">Capaian (%)</th>
              <th className="py-3 px-4 sm:px-6 text-right">Sisa Anggaran</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-foreground">
            {apbdesBidangData.map((b) => (
              <tr key={b.kode} className="hover:bg-background/50 transition-colors">
                <td className="py-3.5 px-4 sm:px-6">
                  <div className="font-semibold text-heading">
                    {b.kode}. {b.nama}
                  </div>
                  <div className="text-[11px] text-foreground/80 hidden sm:block mt-0.5">
                    {b.deskripsi}
                  </div>
                </td>
                <td className="py-3.5 px-4 text-right font-mono font-medium">
                  {formatRupiah(b.pagu)}
                </td>
                <td className="py-3.5 px-4 text-right font-mono font-bold text-heading">
                  {formatRupiah(b.realisasi)}
                </td>
                <td className="py-3.5 px-4 text-right font-mono font-bold text-btn-blue">
                  {b.persen}%
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-right font-mono text-foreground/80">
                  {formatRupiah(b.pagu - b.realisasi)}
                </td>
              </tr>
            ))}

            {/* Subtotal */}
            <tr className="bg-background font-bold text-heading border-t-2 border-border-soft">
              <td className="py-3.5 px-4 sm:px-6">TOTAL BELANJA DESA</td>
              <td className="py-3.5 px-4 text-right font-mono">
                {formatRupiah(totalPagu)}
              </td>
              <td className="py-3.5 px-4 text-right font-mono text-btn-blue">
                {formatRupiah(totalRealisasi)}
              </td>
              <td className="py-3.5 px-4 text-right font-mono text-btn-blue">
                {totalPersen}%
              </td>
              <td className="py-3.5 px-4 sm:px-6 text-right font-mono">
                {formatRupiah(totalSisa)}
              </td>
            </tr>

            {/* Surplus Row */}
            <tr className="bg-blue-50/40 text-heading text-xs font-semibold">
              <td colSpan={2} className="py-2.5 px-4 sm:px-6 text-emerald-700">
                SURPLUS / DEFISIT ANGGARAN (Pendapatan - Belanja)
              </td>
              <td colSpan={3} className="py-2.5 px-4 sm:px-6 text-right font-mono text-emerald-700">
                + Rp 126.510.000 (Surplus Kas Operasional Berjalan)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
