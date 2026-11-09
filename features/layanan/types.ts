export interface LayananSummaryItem {
  id: string;
  slug: string;
  nama: string;
  kategori: "kependudukan" | "usaha" | "sosial" | "pertanahan";
  kategoriLabel: string;
  deskripsi: string;
  waktu: string;
  biaya: string;
  icon: string;
}

export interface LayananRequirement {
  id: string;
  label: string;
  desc: string;
}

export interface LayananStep {
  title: string;
  actor: string;
  desc: string;
}

export interface LayananDetailConfig {
  nama: string;
  kategori: string;
  kodeSOP: string;
  deskripsi: string;
  waktu: string;
  biaya: string;
  icon: string;
  requirements: LayananRequirement[];
  steps: LayananStep[];
}

export interface PengaduanSopStage {
  label: string;
  duration: string;
}

export interface HelpdeskOfficer {
  name: string;
  role: string;
  phone: string;
  location: string;
  hours: string;
}

