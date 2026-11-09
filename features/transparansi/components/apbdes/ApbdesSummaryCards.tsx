import { TrendingUp, ShoppingCart, Scale, CheckCircle2 } from "lucide-react";
import { apbdesSummaryData } from "../../data/apbdes";

const summaryCards = [
  {
    title: "Pendapatan Desa",
    subtitle: "Sektor Pemasukan",
    icon: TrendingUp,
    iconBg: "bg-blue-50 text-btn-blue",
    badgeBg: "bg-blue-50 text-btn-blue",
    amountColor: "text-btn-blue",
    barColor: "bg-btn-blue",
    data: apbdesSummaryData.pendapatan,
    labelTarget: "Target Anggaran",
    valTarget: apbdesSummaryData.pendapatan.target,
    footerLeft: apbdesSummaryData.pendapatan.keterangan,
    footerRight: `Sisa: ${apbdesSummaryData.pendapatan.sisa}`,
  },
  {
    title: "Belanja Desa",
    subtitle: "Sektor Pengeluaran",
    icon: ShoppingCart,
    iconBg: "bg-indigo-50 text-indigo-600",
    badgeBg: "bg-indigo-50 text-indigo-600",
    amountColor: "text-heading",
    barColor: "bg-indigo-600",
    data: apbdesSummaryData.belanja,
    labelTarget: "Pagu Anggaran",
    valTarget: apbdesSummaryData.belanja.pagu,
    footerLeft: apbdesSummaryData.belanja.keterangan,
    footerRight: `Sisa: ${apbdesSummaryData.belanja.sisa}`,
  },
  {
    title: "Pembiayaan Netto",
    subtitle: "Keseimbangan Kas",
    icon: Scale,
    iconBg: "bg-amber-50 text-amber-700",
    badgeBg: "bg-amber-50 text-amber-700",
    amountColor: "text-amber-700",
    barColor: "bg-amber-600",
    data: apbdesSummaryData.pembiayaan,
    labelTarget: "Rencana SiLPA",
    valTarget: apbdesSummaryData.pembiayaan.rencana,
    footerLeft: (
      <span className="text-emerald-700 font-semibold flex items-center gap-1">
        <CheckCircle2 className="w-3.5 h-3.5" /> {apbdesSummaryData.pembiayaan.statusText}
      </span>
    ),
    footerRight: apbdesSummaryData.pembiayaan.keterangan,
  },
];

export function ApbdesSummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {summaryCards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.title}
            className="bg-surface border border-border-soft rounded-2xl p-6 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${card.iconBg}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-foreground block font-medium">
                      {card.subtitle}
                    </span>
                    <h3 className="text-base font-bold text-heading">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-bold font-mono ${card.badgeBg}`}
                >
                  {card.data.persen}%
                </span>
              </div>

              <div className="space-y-1.5 my-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-foreground">Realisasi</span>
                  <span className={`text-xl font-bold font-mono ${card.amountColor}`}>
                    {card.data.realisasi}
                  </span>
                </div>
                <div className="flex items-baseline justify-between text-xs text-foreground">
                  <span>{card.labelTarget}</span>
                  <span className="font-mono font-medium">{card.valTarget}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-border-soft">
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden mb-2">
                <div
                  className={`h-full ${card.barColor} rounded-full transition-all duration-500`}
                  style={{ width: `${card.data.persen}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs text-foreground">
                <div>{card.footerLeft}</div>
                <span className="font-mono">{card.footerRight}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
