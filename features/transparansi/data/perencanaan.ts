import { PerencanaanPriorityItem } from "../types";

export const perencanaanHeroData = {
  tag: "DOKUMEN STRATEGIS DESA",
  title: "Perencanaan Pembangunan Desa",
  subtitle:
    "Arah kebijakan pembangunan Gampong Lam Awe yang tertuang dalam Rencana Pembangunan Jangka Menengah Desa (RPJMDes 2023–2029) dan Rencana Kerja Pemerintah Desa (RKPDes) Tahun Anggaran 2026 yang disepakati melalui Musyawarah Perencanaan Pembangunan Gampong (Musrenbangdes).",
};

export const prioritasRkpData: PerencanaanPriorityItem[] = [
  {
    nomor: "01",
    judul: "Penguatan Tanggul Abrasi & Drainase Utama",
    kategori: "Infrastruktur & Mitigasi Pesisir",
    lokasi: "Jurong Cot Meurak & Meunasah Tuha",
    anggaran: "Rp 180.000.000",
    sumber: "Dana Desa 2026",
    status: "Sedang Berjalan",
  },
  {
    nomor: "02",
    judul: "Revitalisasi Balai Pertemuan & Meunasah Gampong",
    kategori: "Sarana Sosial & Keagamaan",
    lokasi: "Pusat Gampong Lam Awe",
    anggaran: "Rp 95.000.000",
    sumber: "ADG & Swadaya Warga",
    status: "Tahap Persiapan",
  },
  {
    nomor: "03",
    judul: "Pengadaan Perahu & Alat Tangkap Nelayan Tradisional",
    kategori: "Pemberdayaan Ekonomi Nelayan",
    lokasi: "Jurong Pesisir Lam Awe",
    anggaran: "Rp 120.000.000",
    sumber: "Dana Desa (Ketahanan Pangan)",
    status: "Sedang Berjalan",
  },
  {
    nomor: "04",
    judul: "Program Pencegahan Stunting & Posyandu Terpadu",
    kategori: "Kesehatan Ibu & Anak",
    lokasi: "Seluruh Jurong Lam Awe",
    anggaran: "Rp 65.000.000",
    sumber: "Dana Desa 2026",
    status: "Rutin Bulanan",
  },
];

export const rpjmdesHighlight = {
  periode: "2023 - 2029",
  visi: "“Gampong Lam Awe Mandiri, Berdaya Saing Maritim, dan Berlandaskan Syariat Islam”",
  misiSummary:
    "Memperkuat ekonomi nelayan dan UMKM pesisir, perbaikan infrastruktur tahan abrasi, transparansi digital keuangan desa, dan peningkatan mutu SDM generasi muda.",
  dokumenSk: "Qanun Gampong Lam Awe No. 03 Tahun 2023",
};

export const musrenbangStages = [
  {
    tahap: "Tahap 1: Musyawarah Dusun (Musdus)",
    waktu: "Juni - Juli",
    deskripsi:
      "Penggalian gagasan dan inventarisasi usulan pembangunan dari 4 Jurong gampong bersama warga.",
  },
  {
    tahap: "Tahap 2: Penyusunan Rancangan RKP",
    waktu: "Agustus",
    deskripsi:
      "Tim penyusun RKP Desa memverifikasi dan menyusun skala prioritas usulan berdasarkan pagu indikatif desa.",
  },
  {
    tahap: "Tahap 3: Musrenbangdes Penetapan",
    waktu: "September",
    deskripsi:
      "Pemerintah Desa bersama BPD/Tuha Peut menyepakati dan menetapkan dokumen RKP Desa tahun berjalan.",
  },
  {
    tahap: "Tahap 4: Integrasi ke APBDes",
    waktu: "Oktober - Desember",
    deskripsi:
      "Program prioritas RKP dituangkan menjadi pos belanja resmi dalam Qanun APBDes tahun anggaran berikutnya.",
  },
];

