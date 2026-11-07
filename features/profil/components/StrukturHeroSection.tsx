import { CheckCircle, Shield, Calendar, Download, MessageSquare } from "lucide-react";
import { strukturHeroData } from "../data/struktur";

export function StrukturHeroSection() {
  return (
    <div className="mt-2 mb-8 bg-surface rounded-2xl shadow-xs border border-border-soft p-6 lg:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="flex flex-col gap-2 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-btn-blue text-xs font-semibold w-fit">
          <CheckCircle size={14} />
          <span>{strukturHeroData.badge}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-heading tracking-tight">
          {strukturHeroData.title}
        </h1>
        <p className="text-sm text-foreground leading-relaxed">
          {strukturHeroData.description}
        </p>
        <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-foreground/80 font-mono">
          <span className="flex items-center gap-1.5 bg-background border border-border-soft px-2.5 py-1 rounded-md">
            <Shield size={14} className="text-btn-blue" />
            <span>{strukturHeroData.skBupati}</span>
          </span>
          <span className="flex items-center gap-1.5 bg-background border border-border-soft px-2.5 py-1 rounded-md">
            <Calendar size={14} className="text-accent-blue" />
            <span>{strukturHeroData.masaBakti}</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
        <a
          href={strukturHeroData.pdfDownloadHref}
          className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg bg-btn-blue text-white text-xs sm:text-sm font-semibold hover:bg-btn-blue-hover shadow-xs transition-all"
        >
          <Download size={16} />
          <span>Bagan SK PDF</span>
        </a>
        <a
          href={strukturHeroData.waSecretariatUrl}
          rel="noopener noreferrer"
          target="_blank"
          className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg bg-background text-btn-blue border border-border-soft text-xs sm:text-sm font-semibold hover:bg-blue-50 transition-all"
        >
          <MessageSquare size={16} />
          <span>Sekretariat Gampong</span>
        </a>
      </div>
    </div>
  );
}
