import { LayananCepatItem } from "../types";

export const layananCepatData: LayananCepatItem[] = [
  {
    id: "ajukan-layanan",
    title: "Ajukan Layanan",
    description:
      "Surat Keterangan Usaha, Domisili, Surat Pengantar SKCK, dan perizinan gampong lainnya.",
    badge: "Online 24 Jam",
    badgeStyle: "solid",
    href: "/layanan",
    type: "link",
    actionLabel: "Buka Formulir",
    icon: "fileText",
  },
  {
    id: "pengaduan",
    title: "Pengaduan Warga (Lapor)",
    description:
      "Salurkan aspirasi, saran, dan kendala fasilitas infrastruktur desa untuk ditindaklanjuti.",
    badge: "Responsif",
    badgeStyle: "outline",
    href: "/layanan/pengaduan",
    type: "link",
    actionLabel: "Buat Laporan",
    icon: "badgeAlert",
  },
  {
    id: "cek-status",
    title: "Cek Status Berkas",
    description:
      "Pantau progres berkas permohonan menggunakan Kode Tiket (cth. #LMA-2026-001).",
    badge: "Real-time",
    badgeStyle: "outline",
    type: "search",
    actionLabel: "Cari Tiket",
    icon: "search",
  },
  {
    id: "kontak-wa",
    title: "Kontak & WhatsApp",
    description:
      "Layanan komunikasi langsung dengan Sekretariat Geuchik dan perangkat gampong berwenang.",
    badge: "Kantor Desa",
    badgeStyle: "solid",
    href: "https://wa.me/628123456789",
    type: "external",
    actionLabel: "Hubungi Operator",
    icon: "messageSquare",
  },
];

