import Link from "next/link";
import {
  FileText,
  BadgeAlert,
  Search,
  MessageSquare,
  ArrowRight,
  Megaphone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { layananCepatData } from "../data/layananCepat";

export function LayananCepatSection() {
  return (
    <section className="w-full bg-background py-12 lg:py-16 border-b border-border-soft">
      <Container className="flex flex-col gap-8">
        <SectionHeader
          eyebrow="Aksesibilitas Warga"
          title="Layanan Cepat Warga"
          description="Akses kemudahan administrasi dan pengaduan masyarakat secara daring tanpa hambatan."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {layananCepatData.map((item) => (
            <div
              key={item.id}
              className="bg-surface rounded-xl shadow-xs border border-border-soft p-6 flex flex-col justify-between gap-6 hover:shadow-md hover:border-btn-blue transition-all"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-btn-blue">
                    {item.icon === "fileText" && <FileText size={22} />}
                    {item.icon === "badgeAlert" && <BadgeAlert size={22} />}
                    {item.icon === "search" && <Search size={22} />}
                    {item.icon === "messageSquare" && <MessageSquare size={22} />}
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      item.badgeStyle === "solid"
                        ? "bg-blue-50 text-btn-blue"
                        : "bg-background text-accent-blue border border-border-soft"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground mt-2 leading-relaxed">
                    {item.type === "search" ? (
                      <>
                        Pantau progres berkas permohonan menggunakan Kode Tiket (cth.{" "}
                        <span className="font-mono font-semibold text-btn-blue">
                          #LMA-2026-001
                        </span>).
                      </>
                    ) : (
                      item.description
                    )}
                  </p>
                </div>
              </div>

              {/* Action according to type */}
              {item.type === "search" ? (
                <form action="/layanan/status" className="flex gap-2">
                  <input
                    name="kode"
                    className="w-full h-11 px-3 bg-background border border-border-soft rounded-lg font-mono text-xs text-heading outline-hidden focus:border-btn-blue focus:bg-surface"
                    placeholder="#LMA-..."
                    type="text"
                  />
                  <button
                    type="submit"
                    aria-label="Cari tiket"
                    className="h-11 px-3.5 bg-btn-blue text-white rounded-lg hover:bg-btn-blue-hover shrink-0 flex items-center justify-center transition"
                  >
                    <Search size={16} />
                  </button>
                </form>
              ) : item.type === "external" ? (
                <a
                  href={item.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex items-center justify-center h-11 w-full rounded-lg bg-surface text-btn-blue hover:bg-background border border-border-soft font-medium text-sm transition-colors gap-2 shadow-2xs"
                >
                  <MessageSquare size={16} />
                  <span>{item.actionLabel}</span>
                </a>
              ) : (
                <Link
                  href={item.href || "/layanan"}
                  className="inline-flex items-center justify-center h-11 w-full rounded-lg bg-btn-blue hover:bg-btn-blue-hover text-white font-medium text-sm transition-colors gap-2"
                >
                  <span>{item.actionLabel}</span>
                  {item.id === "pengaduan" ? (
                    <Megaphone size={16} />
                  ) : (
                    <ArrowRight size={16} />
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

