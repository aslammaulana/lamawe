import Link from "next/link";
import { MessageSquareWarning } from "lucide-react";

export function ApbdesCommunityBanner() {
  return (
    <div className="bg-surface border border-border-soft rounded-2xl p-6 lg:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
          <MessageSquareWarning className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-bold text-heading">
            Ada Masukan, Pertanyaan, atau Temuan Lapangan?
          </h4>
          <p className="text-xs sm:text-sm text-foreground mt-1">
            Laporkan temuan secara aman melalui kanal partisipasi warga atau konsultasikan langsung pada Musyawarah Gampong reguler.
          </p>
        </div>
      </div>
      <div className="shrink-0 w-full md:w-auto">
        <Link
          href="/layanan/pengaduan"
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-btn-blue hover:bg-btn-blue-hover text-white text-xs font-semibold shadow-xs transition-colors"
        >
          <MessageSquareWarning className="w-4 h-4" />
          <span>Kirim Pengaduan &amp; Aspirasi</span>
        </Link>
      </div>
    </div>
  );
}
