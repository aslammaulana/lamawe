"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulasi pengiriman pesan
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-[#E1EDFC] p-6 sm:p-8 flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h2 className="text-base sm:text-lg font-bold text-[#252525]">
          Kirim Pesan / Pengaduan Cepat
        </h2>
        <p className="text-xs text-[#3A3F3E]/80">
          Pesan Anda diteruskan langsung ke sekretariat desa untuk ditindaklanjuti.
        </p>
      </div>

      {submitted ? (
        <div className="p-4 rounded-xl bg-[#E1EDFC] text-[#1769C2] text-xs flex items-start gap-3 border border-[#1769C2]/20">
          <CheckCircle size={22} className="shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-sm block text-[#252525]">
              Pesan Berhasil Terkirim!
            </span>
            <p className="text-[#3A3F3E] leading-relaxed">
              Terima kasih. Petugas sekretariat gampong akan memverifikasi dan
              membalas melalui nomor WhatsApp Anda dalam 1x24 jam kerja.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-3 text-xs font-semibold text-[#1769C2] underline"
            >
              Kirim pesan lain
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
          {/* Honeypot field (anti-spam) */}
          <input
            type="text"
            name="website_url_check"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Nama Lengkap */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="sender-name" className="font-semibold text-[#252525]">
              Nama Lengkap Sesuai KTP <span className="text-rose-600">*</span>
            </label>
            <input
              id="sender-name"
              type="text"
              required
              placeholder="Contoh: Teuku Iskandar"
              className="h-11 px-3 bg-[#F5F9FF] border border-[#E1EDFC] rounded-lg text-[#252525] placeholder:text-slate-400 outline-hidden focus:border-[#1769C2] focus:bg-white transition"
            />
          </div>

          {/* Nomor WhatsApp */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="sender-phone" className="font-semibold text-[#252525]">
              Nomor WhatsApp Aktif <span className="text-rose-600">*</span>
            </label>
            <input
              id="sender-phone"
              type="tel"
              required
              placeholder="08xxxxxxxxxx"
              className="h-11 px-3 bg-[#F5F9FF] border border-[#E1EDFC] rounded-lg font-mono text-[#252525] placeholder:text-slate-400 outline-hidden focus:border-[#1769C2] focus:bg-white transition"
            />
            <span className="text-[11px] text-[#3A3F3E]/70">
              Untuk pengiriman konfirmasi tindak lanjut aduan.
            </span>
          </div>

          {/* Kategori Urusan */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="sender-subject" className="font-semibold text-[#252525]">
              Klasifikasi Urusan <span className="text-rose-600">*</span>
            </label>
            <select
              id="sender-subject"
              required
              defaultValue=""
              className="h-11 px-3 bg-[#F5F9FF] border border-[#E1EDFC] rounded-lg text-[#252525] outline-hidden focus:border-[#1769C2] focus:bg-white transition cursor-pointer"
            >
              <option value="" disabled>
                Pilih Klasifikasi Kepentingan
              </option>
              <option value="layanan-surat">
                Pelayanan Surat Pengantar &amp; Rekomendasi
              </option>
              <option value="bantuan-sosial">
                Informasi Bantuan Sosial / PKH / BLT
              </option>
              <option value="infrastruktur">
                Pengaduan Fasilitas Publik &amp; Lingkungan
              </option>
              <option value="saran-apbg">
                Saran Transparansi Anggaran (APBG)
              </option>
              <option value="lainnya">Lainnya / Pertanyaan Umum</option>
            </select>
          </div>

          {/* Isi Pesan */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="sender-message" className="font-semibold text-[#252525]">
              Isi Pesan / Keterangan Aduan <span className="text-rose-600">*</span>
            </label>
            <textarea
              id="sender-message"
              required
              rows={4}
              placeholder="Jelaskan kebutuhan atau kendala Anda secara ringkas dan jelas..."
              className="p-3 bg-[#F5F9FF] border border-[#E1EDFC] rounded-lg text-[#252525] placeholder:text-slate-400 outline-hidden focus:border-[#1769C2] focus:bg-white transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="h-11 w-full rounded-lg bg-[#1769C2] hover:bg-[#12549E] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all active:scale-[0.99] disabled:opacity-70"
          >
            <Send size={15} />
            <span>{loading ? "Mengirim Pesan..." : "Kirim Pesan Sekarang"}</span>
          </button>
        </form>
      )}
    </div>
  );
}

