import { ApbdesBidangItem, ApbdesSummaryCard } from "../types";

export const apbdesSummaryData: ApbdesSummaryCard[] = [
  {
    title: "Pendapatan Desa",
    amount: "Rp 1.185.450.000",
    realizationPct: 78,
    type: "income",
  },
  {
    title: "Belanja Desa",
    amount: "Rp 1.140.200.000",
    realizationPct: 72,
    type: "expense",
  },
  {
    title: "Pembiayaan Netto",
    amount: "Rp 45.250.000",
    realizationPct: 100,
    type: "financing",
  },
];

export const apbdesBidangData: ApbdesBidangItem[] = [
  {
    name: "Bidang Penyelenggaraan Pemerintahan Desa",
    realizationAmount: "Rp 380.000.000",
    budgetAmount: "Rp 420.000.000",
    pct: 90,
  },
  {
    name: "Bidang Pelaksanaan Pembangunan Desa",
    realizationAmount: "Rp 480.200.000",
    budgetAmount: "Rp 550.000.000",
    pct: 87,
  },
  {
    name: "Bidang Pembinaan & Pemberdayaan Masyarakat",
    realizationAmount: "Rp 280.000.000",
    budgetAmount: "Rp 320.000.000",
    pct: 87,
  },
];

