import { ApbdesBidangDetail, ApbdesDownloadItem } from "../types";

export const apbdesHeroData = {
  tag: "KETERBUKAAN ANGGARAN & DANA DESA (DD) 2026",
  title: "Transparansi APBDes & Realisasi Anggaran",
  subtitle:
    "Komitmen Pemerintah Gampong Lam Awe, Kec. Peukan Bada, Kab. Aceh Besar dalam mewujudkan tata kelola keuangan publik yang bersih, partisipatif, transparan, dan dapat dipertanggungjawabkan kepada seluruh warga.",
  updateDate: "Diperbarui: 15 Oktober 2026 (Triwulan III)",
};

export const apbdesSummaryData = {
  pendapatan: {
    realisasi: "Rp 924.650.000",
    target: "Rp 1.185.450.000",
    persen: 78.0,
    sisa: "Rp 260.800.000",
    keterangan: "Dana Desa, PADes, Bagi Hasil",
  },
  belanja: {
    realisasi: "Rp 798.140.000",
    pagu: "Rp 1.140.200.000",
    persen: 70.0,
    sisa: "Rp 342.060.000",
    keterangan: "5 Bidang Kegiatan APBDes",
  },
  pembiayaan: {
    realisasi: "Rp 45.250.000",
    rencana: "Rp 45.250.000",
    persen: 100.0,
    keterangan: "SiLPA TA 2025",
    statusText: "Seimbang (Surplus Kas)",
  },
};

export const apbdesBidangData: ApbdesBidangDetail[] = [
  {
    kode: "01",
    nama: "Bidang Penyelenggaraan Pemerintahan Desa",
    deskripsi:
      "Penghasilan tetap Keuchik & perangkat, operasional kantor gampong, BUMG, dan tata kelola administrasi",
    pagu: 380000000,
    realisasi: 304000000,
    persen: 80,
    icon: "building",
    color: "bg-blue-500",
  },
  {
    kode: "02",
    nama: "Bidang Pelaksanaan Pembangunan Desa",
    deskripsi:
      "Drainase lingkungan, rabat beton lorong gampong, perbaikan meunasah, dan sarana posyandu",
    pagu: 450200000,
    realisasi: 301634000,
    persen: 67,
    icon: "hardHat",
    color: "bg-emerald-500",
  },
  {
    kode: "03",
    nama: "Bidang Pembinaan Kemasyarakatan Desa",
    deskripsi:
      "Kegiatan pemuda & olahraga, pengajian balai meunasah, serta peringatan hari besar Islam (PHBI)",
    pagu: 120000000,
    realisasi: 84000000,
    persen: 70,
    icon: "users",
    color: "bg-amber-500",
  },
  {
    kode: "04",
    nama: "Bidang Pemberdayaan Masyarakat Desa",
    deskripsi:
      "Pelatihan UMKM pengolahan hasil laut, bantuan bibit pertanian nelayan, dan ketahanan pangan",
    pagu: 110000000,
    realisasi: 60506000,
    persen: 55,
    icon: "sprout",
    color: "bg-cyan-500",
  },
  {
    kode: "05",
    nama: "Bidang Penanggulangan Bencana, Darurat & Mendesak",
    deskripsi:
      "Bantuan Langsung Tunai (BLT Dana Desa), mitigasi tanggap darurat pasang air laut & abrasi",
    pagu: 80000000,
    realisasi: 48000000,
    persen: 60,
    icon: "heartPulse",
    color: "bg-rose-500",
  },
];

export const apbdesLegalPoints = [
  {
    title: "Qanun Gampong Lam Awe No. 01/2026",
    desc: "Tentang Penetapan APBDes TA 2026 (Diundangkan 12 Januari 2026)",
  },
  {
    title: "Permendagri No. 20 Tahun 2018",
    desc: "Pengelolaan Keuangan Desa dan Standar Akuntabilitas Penatausahaan",
  },
  {
    title: "Permendes PDTT No. 13 Tahun 2025",
    desc: "Prioritas Penggunaan Dana Desa: Ketahanan Pangan & Stunting",
  },
  {
    title: "Qanun Kab. Aceh Besar No. 04/2019",
    desc: "Pedoman Tata Kelola Pemerintahan Mukim dan Gampong",
  },
];

export const apbdesDownloads: ApbdesDownloadItem[] = [
  {
    judul: "Buku Lengkap APBG Lam Awe 2026",
    nomor: "PDF • 4.8 MB • Update Jan 2026",
    size: "4.8 MB",
    desc: "Dokumen resmi anggaran induk tahun anggaran 2026.",
  },
  {
    judul: "Infografis Baliho APBDes Resmi",
    nomor: "JPG/PNG • 8.2 MB • Siap Cetak",
    size: "8.2 MB",
    desc: "Versi baliho visual transparansi yang dipasang di Meunasah & Kantor Desa.",
  },
  {
    judul: "Matriks Realisasi Triwulan III",
    nomor: "XLSX • 620 KB • Update Okt 2026",
    size: "620 KB",
    desc: "Tabel pembukuan serapan anggaran per kegiatan terperinci.",
  },
];
