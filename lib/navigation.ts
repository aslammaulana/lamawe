export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

/** 8 menu utama sesuai PRD analisa-struktur1.1.md */
export const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil",
    href: "/profil/sejarah",
    children: [
      { label: "Sejarah Desa", href: "/profil/sejarah" },
      { label: "Visi & Misi", href: "/profil/visi-misi" },
      { label: "Wilayah", href: "/profil/wilayah" },
      { label: "Struktur Perangkat", href: "/profil/struktur" },
    ],
  },
  {
    label: "Transparansi",
    href: "/transparansi/apbdes",
    children: [
      { label: "APBDes", href: "/transparansi/apbdes" },
      { label: "Perencanaan", href: "/transparansi/perencanaan" },
      { label: "Program & Kegiatan", href: "/transparansi/program" },
      { label: "Laporan", href: "/transparansi/laporan" },
      { label: "PPID", href: "/transparansi/ppid" },
    ],
  },
  {
    label: "Layanan",
    href: "/layanan",
    children: [
      { label: "Daftar Layanan", href: "/layanan" },
      { label: "Pengaduan", href: "/layanan/pengaduan" },
      { label: "Cek Status", href: "/layanan/status" },
    ],
  },
  {
    label: "Informasi",
    href: "/berita",
    children: [
      { label: "Berita", href: "/berita" },
      { label: "Agenda", href: "/agenda" },
      { label: "Galeri", href: "/galeri" },
    ],
  },
  {
    label: "Data & Potensi",
    href: "/data",
    children: [
      { label: "Data Desa", href: "/data" },
      { label: "UMKM & BUMDes", href: "/potensi/umkm" },
      { label: "Wisata", href: "/potensi/wisata" },
      { label: "Pertanian", href: "/potensi/pertanian" },
    ],
  },
  {
    label: "Partisipasi",
    href: "/partisipasi/komunitas",
    children: [
      { label: "Komunitas", href: "/partisipasi/komunitas" },
      { label: "Musyawarah Desa", href: "/partisipasi/musdes" },
      { label: "Aspirasi", href: "/partisipasi/aspirasi" },
    ],
  },
  { label: "Kontak", href: "/kontak" },
];

