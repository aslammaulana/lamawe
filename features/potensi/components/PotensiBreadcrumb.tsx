import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PotensiBreadcrumbProps {
  items: BreadcrumbItem[];
}

export function PotensiBreadcrumb({ items }: PotensiBreadcrumbProps) {
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
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-gray-300">
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              )}
              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className="font-semibold text-[var(--color-brand-heading)]"
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

