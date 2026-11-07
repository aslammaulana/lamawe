import {
  HeroSection,
  StatistikSection,
  LayananCepatSection,
  SambutanSection,
  BeritaSection,
  AgendaSection,
  ApbdesSection,
  DemografiSection,
  PetaLokasiSection,
  PotensiSection,
  GaleriSection,
  InstansiSection,
} from "@/features/beranda/components";

export const metadata = {
  title: "Beranda | Pemerintah Desa Lam Awe",
  description:
    "Portal Resmi Pemerintah Desa Lam Awe, Kecamatan Peukan Bada, Kabupaten Aceh Besar, Provinsi Aceh. Layanan kependudukan online, transparansi APBDes, berita, dan potensi gampong.",
};

export default function BerandaPage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <StatistikSection />
      <LayananCepatSection />
      <SambutanSection />
      <BeritaSection />
      <AgendaSection />
      <ApbdesSection />
      <DemografiSection />
      <PetaLokasiSection />
      <PotensiSection />
      <GaleriSection />
      <InstansiSection />
    </div>
  );
}
