import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe2,
  ChevronRight,
  ShieldCheck,
  Building2,
  Users2,
  CheckCircle2,
  Mail,
  MapPin,
  Award,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Website & Tim Pengelola - Gampong Lam Awe",
  description:
    "Informasi redaksi, tim pengelola IT, standar keamanan informasi, dan kepatuhan regulasi portal resmi Pemerintah Gampong Lam Awe, Aceh Besar.",
};

export default function TentangWebsitePage() {
  return (
    <div className="flex flex-col gap-8 pb-16">
      {/* Breadcrumb */}
      <nav aria-label="Jalur Navigasi" className="pt-2">
        <ol className="flex items-center flex-wrap gap-2 text-xs text-[var(--color-brand-body)]">
          <li className="flex items-center gap-1.5">
            <Link
              href="/"
              className="hover:text-[var(--color-brand-accent)] transition-colors"
            >
              Beranda
            </Link>
          </li>
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="font-semibold text-[var(--color-brand-heading)]">
            Tentang Website
          </li>
        </ol>
      </nav>

      {/* Header */}
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

      {/* Identitas Pengelola & Redaksi */}
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

      {/* Standar Aksesibilitas & Kepatuhan Keamanan */}
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
    </div>
  );
}

