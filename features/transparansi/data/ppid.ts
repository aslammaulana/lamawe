import { PpidInfoCategory } from "../types";

export const ppidHeroData = {
  tag: "UU KIP NO. 14 TAHUN 2008",
  title: "PPID Gampong Lam Awe",
  subtitle:
    "Pejabat Pengelola Informasi dan Dokumentasi (PPID) bertugas mengelola dan melayani permohonan informasi publik secara cepat, tepat waktu, biaya ringan, dan proporsional demi mewujudkan tata kelola desa yang transparan dan akuntabel.",
};

export const ppidCategoriesData: PpidInfoCategory[] = [
  {
    kategori: "Informasi Berkala",
    items: [
      "Profil Lengkap Gampong & Struktur Organisasi Aparatur",
      "Ringkasan APBDes, Realisasi Dana Desa, & LPJ Tahunan",
      "Rencana Kerja Pemerintah Gampong (RKPDes) & RPJMDes",
      "Peraturan Desa (Qanun Gampong) yang telah diundangkan",
    ],
  },
  {
    kategori: "Informasi Serta-Merta",
    items: [
      "Peringatan dini kebencanaan pesisir, gelombang pasang & abrasi",
      "Informasi keadaan darurat kesehatan warga & mitigasi wabah",
      "Prosedur evakuasi kebencanaan tsunami dan peta titik kumpul",
    ],
  },
  {
    kategori: "Informasi Setiap Saat",
    items: [
      "Daftar lengkap aset milik Gampong Lam Awe (tanah wakaf, balai, inventaris)",
      "Surat Keputusan (SK) Keuchik tentang pengangkatan pengurus lembaga",
      "Dokumen perjanjian kerjasama antar desa atau dengan pihak ketiga",
      "Standar Operasional Prosedur (SOP) seluruh layanan publik desa",
    ],
  },
];

export const ppidAlurPermohonan = [
  {
    step: "01",
    title: "Pengajuan Permohonan",
    desc: "Pemohon mengisi formulir permohonan informasi secara daring atau datang langsung ke meja PPID di Kantor Keuchik.",
  },
  {
    step: "02",
    title: "Verifikasi Kelengkapan",
    desc: "Petugas PPID memeriksa kelengkapan identitas (KTP/identitas sah) dan kejelasan subjek informasi yang diminta.",
  },
  {
    step: "03",
    title: "Pemrosesan & Koordinasi",
    desc: "PPID berkoordinasi dengan pengelola data teknis terkait dalam waktu maksimal 10 hari kerja (dapat diperpanjang 7 hari).",
  },
  {
    step: "04",
    title: "Pemberian Informasi",
    desc: "Informasi diserahkan dalam bentuk softcopy via email atau salinan cetak di kantor tanpa dipungut biaya retribusi.",
  },
];

export const ppidContactInfo = {
  address: "Kantor Keuchik Gampong Lam Awe, Kec. Peukan Bada, Kab. Aceh Besar",
  email: "ppid@lamawe.desa.id",
  phone: "0812-3456-789",
  jamLayanan: "Senin – Jumat, 08:30 – 16:00 WIB",
};
