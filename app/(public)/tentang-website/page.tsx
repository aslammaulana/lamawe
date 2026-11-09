import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  TentangHeaderSection,
  TentangRedaksiKantorSection,
  TentangKepatuhanSection,
} from "@/features/tentang/components";

export const metadata: Metadata = {
  title: "Tentang Website & Tim Pengelola - Gampong Lam Awe",
  description:
    "Informasi redaksi, tim pengelola IT, standar keamanan informasi, dan kepatuhan regulasi portal resmi Pemerintah Gampong Lam Awe, Aceh Besar.",
};

export default function TentangWebsitePage() {
  return (
    <div className="flex flex-col gap-8 pb-16">
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

      <TentangHeaderSection />
      <TentangRedaksiKantorSection />
      <TentangKepatuhanSection />
    </div>
  );
}
