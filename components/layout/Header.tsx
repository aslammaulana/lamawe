import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock } from "lucide-react";
import { NavMenu } from "@/components/layout/NavMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40">
      {/* Top bar */}
      <div className="bg-btn-blue text-blue-50 text-xs">
        <div className="mx-auto max-w-7xl px-4 py-1.5 flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="tel:+62651000000"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={11} />
              <span>(0651) XXX-XXXX</span>
            </a>
            <a
              href="mailto:info@lamawe.desa.id"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={11} />
              <span>info@lamawe.desa.id</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-blue-100">
            <Clock size={11} />
            <span>Senin–Jumat: 08.00–16.00 WIB</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="relative bg-surface border-b border-border-soft shadow-xs">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative flex items-center justify-between gap-4 py-3">
            {/* Logo + identitas */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0"
              aria-label="Beranda Desa Lam Awe"
            >
              {/* Logo lambang gampong */}
              <Image
                src="https://lh3.googleusercontent.com/aida/AEtjO1UmxF7opjyaF7l15Wuow3lrCQciNRnWb2JlDD5hzagw2fTCY-REjztFeMqcUbQLyGg8L4c-4BbZ1vi7-8fXpriezNOPX6kmeGxhx22Ymg7h9jX5nbZwZ3r55Np51hAsIj3V0odP5cGow3ZfTWEztKx6UZDQB5rGlVFUF-iHLgi5DQjk9ZOssasOr3CUoyQAC4Te9htje-UiGIh5gEmVN0MG1xoS1F78rNs6NUrW9FQFOw"
                alt="Lambang Desa Lam Awe"
                width={36}
                height={36}
                priority
                className="h-9 w-auto object-contain shrink-0"
              />
              <div className="leading-tight">
                <div className="font-bold text-heading text-sm sm:text-base">
                  Desa Lam Awe
                </div>
                <div className="text-xs text-foreground/80">
                  Kec. Peukan Bada · Kab. Aceh Besar
                </div>
              </div>
            </Link>

            {/* NavMenu (client component) */}
            <NavMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
