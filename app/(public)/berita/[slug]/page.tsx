import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  ChevronRight,
  Eye,
  ShieldCheck,
  User,
  Quote,
  Share2,
  Printer,
  Download,
  Building,
  HardHat,
  ArrowRight,
  CheckCircle2,
  FileText,
} from "lucide-react";

interface ArticleDetail {
  slug: string;
  docId: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  views: number;
  author: string;
  authorRole: string;
  location: string;
  imageUrl: string;
  imageCaption: string;
  leadParagraph: string;
  contentParagraphs: string[];
  quote1: {
    text: string;
    speaker: string;
    title: string;
  };
  statHighlight?: {
    title: string;
    desc: string;
    number: string;
    unit: string;
  };
  quote2?: {
    text: string;
    speaker: string;
    title: string;
  };
  technicalSpecs?: Array<{ label: string; value: string }>;
  tags: string[];
}

const articlesData: Record<string, ArticleDetail> = {
  "saluran-irigasi-jurong-cot-meurak": {
    slug: "saluran-irigasi-jurong-cot-meurak",
    docId: "WG-2026-0318",
    category: "Pembangunan & Infrastruktur",
    title:
      "Penyelesaian Pembangunan Saluran Irigasi Tersier Sawah Jurong Cot Meurak Tuntas Lebih Cepat Menjelang Musim Tanam",
    date: "Rabu, 18 Maret 2026",
    readTime: "4 Menit Baca",
    views: 342,
    author: "Teuku Ridwan (Kaur Pembangunan)",
    authorRole: "Humas Pemerintah Desa Lam Awe",
    location: "Jurong Cot Meurak, STA 0+450",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWtG63pCcLSnZgvptB0rYEkQXydiX-CZ2FooHNavPjM0RqLiLFF-KGe1EDdcH3uRkdgSgtf-wHcLe46QPJLGF8QfaaJlTPz2N3yOyxDPMuluSVKlm5JY5gIbSdhzAlDXdWBCKrkvjpVSeTDwnJHODg8HNmD8CeFTON9RxO0gfrSvjYLA-YnAHz9Lx7hKfn3HQasUiBAZgFA5gKeDlUUFe37mlNYM5JQCAuxsHY4zWU",
    imageCaption:
      "Kaur Pembangunan bersama perwakilan Tuha Peut dan Keujruen Blang saat pemeriksaan akhir debit air saluran irigasi Jurong Cot Meurak, Selasa (17/3/2026).",
    leadParagraph:
      "PEUKAN BADA — Pemerintah Gampong Lam Awe merampungkan 100 persen proyek rehabilitasi dan peningkatan saluran irigasi tersier sepanjang 450 meter di kawasan persawahan produktif Jurong Cot Meurak. Pengerjaan fisik yang bersumber dari alokasi Dana Desa (APBDes) Tahun Anggaran 2026 ini selesai dua pekan lebih awal dari target yang telah ditentukan.",
    contentParagraphs: [
      "Percepatan pengerjaan fisik ini dilakukan menyusul prakiraan Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) mengenai masuknya awal musim tanam rendengan di kawasan Aceh Besar pada akhir bulan ini. Keberadaan saluran irigasi permanen dengan konstruksi beton bertulang ini diharapkan mampu mengairi sedikitnya 38 hektare hamparan sawah produktif yang digarap oleh lebih dari 65 kepala keluarga petani setempat.",
      "Alokasi anggaran kegiatan ini tercantum secara transparan dalam Anggaran Pendapatan dan Belanja Gampong (APBG) Lam Awe 2026 Bidang Pelaksanaan Pembangunan Desa senilai Rp 48.500.000,-. Pelaksanaan kegiatan sepenuhnya menggunakan skema Swakelola Padat Karya Tunai Desa (PKTD), yang memprioritaskan pelibatan tenaga kerja buruh tani dan warga prasejahtera di lingkungan gampong.",
      "Pengerjaan yang awalnya direncanakan memakan waktu satu bulan penuh ini dapat dipadatkan menjadi 21 hari kalender berkat koordinasi berjenjang yang rapi antara Tim Pelaksana Kegiatan (TPK) Gampong dan lembaga adat pertanian setempat.",
      "Tokoh adat pertanian gampong, Keujruen Blang Chiek Lam Awe, Tgk. H. Syamsuddin, turut mengutarakan kepuasannya saat menguji cobakan aliran air dari hulu Krueng Raba ke percabangan Cot Meurak. Menurutnya, elevasi kemiringan saluran yang dibangun kali ini sangat presisi sehingga endapan lumpur (sedimentasi) dapat terbawa arus alami dengan lancar tanpa meluap ke pematang warga.",
      "Pemerintah gampong mengimbau seluruh keujruen blang dan petani pemilik petak sawah yang dilintasi aliran air agar bersama-sama memelihara kebersihan saluran, tidak membuang kemasan pestisida ke parit, serta rutin menyelenggarakan gotong royong pembersihan lumut.",
    ],
    quote1: {
      text: "Kami mengapresiasi semangat gotong royong masyarakat dan ketelitian panitia pelaksana. Dengan lancarnya pasokan air ini, potensi gagal panen saat kemarau dapat diminimalisasi secara drastis. Ini wujud komitmen transparansi Dana Desa yang langsung menyentuh ketahanan pangan gampong.",
      speaker: "Ir. H. Bukhari Daud",
      title: "Keuchik Gampong Lam Awe",
    },
    statHighlight: {
      title: "Skema Padat Karya Tunai (PKTD)",
      desc: "Penyerapan tenaga kerja buruh tani dan warga lokal",
      number: "28",
      unit: "Warga Terlibat",
    },
    quote2: {
      text: "Biasanya sebelum dibeton, tiap awal musim tanam kita harus mengadakan Khanduri Blang sambil mengeruk tanah runtuh berhari-hari. Saluran beton kedap air ini sangat kokoh, debit air tiba di petak paling ujung kurang dari dua puluh menit.",
      speaker: "Tgk. H. Syamsuddin",
      title: "Keujruen Blang Gampong Lam Awe",
    },
    technicalSpecs: [
      { label: "Panjang Saluran Total", value: "450,00 Meter" },
      { label: "Lebar Penampang Atas", value: "60 Centimeter" },
      { label: "Kedalaman Dinding", value: "70 Centimeter" },
      { label: "Durasi Pelaksanaan", value: "21 Hari Kalender" },
      { label: "Sumber Dana", value: "Dana Desa (DDS) TA 2026" },
      { label: "Nilai Realisasi Kas", value: "Rp 48.500.000" },
      { label: "Pelaksana Lapangan", value: "Tim Pelaksana Kegiatan (TPK) Lam Awe" },
    ],
    tags: ["#IrigasiPertanian", "#APBDes2026", "#JurongCotMeurak", "#DanaDesa", "#PeukanBada"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData[slug];
  if (!article) {
    return {
      title: "Warta Gampong - Desa Lam Awe",
    };
  }
  return {
    title: `${article.title} - Gampong Lam Awe`,
    description: article.leadParagraph.substring(0, 160),
  };
}

export default async function DetailBeritaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articlesData[slug] || articlesData["saluran-irigasi-jurong-cot-meurak"];

  return (
    <div className="flex flex-col gap-8 pb-16">
      {/* Breadcrumb */}
      <nav aria-label="Jalur Navigasi" className="pt-2">
        <ol className="flex items-center flex-wrap gap-2 text-xs text-[var(--color-brand-body)]">
          <li className="flex items-center gap-1.5">
            <Link href="/" className="hover:text-[var(--color-brand-accent)] transition-colors">
              Beranda
            </Link>
          </li>
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <Link href="/berita" className="hover:text-[var(--color-brand-accent)] transition-colors">
              Warta Gampong
            </Link>
          </li>
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="font-semibold text-[var(--color-brand-heading)] truncate max-w-xs sm:max-w-md">
            Detail Berita
          </li>
        </ol>
      </nav>

      {/* 2-Column Grid: Article (8 cols) + Sidebar (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Article Stream (8 cols) */}
        <article className="lg:col-span-8 bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col gap-6">
          {/* Category & Doc ID */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-[var(--color-brand-primary)] text-xs font-semibold">
                {article.category}
              </span>
              <span className="font-mono text-[11px] text-gray-500 bg-[var(--color-brand-surface)] px-2.5 py-0.5 rounded border border-[var(--color-brand-border)]">
                DOC ID: {article.docId}
              </span>
            </div>
            <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Rilis Resmi Desa
            </span>
          </div>

          {/* Headline Title */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--color-brand-heading)] tracking-tight leading-snug">
            {article.title}
          </h1>

          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 p-3 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] text-xs text-[var(--color-brand-body)]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[var(--color-brand-accent)]" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[var(--color-brand-accent)]" />
              <span className="font-semibold text-[var(--color-brand-heading)]">{article.author}</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-[11px] text-gray-400">
              <span className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" /> {article.views} Dilihat
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {article.readTime}
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex flex-col gap-2">
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 shadow-xs border border-[var(--color-brand-border)]">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 rounded">
                Lokasi: {article.location}
              </div>
            </div>
            <p className="text-[11px] text-[var(--color-brand-body)] italic px-1">
              {article.imageCaption}
            </p>
          </div>

          {/* Lead Paragraph */}
          <div className="text-sm sm:text-base font-semibold text-[var(--color-brand-heading)] leading-relaxed pt-2">
            {article.leadParagraph}
          </div>

          {/* Body Paragraphs & Quotes */}
          <div className="space-y-4 text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed">
            {article.contentParagraphs.slice(0, 2).map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {/* Quote 1: Keuchik */}
            {article.quote1 && (
              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-4 my-4">
                <Quote className="w-8 h-8 text-[var(--color-brand-primary)] shrink-0 opacity-70" />
                <div>
                  <blockquote className="italic font-medium text-[var(--color-brand-heading)] leading-relaxed">
                    &ldquo;{article.quote1.text}&rdquo;
                  </blockquote>
                  <cite className="block not-italic text-xs font-bold text-[var(--color-brand-primary)] mt-2">
                    — {article.quote1.speaker}, {article.quote1.title}
                  </cite>
                </div>
              </div>
            )}

            {/* Stat Highlight Banner */}
            {article.statHighlight && (
              <div className="p-4 rounded-2xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] flex flex-col sm:flex-row items-center justify-between gap-4 my-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[var(--color-brand-primary)] flex items-center justify-center font-bold text-xs shrink-0">
                    PKTD
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[var(--color-brand-heading)]">
                      {article.statHighlight.title}
                    </h4>
                    <span className="text-[11px] text-[var(--color-brand-body)]">
                      {article.statHighlight.desc}
                    </span>
                  </div>
                </div>
                <div className="flex items-baseline gap-2 bg-white px-4 py-2 rounded-xl border border-[var(--color-brand-border)] shrink-0">
                  <span className="text-xl font-bold font-mono text-[var(--color-brand-primary)]">
                    {article.statHighlight.number}
                  </span>
                  <span className="text-xs text-[var(--color-brand-body)]">
                    {article.statHighlight.unit}
                  </span>
                </div>
              </div>
            )}

            {article.contentParagraphs.slice(2, 4).map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {/* Quote 2: Keujruen Blang */}
            {article.quote2 && (
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-100 flex items-start gap-4 my-4">
                <Quote className="w-8 h-8 text-amber-700 shrink-0 opacity-70" />
                <div>
                  <blockquote className="italic font-medium text-[var(--color-brand-heading)] leading-relaxed">
                    &ldquo;{article.quote2.text}&rdquo;
                  </blockquote>
                  <cite className="block not-italic text-xs font-bold text-amber-800 mt-2">
                    — {article.quote2.speaker}, {article.quote2.title}
                  </cite>
                </div>
              </div>
            )}

            {/* Technical Specs Table */}
            {article.technicalSpecs && (
              <div className="overflow-hidden rounded-2xl border border-[var(--color-brand-border)] my-6">
                <div className="bg-[var(--color-brand-primary)] text-white px-4 py-3 flex items-center justify-between text-xs font-bold">
                  <span>Lembar Verifikasi Teknis Pekerjaan (P-01)</span>
                  <span className="font-mono bg-white/20 px-2 py-0.5 rounded text-[11px]">
                    Status: 100% Selesai (BASTP)
                  </span>
                </div>
                <div className="p-4 bg-[var(--color-brand-surface)] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {article.technicalSpecs.map((spec, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-white border border-[var(--color-brand-border)] flex items-center justify-between"
                    >
                      <span className="text-[var(--color-brand-body)]">{spec.label}</span>
                      <span className="font-mono font-bold text-[var(--color-brand-heading)]">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {article.contentParagraphs.slice(4).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Tags & Share */}
          <div className="pt-6 border-t border-[var(--color-brand-border)] flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-gray-400 font-semibold mr-1">Tagar:</span>
              {article.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-[var(--color-brand-surface)] text-[var(--color-brand-accent)] font-mono text-[11px] border border-[var(--color-brand-border)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Sidebar Column (4 cols) */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          {/* Download BASTP Card */}
          <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[var(--color-brand-heading)]">
                  Dokumen BASTP Resmi
                </h3>
                <span className="text-[11px] text-[var(--color-brand-body)]">
                  Berita Acara Serah Terima Pekerjaan
                </span>
              </div>
            </div>
            <p className="text-xs text-[var(--color-brand-body)] leading-relaxed">
              Unduh salinan dokumen Berita Acara Serah Terima Pekerjaan dan dokumentasi fisik proyek untuk transparansi warga:
            </p>
            <a
              href="#unduh"
              className="w-full h-10 rounded-xl bg-[var(--color-brand-surface)] hover:bg-gray-100 border border-[var(--color-brand-border)] text-[var(--color-brand-accent)] text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Unduh BASTP (PDF • 1.4 MB)</span>
            </a>
          </div>

          {/* Berita Terkait */}
          <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col gap-4">
            <h3 className="text-sm font-bold text-[var(--color-brand-heading)] uppercase tracking-wider">
              Berita Terkait Lainnya
            </h3>
            <div className="space-y-3 text-xs">
              <Link
                href="/berita/musrenbangdes-penetapan-rkp-gampong-2027"
                className="block p-3 rounded-xl bg-[var(--color-brand-surface)] hover:bg-blue-50/60 border border-[var(--color-brand-border)] transition-colors"
              >
                <span className="text-[10px] text-gray-400 font-mono block">08 Maret 2026</span>
                <span className="font-bold text-[var(--color-brand-heading)] hover:text-[var(--color-brand-primary)] block mt-0.5">
                  Musrenbangdes Penetapan RKP Gampong Lam Awe Tahun 2027 Digelar Terbuka
                </span>
              </Link>

              <Link
                href="/berita/penyaluran-blt-dana-desa-triwulan-i-2026"
                className="block p-3 rounded-xl bg-[var(--color-brand-surface)] hover:bg-blue-50/60 border border-[var(--color-brand-border)] transition-colors"
              >
                <span className="text-[10px] text-gray-400 font-mono block">12 Maret 2026</span>
                <span className="font-bold text-[var(--color-brand-heading)] hover:text-[var(--color-brand-primary)] block mt-0.5">
                  Penyaluran BLT Dana Desa Triwulan I T.A 2026 Selesai Tepat Sasaran
                </span>
              </Link>

              <Link
                href="/berita/pelatihan-wirausaha-olahan-ikan-bumdes"
                className="block p-3 rounded-xl bg-[var(--color-brand-surface)] hover:bg-blue-50/60 border border-[var(--color-brand-border)] transition-colors"
              >
                <span className="text-[10px] text-gray-400 font-mono block">04 Maret 2026</span>
                <span className="font-bold text-[var(--color-brand-heading)] hover:text-[var(--color-brand-primary)] block mt-0.5">
                  Pelatihan Wirausaha Olahan Ikan Laut bagi Ibu PKK dan BUMDes
                </span>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

