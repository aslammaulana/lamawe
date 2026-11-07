import Link from "next/link";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { navItems } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="bg-[#1E293B] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Kolom 1 — Identitas */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1UmxF7opjyaF7l15Wuow3lrCQciNRnWb2JlDD5hzagw2fTCY-REjztFeMqcUbQLyGg8L4c-4BbZ1vi7-8fXpriezNOPX6kmeGxhx22Ymg7h9jX5nbZwZ3r55Np51hAsIj3V0odP5cGow3ZfTWEztKx6UZDQB5rGlVFUF-iHLgi5DQjk9ZOssasOr3CUoyQAC4Te9htje-UiGIh5gEmVN0MG1xoS1F78rNs6NUrW9FQFOw"
                alt="Lambang Desa Lam Awe"
                className="h-9 w-auto object-contain shrink-0 bg-white/10 p-1 rounded-md"
              />
              <div className="leading-tight">
                <div className="text-white font-bold text-sm">Desa Lam Awe</div>
                <div className="text-xs text-slate-400">Pemerintah Desa</div>
              </div>
            </div>
            <address className="not-italic space-y-2.5 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-[#2176CA] mt-0.5 shrink-0" />
                <span>
                  Jl. Meulaboh - Banda Aceh KM 7.5, Gampong Lam Awe,<br />
                  Kec. Peukan Bada, Kab. Aceh Besar,<br />
                  Aceh 23351
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-[#2176CA] shrink-0" />
                <a
                  href="tel:+626517552019"
                  className="hover:text-white transition-colors font-mono"
                >
                  (0651) 7552-019
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-[#2176CA] shrink-0" />
                <a
                  href="mailto:kontak@desa-lamawe.id"
                  className="hover:text-white transition-colors"
                >
                  kontak@desa-lamawe.id
                </a>
              </div>
            </address>
          </div>

          {/* Kolom 2 — Menu Utama */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Menu Utama</h3>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#2176CA] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3 — Layanan & Transparansi */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Layanan Publik
            </h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <Link href="/layanan" className="hover:text-[#2176CA] transition-colors">
                  Daftar Layanan
                </Link>
              </li>
              <li>
                <Link href="/layanan/pengaduan" className="hover:text-[#2176CA] transition-colors">
                  Pengaduan
                </Link>
              </li>
              <li>
                <Link href="/layanan/status" className="hover:text-[#2176CA] transition-colors">
                  Cek Status Layanan
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-[#2176CA] transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
            <h3 className="text-white font-semibold text-sm mb-4">
              Transparansi
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/transparansi/apbdes" className="hover:text-[#2176CA] transition-colors">
                  APBDes
                </Link>
              </li>
              <li>
                <Link href="/transparansi/laporan" className="hover:text-[#2176CA] transition-colors">
                  Laporan
                </Link>
              </li>
              <li>
                <Link href="/transparansi/ppid" className="hover:text-[#2176CA] transition-colors">
                  PPID
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4 — Instansi Terkait */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Tautan Instansi
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Kab. Aceh Besar", href: "https://www.acehbesarkab.go.id" },
                { label: "Kemendes PDT", href: "https://kemendesa.go.id" },
                { label: "SID Kemendes", href: "https://sid.kemendesa.go.id" },
                { label: "Portal Desa Aceh", href: "https://jangkauaceh.id" },
                { label: "BPBD Aceh", href: "https://bpba.acehprov.go.id" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-[#2176CA] transition-colors"
                  >
                    {link.label}
                    <ExternalLink size={12} className="shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700/60">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-400">
          <span>
            © {new Date().getFullYear()} Pemerintah Desa Lam Awe. Hak cipta
            dilindungi.
          </span>
          <div className="flex items-center gap-4">
            <Link
              href="/tentang-website"
              className="hover:text-white transition-colors"
            >
              Tentang Website
            </Link>
            <Link
              href="/tentang-website#kebijakan-privasi"
              className="hover:text-white transition-colors"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="/sitemap.xml"
              className="hover:text-white transition-colors"
            >
              Peta Situs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

