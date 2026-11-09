import { FileText, FolderDown } from "lucide-react";

interface LayananDownloadBlangkoProps {
  namaLayanan: string;
}

export function LayananDownloadBlangko({ namaLayanan }: LayananDownloadBlangkoProps) {
  return (
    <section
      id="unduh-blangko"
      className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
    >
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-[var(--color-brand-heading)]">
            Blangko Formulir Permohonan Resmi ({namaLayanan})
          </h3>
          <p className="text-[11px] text-[var(--color-brand-body)] mt-0.5">
            Format: PDF & DOCX • 245 KB • Update Regulasi Gampong TA 2026
          </p>
        </div>
      </div>
      <a
        href="#unduh"
        className="h-10 px-4 rounded-xl bg-[var(--color-brand-surface)] hover:bg-gray-100 border border-[var(--color-brand-border)] text-[var(--color-brand-accent)] font-semibold text-xs flex items-center justify-center gap-2 transition-colors shrink-0"
      >
        <FolderDown className="w-4 h-4" />
        <span>Unduh Berkas</span>
      </a>
    </section>
  );
}

