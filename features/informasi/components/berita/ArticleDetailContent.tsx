import { Quote } from "lucide-react";
import type { ArticleDetail } from "../../types";

interface ArticleDetailContentProps {
  article: ArticleDetail;
}

export function ArticleDetailContent({ article }: ArticleDetailContentProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-4 text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed">
        {article.contentParagraphs.slice(0, 2).map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        {/* Quote 1: Keuchik */}
        {article.quote1 && (
          <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-4 my-4">
            <Quote className="w-8 h-8 text-[var(--color-brand-primary)] shrink-0 opacity-70" />
            <div>
              <blockquote className="italic font-medium text-[var(--color-brand-heading)] leading-relaxed">
                &ldquo;{article.quote1.text}&rdquo;
              </blockquote>
              <cite className="block not-italic text-xs font-bold text-[var(--color-brand-primary)] mt-2">
                — {article.quote1.speaker}, {article.quote1.title}
              </cite>
            </div>
          </div>
        )}

        {/* Stat Highlight Banner */}
        {article.statHighlight && (
          <div className="p-4 rounded-2xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] flex flex-col sm:flex-row items-center justify-between gap-4 my-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[var(--color-brand-primary)] flex items-center justify-center font-bold text-xs shrink-0">
                PKTD
              </div>
              <div>
                <h4 className="text-xs font-bold text-[var(--color-brand-heading)]">
                  {article.statHighlight.title}
                </h4>
                <span className="text-[11px] text-[var(--color-brand-body)]">
                  {article.statHighlight.desc}
                </span>
              </div>
            </div>
            <div className="flex items-baseline gap-2 bg-white px-4 py-2 rounded-xl border border-[var(--color-brand-border)] shrink-0">
              <span className="text-xl font-bold font-mono text-[var(--color-brand-primary)]">
                {article.statHighlight.number}
              </span>
              <span className="text-xs text-[var(--color-brand-body)]">
                {article.statHighlight.unit}
              </span>
            </div>
          </div>
        )}

        {article.contentParagraphs.slice(2, 4).map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        {/* Quote 2: Keujruen Blang */}
        {article.quote2 && (
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-100 flex items-start gap-4 my-4">
            <Quote className="w-8 h-8 text-amber-700 shrink-0 opacity-70" />
            <div>
              <blockquote className="italic font-medium text-[var(--color-brand-heading)] leading-relaxed">
                &ldquo;{article.quote2.text}&rdquo;
              </blockquote>
              <cite className="block not-italic text-xs font-bold text-amber-800 mt-2">
                — {article.quote2.speaker}, {article.quote2.title}
              </cite>
            </div>
          </div>
        )}

        {/* Technical Specs Table */}
        {article.technicalSpecs && (
          <div className="overflow-hidden rounded-2xl border border-[var(--color-brand-border)] my-6">
            <div className="bg-[var(--color-brand-primary)] text-white px-4 py-3 flex items-center justify-between text-xs font-bold">
              <span>Lembar Verifikasi Teknis Pekerjaan (P-01)</span>
              <span className="font-mono bg-white/20 px-2 py-0.5 rounded text-[11px]">
                Status: 100% Selesai (BASTP)
              </span>
            </div>
            <div className="p-4 bg-[var(--color-brand-surface)] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {article.technicalSpecs.map((spec, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-lg bg-white border border-[var(--color-brand-border)] flex items-center justify-between"
                >
                  <span className="text-[var(--color-brand-body)]">{spec.label}</span>
                  <span className="font-mono font-bold text-[var(--color-brand-heading)]">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {article.contentParagraphs.slice(4).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Tags */}
      <div className="pt-6 border-t border-[var(--color-brand-border)] flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-gray-400 font-semibold mr-1">Tagar:</span>
          {article.tags.map((t, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg bg-[var(--color-brand-surface)] text-[var(--color-brand-accent)] font-mono text-[11px] border border-[var(--color-brand-border)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

