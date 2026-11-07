export interface HeroTickerData {
  tag: string;
  message: string;
  ticketNumber: string;
}

export interface HeroData {
  officialBadge: string;
  headlinePrefix: string;
  headlineHighlight: string;
  description: string;
  locationBadges: {
    kecamatan: string;
    kabupaten: string;
    provinsi: string;
  };
  image: {
    src: string;
    alt: string;
    captionTitle: string;
    captionSubtitle: string;
  };
}

export interface StatistikItem {
  id: string;
  label: string;
  value: string;
  unit: string;
  trend?: string;
  note?: string;
  icon: "users" | "home" | "maximize" | "building";
}

export interface LayananCepatItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  badgeStyle?: "solid" | "outline";
  href?: string;
  type: "link" | "search" | "external";
  actionLabel: string;
  icon: "fileText" | "badgeAlert" | "search" | "messageSquare";
}

export interface SambutanData {
  quote: string;
  name: string;
  role: string;
  period: string;
  image: string;
  badge: string;
  verificationText: string;
}

export interface BeritaCardItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}

export interface AgendaCardItem {
  id: string;
  day: string;
  monthYear: string;
  title: string;
  location: string;
  time: string;
  category: string;
  isPulse?: boolean;
}

export interface ApbdesSummaryCard {
  title: string;
  amount: string;
  realizationPct: number;
  type: "income" | "expense" | "financing";
}

export interface ApbdesBidangItem {
  name: string;
  realizationAmount: string;
  budgetAmount: string;
  pct: number;
}

export interface DemografiData {
  idm: {
    score: string;
    targetNote: string;
    description: string;
    dimensions: { name: string; score: string }[];
  };
  distribution: {
    label: string;
    pct: number;
    colorClass: string;
  }[];
  gender: {
    malePct: number;
    femalePct: number;
  };
}

export interface PetaLokasiData {
  coordinates: string;
  mapImage: string;
  officeName: string;
  officeRole: string;
  address: string;
  operatingHours: {
    weekdays: string;
    weekendNote: string;
  };
  phone: string;
  googleMapsUrl: string;
}

export interface PotensiUnggulanItem {
  id: string;
  title: string;
  description: string;
  highlight: string;
  icon: "store" | "sprout" | "palmtree";
}

export interface GaleriCardItem {
  id: string;
  title: string;
  location: string;
  date: string;
  image: string;
  category: string;
  isVideo?: boolean;
}

export interface InstansiLinkItem {
  id: string;
  title: string;
  url: string;
  icon: "landmark" | "building" | "shield" | "radio" | "fileCheck" | "pieChart";
}

