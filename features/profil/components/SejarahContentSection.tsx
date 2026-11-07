import { BookOpen, Landmark, Clock } from "lucide-react";
import { timelineSejarahData } from "../data/sejarah";

export function SejarahContentSection() {
  return (
    <div className="bg-surface rounded-2xl border border-border-soft p-6 sm:p-10 shadow-xs space-y-8">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background border border-border-soft text-xs font-semibold text-accent-blue mb-3">
          <BookOpen size={13} />
          <span>Catatan Sejarah Gampong</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-heading tracking-tight">
          Sejarah Desa Lam Awe
        </h1>
        <p className="mt-2 text-sm text-foreground/80">
          Kecamatan Peukan Bada, Kabupaten Aceh Besar, Provinsi Aceh
        </p>
      </div>

      {/* Hero Banner / Foto Sejarah */}
      <div className="w-full h-64 sm:h-80 rounded-xl bg-gradient-to-r from-blue-50/50 to-background border border-border-soft flex flex-col items-center justify-center text-center p-6 text-foreground/70">
        <Landmark size={44} className="text-btn-blue mb-3 opacity-80" />
        <span className="text-sm font-medium">Dokumentasi Sejarah Gampong Lam Awe</span>
        <span className="text-xs text-slate-400 mt-1">(Foto arsip desa)</span>
      </div>

      {/* Konten Narasi */}
      <div className="text-foreground text-sm sm:text-base leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-heading pt-2">
          Asal-Usul Nama Lam Awe
        </h2>
        <p>
          Secara etimologi dalam bahasa Aceh, kata <em>&ldquo;Lam&rdquo;</em> berarti berada di dalam atau lembah, sedangkan <em>&ldquo;Awe&rdquo;</em> bermakna rotan. Secara turun-temurun, tetua gampong mengisahkan bahwa kawasan ini pada masa lampau merupakan daerah subur yang banyak ditumbuhi pohon rotan alami yang dimanfaatkan masyarakat pesisir dan perbukitan Peukan Bada untuk kebutuhan sehari-hari serta bahan kerajinan.
        </p>
        <p>
          Gampong Lam Awe telah berdiri sejak era Kesultanan Aceh Darussalam, menjadi salah satu jalur perlintasan strategis antara kawasan pesisir barat dan pusat pemerintahan di Kutaraja (Banda Aceh). Masyarakatnya hidup rukun dengan mengandalkan mata pencaharian pertanian sawah, perikanan pesisir, serta perkebunan rakyat.
        </p>

        <h2 className="text-xl font-bold text-heading pt-4">
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
      <div className="pt-6 border-t border-border-soft">
        <h3 className="text-lg font-bold text-heading mb-6 flex items-center gap-2">
          <Clock size={18} className="text-btn-blue" />
          <span>Linimasa Perjalanan Gampong</span>
        </h3>

        <div className="relative border-l-2 border-border-soft ml-3 sm:ml-4 space-y-8 pl-6">
          {timelineSejarahData.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-surface border-2 border-btn-blue group-hover:scale-125 transition-transform" />
              <div className="text-xs font-bold text-accent-blue font-mono">
                {item.year}
              </div>
              <h4 className="text-base font-semibold text-heading mt-0.5">
                {item.title}
              </h4>
              <p className="text-sm text-foreground/90 mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
