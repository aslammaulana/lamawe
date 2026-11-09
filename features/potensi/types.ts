export interface JurongDataItem {
  nama: string;
  penduduk: number;
  kk: number;
  l: number;
  p: number;
}

export interface PekerjaanDataItem {
  job: string;
  count: number;
  persen: string;
}

export interface UsiaDataItem {
  group: string;
  count: number;
  persen: string;
}

export interface ProductItem {
  nama: string;
  produsen: string;
  harga: string;
  deskripsi: string;
  kategori: string;
  imageUrl: string;
}

export interface AttractionItem {
  nama: string;
  kategori: string;
  lokasi: string;
  deskripsi: string;
  fasilitas: string[];
  imageUrl: string;
}

