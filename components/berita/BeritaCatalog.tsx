"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  Star,
  UserCheck,
  X,
  Share2,
  CheckCircle2,
  Send,
  Bell,
  Heart,
} from "lucide-react";

export interface BeritaItem {
  slug: string;
  title: string;
  category: string;
  categoryKey: string;
  date: string;
  readTime: string;
  summary: string;
  author: string;
  authorRole: string;
  imageUrl: string;
  isFeatured?: boolean;
}

const newsData: BeritaItem[] = [
  {
    slug: "saluran-irigasi-jurong-cot-meurak",
    title:
      "Penyelesaian Pembangunan Saluran Irigasi Tersier Sawah Jurong Cot Meurak Tuntas Lebih Cepat Menjelang Musim Tanam",
    category: "Pembangunan",
    categoryKey: "pembangunan",
    date: "18 Maret 2026",
    readTime: "3 Menit Baca",
    summary:
      "Pemerintah Gampong Lam Awe bersama Tuha Peut meresmikan berfungsinya kembali saluran irigasi tersier sepanjang 450 meter guna menunjang produktivitas panen padi musim rendengan warga Jurong Cot Meurak secara optimal dan berkelanjutan.",
    author: "Humas Gampong",
    authorRole: "Pemerintah Desa Lam Awe",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFcBVUM6lXJl1ZL6tNpHSLNtZfAsR_AaWthL0upRFDpff5WacR8kqp0by_dZ3OU2cYB4tmNSv91wb_SG3cNFhKWv5XPJPYiddM6-_F-n4ypP22NOg_6uh2UPT4eaF8gq1a4kJR79CEhmOcGotUubIXOQWwxbDuCgwvgHfdkgBkR37GpuAT5NYsAcuiBqSj8r9-QQch-mApUBrbVcBCg4-uyoxs7vCXiyQrOhLmi07v",
    isFeatured: true,
  },
  {
    slug: "posyandu-balita-dan-lansia-terpadu",
    title:
      "Posyandu Balita & Lansia Terpadu di Meunasah: Cakupan Imunisasi Capai 96%",
    category: "Kesehatan",
    categoryKey: "kesehatan",
    date: "15 Maret 2026",
    readTime: "4 Menit Baca",
    summary:
      "Kader Posyandu Bungong Jeumpa bersama tenaga medis Puskesmas Peukan Bada menuntaskan penimbangan balita dan skrining tensi lansia bulanan dengan antusiasme warga yang tinggi.",
    author: "Kaur Kesra",
    authorRole: "Bidang Pelayanan Sosial",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5kjNCL8pKMpFQHHB8wxotERGJDyYi-KV6mNAvjS7urBZkMl7A38IzAuAQBvbsqF3D63dkCAX9Y_oqbU9R-r7fwHsQ2To8r3EEs9nDEldh4lM76xjyvYKjPnwaUX4OcLtmbXHkajN0SyN1d8NugabXSWDYjdzs8TOXFVQUF8n_W-l5iuYbH8xKx9DIEroi3keEEmaAjSh35Cb_7tIU8FH6DCcMW_StgaYBBs2EEaLv",
  },
  {
    slug: "penyaluran-blt-dana-desa-triwulan-i-2026",
    title:
      "Penyaluran BLT Dana Desa Triwulan I T.A 2026 Selesai Tepat Sasaran bagi 45 KPM",
    category: "Sosial & Bantuan",
    categoryKey: "sosial",
    date: "12 Maret 2026",
    readTime: "3 Menit Baca",
    summary:
      "Penyaluran Bantuan Langsung Tunai tahap pertama telah diserahkan secara transparan dengan pengawalan Babinsa, Bhabinkamtibmas, dan pengawas Tuha Peut Gampong Lam Awe.",
    author: "Kaur Keuangan",
    authorRole: "Bendahara Gampong",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYzWX44Xr0IvxzjSyhBZ4OZIoMapVxBFizGBFnHHEaVcyTuNyaSJ1S9jGrohxscjuyKeW5i6ZrVSR-gyX9AP-RyCB_PiADYK9y2aWjN2e9L_n1yoOPpo4vMAARSdok0NVcTv6vYgWJT16oNrk_rb_T6rVygOdL2iJEZY3Ff3yE7vnyUq2gH-3PWCBp-I37o3Tq-ukkuYE6MnONvkkyNVtPsqiY8tIvcDHRXwLMdAvH",
  },
  {
    slug: "musrenbangdes-penetapan-rkp-gampong-2027",
    title:
      "Musrenbangdes Penetapan RKP Gampong Lam Awe Tahun 2027 Digelar Terbuka",
    category: "Pemerintahan",
    categoryKey: "pemerintahan",
    date: "08 Maret 2026",
    readTime: "5 Menit Baca",
    summary:
      "Musyawarah Perencanaan Pembangunan Gampong menetapkan skala prioritas penguatan ketahanan pangan lokal, perbaikan drainase pemukiman, dan digitalisasi layanan publik.",
    author: "Sekretariat Gampong",
    authorRole: "Tata Kelola Pemerintahan",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnzbfkGIseFKzIx1kxW33ge_voMuv_1rZL7bKLPE9WrKtP8jFvdB4NAWlkqVLwInJE9OxWlbQIGtA6P1VSP8IUG3W3t7IcBSeTU5S4SLmh70rOHdUJhjzjYiSJZEAyMLGMKkz4Eex-H89y0qMkmSRLFhPOo12IHNtYyHfh6c7omGpmvWnL1WvcESj4HYXKXc_Lr6aTim_iMJOE3nexw7TzCHRZUClDCZr9xd7GHbz8",
  },
  {
    slug: "pelatihan-wirausaha-olahan-ikan-bumdes",
    title:
      "Pelatihan Wirausaha Olahan Ikan Laut bagi Kelompok Ibu PKK dan BUMDes",
    category: "Pemberdayaan",
    categoryKey: "pembangunan",
    date: "04 Maret 2026",
    readTime: "4 Menit Baca",
    summary:
      "Mendorong kemandirian ekonomi pesisir melalui diversifikasi olahan keumamah higienis dan abon tuna dengan sertifikasi halal bagi kelompok usaha mikro perempuan gampong.",
    author: "Pengurus BUMDes",
    authorRole: "Bungong Seulanga",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9LxPgER1G81F6zJC_52rljbZXnlDqapDennjvpHXZ6cjbxURNfqXAWbrNAfLlahkXC9UhJASM9En3nEdLwGTnvu_Uohd6sT0DW81p-xpYb2wTWwT_fAVbYciGsE2SC6Wba9-MWwmY-8DlCfU8qtjcBYDqBR1E7p4fs-lCFsFBiKs7aZkmMahFwgluckm75JywrCJCaDiRjGBMTqSex1jyyhrz3L2YX9r2rJZjLPAq",
  },
  {
    slug: "jadwal-gotong-royong-sambut-ramadhan",
    title:
      "Jadwal Gotong Royong Kebersihan Saluran Gampong Jelang Bulan Ramadhan 1447 H",
    category: "Adat & Warga",
    categoryKey: "adat",
    date: "28 Februari 2026",
    readTime: "2 Menit Baca",
    summary:
      "Imum Mukim dan Keuchik Lam Awe mengimbau seluruh warga di 4 dusun (Jurong) membersihkan lingkungan pekarangan, meunasah, dan parit umum menyambut bulan suci.",
    author: "Ketua Pemuda",
    authorRole: "Karang Taruna Gampong",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9grPboIJvUeAZ_jQT3RXJg040ZtLD75kfvRpbjdARy2F-ghJJ0UWT8hbxBmjktsd-uz63U2CvNrOMxiDwjCgkpyGG4_26K6Qt4arhn2J22rfYUFYru3slLFeQwD_QCkppepiWsSt2iJ9WmIC5KG9sVKOAwyrX1kJyzLUxFfo7uYOcHgnoPAqbunSNto_-eQ_S8OQVRSg-B9SG5v4RP0x0GSus8-LI8-JfGA0Kv52J",
  },
  {
    slug: "sosialisasi-administrasi-kependudukan-digital",
    title:
      "Sosialisasi Administrasi Kependudukan Digital dan Pembaruan KK Terintegrasi",
    category: "Layanan Digital",
    categoryKey: "pemerintahan",
    date: "22 Februari 2026",
    readTime: "3 Menit Baca",
    summary:
      "Petugas registrasi desa membuka loket asistensi aktivasi Identitas Kependudukan Digital (IKD) serta validasi data sensus keluarga demi kepastian bansos dan akta sipil.",
    author: "Kaur Umum",
    authorRole: "Pelayanan Registrasi Warga",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_OJ7vNnBWC0SwMeZtx2LTjB0r8QGtJTdmDqIEx9PAgjlEL4jLeYvDAPZWR4DdoUjdst0U-w4WSVRThQh7H6l6Mm1MRT4EPFrw0PYtkspBJCHjk7ZXAq9an68C3R7yso87tyXhLMJKiDWDnsL_-gxvQnwBGZ2BKU96oirTAEntl5eY0ufpcnrNlfQrvz4uZjug0RWa1Zekl_abDjN6uMQvr_f_g2g8SqiZm2zuPXWt",
  },
];

