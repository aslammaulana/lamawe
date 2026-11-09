export interface ApbdesBidangDetail {
  kode: string;
  nama: string;
  deskripsi: string;
  pagu: number;
  realisasi: number;
  persen: number;
  icon: "building" | "hardHat" | "users" | "sprout" | "heartPulse";
  color: string;
}

export interface ApbdesDownloadItem {
  judul: string;
  nomor: string;
  size: string;
  desc: string;
}

export interface PerencanaanPriorityItem {
  nomor: string;
  judul: string;
  kategori: string;
  lokasi: string;
  anggaran: string;
  sumber: string;
  status: string;
}

export interface ProgramKegiatanItem {
  id: number;
  title: string;
  bidang: string;
  jurong: string;
  progress: number;
  anggaran: string;
  sumber: string;
  jadwal: string;
  status: string;
  deskripsi: string;
}

export interface LpjFileItem {
  tahun: string;
  judul: string;
  nomor: string;
  tanggal: string;
  status: string;
  size: string;
  type: string;
}

export interface PpidInfoCategory {
  kategori: string;
  items: string[];
}
