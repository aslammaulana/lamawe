import {
  AparaturItem,
  JurongAparaturItem,
  LembagaAdatItem,
  TupoksiRowItem,
} from "../types";

export const strukturHeroData = {
  badge: "Aparatur Pemerintahan Gampong",
  title: "Struktur Organisasi & Perangkat Desa Lam Awe",
  description:
    "Penyelenggaraan tata kelola Pemerintahan Gampong Lam Awe, Kecamatan Peukan Bada, Kabupaten Aceh Besar masa bakti 2023–2029 berlandaskan asas keterbukaan, akuntabilitas, dan nilai kearifan lokal syariat Islam.",
  skBupati: "SK Bupati Aceh Besar: No. 141/428/2023",
  masaBakti: "Masa Bakti: 2023 – 2029",
  pdfDownloadHref: "#unduh-dokumen",
  waSecretariatUrl: "https://wa.me/628123456789",
};

export const keuchikExecutiveData = {
  foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtfwZZjQOZRpMUP4zMy-CtX5CdAE_8u8RdhvgQumC4c4XzfSSmW5G0mS5o0fagLND5MQBmLKmXnnVFSsvujhwLx6xorBdBjnHosZTOtmwAXoTe1OZ9tXsvhyvC16bm0GqV1vlooz8_CwLN2qbIotAOeQcVWGn-hyX5UI1CtRiu7-uzjfW1cmiaIix0MR1Je33sYgUkzHXnkrjEjamGSl-3uwKzLyLcMIM7tUdjtC89",
  nipd: "11.06.09.2001",
  badge: "Keuchik Gampong Definitif",
  nama: "Teuku Rahmat Syahputra, S.Sos.",
  jabatan: "Kepala Desa Lam Awe",
  skPengesahan: "SK Pengesahan 2023 - 2029",
  quote:
    "\"Mewujudkan Gampong Lam Awe yang berkeadaban islami, mandiri secara ekonomi pesisir dan pertanian, serta transparan dalam setiap rupiah dana gampong untuk kesejahteraan bersama.\"",
  bio: "Keuchik Gampong bertindak sebagai pemimpin eksekutif gampong yang bertanggung jawab memimpin penyelenggaraan administrasi, pembinaan kemasyarakatan, pemberdayaan ekonomi, serta menjaga keterpaduan dengan Imum Mukim dan Tuha Peut Gampong (TPG) sesuai Qanun Aceh No. 9 Tahun 2008.",
  stats: [
    {
      label: "Wilayah Administrasi",
      value: "4 Jurong",
      desc: "Cot Meurak, Lam Wek, Meunasah Barat, Pante",
      icon: "mapPin",
    },
    {
      label: "Jam Kerja Kantor",
      value: "Senin – Jumat",
      desc: "08:30 – 16:30 WIB di Kantor Keuchik",
      icon: "clock",
    },
    {
      label: "Layanan Aspirasi",
      value: "Tatap Muka & WA",
      desc: "Aspirasi Jumat Berkah & Pos Pengaduan",
      icon: "messageCircle",
    },
  ],
  waContactUrl:
    "https://wa.me/628123456789?text=Assalamualaikum%20Pak%20Keuchik%20Lam%20Awe",
};

