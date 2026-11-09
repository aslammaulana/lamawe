import type { LayananDetailConfig } from "../types";

export const servicesDirectory: Record<string, LayananDetailConfig> = {
  "surat-keterangan-usaha": {
    nama: "Surat Keterangan Usaha (SKU)",
    kategori: "Perekonomian & UMKM Gampong",
    kodeSOP: "#SOP-LMA-02/2026",
    deskripsi:
      "Surat keterangan resmi yang diterbitkan oleh Pemerintah Gampong Lam Awe yang menerangkan bahwa pemohon benar memiliki dan menjalankan kegiatan usaha aktif di wilayah Gampong Lam Awe, Kecamatan Peukan Bada.",
    waktu: "1 - 2 Hari Kerja",
    biaya: "Rp 0 (GRATIS)",
    icon: "store",
    requirements: [
      {
        id: "ktp",
        label: "Salinan KTP Elektronik (e-KTP)",
        desc: "KTP pemohon warga asli Lam Awe yang masih berlaku aktif dengan NIK valid.",
      },
      {
        id: "kk",
        label: "Salinan Kartu Keluarga (KK) Terbaru",
        desc: "Memastikan domisili tempat tinggal pemohon tercatat resmi di basis data desa.",
      },
      {
        id: "pengantar-kadus",
        label: "Surat Pengantar Kepala Dusun / Ulee Jurong",
        desc: "Rekomendasi dari Ulee Jurong domisili (Cot Meurak, Meunasah Tuha, Lampoh Peukan, atau Cot Cut).",
      },
      {
        id: "foto-usaha",
        label: "Foto Tempat Kegiatan Usaha (2 Lembar)",
        desc: "Tampak depan plang/bangunan tempat usaha dan aktivitas transaksi operasional.",
      },
      {
        id: "pernyataan-syariat",
        label: "Surat Pernyataan Usaha & Kepatuhan Syariat",
        desc: "Menyatakan usaha tidak bersengketa dan patuh pada syariat Islam di Aceh.",
      },
      {
        id: "pbb",
        label: "Bukti Lunas PBB-P2 Tahun Berjalan (Opsional)",
        desc: "Tanda pelunasan PBB tempat tinggal atau ruko operasional usaha bila ada.",
      },
    ],
    steps: [
      {
        title: "Pengajuan & Unggah Berkas",
        actor: "Warga Pemohon",
        desc: "Warga mengisi formulir digital melalui portal ini atau menyerahkan berkas langsung ke loket kantor Keuchik pada jam operasional kerja.",
      },
      {
        title: "Verifikasi Administratif & Dusun",
        actor: "Kaur Tata Usaha",
        desc: "Petugas kaur memeriksa keabsahan dokumen identitas, mencocokkan bidang usaha, dan berkoordinasi dengan Ulee Jurong.",
      },
      {
        title: "Penandatanganan & Penomoran Surat",
        actor: "Keuchik Lam Awe",
        desc: "Keuchik Lam Awe membubuhkan tanda tangan elektronik (TTE) atau tanda tangan basah resmi beserta stempel gampong.",
      },
      {
        title: "Penerbitan & Pengambilan Dokumen",
        actor: "Selesai Siap Pakai",
        desc: "Pemohon menerima notifikasi WhatsApp berisi tautan unduh dokumen PDF asli dengan kode tiket berformat resmi.",
      },
    ],
  },
  "surat-keterangan-domisili": {
    nama: "Surat Keterangan Domisili",
    kategori: "Kependudukan & Identitas",
    kodeSOP: "#SOP-LMA-01/2026",
    deskripsi:
      "Surat bukti keterangan tempat tinggal resmi bagi warga yang berdomisili sementara maupun tetap di wilayah Gampong Lam Awe, Kec. Peukan Bada.",
    waktu: "1 Hari Kerja",
    biaya: "Rp 0 (GRATIS)",
    icon: "badge",
    requirements: [
      {
        id: "ktp",
        label: "Salinan e-KTP Pemohon",
        desc: "Fotokopi atau foto e-KTP asli yang masih berlaku.",
      },
      {
        id: "kk",
        label: "Salinan Kartu Keluarga (KK)",
        desc: "Kartu keluarga asal atau kartu keluarga keluarga tempat menumpang tinggal.",
      },
      {
        id: "pengantar-jurong",
        label: "Surat Rekomendasi Ulee Jurong",
        desc: "Bukti telah melapor diri ke Kepala Dusun / Ulee Jurong setempat.",
      },
      {
        id: "surat-pemilik",
        label: "Surat Izin Pemilik Tempat Tinggal / Sewa",
        desc: "Khusus bagi warga pengontrak rumah / kos di Lam Awe.",
      },
    ],
    steps: [
      {
        title: "Pendaftaran Online / Loket",
        actor: "Pemohon",
        desc: "Mengisi data diri dan mengunggah berkas identitas di website desa.",
      },
      {
        title: "Verifikasi Data Kependudukan",
        actor: "Kasi Pemerintahan",
        desc: "Pencocokan data warga dengan buku induk kependudukan Gampong Lam Awe.",
      },
      {
        title: "Pengesahan Surat Domisili",
        actor: "Keuchik Lam Awe",
        desc: "Penerbitan surat keterangan domisili resmi bertandatangan Keuchik.",
      },
      {
        title: "Serah Terima Berkas",
        actor: "Loket Layanan",
        desc: "Dokumen dapat diambil di kantor atau diunduh secara digital.",
      },
    ],
  },
  "surat-pengantar-skck": {
    nama: "Surat Pengantar SKCK",
    kategori: "Kamtibmas & Kepolisian",
    kodeSOP: "#SOP-LMA-03/2026",
    deskripsi:
      "Surat rekomendasi pengantar dari Keuchik Lam Awe untuk pengurusan Surat Keterangan Catatan Kepolisian (SKCK) di Polsek Peukan Bada atau Polresta Banda Aceh.",
    waktu: "30 Menit",
    biaya: "Rp 0 (GRATIS)",
    icon: "police",
    requirements: [
      {
        id: "ktp",
        label: "Fotokopi e-KTP Pemohon (2 Lembar)",
        desc: "KTP asli domisili Gampong Lam Awe.",
      },
      {
        id: "kk",
        label: "Fotokopi Kartu Keluarga (KK)",
        desc: "KK tercatat di database kependudukan setempat.",
      },
      {
        id: "foto",
        label: "Pas Foto 4x6 Latar Merah (2 Lembar)",
        desc: "Foto terbaru dengan pakaian berkerah dan sopan.",
      },
      {
        id: "rekom-jurong",
        label: "Catatan Kelakuan Baik dari Ulee Jurong",
        desc: "Menerangkan pemohon tidak pernah terlibat perselisihan adat gampong.",
      },
    ],
    steps: [
      {
        title: "Pemeriksaan Berkas",
        actor: "Petugas Loket",
        desc: "Pemeriksaan identitas dan tujuan pengurusan SKCK (kerja/pendidikan).",
      },
      {
        title: "Konfirmasi Kelakuan Baik",
        actor: "Kaur Kesra",
        desc: "Verifikasi bahwa pemohon bebas sanksi adat gampong.",
      },
      {
        title: "Penandatanganan Surat Pengantar",
        actor: "Sekdes / Keuchik",
        desc: "Penandatanganan resmi surat pengantar pengurusan SKCK.",
      },
      {
        title: "Dokumen Siap Menuju Polsek",
        actor: "Pemohon",
        desc: "Surat pengantar selesai dan dapat langsung dibawa ke Polsek Peukan Bada.",
      },
    ],
  },
  "surat-keterangan-tidak-mampu": {
    nama: "Surat Keterangan Tidak Mampu (SKTM)",
    kategori: "Kesejahteraan Sosial",
    kodeSOP: "#SOP-LMA-04/2026",
    deskripsi:
      "Surat rekomendasi keringanan biaya pendidikan anak, permohonan beasiswa kuliah, permohonan BPJS Kesehatan PBI, dan akses bantuan sosial keluarga.",
    waktu: "1 Hari Kerja",
    biaya: "Rp 0 (GRATIS)",
    icon: "heart",
    requirements: [
      {
        id: "ktp",
        label: "Salinan KTP Kepala Keluarga & Pemohon",
        desc: "Identitas kependudukan warga Lam Awe.",
      },
      {
        id: "kk",
        label: "Salinan Kartu Keluarga (KK)",
        desc: "Memastikan susunan anggota keluarga pemohon.",
      },
      {
        id: "jurong",
        label: "Surat Pengantar Keterangan Ekonomi Ulee Jurong",
        desc: "Rekomendasi dari Ulee Jurong yang mengetahui kondisi perekonomian keluarga.",
      },
      {
        id: "sekolah",
        label: "Surat Keterangan Siswa/Mahasiswa Aktif (Bila untuk Pendidikan)",
        desc: "Dari sekolah atau perguruan tinggi yang bersangkutan.",
      },
    ],
    steps: [
      {
        title: "Pengajuan Permohonan",
        actor: "Pemohon",
        desc: "Pengajuan surat beserta lampiran data penghasilan keluarga.",
      },
      {
        title: "Verifikasi Sosial & Lapangan",
        actor: "Kasi Kesejahteraan",
        desc: "Pengecekan kesesuaian data dalam Data Terpadu Kesejahteraan Sosial (DTKS).",
      },
      {
        title: "Pengesahan SKTM",
        actor: "Keuchik Lam Awe",
        desc: "Penerbitan surat rekomendasi resmi bermaterai gampong.",
      },
      {
        title: "Penyerahan Dokumen",
        actor: "Selesai",
        desc: "Dokumen siap diserahkan ke instansi terkait.",
      },
    ],
  },
  "surat-pengantar-akta-kelahiran-kematian": {
    nama: "Surat Pengantar Akta Kelahiran & Kematian",
    kategori: "Kependudukan & Pencatatan Sipil",
    kodeSOP: "#SOP-LMA-05/2026",
    deskripsi:
      "Surat pengantar penerbitan akta kelahiran anak baru lahir atau pelaporan pencatatan kematian warga ke Dinas Kependudukan dan Pencatatan Sipil Aceh Besar.",
    waktu: "1 Hari Kerja",
    biaya: "Rp 0 (GRATIS)",
    icon: "users",
    requirements: [
      {
        id: "ktp-ortu",
        label: "KTP Orang Tua / Ahli Waris",
        desc: "Identitas pelapor dan orang tua yang bersangkutan.",
      },
      {
        id: "kk",
        label: "Kartu Keluarga Asli & Salinan",
        desc: "Untuk pembaruan susunan anggota keluarga.",
      },
      {
        id: "surat-bidan",
        label: "Surat Keterangan Lahir (Bidan/Puskesmas) atau Keterangan Meninggal",
        desc: "Surat keterangan medis asli dari pihak medis atau Ulee Jurong.",
      },
      {
        id: "buku-nikah",
        label: "Salinan Buku Nikah Orang Tua (Kelahiran)",
        desc: "Sebagai bukti keabsahan perkawinan orang tua.",
      },
    ],
    steps: [
      {
        title: "Laporan Peristiwa Kependudukan",
        actor: "Pelapor",
        desc: "Melaporkan peristiwa kelahiran atau kematian kepada perangkat gampong.",
      },
      {
        title: "Registrasi Buku Induk Desa",
        actor: "Kaur Pemerintahan",
        desc: "Pencatatan mutasi penduduk di sistem gampong.",
      },
      {
        title: "Penerbitan Surat Pengantar",
        actor: "Keuchik Lam Awe",
        desc: "Pengesahan formulir F-2.01 Disdukcapil.",
      },
      {
        title: "Penerusan ke Disdukcapil",
        actor: "Selesai",
        desc: "Berkas siap dibawa atau diproses lewat integrasi Disdukcapil Aceh Besar.",
      },
    ],
  },
  "surat-keterangan-tanah-sporadik": {
    nama: "Surat Keterangan Riwayat Tanah & Sporadik",
    kategori: "Pertanahan & Aset",
    kodeSOP: "#SOP-LMA-06/2026",
    deskripsi:
      "Surat pernyataan penguasaan fisik bidang tanah adat / perumahan gampong dan rekomendasi keabsahan kepemilikan hak waris di wilayah Gampong Lam Awe.",
    waktu: "3 - 5 Hari Kerja",
    biaya: "Rp 0 (GRATIS)",
    icon: "map",
    requirements: [
      {
        id: "ktp",
        label: "Salinan e-KTP Pemohon & Pemilik Asal",
        desc: "Identitas pemohon dan riwayat kepemilikan terdahulu.",
      },
      {
        id: "sketsa",
        label: "Sketsa Batas Bidang Tanah & Tanda Tangan Tetangga Batas",
        desc: "Persetujuan tertulis tetangga batas utara, selatan, timur, dan barat.",
      },
      {
        id: "riwayat",
        label: "Bukti Alas Hak Terdahulu (Hibah / Waris / Segel)",
        desc: "Dokumen peralihan hak lama bila ada.",
      },
      {
        id: "survei",
        label: "Pemeriksaan Lapangan Bersama Tim Adat",
        desc: "Peninjauan fisik tanah oleh Ulee Jurong dan Keuchik.",
      },
    ],
    steps: [
      {
        title: "Pengajuan Berkas Sporadik",
        actor: "Pemohon",
        desc: "Pemasukan berkas permohonan riwayat tanah ke kantor desa.",
      },
      {
        title: "Peninjauan Lapangan & Tapal Batas",
        actor: "Kaur Pembangunan & Ulee Jurong",
        desc: "Pengukuran fisik dan konfirmasi batas dengan tetangga sekitar.",
      },
      {
        title: "Pemasangan Pengumuman Tidak Ada Sengketa",
        actor: "Sekretariat Gampong",
        desc: "Masa sanggah publik selama 3 hari di papan pengumuman meunasah.",
      },
      {
        title: "Pengesahan Surat Keterangan",
        actor: "Keuchik & Tuha Peut",
        desc: "Penerbitan surat riwayat tanah resmi bermaterai.",
      },
    ],
  },
};

