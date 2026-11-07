import { BatasWilayahItem, JurongProfileItem, TataGunaLahanItem } from "../types";

export const wilayahHeroData = {
  tag: "GEOGRAFIS & TATA RUANG GAMPONG",
  title: "Wilayah & Geografis Gampong Lam Awe",
  subtitle:
    "Gampong Lam Awe memiliki luas wilayah 215 Hektar yang membentang dari garis pantai pesisir Selat Malaka di utara hingga persawahan subur di selatan, terbagi ke dalam 4 (empat) wilayah Jurong adat.",
};

export const batasWilayahData: BatasWilayahItem[] = [
  {
    arah: "Utara",
    nama: "Selat Malaka",
    keterangan: "Garis Pantai & Laut Teritorial",
    colorClass: "bg-blue-50/50 border-blue-100",
    badgeClass: "text-blue-700",
    icon: "waves",
  },
  {
    arah: "Selatan",
    nama: "Gampong Rima Keuneurom",
    keterangan: "Kawasan Persawahan",
    colorClass: "bg-emerald-50/50 border-emerald-100",
    badgeClass: "text-emerald-700",
    icon: "navigation",
  },
  {
    arah: "Timur",
    nama: "Gampong Ajuen",
    keterangan: "Batas Lorong Penghubung",
    colorClass: "bg-amber-50/50 border-amber-100",
    badgeClass: "text-amber-700",
    icon: "mapPin",
  },
  {
    arah: "Barat",
    nama: "Gampong Lampisang",
    keterangan: "Saluran Irigasi Utama",
    colorClass: "bg-indigo-50/50 border-indigo-100",
    badgeClass: "text-indigo-700",
    icon: "mapPin",
  },
];

export const jurongWilayahData: JurongProfileItem[] = [
  {
    nama: "Jurong Cot Meurak",
    kepala: "Ulee Jurong: Saifuddin",
    deskripsi:
      "Kawasan pesisir utara gampong yang berhadapan langsung dengan Selat Malaka. Merupakan sentra aktivitas nelayan tradisional, tambat perahu, dan pengolahan hasil laut.",
    karakteristik: "Pesisir & Perikanan Laut",
    icon: "waves",
    stats: "Luas: 52 Ha • 68 KK",
  },
  {
    nama: "Jurong Meunasah Tuha",
    kepala: "Ulee Jurong: Marzuki, S.Pd",
    deskripsi:
      "Pusat keagamaan dan sejarah awal gampong tempat berdirinya Meunasah utama, balai adat pengajian, dan makam leluhur desa.",
    karakteristik: "Pusat Religi & Sejarah",
    icon: "building",
    stats: "Luas: 48 Ha • 84 KK",
  },
  {
    nama: "Jurong Lampoh Peukan",
    kepala: "Ulee Jurong: T. Zulkifli",
    deskripsi:
      "Kawasan perdagangan dan jasa di sepanjang jalur lintas Banda Aceh–Meulaboh. Sentra pertokoan sembako, warung kopi, dan UMKM olahan.",
    karakteristik: "Pusat Ekonomi & Niaga",
    icon: "navigation",
    stats: "Luas: 45 Ha • 92 KK",
  },
  {
    nama: "Jurong Cot Cut",
    kepala: "Ulee Jurong: Bukhari",
    deskripsi:
      "Kawasan persawahan subur dan perkebunan palawija di perbatasan selatan gampong dengan sistem irigasi teknis mandiri warga.",
    karakteristik: "Pertanian & Sawah Produktif",
    icon: "wheat",
    stats: "Luas: 70 Ha • 74 KK",
  },
];

export const landUseData: TataGunaLahanItem[] = [
  {
    tipe: "Lahan Persawahan & Pertanian",
    luas: "85 Ha",
    persen: "39.5%",
    icon: "wheat",
    color: "bg-emerald-500",
  },
  {
    tipe: "Permukiman & Pekarangan Warga",
    luas: "60 Ha",
    persen: "27.9%",
    icon: "building",
    color: "bg-blue-500",
  },
  {
    tipe: "Wilayah Pesisir, Pantai & Tambat Labuh",
    luas: "45 Ha",
    persen: "20.9%",
    icon: "waves",
    color: "bg-cyan-500",
  },
  {
    tipe: "Fasilitas Umum, Jalan, & Tempat Ibadah",
    luas: "25 Ha",
    persen: "11.7%",
    icon: "trees",
    color: "bg-amber-500",
  },
];

export const petaWilayahCoordinates = {
  lat: 5.5392,
  lng: 95.2847,
  coordinateText: "5.5392° LU, 95.2847° BT • Jalur strategis lintas Banda Aceh - Meulaboh",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=5.5392,95.2847",
  embedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=95.2600%2C5.5200%2C95.3100%2C5.5600&layer=mapnik&marker=5.5392%2C95.2847",
};

