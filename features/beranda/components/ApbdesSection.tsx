import Link from "next/link";
import { ArrowRight, DollarSign, ShoppingBag, PiggyBank } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { apbdesSummaryData, apbdesBidangData } from "../data/apbdes";

export function ApbdesSection() {
  return (
    <section className="w-full bg-background py-12 lg:py-16 border-b border-border-soft">
      <Container className="flex flex-col gap-8">
        <SectionHeader
          eyebrow="Akuntabilitas Finansial"
          title="Transparansi APBDes Tahun Anggaran 2026"
          description="Laporan akuntabilitas keuangan Anggaran Pendapatan dan Belanja Desa (APBG) secara transparan."
          action={
            <Link
              href="/transparansi/apbdes"
              className="inline-flex items-center gap-1 text-sm font-semibold text-btn-blue hover:underline self-start md:self-auto"
            >
              <span>Lihat Detail Transparansi APBDes Lengkap</span>
              <ArrowRight size={16} />
            </Link>
          }
        />

        {/* 3 Financial Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {apbdesSummaryData.map((item) => (
            <div
              key={item.title}
              className="bg-surface rounded-xl shadow-xs border border-border-soft p-6 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground/80 font-medium">
                  {item.title}
                </span>
                {item.type === "income" && (
                  <DollarSign size={20} className="text-btn-blue" />
                )}
                {item.type === "expense" && (
                  <ShoppingBag size={20} className="text-heading" />
                )}
                {item.type === "financing" && (
                  <PiggyBank size={20} className="text-accent-blue" />
                )}
              </div>
              <div className="flex flex-col gap-1">
                <span
                  className={`font-mono text-2xl font-bold ${
                    item.type === "income"
                      ? "text-btn-blue"
                      : item.type === "expense"
                      ? "text-heading"
                      : "text-accent-blue"
                  }`}
                >
                  {item.amount}
                </span>
                <div className="flex items-center justify-between text-xs mt-2">
                  <span className="text-foreground/70">Realisasi Berjalan</span>
                  <span
                    className={`font-mono font-semibold ${
                      item.type === "income"
                        ? "text-btn-blue"
                        : item.type === "expense"
                        ? "text-heading"
                        : "text-accent-blue"
                    }`}
                  >
                    {item.realizationPct}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-blue-50 overflow-hidden mt-1">
                  <div
                    className={`h-full rounded-full ${
                      item.type === "income"
                        ? "bg-btn-blue"
                        : item.type === "expense"
                        ? "bg-accent-blue"
                        : "bg-accent-blue"
                    }`}
                    style={{ width: `${item.realizationPct}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Breakdown Realisasi Berdasarkan Bidang */}
        <div className="bg-surface rounded-xl shadow-xs border border-border-soft p-6 sm:p-8 flex flex-col gap-6">
          <h3 className="text-base font-semibold text-heading">
            Realisasi Berdasarkan Bidang Kegiatan Utama
          </h3>
          <div className="flex flex-col gap-5">
            {apbdesBidangData.map((bidang) => (
              <div key={bidang.name} className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <span className="text-sm font-medium text-heading">
                    {bidang.name}
                  </span>
                  <span className="font-mono text-foreground/80">
                    Realisasi:{" "}
                    <strong className="text-btn-blue">
                      {bidang.realizationAmount}
                    </strong>{" "}
                    / Anggaran: {bidang.budgetAmount} ({bidang.pct}%)
                  </span>
                </div>
                <div className="w-full h-3 rounded-full bg-blue-50 overflow-hidden">
                  <div
                    className="h-full bg-btn-blue rounded-full"
                    style={{ width: `${bidang.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

