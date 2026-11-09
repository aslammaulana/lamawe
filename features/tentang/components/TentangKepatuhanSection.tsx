import { ShieldCheck } from "lucide-react";

export function TentangKepatuhanSection() {
  return (
    <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
      <h2 className="text-lg font-bold text-[var(--color-brand-heading)] mb-4 flex items-center gap-2">
        <ShieldCheck className="w-5 h-5 text-emerald-600" />
        Standar Kepatuhan, Aksesibilitas & Keamanan Data
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[var(--color-brand-body)]">
        <div className="p-4 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)]">
          <strong className="text-[var(--color-brand-heading)] block mb-1">
            Aksesibilitas WCAG AA:
          </strong>
          Tata letak didesain ramah pengguna di berbagai perangkat (ponsel cerdas, tablet, desktop) dengan kontras warna teruji dan tipografi Geist yang mudah dibaca.
        </div>

        <div className="p-4 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)]">
          <strong className="text-[var(--color-brand-heading)] block mb-1">
            Perlindungan Data Pribadi:
          </strong>
          Sesuai UU No. 27/2022 tentang Perlindungan Data Pribadi (PDP), identitas pemohon disamarkan dan NIK serta nomor HP pribadi tidak pernah ditampilkan ke publik.
        </div>

        <div className="p-4 rounded-xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)]">
          <strong className="text-[var(--color-brand-heading)] block mb-1">
            Bebas Iklan & Komersial:
          </strong>
          Portal desa ini murni didedikasikan untuk pelayanan publik warga, bebas dari iklan pihak ketiga, pelacak komersial, maupun pop-up yang mengganggu.
        </div>
      </div>
    </section>
  );
}

