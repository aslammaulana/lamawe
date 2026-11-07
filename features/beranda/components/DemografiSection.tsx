import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { demografiData } from "../data/demografi";

export function DemografiSection() {
  return (
    <section className="w-full bg-surface py-12 lg:py-16 border-b border-border-soft">
      <Container className="flex flex-col gap-8">
        <SectionHeader
          eyebrow="Indikator Kinerja Desa"
          title="Data Desa & Indeks Desa Membangun (IDM)"
          description="Status kemandirian desa dan sebaran kelompok umur penduduk terkini."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card A: IDM Score Card */}
          <div className="bg-surface rounded-xl shadow-xs border border-border-soft p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-base font-semibold text-heading">
                  Status IDM Kemendesa
                </span>
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-btn-blue">
                  DESA MANDIRI
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-4xl sm:text-5xl font-bold text-btn-blue">
                  {demografiData.idm.score}
                </span>
                <span className="text-xs text-foreground/80 font-medium">
                  {demografiData.idm.targetNote}
                </span>
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                {demografiData.idm.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              {demografiData.idm.dimensions.map((dim) => (
                <div
                  key={dim.name}
                  className="bg-background border border-border-soft p-3 rounded-lg flex flex-col items-center text-center"
                >
                  <span className="text-[11px] text-foreground/80">{dim.name}</span>
                  <span className="font-mono text-base font-bold text-heading mt-1">
                    {dim.score}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card B: Demografi & Usia */}
          <div className="bg-surface rounded-xl shadow-xs border border-border-soft p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-heading">
                  Distribusi Umur & Gender
                </span>
                <span className="font-mono text-xs font-semibold text-foreground/70">
                  Sensus 2026
                </span>
              </div>
              <div className="flex flex-col gap-4 pt-1">
                {demografiData.distribution.map((dist) => (
                  <div key={dist.label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-heading">{dist.label}</span>
                      <span className="font-mono font-bold text-btn-blue">
                        {dist.pct}%
                      </span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-blue-50 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${dist.colorClass}`}
                        style={{ width: `${dist.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background border border-border-soft p-3.5 rounded-lg flex items-center justify-around text-center text-xs">
              <div>
                <span className="text-foreground/70">Laki-laki:</span>
                <span className="font-mono font-bold text-heading ml-1">
                  {demografiData.gender.malePct}%
                </span>
              </div>
              <div className="h-4 w-px bg-border-soft" />
              <div>
                <span className="text-foreground/70">Perempuan:</span>
                <span className="font-mono font-bold text-heading ml-1">
                  {demografiData.gender.femalePct}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

