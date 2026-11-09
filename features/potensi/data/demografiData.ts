import type { JurongDataItem, PekerjaanDataItem, UsiaDataItem } from "../types";

export const jurongData: JurongDataItem[] = [
  { nama: "Jurong Cot Meurak", penduduk: 362, kk: 68, l: 184, p: 178 },
  { nama: "Jurong Meunasah Tuha", penduduk: 418, kk: 84, l: 209, p: 209 },
  { nama: "Jurong Lampoh Peukan", penduduk: 442, kk: 92, l: 226, p: 216 },
  { nama: "Jurong Cot Cut", penduduk: 382, kk: 74, l: 191, p: 191 },
];

export const pekerjaanData: PekerjaanDataItem[] = [
  { job: "Nelayan & Pengolahan Laut", count: 215, persen: "29.4%" },
  { job: "Petani & Buruh Tani Sawah", count: 182, persen: "24.9%" },
  { job: "Pedagang / Pelaku UMKM", count: 148, persen: "20.2%" },
  { job: "PNS / Guru / TNI-Polri", count: 68, persen: "9.3%" },
  { job: "Karyawan Swasta & Jasa", count: 118, persen: "16.2%" },
];

export const usiaData: UsiaDataItem[] = [
  { group: "Balita & Anak (0 - 14 th)", count: 328, persen: "20.4%" },
  { group: "Usia Produktif (15 - 64 th)", count: 1124, persen: "70.1%" },
  { group: "Lansia (> 65 th)", count: 152, persen: "9.5%" },
];

