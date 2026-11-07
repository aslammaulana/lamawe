import Image from "next/image";
import { kewilayahanData } from "../data/struktur";

export function KewilayahanSection() {
  return (
    <section className="mb-14">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
        <div>
          <span className="font-mono text-xs text-btn-blue uppercase tracking-wider font-semibold">
            Level 3 - Kewilayahan (Ulee Jurong)
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-heading">
            Kepala Dusun / Ulee Jurong
          </h2>
        </div>
        <span className="text-xs text-foreground/80">
          Penghubung Warga di 4 Wilayah Pemukiman
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kewilayahanData.map((item) => (
          <div
            key={item.id}
            className="bg-surface rounded-xl shadow-xs border border-border-soft p-5 hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-blue-50 shrink-0 border border-border-soft">
                  <Image
                    src={item.foto}
                    alt={item.jabatan}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-blue-50 text-btn-blue font-mono">
                    {item.nomor}
                  </span>
                  <h3 className="text-sm font-bold text-heading truncate">
                    {item.nama}
                  </h3>
                </div>
              </div>
              <div className="text-xs font-semibold text-btn-blue mb-1">
                {item.jabatan}
              </div>
              <p className="text-xs text-foreground leading-relaxed">
                {item.deskripsi}
              </p>
            </div>
            <div className="mt-4 pt-3 bg-background border border-border-soft -mx-5 -mb-5 px-5 py-3 rounded-b-xl flex items-center justify-between text-xs">
              <span className="text-foreground/70">Cakupan RT: {item.rt}</span>
              <span className="font-mono text-btn-blue font-bold">{item.kk}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

