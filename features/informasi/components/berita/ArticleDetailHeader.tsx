import Image from "next/image";
import {
  Calendar,
  Clock,
  Eye,
  ShieldCheck,
  User,
} from "lucide-react";
import type { ArticleDetail } from "../../types";

interface ArticleDetailHeaderProps {
  article: ArticleDetail;
}

export function ArticleDetailHeader({ article }: ArticleDetailHeaderProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Category & Doc ID */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-[var(--color-brand-primary)] text-xs font-semibold">
            {article.category}
          </span>
          <span className="font-mono text-[11px] text-gray-500 bg-[var(--color-brand-surface)] px-2.5 py-0.5 rounded border border-[var(--color-brand-border)]">
            DOC ID: {article.docId}
          </span>
        </div>
        <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5" /> Rilis Resmi Desa
        </span>
      </div>

      {/* Headline Title */}
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--color-brand-heading)] tracking-tight leading-snug">
        {article.title}
      </h1>

      {/* Metadata Bar */}
      <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 p-3 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] text-xs text-[var(--color-brand-body)]">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[var(--color-brand-accent)]" />
          <span>{article.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-[var(--color-brand-accent)]" />
          <span className="font-semibold text-[var(--color-brand-heading)]">
            {article.author}
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px] text-gray-400">
          <span className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" /> {article.views} Dilihat
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {article.readTime}
          </span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="flex flex-col gap-2">
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 shadow-xs border border-[var(--color-brand-border)]">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 rounded">
            Lokasi: {article.location}
          </div>
        </div>
        <p className="text-[11px] text-[var(--color-brand-body)] italic px-1">
          {article.imageCaption}
        </p>
      </div>

      {/* Lead Paragraph */}
      <div className="text-sm sm:text-base font-semibold text-[var(--color-brand-heading)] leading-relaxed pt-2">
        {article.leadParagraph}
      </div>
    </div>
  );
}

