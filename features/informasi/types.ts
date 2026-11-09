export interface ArticleDetail {
  slug: string;
  docId: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  views: number;
  author: string;
  authorRole: string;
  location: string;
  imageUrl: string;
  imageCaption: string;
  leadParagraph: string;
  contentParagraphs: string[];
  quote1: {
    text: string;
    speaker: string;
    title: string;
  };
  statHighlight?: {
    title: string;
    desc: string;
    number: string;
    unit: string;
  };
  quote2?: {
    text: string;
    speaker: string;
    title: string;
  };
  technicalSpecs?: Array<{ label: string; value: string }>;
  tags: string[];
}

export interface AgendaItem {
  id: number;
  title: string;
  kategori: string;
  tanggal: string;
  waktu: string;
  lokasi: string;
  penanggungJawab: string;
  status: "Mendatang" | "Terlaksana";
  deskripsi: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  kategori: string;
  tanggal: string;
  lokasi: string;
  imageUrl: string;
}

