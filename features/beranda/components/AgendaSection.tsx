import { MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { agendaMendatangData } from "../data/agenda";

export function AgendaSection() {
  return (
    <section className="w-full bg-surface py-12 lg:py-16 border-b border-border-soft">
      <Container className="flex flex-col gap-8">
        <SectionHeader
          eyebrow="Jadwal Gampong"
          title="Agenda Mendatang"
          description="Jadwal musyawarah, gotong royong, dan kegiatan kemasyarakatan yang akan berlangsung."
        />

        <div className="flex flex-col gap-4">
          {agendaMendatangData.map((event) => (
            <div
              key={event.id}
              className="bg-surface rounded-xl shadow-xs border border-border-soft p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start md:items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-blue-50 text-btn-blue flex flex-col items-center justify-center shrink-0">
                  <span className="font-mono text-lg font-bold leading-none">
                    {event.day}
                  </span>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider mt-1">
                    {event.monthYear}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-heading">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-foreground/80">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-btn-blue" />
                      {event.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} className="text-btn-blue" />
                      {event.time}
                    </span>
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-btn-blue self-start md:self-auto">
                {event.isPulse && (
                  <span className="w-2 h-2 rounded-full bg-btn-blue animate-pulse" />
                )}
                {event.category}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