export default function BeritaCatalog() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [waNumber, setWaNumber] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    { key: "all", label: "Semua Kategori (18)" },
    { key: "pembangunan", label: "Pembangunan & Fisik (6)" },
    { key: "pemerintahan", label: "Pemerintahan & Kebijakan (4)" },
    { key: "kesehatan", label: "Kesehatan & Posyandu (3)" },
    { key: "sosial", label: "Sosial & Bantuan (3)" },
    { key: "adat", label: "Adat & Keagamaan (2)" },
  ];

  const filteredNews = useMemo(() => {
    return newsData.filter((item) => {
      const matchCat =
        selectedCategory === "all" || item.categoryKey === selectedCategory;
      const matchSearch =
        search === "" ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.summary.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, selectedCategory]);

  const featured = newsData.find((n) => n.isFeatured);
  const regularNews = filteredNews.filter((n) => !n.isFeatured || search || selectedCategory !== "all");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (waNumber.trim().length >= 8) {
      setSubscribed(true);
      setTimeout(() => {
        setWaNumber("");
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Search Header Banner */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
            <Bell className="w-3.5 h-3.5" />
            KANAL INFORMASI & KABAR GAMPONG
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
            Warta & Berita Resmi Desa Lam Awe
          </h1>
          <p className="text-xs sm:text-sm text-[var(--color-brand-body)] mt-2 leading-relaxed">
            Informasi terkini pembangunan gampong, pengumuman keuchik, kegiatan gotong royong meunasah, dan dinamika kemasyarakatan di Kec. Peukan Bada, Aceh Besar.
          </p>
        </div>

        {/* Search Input */}
        <div className="w-full lg:w-80 shrink-0">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari judul atau topik..."
              className="w-full h-11 pl-10 pr-9 rounded-xl border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] text-xs text-[var(--color-brand-heading)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:bg-white transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((c) => {
          const isActive = selectedCategory === c.key;
          return (
            <button
              key={c.key}
              onClick={() => setSelectedCategory(c.key)}
              className={`h-9 px-4 rounded-full text-xs font-semibold shrink-0 transition-all ${
                isActive
                  ? "bg-[var(--color-brand-primary)] text-white shadow-xs"
                  : "bg-white border border-[var(--color-brand-border)] text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-gray-50"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {/* Featured Headline Hero Card (shown when no search filter active) */}
      {!search && selectedCategory === "all" && featured && (
        <article className="group bg-white border border-[var(--color-brand-border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-7/12 min-h-[260px] lg:min-h-[360px] bg-gray-100 overflow-hidden">
            <Image
              src={featured.imageUrl}
              alt={featured.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-brand-primary)] text-white text-xs font-semibold shadow-xs">
                <Star className="w-3.5 h-3.5 fill-current" />
                Warta Utama Gampong
              </span>
            </div>
          </div>

          <div className="w-full lg:w-5/12 p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--color-brand-body)] mb-2">
                <span className="px-2.5 py-0.5 rounded bg-blue-50 text-[var(--color-brand-primary)] font-semibold font-sans">
                  {featured.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.date}
                </span>
                <span>•</span>
                <span>{featured.readTime}</span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-[var(--color-brand-heading)] group-hover:text-[var(--color-brand-primary)] transition-colors leading-snug">
                <Link href={`/berita/${featured.slug}`}>{featured.title}</Link>
              </h2>

              <p className="text-xs text-[var(--color-brand-body)] mt-3 leading-relaxed line-clamp-3">
                {featured.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--color-brand-border)] mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-[var(--color-brand-primary)] flex items-center justify-center font-bold text-xs">
                  HG
                </div>
                <div>
                  <span className="text-xs font-bold text-[var(--color-brand-heading)] block">
                    {featured.author}
                  </span>
                  <span className="text-[11px] text-[var(--color-brand-body)]">
                    {featured.authorRole}
                  </span>
                </div>
              </div>

              <Link
                href={`/berita/${featured.slug}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-brand-primary)] hover:underline"
              >
                <span>Baca Lengkap</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </article>
      )}

      {/* News Grid (Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regularNews.map((item) => (
          <article
            key={item.slug}
            className="group bg-white border border-[var(--color-brand-border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[var(--color-brand-accent)] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-[var(--color-brand-primary)] text-xs font-semibold shadow-xs">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-brand-body)]">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>{item.readTime}</span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[var(--color-brand-heading)] group-hover:text-[var(--color-brand-primary)] transition-colors leading-snug line-clamp-2">
                  <Link href={`/berita/${item.slug}`}>{item.title}</Link>
                </h3>

                <p className="text-xs text-[var(--color-brand-body)] leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0 border-t border-[var(--color-brand-border)] mt-2 flex items-center justify-between text-xs">
              <span className="text-[var(--color-brand-body)]">{item.author}</span>
              <Link
                href={`/berita/${item.slug}`}
                className="font-semibold text-[var(--color-brand-primary)] hover:underline inline-flex items-center gap-1"
              >
                <span>Selengkapnya</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Subscription Alert Card */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-start gap-4 max-w-xl">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[var(--color-brand-primary)] flex items-center justify-center shrink-0">
            <Bell className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--color-brand-heading)]">
              Dapatkan Kabar Pengumuman Desa Langsung via WhatsApp
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-brand-body)] mt-1 leading-relaxed">
              Kanal siaran otomatis untuk surat edaran keuchik, jadwal penyaluran bansos BLT, imunisasi balita posyandu, dan gotong royong berkala.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-auto shrink-0 flex-1 max-w-md">
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
            <input
              type="tel"
              required
              value={waNumber}
              onChange={(e) => setWaNumber(e.target.value)}
              placeholder="Nomor WhatsApp (misal: 0812xxxx)"
              className="w-full h-11 px-3.5 rounded-xl border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] text-xs text-[var(--color-brand-heading)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] font-mono"
            />
            <button
              type="submit"
              className="h-11 px-5 rounded-xl bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white text-xs font-semibold shadow-xs flex items-center justify-center gap-1.5 shrink-0 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Daftar Siaran</span>
            </button>
          </form>

          {subscribed && (
            <div className="mt-2 p-2 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold flex items-center gap-1.5 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Nomor Anda berhasil didaftarkan ke buletin siaran resmi!</span>
            </div>
          )}

          <p className="text-[11px] text-[var(--color-brand-body)] mt-2">
            Data nomor telepon warga dilindungi kerahasiaannya sesuai UU PDP.
          </p>
        </div>
      </section>
    </div>
  );
}

