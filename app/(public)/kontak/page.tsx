import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";
import {
  KontakHeaderSection,
  KontakChannelsSection,
  KontakHoursSection,
  KontakLocationGuideSection,
  KontakEmergencySection,
  KontakMapCard,
  KontakIntegrityBanner,
} from "@/features/kontak/components";

export const metadata: Metadata = {
  title: "Kontak & Lokasi Kantor",
  description:
    "Saluran komunikasi terpadu Kantor Keuchik Gampong Lam Awe, Kecamatan Peukan Bada, Kabupaten Aceh Besar. Jam pelayanan, nomor darurat 24 jam, dan peta lokasi.",
};

export default function KontakPage() {
  return (
    <div className="w-full pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumb items={[{ label: "Kontak & Layanan Aduan Langsung" }]} />

        <KontakHeaderSection />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <KontakChannelsSection />
            <KontakHoursSection />
            <KontakLocationGuideSection />
            <KontakEmergencySection />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <KontakMapCard />
            <ContactForm />
          </div>
        </div>

        <KontakIntegrityBanner />
      </div>
    </div>
  );
}
