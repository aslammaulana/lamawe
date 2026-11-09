import { Globe2 } from "lucide-react";

export function TentangHeaderSection() {
  return (
    <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand-accent)] text-xs font-semibold mb-3">
          <Globe2 className="w-3.5 h-3.5" />
          PORTAL RESMI PEMERINTAH GAMPONG
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-brand-heading)] tracking-tight">
          Tentang Website Resmi Gampong Lam Awe
        </h1>
        <p className="text-sm sm:text-base text-[var(--color-brand-body)] mt-2 leading-relaxed">
          Portal ini merupakan kanal informasi dan layanan publik resmi Pemerintah Gampong Lam Awe, Kecamatan Peukan Bada, Kabupaten Aceh Besar, yang dirancang sesuai standar keterbukaan informasi publik dan tata kelola digital desa nasional.
        </p>
      </div>
    </section>
  );
}

