import { ShieldCheck, Download, Calendar } from "lucide-react";
import { apbdesHeroData } from "../../data/apbdes";

export function ApbdesHeroSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border-soft">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-btn-blue text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{apbdesHeroData.tag}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-heading tracking-tight">
            {apbdesHeroData.title}
          </h1>
          <p className="text-sm sm:text-base text-foreground mt-2 leading-relaxed">
            {apbdesHeroData.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href="#dokumen-resmi"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-btn-blue hover:bg-btn-blue-hover text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Unduh Berkas SK PDF</span>
          </a>
          <div className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-background border border-border-soft text-xs text-foreground font-mono">
            <Calendar className="w-4 h-4 text-btn-blue" />
            <span>{apbdesHeroData.updateDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
