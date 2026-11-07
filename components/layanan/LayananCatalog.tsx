"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  X,
  BadgeCheck,
  Clock,
  Banknote,
  ArrowRight,
  ShieldAlert,
  FileText,
  Building2,
  Users2,
  MapPin,
  Sparkles,
  SearchX,
  HeartHandshake,
  HelpCircle,
  FileCheck,
} from "lucide-react";

export interface LayananItem {
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

const servicesData: LayananItem[] = [
  {
    id: "1",
    slug: "surat-keterangan-domisili",
    nama: "Surat Keterangan Domisili",
    kategori: "kependudukan",
    kategoriLabel: "Kependudukan",
    deskripsi:
      "Surat bukti keterangan tempat tinggal resmi bagi warga yang bertempat tinggal sementara maupun tetap di Gampong Lam Awe.",
    waktu: "1 Hari Kerja",
    biaya: "Gratis (Rp 0)",
    icon: "badge",
  },
  {
    id: "2",
    slug: "surat-keterangan-usaha",
    nama: "Surat Keterangan Usaha (SKU)",
    kategori: "usaha",
    kategoriLabel: "Usaha & Niaga",
    deskripsi:
      "Keterangan legalitas aktivitas usaha mikro dan UMKM warga untuk keperluan perbankan, KUR, NIB, atau pengajuan bantuan modal usaha.",
    waktu: "1 - 2 Hari Kerja",
    biaya: "Gratis (Rp 0)",
    icon: "store",
  },
  {
    id: "3",
    slug: "surat-pengantar-skck",
    nama: "Surat Pengantar SKCK",
    kategori: "kependudukan",
    kategoriLabel: "Kamtibmas",
    deskripsi:
      "Rekomendasi pengantar dari Keuchik Lam Awe untuk pengurusan Surat Keterangan Catatan Kepolisian di Polsek Peukan Bada.",
    waktu: "30 Menit",
    biaya: "Gratis (Rp 0)",
    icon: "police",
  },
  {
    id: "4",
    slug: "surat-keterangan-tidak-mampu",
    nama: "Surat Keterangan Tidak Mampu (SKTM)",
    kategori: "sosial",
    kategoriLabel: "Kesejahteraan Sosial",
    deskripsi:
      "Surat rekomendasi untuk keringanan biaya sekolah, pengajuan beasiswa, jaminan BPJS PBI, atau kepesertaan bansos pemerintah.",
    waktu: "1 Hari Kerja",
    biaya: "Gratis (Rp 0)",
    icon: "heart",
  },
  {
    id: "5",
    slug: "surat-pengantar-akta-kelahiran-kematian",
    nama: "Surat Pengantar Akta Kelahiran & Kematian",
    kategori: "kependudukan",
    kategoriLabel: "Kependudukan",
    deskripsi:
      "Pengantar pelaporan peristiwa kelahiran putra-putri gampong dan pencatatan peristiwa kematian warga ke Disdukcapil Aceh Besar.",
    waktu: "1 Hari Kerja",
    biaya: "Gratis (Rp 0)",
    icon: "users",
  },
  {
    id: "6",
    slug: "surat-keterangan-tanah-sporadik",
    nama: "Surat Keterangan Riwayat Tanah & Sporadik",
    kategori: "pertanahan",
    kategoriLabel: "Pertanahan",
    deskripsi:
      "Surat pernyataan penguasaan fisik bidang tanah adat / perumahan gampong dan rekomendasi keabsahan kepemilikan hak waris.",
    waktu: "3 - 5 Hari Kerja",
    biaya: "Gratis (Rp 0)",
    icon: "map",
  },
];

export default function LayananCatalog() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "Semua Kategori" },
    { key: "kependudukan", label: "Kependudukan & Identitas" },
    { key: "usaha", label: "Usaha & Perekonomian" },
    { key: "sosial", label: "Kesejahteraan Sosial" },
    { key: "pertanahan", label: "Pertanahan & Umum" },
  ];

  const filteredServices = useMemo(() => {
    return servicesData.filter((item) => {
      const matchCat =
        selectedCategory === "all" || item.kategori === selectedCategory;
      const matchQuery =
        search === "" ||
        item.nama.toLowerCase().includes(search.toLowerCase()) ||
        item.deskripsi.toLowerCase().includes(search.toLowerCase()) ||
        item.kategoriLabel.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [search, selectedCategory]);

  return (
    <div className="flex flex-col gap-6">
      {/* Search & Filter Controls Card */}
      <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col gap-4">
        {/* Input */}
        <div className="relative w-full">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nama surat, perizinan, atau kata kunci (contoh: domisili, usaha, waris, skck)..."
            className="w-full h-12 pl-12 pr-10 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] text-sm text-[var(--color-brand-heading)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:bg-white transition-all"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-gray-200 text-gray-400 transition-colors"
              aria-label="Hapus kata kunci"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                  isActive
                    ? "bg-[var(--color-brand-primary)] text-white shadow-xs"
                    : "bg-[var(--color-brand-surface)] text-[var(--color-brand-body)] hover:text-[var(--color-brand-heading)] hover:bg-gray-100 border border-[var(--color-brand-border)]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Counter bar */}
      <div className="flex items-center justify-between text-xs text-[var(--color-brand-body)] px-1">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[var(--color-brand-heading)] text-sm">
            Direktori Layanan Surat & Dokumen
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[var(--color-brand-primary)] font-mono font-bold">
            {filteredServices.length} Layanan
          </span>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 font-medium text-emerald-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Standar Pelayanan Publik SP4N LAPOR & Bebas Pungli
        </span>
      </div>

      {/* Services Grid */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((srv) => (
            <article
              key={srv.id}
              className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[var(--color-brand-accent)] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header card */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-[var(--color-brand-primary)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[var(--color-brand-surface)] text-[var(--color-brand-accent)] border border-[var(--color-brand-border)]">
                    {srv.kategoriLabel}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[var(--color-brand-heading)] group-hover:text-[var(--color-brand-primary)] transition-colors line-clamp-1">
                  {srv.nama}
                </h3>
                <p className="text-xs text-[var(--color-brand-body)] mt-2 leading-relaxed line-clamp-3">
                  {srv.deskripsi}
                </p>

                {/* Metadata badges */}
                <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-[var(--color-brand-border)] text-xs">
                  <div className="p-2.5 rounded-xl bg-[var(--color-brand-surface)]">
                    <span className="text-[10px] uppercase font-medium text-[var(--color-brand-body)] block">
                      Waktu Proses
                    </span>
                    <span className="font-semibold text-[var(--color-brand-heading)] flex items-center gap-1 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-[var(--color-brand-accent)]" />
                      {srv.waktu}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[var(--color-brand-surface)]">
                    <span className="text-[10px] uppercase font-medium text-[var(--color-brand-body)] block">
                      Biaya Retribusi
                    </span>
                    <span className="font-semibold text-emerald-700 flex items-center gap-1 mt-0.5">
                      <Banknote className="w-3.5 h-3.5 text-emerald-600" />
                      {srv.biaya}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-5 pt-3">
                <Link
                  href={`/layanan/${srv.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  <span>Lihat Syarat & Ajukan</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-12 text-center flex flex-col items-center justify-center">
          <div className="w-14 h-14 rounded-2xl bg-gray-100 text-gray-400 flex items-center justify-center mb-4">
            <SearchX className="w-7 h-7" />
          </div>
          <h3 className="text-base font-bold text-[var(--color-brand-heading)]">
            Layanan Tidak Ditemukan
          </h3>
          <p className="text-xs text-[var(--color-brand-body)] max-w-sm mt-1">
            Tidak ada permohonan atau jenis surat yang cocok dengan kata kunci &ldquo;{search}&rdquo;. Silakan gunakan kata kunci lain atau reset filter.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setSelectedCategory("all");
            }}
            className="mt-5 px-4 py-2 rounded-xl bg-[var(--color-brand-primary)] text-white text-xs font-semibold"
          >
            Tampilkan Semua Layanan
          </button>
        </div>
      )}
    </div>
  );
}

