import { Clock, ShieldCheck, PhoneCall } from "lucide-react";
import { pengaduanSopStages } from "../../data/pengaduanSop";
import { helpdeskData } from "../../data/helpdesk";

export function PengaduanSidebarInfo() {
  return (
    <aside className="lg:col-span-4 flex flex-col gap-6">
      {/* Card 1: Standar Waktu Respon */}
      <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col gap-3">
        <div className="flex items-center gap-2.5 text-[var(--color-brand-primary)]">
          <Clock className="w-5 h-5" />
          <h3 className="font-bold text-sm text-[var(--color-brand-heading)]">
            Standar Waktu Respon (SOP)
          </h3>
        </div>
        <p className="text-xs text-[var(--color-brand-body)] leading-relaxed">
          Pemerintah Gampong Lam Awe berkomitmen memproses aspirasi masyarakat sesuai prosedur operasional standar:
        </p>

        <div className="space-y-2 text-xs pt-1">
          {pengaduanSopStages.map((stage, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)]"
            >
              <span className="font-semibold text-[var(--color-brand-heading)]">
                {stage.label}
              </span>
              <span className="font-mono font-bold text-[var(--color-brand-primary)]">
                {stage.duration}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Card 2: Pengawasan & Lembaga Tuha Peut */}
      <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col gap-3">
        <div className="flex items-center gap-2.5 text-emerald-700">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <h3 className="font-bold text-sm text-[var(--color-brand-heading)]">
            Pengawasan & Integritas
          </h3>
        </div>
        <p className="text-xs text-[var(--color-brand-body)] leading-relaxed">
          Pengaduan masyarakat diawasi langsung oleh <strong>Badan Permusyawaratan Gampong (Tuha Peut Lam Awe)</strong> dan diteruskan ke Inspektorat Kabupaten Aceh Besar bila memerlukan penanganan khusus.
        </p>
        <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 text-emerald-900 text-xs">
          <span className="font-bold block mb-0.5">Bebas Pungutan & Intervensi:</span>
          Pelapor dijamin keamanannya dan tidak dikenakan biaya sepeser pun.
        </div>
      </div>

      {/* Card 3: Hotline Darurat */}
      <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col gap-3">
        <div className="flex items-center gap-2.5 text-amber-700">
          <PhoneCall className="w-5 h-5 text-amber-600" />
          <h3 className="font-bold text-sm text-[var(--color-brand-heading)]">
            Kontak Cepat & Darurat (24 Jam)
          </h3>
        </div>
        <p className="text-xs text-[var(--color-brand-body)] leading-relaxed">
          Untuk kejadian darurat (bencana alam, pasang laut rob, kebakaran, atau gangguan kamtibmas):
        </p>
        <div className="space-y-2 text-xs font-mono">
          {helpdeskData.emergencyHotlines.map((hotline, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] flex items-center justify-between"
            >
              <span className="font-sans font-semibold text-[var(--color-brand-heading)]">
                {hotline.label}:
              </span>
              <span
                className={`font-bold ${
                  hotline.type === "danger" ? "text-red-600" : "text-[var(--color-brand-primary)]"
                }`}
              >
                {hotline.phone}
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

