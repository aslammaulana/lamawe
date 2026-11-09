import Link from "next/link";
import { MessageSquare, Send, Phone } from "lucide-react";

export function AspirasiCtaGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[var(--color-brand-primary)] flex items-center justify-center mb-4">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-[var(--color-brand-heading)] mb-2">
            Kirim Aspirasi Digital
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed mb-4">
            Gunakan formulir digital terpadu gampong untuk menyampaikan aspirasi atau pengaduan secara terdata dan memperoleh nomor tiket pemantauan.
          </p>
        </div>
        <Link
          href="/layanan/pengaduan"
          className="w-full h-11 rounded-xl bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
        >
          <Send className="w-4 h-4" />
          <span>Buka Formulir Pengaduan & Aspirasi</span>
        </Link>
      </div>

      <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
            <Phone className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-[var(--color-brand-heading)] mb-2">
            Konsultasi WhatsApp Keuchik
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed mb-4">
            Warga juga dapat berkonsultasi langsung melalui pesan WhatsApp meja pelayanan Keuchik untuk aspirasi mendesak atau hal penting lainnya.
          </p>
        </div>
        <a
          href="https://wa.me/628123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-11 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span>Hubungi WhatsApp Keuchik</span>
        </a>
      </div>
    </div>
  );
}

