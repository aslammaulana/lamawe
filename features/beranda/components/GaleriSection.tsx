import Image from "next/image";
import { Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { galeriData } from "../data/galeri";

export function GaleriSection() {
  return (
    <section className="w-full bg-background py-12 lg:py-16 border-b border-border-soft">
      <Container className="flex flex-col gap-8">
        <SectionHeader
          eyebrow="Dokumentasi Warga"
          title="Galeri Foto & Dokumentasi"
          description="Arsip visual kegiatan kemasyarakatan, budaya lokal, dan program pembangunan gampong."
          action={
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-btn-blue text-white cursor-pointer">
                Semua
              </span>
              <span className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-surface border border-border-soft text-foreground cursor-pointer">
                Pembangunan
              </span>
              <span className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-surface border border-border-soft text-foreground cursor-pointer">
                Sosial
              </span>
              <span className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-surface border border-border-soft text-foreground cursor-pointer">
                Keagamaan
              </span>
            </div>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galeriData.map((item) => (
            <div
              key={item.id}
              className="bg-surface rounded-xl shadow-xs border border-border-soft overflow-hidden group flex flex-col"
            >
              <div className="h-48 relative overflow-hidden bg-blue-50">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-xs text-btn-blue flex items-center justify-center shadow-md">
                      <Play size={20} className="fill-btn-blue ml-0.5" />
                    </div>
                  </div>
                )}
                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded z-10">
                  {item.date}
                </div>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <h4 className="text-sm font-semibold text-heading line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-foreground/70">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

