import Link from "next/link";
import { Search, HelpCircle, Phone } from "lucide-react";
import { helpdeskData } from "../../data/helpdesk";

export function LayananDetailSidebar() {
  return (
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
            <span className="text-[11px] text-gray-500 block">
              {helpdeskData.officer.role}:
            </span>
            <span className="font-bold text-[var(--color-brand-heading)] block mt-0.5">
              {helpdeskData.officer.name}
            </span>
            <span className="font-mono text-[11px] text-[var(--color-brand-accent)] mt-0.5 block">
              {helpdeskData.officer.phone} (Jam Kerja)
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)]">
            <span className="text-[11px] text-gray-500 block">Kantor Pelayanan Desa:</span>
            <span className="font-bold text-[var(--color-brand-heading)] block mt-0.5">
              Gampong Lam Awe, Peukan Bada
            </span>
            <span className="text-[11px] text-[var(--color-brand-body)] mt-0.5 block">
              Buka: {helpdeskData.office.hours}
            </span>
          </div>
        </div>

        <a
          href={helpdeskData.officer.waLink}
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
  );
}

