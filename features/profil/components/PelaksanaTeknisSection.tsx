import Image from "next/image";
import { pelaksanaTeknisData } from "../data/struktur";

export function PelaksanaTeknisSection() {
  return (
    <section className="mb-14">
      {/* Separator indicator */}
      <div className="flex items-center justify-center my-6">
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-8 bg-border-soft" />
          <div className="w-3 h-3 rounded-full bg-accent-blue ring-4 ring-blue-50" />
          <div className="w-0.5 h-8 bg-border-soft" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
        <div>
          <span className="font-mono text-xs text-btn-blue uppercase tracking-wider font-semibold">
            Level 2 - Pelaksana Teknis Lapangan
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-heading">
            Seksi Pelaksana Teknis &amp; Pelayanan
          </h2>
        </div>
        <span className="text-xs text-foreground/80">
          Kepala Seksi Pelaksana Program Kerja
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pelaksanaTeknisData.map((item) => (
          <div
            key={item.id}
            className="bg-surface rounded-xl shadow-xs border border-border-soft p-6 hover:shadow-md transition flex flex-col justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-blue-50 shrink-0 border border-border-soft">
                <Image
                  src={item.foto}
                  alt={item.jabatan}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-btn-blue text-[11px] font-semibold w-fit mb-1 truncate">
                  {item.jabatan}
                </span>
                <h3 className="text-base font-bold text-heading truncate">
                  {item.nama}
                </h3>
                <p className="font-mono text-xs text-foreground/70">
                  {item.idCard}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 bg-background border border-border-soft -mx-6 -mb-6 p-4 rounded-b-xl flex flex-col gap-2">
              <div className="text-[11px] font-semibold text-btn-blue uppercase font-mono">
                Ruang Lingkup Tugas
              </div>
              <p className="text-xs text-foreground leading-relaxed">
                {item.tugasUtama}
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-xs text-foreground/80">
                <span>{item.focusLabel || "Pelayanan"}</span>
                <span className="text-btn-blue font-semibold">
                  {item.focusValue || "Aktif"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
