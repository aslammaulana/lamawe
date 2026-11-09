import Link from "next/link";
import { FileText, Download } from "lucide-react";

export function ArticleDetailSidebar() {
  const relatedNews = [
    {
      href: "/berita/musrenbangdes-penetapan-rkp-gampong-2027",
      date: "08 Maret 2026",
      title: "Musrenbangdes Penetapan RKP Gampong Lam Awe Tahun 2027 Digelar Terbuka",
    },
    {
      href: "/berita/penyaluran-blt-dana-desa-triwulan-i-2026",
      date: "12 Maret 2026",
      title: "Penyaluran BLT Dana Desa Triwulan I T.A 2026 Selesai Tepat Sasaran",
    },
    {
      href: "/berita/pelatihan-wirausaha-olahan-ikan-bumdes",
      date: "04 Maret 2026",
      title: "Pelatihan Wirausaha Olahan Ikan Laut bagi Ibu PKK dan BUMDes",
    },
  ];

  return (
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
          {relatedNews.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="block p-3 rounded-xl bg-[var(--color-brand-surface)] hover:bg-blue-50/60 border border-[var(--color-brand-border)] transition-colors"
            >
              <span className="text-[10px] text-gray-400 font-mono block">{item.date}</span>
              <span className="font-bold text-[var(--color-brand-heading)] hover:text-[var(--color-brand-primary)] block mt-0.5">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}

