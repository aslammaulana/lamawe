import Image from "next/image";
import { Award, Quote, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { sambutanData } from "../data/sambutan";

export function SambutanSection() {
  return (
    <section className="w-full bg-surface py-12 lg:py-16 border-b border-border-soft">
      <Container className="flex flex-col gap-8">
        <SectionHeader
          eyebrow="Amanat Pemerintahan"
          title="Sambutan Kepala Desa"
          description="Prakata Geuchik Gampong Lam Awe untuk kemajuan dan transparansi gampong."
        />

        <div className="bg-surface rounded-2xl border border-border-soft shadow-xs p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
          {/* Foto Geuchik */}
          <div className="relative shrink-0 flex flex-col items-center">
            <div className="w-48 h-56 sm:w-56 sm:h-64 rounded-xl overflow-hidden shadow-xs bg-background border border-border-soft relative">
              <Image
                src={sambutanData.image}
                alt="Potret resmi Kepala Desa atau Geuchik Gampong Lam Awe"
                fill
                sizes="(max-width: 640px) 192px, 224px"
                className="object-cover"
              />
            </div>
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-btn-blue text-xs font-semibold">
              <Award size={14} />
              <span>{sambutanData.badge}</span>
            </div>
          </div>

          {/* Narasi Sambutan */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex items-center gap-2 text-btn-blue">
              <Quote size={28} />
            </div>
            <blockquote className="text-base sm:text-lg text-foreground italic leading-relaxed">
              {sambutanData.quote}
            </blockquote>
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-heading">
                  {sambutanData.name}
                </h4>
                <p className="text-xs sm:text-sm text-foreground/80">
                  {sambutanData.role} ({sambutanData.period})
                </p>
              </div>
              <div className="flex items-center gap-2 bg-background border border-border-soft px-3.5 py-2 rounded-lg">
                <CheckCircle size={16} className="text-btn-blue" />
                <span className="font-mono text-xs font-semibold text-btn-blue">
                  {sambutanData.verificationText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

