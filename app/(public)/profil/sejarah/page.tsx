import { Breadcrumb } from "@/components/Breadcrumb";
import { Clock, Landmark, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sejarah Desa",
  description: "Asal usul dan sejarah perkembangan Gampong Lam Awe, Kecamatan Peukan Bada, Kabupaten Aceh Besar.",
};

export default function SejarahPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Profil", href: "/profil/sejarah" },
          { label: "Sejarah Desa" },
        ]}
      />

      <div className="bg-white rounded-2xl border border-[#E1EDFC] p-6 sm:p-10 shadow-xs space-y-8">
        {/* Header */}
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F9FF] border border-[#E1EDFC] text-xs font-semibold text-[#2176CA] mb-3">
            <BookOpen size={13} />
            Catatan Sejarah Gampong
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#252525] tracking-tight">
            Sejarah Desa Lam Awe
          </h1>
          <p className="mt-2 text-sm text-[#3A3F3E]/80">
            Kecamatan Peukan Bada, Kabupaten Aceh Besar, Provinsi Aceh
          </p>
        </div>

        {/* Hero Banner / Foto Sejarah */}
        <div className="w-full h-64 sm:h-80 rounded-xl bg-gradient-to-r from-[#EBF3FC] to-[#F5F9FF] border border-[#E1EDFC] flex flex-col items-center justify-center text-center p-6 text-[#3A3F3E]/70">
          <Landmark size={44} className="text-[#1769C2] mb-3 opacity-80" />
          <span className="text-sm font-medium">Dokumentasi Sejarah Gampong Lam Awe</span>
          <span className="text-xs text-slate-400 mt-1">(Foto arsip desa)</span>
        </div>

        {/* Konten Narasi */}
        <div className="prose max-w-none text-[#3A3F3E] text-sm sm:text-base leading-relaxed space-y-4">
          <h2 className="text-xl font-bold text-[#252525] pt-2">
            Asal-Usul Nama Lam Awe
          </h2>
          <p>
            Secara etimologi dalam bahasa Aceh, kata <em>"Lam"</em> berarti berada di dalam atau lembah, sedangkan <em>"Awe"</em> bermakna rotan. Secara turun-temurun, tetua gampong mengisahkan bahwa kawasan ini pada masa lampau merupakan daerah subur yang banyak ditumbuhi pohon rotan alami yang dimanfaatkan masyarakat pesisir dan perbukitan Peukan Bada untuk kebutuhan sehari-hari serta bahan kerajinan.
          </p>
          <p>
            Gampong Lam Awe telah berdiri sejak era Kesultanan Aceh Darussalam, menjadi salah satu jalur perlintasan strategis antara kawasan pesisir barat dan pusat pemerintahan di Kutaraja (Banda Aceh). Masyarakatnya hidup rukun dengan mengandalkan mata pencaharian pertanian sawah, perikanan pesisir, serta perkebunan rakyat.
          </p>

          <h2 className="text-xl font-bold text-[#252525] pt-4">
            Ketahanan dan Kebangkitan Pasca Bencana 2004
          </h2>
          <p>
            Kecamatan Peukan Bada merupakan salah satu wilayah yang terdampak signifikan saat gempa bumi dan tsunami melanda Aceh pada 26 Desember 2004. Dengan semangat gotong royong dan keteguhan iman, masyarakat Lam Awe bahu-membahu bangkit menata kembali kehidupan sosial, infrastruktur permukiman, meunasah, serta sarana pelayanan desa.
          </p>
          <p>
            Kini, Desa Lam Awe terus bertransformasi menjadi desa yang mandiri, berdaya saing, dan terbuka terhadap modernisasi digital melalui penyediaan layanan publik yang transparan dan akuntabel demi kemakmuran seluruh warga gampong.
          </p>
        </div>

        {/* Timeline Penting */}
        <div className="pt-6 border-t border-[#E1EDFC]">
          <h3 className="text-lg font-bold text-[#252525] mb-6 flex items-center gap-2">
            <Clock size={18} className="text-[#1769C2]" />
            Linimasa Perjalanan Gampong
          </h3>

          <div className="relative border-l-2 border-[#E1EDFC] ml-3 sm:ml-4 space-y-8 pl-6">
            {[
              {
                year: "Era Tradisional",
                title: "Pembentukan Pemukiman Awal",
                desc: "Wilayah Lam Awe mulai dihuni oleh keluarga-keluarga perintis dan ditetapkan sebagai pemukiman dengan sistem kelembagaan Keuchik dan Tuha Peut.",
              },
              {
                year: "2004",
                title: "Bencana Gempa & Tsunami",
                desc: "Fase ujian berat bagi masyarakat pesisir Peukan Bada, diikuti era rekonstruksi infrastruktur dasar pemukiman gampong.",
              },
              {
                year: "2015",
                title: "Penerapan Tata Kelola Dana Desa",
                desc: "Pembangunan fisik dan pemberdayaan ekonomi masyarakat mulai dipercepat melalui pemanfaatan terpadu Dana Desa.",
              },
              {
                year: "2026 - Sekarang",
                title: "Inisiasi Transformasi Desa Digital",
                desc: "Peluncuran portal web resmi untuk transparansi anggaran APBDes dan pelayanan administrasi kependudukan digital.",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#1769C2] group-hover:scale-125 transition-transform"></div>
                <div className="text-xs font-bold text-[#2176CA] font-mono">
                  {item.year}
                </div>
                <h4 className="text-base font-semibold text-[#252525] mt-0.5">
                  {item.title}
                </h4>
                <p className="text-sm text-[#3A3F3E]/90 mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

