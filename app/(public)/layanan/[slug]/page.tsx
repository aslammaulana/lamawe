import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  Banknote,
  ChevronRight,
  ShieldCheck,
  FileText,
  Building2,
  Phone,
  Store,
  FolderDown,
  Scale,
  CheckCircle2,
  Calendar,
  HelpCircle,
  ExternalLink,
  Search,
} from "lucide-react";
import LayananDetailClient from "@/components/layanan/LayananDetailClient";

interface ServiceConfig {
  nama: string;
  kategori: string;
  kodeSOP: string;
  deskripsi: string;
  waktu: string;
  biaya: string;
  icon: string;
  requirements: Array<{ id: string; label: string; desc: string }>;
  steps: Array<{ title: string; actor: string; desc: string }>;
}

const servicesDirectory: Record<string, ServiceConfig> = {
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const srv = servicesDirectory[slug];
  if (!srv) {
    return {
      title: "Layanan Desa - Gampong Lam Awe",
    };
  }
  return {
    title: `${srv.nama} - Layanan Gampong Lam Awe`,
    description: srv.deskripsi,
  };
}

export default async function DetailLayananPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesDirectory[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8 pb-16">
      {/* Breadcrumb */}
      <nav aria-label="Jalur Navigasi" className="pt-2">
        <ol className="flex items-center flex-wrap gap-2 text-xs text-[var(--color-brand-body)]">
          <li className="flex items-center gap-1.5">
            <Link
              href="/"
              className="hover:text-[var(--color-brand-accent)] transition-colors"
            >
              Beranda
            </Link>
          </li>
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <Link
              href="/layanan"
              className="hover:text-[var(--color-brand-accent)] transition-colors"
            >
              Layanan Desa
            </Link>
          </li>
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="font-semibold text-[var(--color-brand-heading)] truncate"
          >
            {service.nama}
          </li>
        </ol>
      </nav>

      {/* Hero Header Card */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold">
                <Store className="w-3.5 h-3.5" />
                {service.kategori}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-mono text-xs font-bold">
                AKTIF • REGULASI 2026
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
              {service.nama}
            </h1>
            <p className="text-xs sm:text-sm text-[var(--color-brand-body)] mt-3 leading-relaxed">
              {service.deskripsi}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-4 text-xs">
              <div className="flex items-center gap-1.5 font-mono font-semibold text-[var(--color-brand-primary)] bg-[var(--color-brand-surface)] px-3 py-1.5 rounded-lg border border-[var(--color-brand-border)]">
                <ShieldCheck className="w-4 h-4" />
                <span>KODE RESMI: {service.kodeSOP}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[var(--color-brand-body)]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Sah Hukum untuk Keperluan Bank, NIB, & Instansi Resmi</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-2.5">
            <a
              href="#persyaratan-berkas"
              className="h-11 px-5 rounded-xl bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <span>Ajukan Sekarang</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#unduh-blangko"
              className="h-11 px-5 rounded-xl bg-[var(--color-brand-surface)] hover:bg-gray-100 border border-[var(--color-brand-border)] text-[var(--color-brand-heading)] font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <FolderDown className="w-4 h-4 text-[var(--color-brand-accent)]" />
              <span>Unduh Blangko</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2-Column Content Grid: Main (8) + Sidebar (4) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Column (8) */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Quick Fact Cards (Waktu & Biaya) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[var(--color-brand-primary)] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-blue-50 text-[var(--color-brand-primary)] font-bold">
                  SOP Efektif
                </span>
              </div>
              <div>
                <span className="text-xs text-[var(--color-brand-body)] block">
                  Estimasi Waktu Proses
                </span>
                <span className="text-xl font-bold text-[var(--color-brand-heading)] font-mono">
                  {service.waktu}
                </span>
              </div>
              <p className="text-[11px] text-[var(--color-brand-body)] mt-3 pt-3 border-t border-[var(--color-brand-border)]">
                Jika berkas lengkap terunggah dan Keuchik berada di tempat kerja.
              </p>
            </div>

            <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Banknote className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold">
                  Resmi Gampong
                </span>
              </div>
              <div>
                <span className="text-xs text-[var(--color-brand-body)] block">
                  Biaya Retribusi Administrasi
                </span>
                <span className="text-xl font-bold text-emerald-700 font-mono">
                  {service.biaya}
                </span>
              </div>
              <p className="text-[11px] text-[var(--color-brand-body)] mt-3 pt-3 border-t border-[var(--color-brand-border)]">
                Bebas segala bentuk pungutan liar sesuai ketentuan Perdes No. 03/2024.
              </p>
            </div>
          </div>

          {/* Interactive Checklist & Modal Application Component */}
          <section id="persyaratan-berkas">
            <LayananDetailClient
              slug={slug}
              namaLayanan={service.nama}
              kodeSOP={service.kodeSOP}
              requirements={service.requirements}
            />
          </section>

          {/* 4-Step SOP Timeline */}
          <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col gap-6">
            <div>
              <span className="text-xs font-semibold text-[var(--color-brand-accent)] uppercase tracking-wider block">
                Tahapan Pengurusan
              </span>
              <h2 className="text-xl font-bold text-[var(--color-brand-heading)] mt-0.5">
                Standar Operasional Prosedur (SOP)
              </h2>
              <p className="text-xs text-[var(--color-brand-body)] mt-1">
                Alur pengajuan dirancang singkat, transparan, dan dapat dipantau langsung setiap tahapannya.
              </p>
            </div>

            <div className="space-y-4">
              {service.steps.map((st, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)]">
                  <div className="w-9 h-9 rounded-xl bg-[var(--color-brand-primary)] text-white font-bold text-sm flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <h3 className="text-sm font-bold text-[var(--color-brand-heading)]">
                        {st.title}
                      </h3>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white text-[var(--color-brand-accent)] font-semibold border border-[var(--color-brand-border)]">
                        {st.actor}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--color-brand-body)] leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Download Blangko Section */}
          <section
            id="unduh-blangko"
            className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[var(--color-brand-heading)]">
                  Blangko Formulir Permohonan Resmi ({service.nama})
                </h3>
                <p className="text-[11px] text-[var(--color-brand-body)] mt-0.5">
                  Format: PDF & DOCX • 245 KB • Update Regulasi Gampong TA 2026
                </p>
              </div>
            </div>
            <a
              href="#unduh"
              className="h-10 px-4 rounded-xl bg-[var(--color-brand-surface)] hover:bg-gray-100 border border-[var(--color-brand-border)] text-[var(--color-brand-accent)] font-semibold text-xs flex items-center justify-center gap-2 transition-colors shrink-0"
            >
              <FolderDown className="w-4 h-4" />
              <span>Unduh Berkas</span>
            </a>
          </section>

          {/* Syariat Law Compliance Notice */}
          <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-6 flex items-start gap-4">
            <Scale className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900 leading-relaxed">
              <strong className="block font-bold text-sm mb-1 text-amber-950">
                Kepatuhan Adat & Syariat Gampong Lam Awe
              </strong>
              Sesuai Qanun Aceh dan kearifan lokal Gampong Lam Awe, seluruh dokumen yang diterbitkan wajib berlandaskan data yang benar, bebas manipulasi informasi, dan digunakan untuk kemaslahatan serta kepatuhan hukum syariat Islam.
            </div>
          </div>
        </div>

        {/* Sidebar Column (4) */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          {/* Tracking Status Card */}
          <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[var(--color-brand-primary)] flex items-center justify-center shrink-0">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[var(--color-brand-heading)]">
                  Lacak Berkas Pengajuan
                </h3>
                <span className="text-[11px] text-[var(--color-brand-body)]">
                  Pantau proses verifikasi dokumen
                </span>
              </div>
            </div>

            <p className="text-xs text-[var(--color-brand-body)] leading-relaxed">
              Masukkan nomor tiket permohonan yang Anda peroleh saat registrasi online atau dari tanda terima loket:
            </p>

            <form action="/layanan/status" method="GET" className="flex flex-col gap-2.5">
              <input
                type="text"
                name="ticket"
                placeholder="#LMA-2026-..."
                className="w-full h-10 px-3 bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] rounded-xl font-mono text-xs uppercase focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]"
              />
              <button
                type="submit"
                className="w-full h-10 rounded-xl bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Cek Progres Surat</span>
              </button>
            </form>
          </div>

          {/* Helpdesk & Officer Contact */}
          <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[var(--color-brand-heading)]">
                  Pusat Bantuan & Loket
                </h3>
                <span className="text-[11px] text-[var(--color-brand-body)]">
                  Konsultasi berkas & layanan khusus
                </span>
              </div>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)]">
                <span className="text-[11px] text-gray-500 block">Kasi Pelayanan Umum:</span>
                <span className="font-bold text-[var(--color-brand-heading)] block mt-0.5">
                  Teuku Ridwan
                </span>
                <span className="font-mono text-[11px] text-[var(--color-brand-accent)] mt-0.5 block">
                  0812-3456-7890 (Jam Kerja)
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)]">
                <span className="text-[11px] text-gray-500 block">Kantor Pelayanan Desa:</span>
                <span className="font-bold text-[var(--color-brand-heading)] block mt-0.5">
                  Gampong Lam Awe, Peukan Bada
                </span>
                <span className="text-[11px] text-[var(--color-brand-body)] mt-0.5 block">
                  Buka: Senin - Jumat (08.30 - 15.30)
                </span>
              </div>
            </div>

            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-10 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Meja Layanan</span>
            </a>
          </div>

          {/* Quick links to other services */}
          <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-heading)]">
              Layanan Administrasi Lainnya
            </h4>
            <div className="space-y-2 text-xs">
              <Link
                href="/layanan/surat-keterangan-domisili"
                className="block p-2.5 rounded-lg hover:bg-blue-50/60 text-[var(--color-brand-body)] hover:text-[var(--color-brand-primary)] transition-colors"
              >
                &bull; Surat Keterangan Domisili
              </Link>
              <Link
                href="/layanan/surat-pengantar-skck"
                className="block p-2.5 rounded-lg hover:bg-blue-50/60 text-[var(--color-brand-body)] hover:text-[var(--color-brand-primary)] transition-colors"
              >
                &bull; Surat Pengantar SKCK
              </Link>
              <Link
                href="/layanan/surat-keterangan-tidak-mampu"
                className="block p-2.5 rounded-lg hover:bg-blue-50/60 text-[var(--color-brand-body)] hover:text-[var(--color-brand-primary)] transition-colors"
              >
                &bull; Surat Keterangan Tidak Mampu (SKTM)
              </Link>
              <Link
                href="/layanan/pengaduan"
                className="block p-2.5 rounded-lg hover:bg-blue-50/60 text-[var(--color-brand-body)] hover:text-[var(--color-brand-primary)] transition-colors"
              >
                &bull; Pengaduan & Aspirasi Warga
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

