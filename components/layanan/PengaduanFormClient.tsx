"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Send,
  Upload,
  ShieldCheck,
  CheckCircle2,
  Copy,
  ExternalLink,
  RotateCcw,
  AlertCircle,
  FileCheck,
  Paperclip,
  Check,
} from "lucide-react";

export default function PengaduanFormClient() {
  const [formData, setFormData] = useState({
    nama: "",
    kontak: "",
    jurong: "",
    kategori: "",
    judul: "",
    deskripsi: "",
    website_url: "", // honeypot field
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [ticketResult, setTicketResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot spam check
    if (formData.website_url) {
      console.warn("Spam bot detected via honeypot.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedTicket = `#LMA-2026-${Math.floor(100 + Math.random() * 900)}`;
      setTicketResult(generatedTicket);
      setIsSubmitting(false);
    }, 600);
  };

  const handleCopy = () => {
    if (ticketResult) {
      navigator.clipboard.writeText(ticketResult);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setFormData({
      nama: "",
      kontak: "",
      jurong: "",
      kategori: "",
      judul: "",
      deskripsi: "",
      website_url: "",
    });
    setFileName(null);
    setTicketResult(null);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Form Container */}
      <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--color-brand-border)]">
          <div>
            <h2 className="text-xl font-bold text-[var(--color-brand-heading)]">
              Formulir Laporan Gampong
            </h2>
            <p className="text-xs text-[var(--color-brand-body)] mt-0.5">
              Lengkapi data di bawah ini secara akurat dan bertanggung jawab.
            </p>
          </div>
          <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-[var(--color-brand-surface)] text-[var(--color-brand-body)] font-medium border border-[var(--color-brand-border)]">
            FORM ID: #LP-LMA
          </span>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-xs sm:text-sm">
          {/* Honeypot field (hidden from real users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_url">Website URL</label>
            <input
              type="text"
              id="website_url"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website_url}
              onChange={(e) =>
                setFormData({ ...formData, website_url: e.target.value })
              }
            />
          </div>

          {/* Nama Pelapor */}
          <div className="flex flex-col gap-1.5">
            <label className="font-bold text-[var(--color-brand-heading)] flex items-center gap-1">
              <span>Nama Lengkap Pelapor</span>
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Muhammad Furqan"
              value={formData.nama}
              onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
              className="w-full h-11 px-3.5 rounded-xl border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] text-[var(--color-brand-heading)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:bg-white transition-all"
            />
            <span className="text-[11px] text-[var(--color-brand-body)]">
              Sesuai KTP-el atau identitas resmi kependudukan.
            </span>
          </div>

          {/* Kontak Pelapor */}
          <div className="flex flex-col gap-1.5">
            <label className="font-bold text-[var(--color-brand-heading)] flex items-center gap-1">
              <span>Kontak (WhatsApp / Nomor HP)</span>
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="0812-xxxx-xxxx"
              value={formData.kontak}
              onChange={(e) => setFormData({ ...formData, kontak: e.target.value })}
              className="w-full h-11 px-3.5 rounded-xl border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] text-[var(--color-brand-heading)] font-mono focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:bg-white transition-all"
            />
            <span className="text-[11px] text-[var(--color-brand-body)]">
              Nomor aktif untuk pengiriman notifikasi status verifikasi dan perkembangan laporan.
            </span>
          </div>

          {/* Dusun & Kategori Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-bold text-[var(--color-brand-heading)]">
                Dusun / Jurong Domisili <span className="text-gray-400 font-normal">(Opsional)</span>
              </label>
              <select
                value={formData.jurong}
                onChange={(e) => setFormData({ ...formData, jurong: e.target.value })}
                className="w-full h-11 px-3.5 rounded-xl border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] text-[var(--color-brand-heading)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:bg-white transition-all cursor-pointer"
              >
                <option value="">Pilih Jurong...</option>
                <option value="Jurong Cot Meurak">Jurong Cot Meurak</option>
                <option value="Jurong Meunasah Tuha">Jurong Meunasah Tuha</option>
                <option value="Jurong Lampoh Peukan">Jurong Lampoh Peukan</option>
                <option value="Jurong Cot Cut">Jurong Cot Cut</option>
                <option value="Warga Luar Gampong">Warga Luar Gampong</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-bold text-[var(--color-brand-heading)] flex items-center gap-1">
                <span>Kategori Aspirasi</span>
                <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.kategori}
                onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                className="w-full h-11 px-3.5 rounded-xl border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] text-[var(--color-brand-heading)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:bg-white transition-all cursor-pointer"
              >
                <option value="">Pilih Kategori...</option>
                <option value="Infrastruktur & Jalan Desa">Infrastruktur & Jalan Desa</option>
                <option value="Pelayanan Publik & Dokumen">Pelayanan Publik & Dokumen</option>
                <option value="Kebersihan & Lingkungan Pesisir">Kebersihan & Lingkungan Pesisir</option>
                <option value="Bantuan Sosial & BLT">Bantuan Sosial & BLT Gampong</option>
                <option value="Keamanan & Ketertiban Adat">Keamanan & Ketertiban Adat</option>
              </select>
            </div>
          </div>

          {/* Judul Pengaduan */}
          <div className="flex flex-col gap-1.5">
            <label className="font-bold text-[var(--color-brand-heading)] flex items-center gap-1">
              <span>Judul / Pokok Pengaduan</span>
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Perbaikan Saluran Drainase Tersumbat di Lorong 3"
              value={formData.judul}
              onChange={(e) => setFormData({ ...formData, judul: e.target.value })}
              className="w-full h-11 px-3.5 rounded-xl border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] text-[var(--color-brand-heading)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:bg-white transition-all"
            />
          </div>

          {/* Kronologi Detail */}
          <div className="flex flex-col gap-1.5">
            <label className="font-bold text-[var(--color-brand-heading)] flex items-center gap-1">
              <span>Uraian Kronologi / Deskripsi Masalah</span>
              <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={4}
              placeholder="Jelaskan secara rinci permasalahan, waktu kejadian, dan patokan lokasi fisik untuk memudahkan survei lapangan..."
              value={formData.deskripsi}
              onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
              className="w-full p-3.5 rounded-xl border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] text-[var(--color-brand-heading)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:bg-white transition-all resize-y"
            />
          </div>

          {/* Upload File Lampiran */}
          <div className="flex flex-col gap-1.5">
            <label className="font-bold text-[var(--color-brand-heading)]">
              Lampiran Foto Bukti / Dokumen Pendukung <span className="text-gray-400 font-normal">(Opsional)</span>
            </label>
            <label className="border-2 border-dashed border-[var(--color-brand-border)] hover:border-[var(--color-brand-primary)] rounded-2xl p-6 text-center cursor-pointer transition-colors bg-[var(--color-brand-surface)] hover:bg-blue-50/50 flex flex-col items-center justify-center">
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="w-10 h-10 rounded-full bg-white shadow-xs flex items-center justify-center text-[var(--color-brand-primary)] mb-2">
                <Upload className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[var(--color-brand-heading)]">
                {fileName ? fileName : "Pilih File Foto atau Dokumen"}
              </span>
              <span className="text-[11px] text-[var(--color-brand-body)] mt-0.5">
                Format JPG, PNG, atau PDF (Maksimal 5 MB)
              </span>
            </label>
          </div>

          {/* Privacy Note */}
          <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[var(--color-brand-primary)] shrink-0 mt-0.5" />
            <div className="text-xs text-[var(--color-brand-body)] leading-relaxed">
              <strong className="text-[var(--color-brand-heading)] block mb-0.5">
                Jaminan Kerahasiaan Data Pelapor:
              </strong>
              Data pribadi dan identitas pelapor dilindungi sepenuhnya oleh Pemerintah Gampong Lam Awe dan hanya dipergunakan untuk keperluan penanganan dan klarifikasi teknis.
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto min-h-[44px] px-8 rounded-xl bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "Mengirim Laporan..." : "Kirim Pengaduan"}</span>
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto min-h-[44px] px-6 rounded-xl border border-[var(--color-brand-border)] hover:bg-gray-100 text-[var(--color-brand-heading)] font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Bersihkan Form</span>
            </button>
          </div>
        </form>
      </div>

      {/* Live Confirmation State Card */}
      {ticketResult && (
        <section className="bg-white border-2 border-emerald-400 rounded-2xl p-6 lg:p-8 shadow-md flex flex-col gap-4 animate-in fade-in duration-300">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-1">
                Laporan Terdaftar di Register Digital
              </span>
              <h3 className="text-lg font-bold text-[var(--color-brand-heading)]">
                Pengaduan Anda Berhasil Terkirim!
              </h3>
              <p className="text-xs text-[var(--color-brand-body)] mt-1">
                Tim administrasi dan perangkat gampong akan memverifikasi berkas dalam 1x24 jam kerja.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase font-bold text-emerald-800 block">
                Nomor Tiket Pengaduan Resmi:
              </span>
              <span className="text-2xl font-bold font-mono text-[var(--color-brand-primary)]">
                {ticketResult}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="h-10 px-4 rounded-xl bg-white border border-emerald-300 text-emerald-800 font-semibold text-xs flex items-center gap-1.5 shadow-xs hover:bg-emerald-50 transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? "Tersalin!" : "Salin Tiket"}</span>
              </button>
              <Link
                href={`/layanan/status?ticket=${ticketResult}`}
                className="h-10 px-4 rounded-xl bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white font-semibold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Lacak Status Tiket</span>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

