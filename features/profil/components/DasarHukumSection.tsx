import { Shield, Check, FileText, Download } from "lucide-react";
import { dasarHukumData, downloadSotkData } from "../data/struktur";

export function DasarHukumSection() {
  return (
    <section className="bg-surface rounded-2xl shadow-xs border border-border-soft p-6 lg:p-8" id="unduh-dokumen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-btn-blue text-xs font-semibold">
            <Shield size={14} />
            <span>Landasan Yuridis Penyelenggaraan</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-heading">
            Dasar Hukum &amp; Legalitas Struktur Organisasi
          </h2>
          <p className="text-sm text-foreground leading-relaxed">
            Struktur Organisasi dan Tata Kerja (SOTK) Pemerintah Gampong Lam Awe disusun secara sah berdasarkan ketentuan perundang-undangan:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-foreground">
            {dasarHukumData.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check size={16} className="text-btn-blue shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4 bg-background border border-border-soft p-6 rounded-xl flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
              <FileText size={24} />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-bold text-heading truncate">
                {downloadSotkData.fileName}
              </div>
              <div className="font-mono text-xs text-foreground/70">
                Ukuran File: {downloadSotkData.fileSize}
              </div>
            </div>
          </div>
          <p className="text-xs text-foreground leading-relaxed">
            {downloadSotkData.description}
          </p>
          <button
            type="button"
            className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-lg bg-btn-blue text-white text-xs sm:text-sm font-semibold hover:bg-btn-blue-hover transition-colors shadow-xs"
          >
            <Download size={16} />
            <span>Unduh Bagan Lengkap (PDF)</span>
          </button>
          <span className="text-center font-mono text-[11px] text-foreground/70">
            Terakhir diperbarui: {downloadSotkData.lastUpdated}
          </span>
        </div>
      </div>
    </section>
  );
}
