import type { Metadata } from "next";
import { galleryItems } from "@/features/informasi/data/galeriData";
import {
  InformasiBreadcrumb,
  GaleriHeaderSection,
  GaleriGridSection,
} from "@/features/informasi/components";

export const metadata: Metadata = {
  title: "Galeri Foto & Dokumentasi Desa - Gampong Lam Awe",
  description:
    "Arsip dokumentasi visual kegiatan pembangunan, kemaritiman pesisir, gotong royong meunasah, dan budaya Gampong Lam Awe, Aceh Besar.",
};

export default function GaleriPage() {
  return (
    <div className="flex flex-col gap-8 pb-16">
      <InformasiBreadcrumb items={[{ label: "Galeri Desa" }]} />
      <GaleriHeaderSection />
      <GaleriGridSection items={galleryItems} />
    </div>
  );
}
