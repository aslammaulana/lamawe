import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { beritaTerbaruData } from "../data/berita";

export function BeritaSection() {
  return (
    <section className="w-full bg-background py-12 lg:py-16 border-b border-border-soft">
      <Container className="flex flex-col gap-8">
        <SectionHeader
          eyebrow="Publikasi Informasi"
          title="Kabar & Berita Desa"
          description="Informasi terkini pembangunan, kegiatan masyarakat, dan pemberitahuan penting gampong."
          action={
            <Link
              href="/berita"
              className="inline-flex items-center justify-center h-11 px-5 rounded-lg bg-surface text-btn-blue hover:bg-blue-50 border border-border-soft font-medium text-sm transition-colors gap-2 shadow-2xs"
            >
              <span>Lihat Semua Berita</span>
              <ArrowRight size={16} />
            </Link>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {beritaTerbaruData.map((item) => (
            <article
              key={item.id}
              className="bg-surface rounded-xl shadow-xs border border-border-soft overflow-hidden flex flex-col justify-between group hover:shadow-md transition"
            >
              <div>
                <div className="h-48 w-full relative overflow-hidden bg-blue-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-btn-blue text-white z-10">
                    {item.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-foreground/70 font-mono">
                    <Calendar size={13} />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-heading group-hover:text-btn-blue transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link
                  href={`/berita/${item.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-btn-blue hover:underline"
                >
                  <span>Baca Selengkapnya</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

