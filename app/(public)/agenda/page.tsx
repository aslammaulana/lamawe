import type { Metadata } from "next";
import { agendaItems } from "@/features/informasi/data/agendaData";
import {
  InformasiBreadcrumb,
  AgendaHeaderSection,
  AgendaListSection,
} from "@/features/informasi/components";

export const metadata: Metadata = {
  title: "Agenda & Kalender Kegiatan Desa - Gampong Lam Awe",
  description:
    "Jadwal musyawarah desa, posyandu balita & lansia, khanduri adat, dan gotong royong warga Gampong Lam Awe, Kecamatan Peukan Bada.",
};

export default function AgendaPage() {
  return (
    <div className="flex flex-col gap-8 pb-16">
      <InformasiBreadcrumb items={[{ label: "Agenda Desa" }]} />
      <AgendaHeaderSection />
      <AgendaListSection items={agendaItems} />
    </div>
  );
}
