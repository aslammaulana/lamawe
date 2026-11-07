export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

export interface MisiItem {
  nomor: string;
  judul: string;
  deskripsi: string;
  icon: "building" | "anchor" | "heartHandshake" | "shield" | "graduationCap";
  fokus: string[];
}

export interface BatasWilayahItem {
  arah: "Utara" | "Selatan" | "Timur" | "Barat";
  nama: string;
  keterangan: string;
  colorClass: string;
  badgeClass: string;
  icon: "waves" | "navigation" | "mapPin";
}

export interface JurongProfileItem {
  nama: string;
  kepala: string;
  deskripsi: string;
  karakteristik: string;
  icon: "waves" | "building" | "navigation" | "wheat";
  stats: string;
}

export interface TataGunaLahanItem {
  tipe: string;
  luas: string;
  persen: string;
  icon: "wheat" | "building" | "waves" | "trees";
  color: string;
}

export interface AparaturItem {
  id: string;
  nama: string;
  jabatan: string;
  idCard: string;
  foto: string;
  tugasUtama: string;
  masaBakti: string;
  status: string;
  focusLabel?: string;
  focusValue?: string;
}

export interface JurongAparaturItem {
  id: string;
  nomor: string;
  nama: string;
  jabatan: string;
  foto: string;
  deskripsi: string;
  rt: string;
  kk: string;
}

export interface LembagaAdatItem {
  title: string;
  subtitle: string;
  ketua: string;
  icon: "scale" | "sprout" | "users";
  deskripsi: string;
  items: string[];
}

export interface TupoksiRowItem {
  jabatan: string;
  pejabat: string;
  fungsi: string;
  dasarHukum: string;
  status: string;
}

