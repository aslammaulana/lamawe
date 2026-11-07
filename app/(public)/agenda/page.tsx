import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar as CalendarIcon,
  ChevronRight,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  CalendarDays,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Agenda & Kalender Kegiatan Desa - Gampong Lam Awe",
  description:
    "Jadwal musyawarah desa, posyandu balita & lansia, khanduri adat, dan gotong royong warga Gampong Lam Awe, Kecamatan Peukan Bada.",
};

const agendaItems = [
  {
    id: 1,
    title: "Gotong Royong Massal Saluran Lingkungan Jelang Ramadhan",
    kategori: "Adat & Lingkungan",
    tanggal: "Jumat, 27 Maret 2026",
    waktu: "07.30 - 10.30 WIB",
    lokasi: "Seluruh Jurong (Pusat Meunasah)",
    penanggungJawab: "Ketua Pemuda & Para Ulee Jurong",
    status: "Mendatang",
    deskripsi:
      "Aksi bersih serentak membersihkan parit saluran air, pemangkasan dahan pohon pelindung jalan, dan persiapan kompleks Meunasah menyambut bulan suci.",
  },
  {
    id: 2,
    title: "Posyandu Balita & Skrining PTM Lansia Bulan April",
    kategori: "Kesehatan",
    tanggal: "Senin, 06 April 2026",
    waktu: "08.30 - 12.00 WIB",
    lokasi: "Balai Posyandu Bungong Jeumpa Lam Awe",
    penanggungJawab: "Bidan Desa & Kader PKK",
    status: "Mendatang",
    deskripsi:
      "Penimbangan berat badan, imunisasi wajib, pemberian vitamin A, dan pemeriksaan tekanan darah serta gula darah gratis bagi warga lansia.",
  },
  {
    id: 3,
    title: "Musyawarah Desa (Musdes) Pembahasan BLT Dana Desa Triwulan II",
    kategori: "Pemerintahan",
    tanggal: "Kamis, 16 April 2026",
    waktu: "20.00 - 22.30 WIB (Ba'da Isya)",
    lokasi: "Aula Pertemuan Kantor Keuchik",
    penanggungJawab: "Tuha Peut & Keuchik Lam Awe",
    status: "Mendatang",
    deskripsi:
      "Validasi dan verifikasi faktual kelayakan calon penerima manfaat BLT Dana Desa bersama perwakilan tokoh masyarakat dan pendamping desa.",
  },
  {
    id: 4,
    title: "Khanduri Blang & Peusijuek Bibit Padi Musim Rendengan",
    kategori: "Adat & Tradisi",
    tanggal: "Rabu, 11 Maret 2026",
    waktu: "09.00 - Selesai",
    lokasi: "Blang Jurong Cot Meurak",
    penanggungJawab: "Keujruen Blang Chiek",
    status: "Terlaksana",
    deskripsi:
      "Doa bersama adat tani memohon berkah kelancaran panen dan bebas hama penyakit pada musim tanam rendengan tahun 2026.",
  },
];

export default function AgendaPage() {
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
          <li className="text-[var(--color-brand-body)]">Informasi</li>
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="font-semibold text-[var(--color-brand-heading)]"
          >
            Agenda Desa
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
            <CalendarDays className="w-3.5 h-3.5" />
            KALENDER KEGIATAN MASYARAKAT
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
            Agenda & Kegiatan Gampong Lam Awe
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 leading-relaxed">
            Jadwal kegiatan musyawarah perencanaan, layanan kesehatan posyandu, upacara adat khanduri blang, dan kerja bakti warga demi kelancaran koordinasi bersama.
          </p>
        </div>
      </section>

      {/* Agenda List */}
      <section className="space-y-4">
        {agendaItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[var(--color-brand-accent)] transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4 flex-1">
              {/* Date Box */}
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 text-[var(--color-brand-primary)] flex flex-col items-center justify-center shrink-0">
                <CalendarIcon className="w-5 h-5 mb-0.5" />
                <span className="text-[11px] font-bold font-mono text-center leading-tight">
                  {item.tanggal.split(",")[1]?.trim().substring(0, 6) || "2026"}
                </span>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[var(--color-brand-surface)] text-[var(--color-brand-accent)] text-xs font-semibold border border-[var(--color-brand-border)]">
                    {item.kategori}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      item.status === "Mendatang"
                        ? "bg-blue-100 text-[var(--color-brand-primary)]"
                        : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-[var(--color-brand-heading)]">
                  {item.title}
                </h2>
                <p className="text-xs text-[var(--color-brand-body)] mt-1 leading-relaxed">
                  {item.deskripsi}
                </p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 pt-3 border-t border-[var(--color-brand-border)] text-xs text-[var(--color-brand-body)]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    {item.waktu}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    {item.lokasi}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-gray-400" />
                    {item.penanggungJawab}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

