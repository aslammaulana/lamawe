import Image from "next/image";
import { Compass, MapPin, Landmark, Clock, FileCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { petaLokasiData } from "../data/petaLokasi";

export function PetaLokasiSection() {
  return (
    <section className="w-full bg-background py-12 lg:py-16 border-b border-border-soft">
      <Container className="flex flex-col gap-8">
        <SectionHeader
          eyebrow="Geografis Gampong"
          title="Peta Wilayah & Lokasi Kantor"
          description="Titik koordinat dan peta interaktif pusat pelayanan administrasi desa."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Container */}
          <div className="lg:col-span-8 bg-surface rounded-xl shadow-xs border border-border-soft overflow-hidden p-2 flex flex-col">
            <div className="w-full h-80 lg:h-[420px] rounded-lg relative overflow-hidden">
              <Image
                src={petaLokasiData.mapImage}
                alt="Peta Wilayah Lam Awe"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-surface/95 backdrop-blur-xs px-3.5 py-1.5 rounded-lg shadow-xs flex items-center gap-2 border border-border-soft z-10">
                <Compass size={16} className="text-btn-blue" />
                <span className="font-mono text-xs font-semibold text-heading">
                  {petaLokasiData.coordinates}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="flex flex-col items-center">
                  <MapPin size={38} className="text-rose-600 drop-shadow-md animate-bounce" />
                  <span className="px-2.5 py-0.5 rounded bg-black/80 text-white text-[11px] font-medium shadow">
                    {petaLokasiData.officeName}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Office Contact Details */}
          <div className="lg:col-span-4 bg-surface rounded-xl shadow-xs border border-border-soft p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-btn-blue">
                  <Landmark size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-heading">
                    {petaLokasiData.officeName}
                  </h3>
                  <p className="text-xs text-foreground/80">{petaLokasiData.officeRole}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-btn-blue shrink-0 mt-0.5" />
                  <p className="text-foreground leading-relaxed">
                    {petaLokasiData.address}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-btn-blue shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-heading block">Jam Operasional Pelayanan:</strong>
                    <span className="text-foreground">{petaLokasiData.operatingHours.weekdays}</span>
                    <span className="block text-rose-600 text-[11px] mt-0.5 font-medium">
                      {petaLokasiData.operatingHours.weekendNote}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileCheck size={16} className="text-btn-blue shrink-0 mt-0.5" />
                  <span className="text-foreground font-mono">{petaLokasiData.phone}</span>
                </div>
              </div>
            </div>

            <a
              href={petaLokasiData.googleMapsUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex items-center justify-center h-11 w-full rounded-lg bg-btn-blue hover:bg-btn-blue-hover text-white font-medium text-sm transition-colors gap-2"
            >
              <Compass size={16} />
              <span>Buka Google Maps</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