export const sekretariatData: AparaturItem[] = [
  {
    id: "sekdes",
    nama: "Zulkifli, S.E.",
    jabatan: "Sekretaris Desa (Sekdes)",
    idCard: "ID: AP-LMA-002",
    foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWO2gtIGEH0Ws6n2tQiZFiP85KPnR02dec3HW64nI--1FivLg-qhuYEJDGxlWJtkQUSEUZJRBbH5SuDDvneg3k6SrpQV--1gRuIOa3fvFBQj36CmbCDoTOyx5NxLilpZUVVuay_Oogn4kjuX6IYlYMEZmN1ceGaU1sRIF3rnstojZ1IjnNz_XXxcb95UMeUIXeNBpw7Bui_z6EpKBTZMDjl2ZoM_swv32n8kKZEZve",
    tugasUtama:
      "Memimpin kesekretariatan gampong, perumusan kebijakan teknis administrasi umum, kearsipan persuratan dinas, serta mengoordinasikan penyusunan APBG.",
    masaBakti: "2023–2029",
    status: "Aktif",
  },
  {
    id: "kaur-keuangan",
    nama: "Munawir, A.Md.",
    jabatan: "Kaur Keuangan",
    idCard: "ID: AP-LMA-003",
    foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuDb04-GRt2LH8MjTNvCks_nTn230MJmcaNeS3dzoop0Kggt7fv_Pw2f3anDIrALaaGQn4SIkoCOSnSpgxgBacVfRzg_sLnZzHd2g9VJvjYqxl0dbKXc6bxC1N15VN28Or8ks58e21tusKCooW6yTAjHU4EQIaRgcC2H6WvhjqWRmWjz5CcVh5I-IjNVIXaAM79FxMg4X5Eape8mbx5vl7-YltMvcwJ--hQTHYxobQLM",
    tugasUtama:
      "Pengelolaan penatausahaan keuangan desa, sistem Siskeudes, penyusunan Surat Permintaan Pembayaran (SPP), serta pembukuan kas belanja desa.",
    masaBakti: "2023–2029",
    status: "Aktif",
  },
  {
    id: "kaur-umum",
    nama: "Nurul Fitriani, S.Pd.",
    jabatan: "Kaur Umum & Perencanaan",
    idCard: "ID: AP-LMA-004",
    foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJPJAow1mQ-8Q6t7V_UqAqx6TgcVxuNXUQtoqFgjDd1TUSV0xFhP6ZGFz1F4Wu5zWaz43Ig8f5tGgvatS71bAqY7gfKkYA1N-G1QEUumrn-sMYozDWZxtGtt51z968wU1agJ93xrr97h8s1ZU8N3VIu7rsdXIo5pAFTVYKH5cjzptkoYeoBDoY-eLWXz8TksFL5hK2g852vLYVxIS_Sn-K2eccFrFesQDWIBEVB2om",
    tugasUtama:
      "Inventarisasi aset barang milik gampong, ketatausahaan kantor, penyusunan RKP Gampong, serta fasilitas musyawarah perencanaan desa (Musrenbang).",
    masaBakti: "2023–2029",
    status: "Aktif",
  },
];

export const pelaksanaTeknisData: AparaturItem[] = [
  {
    id: "kasi-pemerintahan",
    nama: "M. Syahrul, S.IP.",
    jabatan: "Kasi Pemerintahan",
    idCard: "ID: AP-LMA-005",
    foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuCazrDg1yGN7rUhtZsVGkp2vKhfuasicjZ2YNbD_rlJtBvja4j5rB3YVPEmZ_Dd08DnMB5VTjlq15jBkvoc_GBJyGO2pnJqKQb51vepw3fq6YSSItCekN2Pm1wBsC7pMDTpfxvSj157lNxM9ryPjry4ja9OyrTwgarZmIecRcCDDwlDgHy2LB5I8HlecOHHndmdrtv9cJAwFRU05-dlwx2bSlllvhPmJtcuqeYjLtzJ",
    tugasUtama:
      "Pelayanan perizinan dan surat pengantar warga, administrasi kependudukan (KTP/KK), ketertiban umum kemasyarakatan, serta koordinasi muspika Peukan Bada.",
    masaBakti: "2023–2029",
    status: "Aktif",
    focusLabel: "Layanan Kependudukan",
    focusValue: "Online & Offline",
  },
  {
    id: "kasi-kesra",
    nama: "Cut Salmiah, S.Sos.",
    jabatan: "Kasi Kesejahteraan & Kesra",
    idCard: "ID: AP-LMA-006",
    foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd2HccS2ebgcMIlkBFquPYc-chKZGDjEZ41RQgdLwSEnnaHNE4seOiezObZUfE5uLn7fcrLbj0ZMRmI8K_60Y7XUiBVU9C3YAYe4eQgui_KVE4K-UeEbj7fJd1kj2DaqOweIzy6yhZebqjnl1tPDtJXbyxztcUWKKw8X1ikRpx20-h7rX-4X219JZ9kBPUMkDSqtDZ5tPLW0ghLiln7BsCt1zFQXUW0n1X6A3GldDQ",
    tugasUtama:
      "Verifikasi bantuan sosial (PKH, BLT Desa), pembinaan pemberdayaan perempuan, posyandu gampong, serta kegiatan syariat Islam dan keagamaan meunasah.",
    masaBakti: "2023–2029",
    status: "Aktif",
    focusLabel: "Fokus Pelayanan",
    focusValue: "Sosial & Bansos",
  },
  {
    id: "kaur-pembangunan",
    nama: "Faisal Rizal, S.T.",
    jabatan: "Kaur Pembangunan",
    idCard: "ID: AP-LMA-007",
    foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIn3zJKLSb5QPiornXaneQwzk4j5zm0eG8XhWmIxosmYneOSR_0p9NnAvKJKpHNiPCa-GVWc_5hGdm_eeYOpOv4M-q0k5x1LRYdLnSC7UMZjgcc7LJfzxAapmodJMMM1XxYt1zLD-hoeHbFR-h-btXNYS1dOeuRglHU4_KTKecNbdDbzsYwJWmbuE8UpU_gpxkpqOMescnv_77XZa20dcHvwgI0L1ly5mgpUR2SAKi",
    tugasUtama:
      "Pengawasan fisik infrastruktur gampong (jalan rabat beton, drainase jurong, tanggul pesisir), tata ruang gampong, dan program padat karya tunai (PKT).",
    masaBakti: "2023–2029",
    status: "Aktif",
    focusLabel: "Fokus Pelayanan",
    focusValue: "Infrastruktur",
  },
];

