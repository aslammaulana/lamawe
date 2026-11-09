import Link from "next/link";
import { Home, Search, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="w-16 h-16 rounded-2xl bg-border-soft/60 text-btn-blue flex items-center justify-center font-bold text-2xl font-mono mb-6 shadow-xs border border-border-soft">
        404
      </div>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-heading mb-2">
        Halaman Tidak Ditemukan
      </h1>

      <p className="text-sm text-foreground max-w-md mx-auto mb-8 leading-relaxed">
        Mohon maaf, halaman yang Anda tuju tidak dapat ditemukan atau telah
        dipindahkan. Silakan kembali ke beranda atau pilih menu layanan berikut.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Link
          href="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-btn-blue hover:bg-btn-blue-hover text-white font-medium text-sm transition shadow-xs"
        >
          <Home size={16} />
          Kembali ke Beranda
        </Link>
        <Link
          href="/layanan"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-surface hover:bg-slate-50 text-accent-blue border border-border-soft font-medium text-sm transition shadow-2xs"
        >
          <Search size={16} />
          Daftar Layanan
        </Link>
        <Link
          href="/kontak"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-surface hover:bg-slate-50 text-foreground border border-border-soft font-medium text-sm transition shadow-2xs"
        >
          <Phone size={16} />
          Hubungi Perangkat Desa
        </Link>
      </div>
    </div>
  );
}
