import { FileText, CalendarCheck, CheckCircle2, Download } from "lucide-react";

export function RpjmdesHighlightSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-surface border border-border-soft rounded-2xl p-6 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-btn-blue text-xs font-bold font-mono">
              Periode 6 Tahun
            </span>
            <FileText className="w-5 h-5 text-slate-400" />
          </div>
          <h2 className="text-xl font-bold text-heading mb-2">
            RPJMDes 2023 - 2029
          </h2>
          <p className="text-xs sm:text-sm text-foreground leading-relaxed mb-4">
            Rencana Pembangunan Jangka Menengah Gampong Lam Awe merupakan penjabaran dari visi dan misi Keuchik terpilih untuk masa jabatan 6 tahun, memuat arah kebijakan keuangan, strategi pembangunan kawasan pesisir, dan kebijakan umum partisipatif warga.
          </p>
          <div className="space-y-2 text-xs text-heading">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Peningkatan ketahanan ekonomi nelayan dan petani</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Modernisasi layanan administrasi gampong berbasis digital</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Pemberdayaan kepemudaan, olahraga, dan balai adat meunasah</span>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-border-soft mt-6">
          <a
            href="#download-rpjmdes"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background hover:bg-blue-50 border border-border-soft text-accent-blue text-xs font-semibold transition-colors w-full justify-center"
          >
            <Download className="w-4 h-4" />
            <span>Unduh Dokumen RPJMDes (PDF • 5.1 MB)</span>
          </a>
        </div>
      </div>

      <div className="bg-surface border border-border-soft rounded-2xl p-6 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold font-mono">
              Rencana Tahunan (2026)
            </span>
            <CalendarCheck className="w-5 h-5 text-slate-400" />
          </div>
          <h2 className="text-xl font-bold text-heading mb-2">
            RKPDes Tahun 2026
          </h2>
          <p className="text-xs sm:text-sm text-foreground leading-relaxed mb-4">
            Rencana Kerja Pemerintah Gampong Lam Awe Tahun Anggaran 2026 yang memuat program prioritas tahun berjalan hasil rembug jurong dan Musrenbangdes bersama BPD/Tuha Peut.
          </p>
          <div className="space-y-2 text-xs text-heading">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Pemberian Bantuan Langsung Tunai (BLT Dana Desa)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Pembangunan rabat beton jalan usaha tani Jurong Cot Cut</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Penyelenggaraan Festival Seni Budaya &amp; Maulid Raya</span>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-border-soft mt-6">
          <a
            href="#download-rkpdes"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background hover:bg-blue-50 border border-border-soft text-accent-blue text-xs font-semibold transition-colors w-full justify-center"
          >
            <Download className="w-4 h-4" />
            <span>Unduh Dokumen RKPDes 2026 (PDF • 3.2 MB)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
