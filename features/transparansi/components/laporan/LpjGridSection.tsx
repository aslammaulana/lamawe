import { ShieldCheck, FileText, Download } from "lucide-react";
import { lpjFilesData } from "../../data/laporan";

export function LpjGridSection() {
  return (
    <div className="bg-surface border border-border-soft rounded-2xl shadow-xs overflow-hidden">
      <div className="p-6 border-b border-border-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-heading">
            Daftar Laporan Keuangan Audited &amp; Sah
          </h2>
          <p className="text-xs sm:text-sm text-foreground mt-1">
            Seluruh laporan telah melalui uji petik lapangan dan pemeriksaan Badan Permusyawaratan Gampong (Tuha Peut).
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>Audit Terverifikasi</span>
        </span>
      </div>

      <div className="divide-y divide-border-soft">
        {lpjFilesData.map((doc, idx) => (
          <div
            key={idx}
            className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-blue-50/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-heading font-mono text-[11px] font-bold">
                    TA {doc.tahun}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-semibold">
                    {doc.status}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-heading">
                  {doc.judul}
                </h3>
                <div className="flex items-center gap-4 text-xs text-foreground/80 mt-1">
                  <span>No: {doc.nomor}</span>
                  <span>•</span>
                  <span>Disahkan: {doc.tanggal}</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 self-end sm:self-center">
              <a
                href={`#download-${idx}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background hover:bg-blue-50 border border-border-soft text-accent-blue text-xs font-semibold transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Unduh {doc.type} ({doc.size})</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