export const kewilayahanData: JurongAparaturItem[] = [
  {
    id: "jurong-01",
    nomor: "Jurong 01",
    nama: "Tgk. Ibrahim Ali",
    jabatan: "Ulee Jurong Cot Meurak",
    foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK_T_VvfRonON07_bc2zdt8ZM-PmPiy5WCfW73G94MuhQiy7WaxVCqv6B_7b8vWc1bIhGkuFiFaRT_fdsmOvHkws_bYcqb-G29fAWINF1fextP9_UojINL4ttGwQWlMiqLfi_u1Oc3Tjwwe_GvLkoigDyxmr3TvCYXVs04IQn4BsEJDjbu3mVfCa6dPEIvjBULiPZzJJZFUJT4IzZ49WtvkWBF_QyHqLK9PC7NTJLq",
    deskripsi:
      "Memimpin koordinasi ketentraman warga, kebersihan lingkungan, dan pos ronda di wilayah perbukitan & permukiman Cot Meurak.",
    rt: "03 RT",
    kk: "~210 KK",
  },
  {
    id: "jurong-02",
    nomor: "Jurong 02",
    nama: "Mukhlis Ismail",
    jabatan: "Ulee Jurong Lam Wek",
    foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuBohzsDMS6yCZXFZX4OMJ29t7JcllrWGsNItKsdsqMDBYVkuq23Zsw1nQ_Hbhh4DAspUdI_dT2wgniNPhUYP5lQKy3qr1jT2zZz95c_E6Tj1ECOxk5xMJGBs98iJpFLU2yaH3HZoJOrgIzpDJwD700WONIznHJwII9A-zO8ACo2pV3FdetK041K-NK7Ul6so3hRTJAUiUUb60HvSO4CDNIIykKmNs4tF8VKh3-7FNQk",
    deskripsi:
      "Pusat kawasan perumahan utama dan jalur perdagangan lintas barat. Mengawal kegiatan gotong royong terpadu antar warga.",
    rt: "04 RT",
    kk: "~260 KK",
  },
  {
    id: "jurong-03",
    nomor: "Jurong 03",
    nama: "Syamsuddin",
    jabatan: "Ulee Jurong Meunasah Barat",
    foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK_T_VvfRonON07_bc2zdt8ZM-PmPiy5WCfW73G94MuhQiy7WaxVCqv6B_7b8vWc1bIhGkuFiFaRT_fdsmOvHkws_bYcqb-G29fAWINF1fextP9_UojINL4ttGwQWlMiqLfi_u1Oc3Tjwwe_GvLkoigDyxmr3TvCYXVs04IQn4BsEJDjbu3mVfCa6dPEIvjBULiPZzJJZFUJT4IzZ49WtvkWBF_QyHqLK9PC7NTJLq",
    deskripsi:
      "Mengawal ketertiban kawasan sekitar meunasah utama, balai pengajian, serta fasilitas keagamaan terpadu gampong.",
    rt: "03 RT",
    kk: "~195 KK",
  },
  {
    id: "jurong-04",
    nomor: "Jurong 04",
    nama: "T. Iskandar",
    jabatan: "Ulee Jurong Pante",
    foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIn3zJKLSb5QPiornXaneQwzk4j5zm0eG8XhWmIxosmYneOSR_0p9NnAvKJKpHNiPCa-GVWc_5hGdm_eeYOpOv4M-q0k5x1LRYdLnSC7UMZjgcc7LJfzxAapmodJMMM1XxYt1zLD-hoeHbFR-h-btXNYS1dOeuRglHU4_KTKecNbdDbzsYwJWmbuE8UpU_gpxkpqOMescnv_77XZa20dcHvwgI0L1ly5mgpUR2SAKi",
    deskripsi:
      "Kawasan pesisir pantai dan muara nelayan. Mengoordinasikan penataan tempat tambat perahu dan keselamatan lingkungan bahari.",
    rt: "03 RT",
    kk: "~180 KK",
  },
];

