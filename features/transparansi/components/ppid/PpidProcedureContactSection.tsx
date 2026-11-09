import Link from "next/link";
import { Clock, Mail, Send } from "lucide-react";
import { ppidAlurPermohonan, ppidContactInfo } from "../../data/ppid";

export function PpidProcedureContactSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Alur Permohonan */}
      <div className="bg-surface border border-border-soft rounded-2xl p-6 shadow-xs">
        <h3 className="text-lg font-bold text-heading mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-accent-blue" />
          <span>Alur Permohonan Informasi Publik</span>
        </h3>
        <ol className="space-y-4 text-xs sm:text-sm text-foreground">
          {ppidAlurPermohonan.map((step) => (
            <li key={step.step} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-btn-blue font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {step.step}
              </span>
              <div>
                <strong className="text-heading block">{step.title}:</strong>
                <span className="text-foreground/90">{step.desc}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Kontak Petugas PPID */}
      <div className="bg-surface border border-border-soft rounded-2xl p-6 shadow-xs flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-heading mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-accent-blue" />
            <span>Kontak Desk Layanan PPID</span>
          </h3>
          <p className="text-xs sm:text-sm text-foreground leading-relaxed mb-4">
            Silakan menghubungi Sekretaris Gampong selaku Pejabat Pengelola Informasi dan Dokumentasi (PPID) Utama Gampong Lam Awe:
          </p>
          <div className="space-y-2.5 text-xs text-heading bg-background p-4 rounded-xl border border-border-soft">
            <div>
              <span className="text-foreground/80 block">Pejabat PPID:</span>
              <span className="font-bold">Sekretaris Gampong Lam Awe (M. Ridwan, S.Sos)</span>
            </div>
            <div>
              <span className="text-foreground/80 block">Alamat Sekretariat:</span>
              <span className="font-semibold">{ppidContactInfo.address}</span>
            </div>
            <div>
              <span className="text-foreground/80 block">Email Resmi:</span>
              <span className="font-mono text-accent-blue">{ppidContactInfo.email}</span>
            </div>
            <div>
              <span className="text-foreground/80 block">Jam Operasional:</span>
              <span className="font-semibold">{ppidContactInfo.jamLayanan}</span>
            </div>
          </div>
        </div>

        <div className="pt-4 mt-4 border-t border-border-soft">
          <Link
            href="/kontak"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-btn-blue hover:bg-btn-blue-hover text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <Send className="w-4 h-4" />
            <span>Hubungi Petugas PPID Langsung</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
