import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://desa-lamawe.id";

  const routes = [
    "",
    "/profil/sejarah",
    "/profil/visi-misi",
    "/profil/wilayah",
    "/profil/struktur",
    "/transparansi/apbdes",
    "/transparansi/perencanaan",
    "/transparansi/program",
    "/transparansi/laporan",
    "/transparansi/ppid",
    "/layanan",
    "/layanan/surat-keterangan-usaha",
    "/layanan/surat-keterangan-domisili",
    "/layanan/surat-pengantar-skck",
    "/layanan/surat-keterangan-tidak-mampu",
    "/layanan/surat-pengantar-akta-kelahiran-kematian",
    "/layanan/surat-keterangan-tanah-sporadik",
    "/layanan/pengaduan",
    "/layanan/status",
    "/berita",
    "/berita/saluran-irigasi-jurong-cot-meurak",
    "/berita/posyandu-balita-dan-lansia-terpadu",
    "/berita/penyaluran-blt-dana-desa-triwulan-i-2026",
    "/berita/musrenbangdes-penetapan-rkp-gampong-2027",
    "/berita/pelatihan-wirausaha-olahan-ikan-bumdes",
    "/berita/jadwal-gotong-royong-sambut-ramadhan",
    "/berita/sosialisasi-administrasi-kependudukan-digital",
    "/agenda",
    "/galeri",
    "/data",
    "/potensi/umkm",
    "/potensi/wisata",
    "/potensi/pertanian",
    "/partisipasi/komunitas",
    "/partisipasi/musdes",
    "/partisipasi/aspirasi",
    "/kontak",
    "/tentang-website",
    "/cari",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route.startsWith("/berita") ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/layanan") || route.startsWith("/transparansi") ? 0.9 : 0.8,
  }));
}

