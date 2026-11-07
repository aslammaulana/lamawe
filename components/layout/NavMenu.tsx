"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { navItems } from "@/lib/navigation";

export function NavMenu() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Tutup menu saat route berubah
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Tutup dengan Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const toggleDropdown = (label: string) =>
    setOpenDropdown((prev) => (prev === label ? null : label));

  return (
    <>
      {/* Overlay penutup dropdown desktop */}
      {openDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpenDropdown(null)}
          aria-hidden="true"
        />
      )}

      {/* Nav desktop */}
      <nav
        className="hidden lg:flex items-center gap-0.5 relative z-50"
        aria-label="Navigasi utama"
      >
        {navItems.map((item) =>
          item.children ? (
            <div key={item.label} className="relative">
              <button
                onClick={() => toggleDropdown(item.label)}
                aria-expanded={openDropdown === item.label}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  openDropdown === item.label
                    ? "text-[#2176CA] bg-[#F5F9FF]"
                    : "text-[#3A3F3E] hover:text-[#2176CA] hover:bg-[#F5F9FF]"
                }`}
              >
                {item.label}
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${
                    openDropdown === item.label ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border border-[#E1EDFC] z-50 py-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-[#3A3F3E] hover:bg-[#F5F9FF] hover:text-[#2176CA] transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === item.href
                  ? "text-[#2176CA] bg-[#F5F9FF] font-semibold"
                  : "text-[#3A3F3E] hover:text-[#2176CA] hover:bg-[#F5F9FF]"
              }`}
            >
              {item.label}
            </Link>
          )
        )}
      </nav>

      {/* Search desktop */}
      <form
        action="/cari"
        className="hidden lg:flex items-center relative z-50"
      >
        <div className="relative">
          <input
            type="search"
            name="q"
            placeholder="Cari..."
            aria-label="Cari informasi desa"
            className="pl-3 pr-8 py-1.5 text-sm border border-[#E1EDFC] rounded-full focus:outline-none focus:ring-2 focus:ring-[#2176CA] focus:border-transparent w-36 transition"
          />
          <button
            type="submit"
            aria-label="Cari"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#2176CA] transition-colors"
          >
            <Search size={14} />
          </button>
        </div>
      </form>

      {/* Tombol hamburger mobile */}
      <button
        onClick={() => setMobileOpen((v) => !v)}
        aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
        aria-expanded={mobileOpen}
        aria-controls="mobile-menu"
        className="lg:hidden p-2 rounded-md text-[#3A3F3E] hover:bg-[#F5F9FF] transition-colors"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Menu mobile */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute top-full inset-x-0 bg-white border-t border-[#E1EDFC] shadow-xl z-50 max-h-[80vh] overflow-y-auto"
        >
          {/* Search mobile */}
          <div className="p-4 border-b border-[#E1EDFC]">
            <form action="/cari" className="flex">
              <input
                type="search"
                name="q"
                placeholder="Cari informasi desa..."
                aria-label="Cari informasi desa"
                className="flex-1 px-4 py-2 text-sm border border-[#E1EDFC] rounded-l-full focus:outline-none focus:ring-2 focus:ring-[#2176CA]"
              />
              <button
                type="submit"
                aria-label="Cari"
                className="px-4 py-2 bg-[#1769C2] text-white rounded-r-full hover:bg-[#12549E] transition-colors"
              >
                <Search size={16} />
              </button>
            </form>
          </div>

          {/* Item navigasi mobile */}
          <div className="py-2">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    aria-expanded={openDropdown === item.label}
                    className="flex items-center justify-between w-full px-5 py-3 text-sm font-medium text-[#3A3F3E] hover:bg-[#F5F9FF] hover:text-[#2176CA] transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="bg-[#F5F9FF] border-t border-b border-[#E1EDFC]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-9 py-2.5 text-sm text-[#3A3F3E] hover:text-[#2176CA] hover:bg-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-5 py-3 text-sm font-medium text-[#3A3F3E] hover:bg-[#F5F9FF] hover:text-[#2176CA] transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}

