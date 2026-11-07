import { DemografiData } from "../types";

export const demografiData: DemografiData = {
  idm: {
    score: "0.8425",
    targetNote: "(Target nasional 0.75 terlampaui)",
    description:
      "Gampong Lam Awe dinilai memiliki ketahanan sosial, ekonomi, dan ekologis yang berkelanjutan untuk meningkatkan taraf hidup warga secara swasembada.",
    dimensions: [
      { name: "Dimensi Sosial", score: "0.86" },
      { name: "Dimensi Ekonomi", score: "0.79" },
      { name: "Dimensi Ekologi", score: "0.88" },
    ],
  },
  distribution: [
    {
      label: "Usia Produktif (15 - 64 tahun)",
      pct: 68,
      colorClass: "bg-btn-blue",
    },
    {
      label: "Usia Anak & Remaja (0 - 14 tahun)",
      pct: 22,
      colorClass: "bg-accent-blue",
    },
    {
      label: "Lansia (65+ tahun)",
      pct: 10,
      colorClass: "bg-slate-400",
    },
  ],
  gender: {
    malePct: 51,
    femalePct: 49,
  },
};

