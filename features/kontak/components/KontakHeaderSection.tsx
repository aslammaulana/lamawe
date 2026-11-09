export function KontakHeaderSection() {
  return (
    <section className="relative bg-white rounded-2xl shadow-xs border border-[var(--color-brand-border)] p-6 lg:p-10 overflow-hidden mb-8">
      <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-[var(--color-brand-subtle)]/50 blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-3xl flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-primary)] w-fit text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-primary)] animate-pulse" />
          <span>Pusat Bantuan &amp; Komunikasi Publik</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--color-brand-heading)] tracking-tight">
          Hubungi Pemerintah Desa Lam Awe
        </h1>
        <p className="text-sm text-[var(--color-brand-body)] leading-relaxed">
          Saluran komunikasi terpadu Kantor Keuchik Gampong Lam Awe,
          Kecamatan Peukan Bada. Kami siap melayani konsultasi administrasi
          kependudukan, pengaduan sarana warga, serta koordinasi siaga
          darurat secara transparan dan tanpa biaya.
        </p>
      </div>
    </section>
  );
}

