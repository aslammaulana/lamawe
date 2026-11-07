"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  FileText,
  Building,
  ArrowRight,
  X,
  Layers,
  Sparkles,
} from "lucide-react";

interface SearchResultItem {
  title: string;
  category: string;
  desc: string;
  href: string;
}

const searchableIndex: SearchResultItem[] = [
  {
    title: "Surat Keterangan Usaha (SKU)",
    category: "Layanan Desa",
    desc: "Syarat dan pengajuan online legalitas usaha mikro/UMKM untuk perbankan & KUR.",
    href: "/layanan/surat-keterangan-usaha",
  },
  {
    title: "Surat Keterangan Domisili",
    category: "Layanan Desa",
    desc: "Keterangan bukti tempat tinggal bagi warga berdomisili sementara maupun tetap.",
    href: "/layanan/surat-keterangan-domisili",
  },
  {
    title: "Surat Pengantar SKCK",
    category: "Layanan Desa",
    desc: "Rekomendasi Keuchik untuk pengurusan SKCK di Polsek Peukan Bada.",
    href: "/layanan/surat-pengantar-skck",
  },
  {
    title: "Surat Keterangan Tidak Mampu (SKTM)",
    category: "Layanan Desa",
    desc: "Rekomendasi beasiswa, keringanan biaya pendidikan, dan bansos.",
    href: "/layanan/surat-keterangan-tidak-mampu",
  },
  {
    title: "Transparansi APBDes 2026",
    category: "Transparansi Keuangan",
    desc: "Grafik pendapatan, belanja bidang 1-5, dan realisasi Dana Desa berjalan.",
    href: "/transparansi/apbdes",
  },
  {
    title: "Perencanaan Pembangunan (RPJM & RKP Desa)",
    category: "Transparansi",
    desc: "Arah pembangunan 6 tahun dan program prioritas tahun anggaran 2026.",
    href: "/transparansi/perencanaan",
  },
  {
    title: "Laporan Pertanggungjawaban (LPJ)",
    category: "Transparansi",
    desc: "Arsip LPJ APBDes audited dan laporan realisasi Dana Desa.",
    href: "/transparansi/laporan",
  },
  {
    title: "PPID & Keterbukaan Informasi Publik",
    category: "Transparansi",
    desc: "Standar operasional permohonan informasi publik sesuai UU KIP No. 14/2008.",
    href: "/transparansi/ppid",
  },
  {
    title: "Sejarah Gampong Lam Awe",
    category: "Profil Desa",
    desc: "Asal usul nama gampong, sejarah kebangkitan pasca tsunami 2004, dan linimasa.",
    href: "/profil/sejarah",
  },
  {
    title: "Visi & Misi 2023 - 2029",
    category: "Profil Desa",
    desc: "Visi Keuchik terpilih dan 5 pilar misi utama pembangunan gampong.",
    href: "/profil/visi-misi",
  },
  {
    title: "Peta & Wilayah Desa",
    category: "Profil Desa",
    desc: "Batas teritorial, pembagian 4 Jurong adat, dan koordinat GPS kantor.",
    href: "/profil/wilayah",
  },
  {
    title: "Struktur Organisasi Aparatur Gampong",
    category: "Profil Desa",
    desc: "Susunan SOTK Keuchik, Sekdes, Kaur, Kasi, Ulee Jurong, dan Tuha Peut.",
    href: "/profil/struktur",
  },
  {
    title: "Penyelesaian Pembangunan Saluran Irigasi Jurong Cot Meurak",
    category: "Warta Gampong",
    desc: "Rehabilitasi saluran irigasi tersier sawah 450 meter tuntas menjelang musim tanam.",
    href: "/berita/saluran-irigasi-jurong-cot-meurak",
  },
  {
    title: "Posyandu Balita & Lansia Terpadu Meunasah",
    category: "Warta Gampong",
    desc: "Cakupan imunisasi balita dan skrining lansia bulanan di Meunasah Tuha.",
    href: "/berita/posyandu-balita-dan-lansia-terpadu",
  },
  {
    title: "Data & Statistik Kependudukan",
    category: "Data Desa",
    desc: "Infografis demografi, piramida usia, IDM Mandiri, dan mata pencaharian.",
    href: "/data",
  },
  {
    title: "Potensi UMKM & BUMG Bungong Seulanga",
    category: "Potensi Desa",
    desc: "Produk olahan ikan keumamah, kerupuk tenggiri, dan unit usaha gampong.",
    href: "/potensi/umkm",
  },
  {
    title: "Potensi Wisata Pesisir Selat Malaka",
    category: "Potensi Desa",
    desc: "Panorama pantai pasir putih, sunset, dan sentra kuliner hasil laut segar.",
    href: "/potensi/wisata",
  },
  {
    title: "Layanan Pengaduan & Aspirasi Warga",
    category: "Layanan Desa",
    desc: "Kanal formulir resmi penyampaian keluhan fasilitas umum & tindak lanjut.",
    href: "/layanan/pengaduan",
  },
  {
    title: "Lacak Status Pengajuan Dokumen",
    category: "Layanan Desa",
    desc: "Cek perkembangan nomor tiket surat atau laporan pengaduan secara real-time.",
    href: "/layanan/status",
  },
  {
    title: "Kontak & Lokasi Kantor Keuchik",
    category: "Kontak",
    desc: "Alamat fisik, jam pelayanan dinas, nomor darurat 24 jam, dan peta lokasi.",
    href: "/kontak",
  },
];

export default function GlobalSearchClient() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQ);

  useEffect(() => {
    if (initialQ) {
      setQuery(initialQ);
    }
  }, [initialQ]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return searchableIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="flex flex-col gap-6">
      {/* Search Input Bar */}
      <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm">
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ketik kata kunci pencarian (misal: domisili, apbdes, irigasi, bumg)..."
            className="w-full h-12 pl-12 pr-10 rounded-xl border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] text-sm text-[var(--color-brand-heading)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:bg-white transition-all"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-[var(--color-brand-body)] px-1">
        <span>
          {query ? (
            <>
              Ditemukan <strong>{results.length}</strong> hasil untuk &ldquo;{query}&rdquo;
            </>
          ) : (
            "Silakan masukkan kata kunci untuk memulai pencarian di seluruh portal."
          )}
        </span>
      </div>

      {/* Results List */}
      {query && results.length > 0 && (
        <div className="space-y-3">
          {results.map((r, i) => (
            <Link
              key={i}
              href={r.href}
              className="block p-5 rounded-2xl bg-white border border-[var(--color-brand-border)] hover:border-[var(--color-brand-accent)] hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-[var(--color-brand-primary)]">
                  {r.category}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[var(--color-brand-primary)] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-base font-bold text-[var(--color-brand-heading)] group-hover:text-[var(--color-brand-primary)] transition-colors">
                {r.title}
              </h3>
              <p className="text-xs text-[var(--color-brand-body)] mt-1 leading-relaxed">
                {r.desc}
              </p>
            </Link>
          ))}
        </div>
      )}

      {query && results.length === 0 && (
        <div className="p-12 text-center bg-white border border-[var(--color-brand-border)] rounded-2xl">
          <h3 className="text-base font-bold text-[var(--color-brand-heading)]">
            Tidak Ada Hasil yang Cocok
          </h3>
          <p className="text-xs text-[var(--color-brand-body)] mt-1">
            Coba gunakan kata kunci yang lebih umum seperti: <em>surat, bantuan, berita, apbdes, kependudukan</em>.
          </p>
        </div>
      )}
    </div>
  );
}