export const lembagaAdatData: LembagaAdatItem[] = [
  {
    title: "Tuha Peut Gampong (TPG)",
    subtitle: "Badan Permusyawaratan & Legislasi Gampong",
    ketua: "Ketua TPG: Drs. Tgk. H. Syarifuddin, M.Ag.",
    icon: "scale",
    deskripsi:
      "Mitra strategis Keuchik dalam perumusan Qanun/Reusam Gampong, pengawasan APBG, serta menyerap dan menindaklanjuti aspirasi warga melalui musyawarah gampong (Musdes).",
    items: [
      "Fungsi Legislasi: Membahas & menyepakati rancangan reusam",
      "Fungsi Pengawasan: Memastikan realisasi APBG sesuai RKP",
      "Fungsi Aspirasi: Menampung keluhan dan kebutuhan masyarakat",
    ],
  },
  {
    title: "Lembaga Adat Blang & Laot",
    subtitle: "Kearifan Pengelolaan Alam Pesisir & Sawah",
    ketua: "Keujruen Blang: Tgk. Hasbi Daud • Panglima Laot: Pawang Sulaiman",
    icon: "sprout",
    deskripsi:
      "Pengawal hukum adat meulaot bagi nelayan tradisional pesisir Lam Awe dan tata kelola pembagian air irigasi sawah (Keujruen Blang) demi kelestarian ketahanan pangan lokal.",
    items: [
      "Hukum Adat Laot: Larangan melaut di hari pantang adat (Jumat)",
      "Kenduri Blang: Ritual tahunan adat doa turun ke sawah bersama",
      "Penyelesaian Sengketa: Musyawarah perdamaian adat nelayan & petani",
    ],
  },
  {
    title: "Kelembagaan Kemasyarakatan",
    subtitle: "Pemuda, Karang Taruna, dan TP-PKK Gampong",
    ketua: "Ketua Pemuda: Aris Munandar, S.Pd. • Ketua TP-PKK: Ny. Rahmawati",
    icon: "users",
    deskripsi:
      "Motor penggerak kegiatan generasi muda di bidang olahraga, kebersihan, dan sosial kemanusiaan, serta pemberdayaan kesejahteraan keluarga, posyandu, dan ekonomi perempuan.",
    items: [
      "Pemuda & Olahraga: Turnamen antar jurong & tim siaga bencana",
      "TP-PKK Gampong: Posyandu balita-lansia & pelatihan kerajinan",
      "Majelis Taklim: Pengajian rutin bulanan ibu-ibu di meunasah",
    ],
  },
];

export const tupoksiMatriksData: TupoksiRowItem[] = [
  {
    jabatan: "Keuchik Gampong",
    pejabat: "Teuku Rahmat Syahputra, S.Sos.",
    fungsi: "Penanggung Jawab Umum Kebijakan & Keuangan Gampong",
    dasarHukum: "SK Bupati Aceh Besar 2023",
    status: "Bertugas",
  },
  {
    jabatan: "Sekretaris Desa",
    pejabat: "Zulkifli, S.E.",
    fungsi: "Koordinator PPKD & Penyelenggara Administrasi Dinas",
    dasarHukum: "SK Keuchik No. 02/2023",
    status: "Bertugas",
  },
  {
    jabatan: "Kaur Keuangan",
    pejabat: "Munawir, A.Md.",
    fungsi: "Bendahara Pengeluaran & Pengarsipan Bukti Transaksi",
    dasarHukum: "SK Keuchik No. 04/2023",
    status: "Bertugas",
  },
  {
    jabatan: "Kasi Pemerintahan",
    pejabat: "M. Syahrul, S.IP.",
    fungsi: "Pelayanan Surat Pengantar & Verifikasi Data Kependudukan",
    dasarHukum: "SK Keuchik No. 05/2023",
    status: "Bertugas",
  },
  {
    jabatan: "4 Ulee Jurong",
    pejabat: "Ulee Jurong (Kolektif)",
    fungsi: "Ketentraman, Kerukunan Masyarakat & Pembagian Undangan",
    dasarHukum: "SK Keuchik No. 08/2023",
    status: "Bertugas",
  },
];

export const dasarHukumData = [
  "Undang-Undang Republik Indonesia No. 6 Tahun 2014 tentang Desa.",
  "Undang-Undang Republik Indonesia No. 11 Tahun 2006 tentang Pemerintahan Aceh (UUPA).",
  "Qanun Aceh No. 9 Tahun 2008 tentang Pembinaan Kehidupan Adat dan Adat Istiadat.",
  "Peraturan Bupati Aceh Besar tentang Susunan Organisasi dan Tata Kerja Pemerintah Gampong.",
];

export const downloadSotkData = {
  fileName: "SOTK-LamAwe-2023.pdf",
  fileSize: "2.4 MB",
  description:
    "Dokumen resmi memuat lampiran bagan grafis garis koordinasi, tupoksi lengkap, dan salinan Surat Keputusan.",
  lastUpdated: "15 Januari 2024",
};
