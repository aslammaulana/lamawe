import Link from "next/link";
import {
  Search,
  ArrowRight,
  ShieldCheck,
  Headphones,
  MessageSquare,
  MapPin,
} from "lucide-react";
import { helpdeskData } from "../data/helpdesk";

export function LayananTrackingHelpdeskSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
      {/* Tracking Card */}
      <div className="lg:col-span-7 bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-[var(--color-brand-primary)] flex items-center justify-center shrink-0">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[var(--color-brand-heading)]">
                Lacak Status Permohonan Berkas
              </h2>
              <p className="text-xs text-[var(--color-brand-body)]">
                Pantau alur verifikasi berkas surat Anda secara real-time.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed mb-5">
            Sudah mengajukan surat keterangan atau permohonan online? Masukkan Nomor Tiket Registrasi Anda untuk melihat progres pengesahan oleh Kasi Pelayanan dan Keuchik.
          </p>

          <form
            action="/layanan/status"
            method="GET"
            className="flex flex-col sm:flex-row gap-2.5"
          >
            <div className="relative flex-1">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-mono text-xs">
                #
              </span>
              <input
                type="text"
                name="ticket"
                placeholder="Contoh: LMA-2026-001"
                className="w-full h-11 pl-8 pr-3 bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] rounded-xl text-xs font-mono uppercase text-[var(--color-brand-heading)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]"
              />
            </div>
            <button
              type="submit"
              className="h-11 px-5 rounded-xl bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white text-xs font-semibold shadow-xs flex items-center justify-center gap-2 transition-colors shrink-0"
            >
              <span>Cek Berkas</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="pt-4 border-t border-[var(--color-brand-border)] mt-6 flex items-center justify-between text-xs text-[var(--color-brand-body)]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Tersambung ke Database Administrasi Gampong
          </span>
          <Link
            href="/layanan/status"
            className="text-[var(--color-brand-accent)] font-semibold hover:underline"
          >
            Halaman Lacak Penuh &rarr;
          </Link>
        </div>
      </div>

      {/* Helpdesk Card */}
      <div className="lg:col-span-5 bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[var(--color-brand-heading)]">
                Butuh Bantuan Administrasi?
              </h2>
              <p className="text-xs text-[var(--color-brand-body)]">
                Pendampingan pengisian bagi lansia & disabilitas
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[var(--color-brand-body)] leading-relaxed mb-4">
            Mengalami kendala unggah dokumen atau membutuhkan layanan jemput bola di rumah? Petugas loket kami siap membantu:
          </p>

          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] flex items-center gap-3">
              <MessageSquare className="w-4 h-4 text-[var(--color-brand-accent)] shrink-0" />
              <div>
                <span className="font-bold text-[var(--color-brand-heading)] block">
                  {helpdeskData.officer.role}: {helpdeskData.officer.name}
                </span>
                <span className="font-mono text-gray-500 text-[11px]">
                  {helpdeskData.officer.phoneDisplay}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[var(--color-brand-accent)] shrink-0" />
              <div>
                <span className="font-bold text-[var(--color-brand-heading)] block">
                  {helpdeskData.office.location}
                </span>
                <span className="text-gray-500 text-[11px]">
                  {helpdeskData.office.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-[var(--color-brand-border)] mt-4">
          <a
            href={helpdeskData.officer.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-11 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Konsultasi Langsung via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

