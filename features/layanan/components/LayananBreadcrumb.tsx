import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface LayananBreadcrumbProps {
  items?: BreadcrumbItem[];
}

export function LayananBreadcrumb({ items = [] }: LayananBreadcrumbProps) {
  const isRoot = items.length === 0;

  return (
    <nav aria-label="Jalur Navigasi" className="pt-2">
      <ol className="flex items-center flex-wrap gap-2 text-xs text-[var(--color-brand-body)]">
        <li className="flex items-center gap-1.5">
          <Link href="/" className="hover:text-[var(--color-brand-accent)] transition-colors">
            Beranda
          </Link>
        </li>
        <li className="text-gray-300">
          <ChevronRight className="w-3.5 h-3.5" />
        </li>
        {isRoot ? (
          <li aria-current="page" className="font-semibold text-[var(--color-brand-heading)]">
            Layanan Desa
          </li>
        ) : (
          <li className="flex items-center gap-1.5">
            <Link href="/layanan" className="hover:text-[var(--color-brand-accent)] transition-colors">
              Layanan Desa
            </Link>
          </li>
        )}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              <span className="text-gray-300">
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className="font-semibold text-[var(--color-brand-heading)] truncate max-w-[200px] sm:max-w-none"
                >
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-[var(--color-brand-accent)] transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
