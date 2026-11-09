import Link from "next/link";
import {
  Scale,
  FileText,
  ChevronRight,
  FileDown,
  Download,
  FileSpreadsheet,
  HelpCircle,
} from "lucide-react";
import { apbdesLegalPoints, apbdesDownloads } from "../../data/apbdes";

export function ApbdesLegalDownloads() {
  return (
    <div id="dokumen-resmi" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Legal Card */}
      <div className="lg:col-span-2 bg-surface border border-border-soft rounded-2xl p-6 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-accent-blue uppercase tracking-wider mb-2">
            <Scale className="w-4 h-4" />
            <span>Dasar Hukum &amp; Kepatuhan Regulasi</span>
          </div>
          <h3 className="text-xl font-bold text-heading mb-2">
            Landasan Yuridis Pengelolaan Keuangan Gampong Lam Awe
          </h3>
          <p className="text-xs sm:text-sm text-foreground leading-relaxed mb-6">
            Anggaran Pendapatan dan Belanja Gampong (APBG) Lam Awe Tahun Anggaran 2026 disusun secara partisipatif melalui Musyawarah Rencana Pembangunan Gampong (Musrenbangdes) bersama Tuha Peut Gampong berlandaskan undang-undang:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs text-heading">
            {apbdesLegalPoints.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-background border border-border-soft rounded-xl flex items-start gap-3"
              >
                <FileText className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">{item.title}</span>
                  <span className="text-foreground/80 text-[11px] block mt-0.5">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-border-soft flex flex-col sm:flex-row items-center justify-between text-xs text-foreground gap-3">
          <span>
            Pengawasan Resmi: <strong>Inspektorat Kab. Aceh Besar &amp; Tuha Peut Gampong</strong>
          </span>
          <Link
            href="/transparansi/perencanaan"
            className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1"
          >
            <span>Lihat Berita Acara Musrenbangdes</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Document Downloads Card */}
      <div className="bg-surface border border-border-soft rounded-2xl p-6 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-accent-blue uppercase tracking-wider mb-2">
            <FileDown className="w-4 h-4" />
            <span>Dokumen Publik Terbuka</span>
          </div>
          <h3 className="text-xl font-bold text-heading mb-2">
            Berkas &amp; Lampiran Resmi
          </h3>
          <p className="text-xs text-foreground mb-4">
            Unduh dokumen sumber primer dalam format terbuka untuk audit warga dan pemantauan independen:
          </p>

          <div className="flex flex-col gap-2.5">
            {apbdesDownloads.map((doc, idx) => (
              <a
                key={idx}
                href={`#download-${idx}`}
                className="p-3 rounded-xl bg-background hover:bg-blue-50 border border-border-soft transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      idx === 0
                        ? "bg-rose-100 text-rose-600"
                        : idx === 1
                        ? "bg-blue-100 text-btn-blue"
                        : "bg-emerald-100 text-emerald-600"
                    }`}
                  >
                    {idx === 0 ? (
                      <FileText className="w-5 h-5" />
                    ) : (
                      <FileSpreadsheet className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-heading group-hover:text-accent-blue block">
                      {doc.judul}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {doc.nomor}
                    </span>
                  </div>
                </div>
                <Download className="w-4 h-4 text-slate-400 group-hover:text-accent-blue" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-border-soft mt-4">
          <Link
            href="/transparansi/ppid"
            className="w-full h-10 px-4 rounded-lg bg-background hover:bg-blue-50 border border-border-soft text-accent-blue font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Pengajuan Permohonan Informasi (PPID)</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

