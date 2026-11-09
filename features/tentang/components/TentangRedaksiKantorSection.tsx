import { Users2, Building2, MapPin, Mail } from "lucide-react";

export function TentangRedaksiKantorSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[var(--color-brand-primary)] flex items-center justify-center">
              <Users2 className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-[var(--color-brand-heading)]">
              Tim Redaksi & Pengelola Portal
            </h2>
          </div>

          <div className="space-y-3 text-xs text-[var(--color-brand-body)]">
            <div className="p-3 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)]">
              <span className="text-[11px] text-gray-500 block">Penanggung Jawab / Pembina:</span>
              <strong className="text-[var(--color-brand-heading)] text-sm">
                Ir. H. Bukhari Daud (Keuchik Gampong Lam Awe)
              </strong>
            </div>

            <div className="p-3 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)]">
              <span className="text-[11px] text-gray-500 block">Pemimpin Redaksi & PPID Utama:</span>
              <strong className="text-[var(--color-brand-heading)] text-sm">
                M. Ridwan, S.Sos (Sekretaris Gampong)
              </strong>
            </div>

            <div className="p-3 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)]">
              <span className="text-[11px] text-gray-500 block">Tim Teknis & Pengelola Data Digital:</span>
              <strong className="text-[var(--color-brand-heading)] text-sm">
                Kaur Umum & Tim IT Relawan Gampong Lam Awe
              </strong>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-[var(--color-brand-heading)]">
              Alamat Fisik Kantor Keuchik
            </h2>
          </div>

          <div className="space-y-3 text-xs text-[var(--color-brand-body)]">
            <div className="p-3.5 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[var(--color-brand-accent)] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[var(--color-brand-heading)] block mb-0.5">
                  Kantor Pemerintah Gampong Lam Awe
                </span>
                Jl. Meulaboh - Banda Aceh KM 7.5, Gampong Lam Awe, Kec. Peukan Bada, Kab. Aceh Besar, Aceh 23351
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] flex items-start gap-3">
              <Mail className="w-4 h-4 text-[var(--color-brand-accent)] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[var(--color-brand-heading)] block mb-0.5">
                  Surat Elektronik & Kontak Resmi:
                </span>
                kontak@desa-lamawe.id • (0651) 7552-XXX
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-[var(--color-brand-border)] mt-4 text-[11px] text-gray-400">
          Jam Operasional Pelayanan: Senin - Jumat (08.30 - 15.30 WIB)
        </div>
      </div>
    </section>
  );
}

