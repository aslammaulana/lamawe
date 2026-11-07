"use client";

import { useState } from "react";
import {
  Check,
  CheckCircle2,
  Download,
  Send,
  RotateCcw,
  BadgeAlert,
  ShieldCheck,
  FileText,
  Copy,
  ExternalLink,
} from "lucide-react";

interface DocumentRequirement {
  id: string;
  label: string;
  desc: string;
}

interface LayananDetailClientProps {
  slug: string;
  namaLayanan: string;
  kodeSOP: string;
  requirements: DocumentRequirement[];
}

export default function LayananDetailClient({
  slug,
  namaLayanan,
  kodeSOP,
  requirements,
}: LayananDetailClientProps) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [formData, setFormData] = useState({
    nik: "",
    nama: "",
    jurong: "Jurong Cot Meurak",
    hp: "",
    keperluan: "",
  });
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const resetChecklist = () => {
    setCheckedItems({});
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const isAllChecked = checkedCount === requirements.length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomTicket = `#LMA-2026-${slug.substring(0, 3).toUpperCase()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;
    setSubmittedTicket(randomTicket);
  };

  const handleCopyTicket = () => {
    if (submittedTicket) {
      navigator.clipboard.writeText(submittedTicket);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Checklist Card */}
      <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 shadow-sm flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[var(--color-brand-border)]">
          <div>
            <span className="text-xs font-semibold text-[var(--color-brand-accent)] uppercase tracking-wider block">
              Langkah Persiapan Mandiri
            </span>
            <h2 className="text-lg font-bold text-[var(--color-brand-heading)]">
              Persyaratan Berkas & Dokumen
            </h2>
          </div>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-[var(--color-brand-primary)] self-start sm:self-auto">
            {checkedCount} dari {requirements.length} Berkas Siap
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[var(--color-brand-body)]">
          Pastikan Anda telah menyiapkan dokumen berikut sebelum mengajukan permohonan ke kantor desa maupun secara digital:
        </p>

        <div className="space-y-2.5">
          {requirements.map((req, idx) => {
            const isChecked = !!checkedItems[req.id];
            return (
              <label
                key={req.id}
                onClick={() => toggleCheck(req.id)}
                className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${
                  isChecked
                    ? "bg-blue-50/60 border-blue-200"
                    : "bg-[var(--color-brand-surface)] border-[var(--color-brand-border)] hover:bg-gray-100/60"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border transition-all ${
                    isChecked
                      ? "bg-[var(--color-brand-primary)] border-[var(--color-brand-primary)] text-white"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {isChecked && <Check className="w-3.5 h-3.5" />}
                </div>
                <div className="flex-1">
                  <span
                    className={`text-xs sm:text-sm font-bold block ${
                      isChecked
                        ? "text-[var(--color-brand-primary)]"
                        : "text-[var(--color-brand-heading)]"
                    }`}
                  >
                    {idx + 1}. {req.label}
                  </span>
                  <span className="text-xs text-[var(--color-brand-body)] mt-0.5 block leading-relaxed">
                    {req.desc}
                  </span>
                </div>
              </label>
            );
          })}
        </div>

        <div className="pt-3 border-t border-[var(--color-brand-border)] flex items-center justify-between text-xs text-[var(--color-brand-body)]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Kotak centang membantu memastikan tidak ada berkas yang tertinggal.
          </span>
          <button
            onClick={resetChecklist}
            className="text-[var(--color-brand-accent)] hover:underline font-semibold flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            Reset Centang
          </button>
        </div>
      </div>

      {/* Action triggers */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => setShowApplyModal(true)}
          className="flex-1 min-h-[48px] px-6 rounded-xl bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
        >
          <Send className="w-4 h-4" />
          <span>Ajukan Permohonan Online Sekarang</span>
        </button>
        <a
          href="#unduh-blangko"
          className="min-h-[48px] px-6 rounded-xl bg-white border border-[var(--color-brand-border)] hover:bg-gray-50 text-[var(--color-brand-heading)] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all"
        >
          <Download className="w-4 h-4 text-[var(--color-brand-accent)]" />
          <span>Unduh Blangko Fisik</span>
        </a>
      </div>

      {/* Modal Permohonan Online */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl flex flex-col gap-4 max-h-[90vh] overflow-y-auto">
            {!submittedTicket ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex items-start justify-between pb-3 border-b border-[var(--color-brand-border)]">
                  <div>
                    <span className="text-[11px] font-mono font-semibold text-[var(--color-brand-accent)] block">
                      FORMULIR REGISTRASI PELAYANAN MANDIRI
                    </span>
                    <h3 className="text-lg font-bold text-[var(--color-brand-heading)]">
                      {namaLayanan}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowApplyModal(false)}
                    className="p-1 rounded-lg hover:bg-gray-100 text-gray-400"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="font-semibold text-[var(--color-brand-heading)] block mb-1">
                      Nomor Induk Kependudukan (NIK 16 Digit) *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={16}
                      placeholder="11060xxxxxxxxxxx"
                      value={formData.nik}
                      onChange={(e) =>
                        setFormData({ ...formData, nik: e.target.value })
                      }
                      className="w-full h-10 px-3 rounded-lg border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] text-[var(--color-brand-heading)] font-mono focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-[var(--color-brand-heading)] block mb-1">
                      Nama Lengkap Pemohon (Sesuai KTP) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Muhammad Furqan"
                      value={formData.nama}
                      onChange={(e) =>
                        setFormData({ ...formData, nama: e.target.value })
                      }
                      className="w-full h-10 px-3 rounded-lg border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] text-[var(--color-brand-heading)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-semibold text-[var(--color-brand-heading)] block mb-1">
                        Dusun / Jurong Domisili *
                      </label>
                      <select
                        value={formData.jurong}
                        onChange={(e) =>
                          setFormData({ ...formData, jurong: e.target.value })
                        }
                        className="w-full h-10 px-3 rounded-lg border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] text-[var(--color-brand-heading)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]"
                      >
                        <option value="Jurong Cot Meurak">Jurong Cot Meurak</option>
                        <option value="Jurong Meunasah Tuha">Jurong Meunasah Tuha</option>
                        <option value="Jurong Lampoh Peukan">Jurong Lampoh Peukan</option>
                        <option value="Jurong Cot Cut">Jurong Cot Cut</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-semibold text-[var(--color-brand-heading)] block mb-1">
                        Nomor HP / WhatsApp Aktif *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="0812-xxxx-xxxx"
                        value={formData.hp}
                        onChange={(e) =>
                          setFormData({ ...formData, hp: e.target.value })
                        }
                        className="w-full h-10 px-3 rounded-lg border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] text-[var(--color-brand-heading)] font-mono focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-semibold text-[var(--color-brand-heading)] block mb-1">
                      Keterangan / Keperluan Surat *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Jelaskan secara singkat keperluan pengajuan dokumen..."
                      value={formData.keperluan}
                      onChange={(e) =>
                        setFormData({ ...formData, keperluan: e.target.value })
                      }
                      className="w-full p-3 rounded-lg border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] text-[var(--color-brand-heading)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]"
                    />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-50 text-[11px] text-[var(--color-brand-body)] flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-brand-primary)] shrink-0 mt-0.5" />
                  <span>
                    Data dilindungi kerahasiaannya. Berkas akan diverifikasi petugas desa dalam 1x24 jam kerja.
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="submit"
                    className="flex-1 h-11 rounded-xl bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Permohonan & Ambil Tiket</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowApplyModal(false)}
                    className="h-11 px-4 rounded-xl border border-[var(--color-brand-border)] text-xs font-semibold hover:bg-gray-100"
                  >
                    Batal
                  </button>
                </div>
              </form>
            ) : (
              /* Success Result Inside Modal */
              <div className="flex flex-col gap-4 text-center py-2">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-brand-heading)]">
                    Permohonan Berhasil Dikirim!
                  </h3>
                  <p className="text-xs text-[var(--color-brand-body)] mt-1">
                    Berkas Anda telah masuk antrean verifikasi Kasi Pelayanan Gampong Lam Awe.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] flex flex-col gap-1 items-center">
                  <span className="text-[11px] text-gray-500 uppercase font-mono font-semibold">
                    KODE TIKET REGISTRASI RESMI:
                  </span>
                  <span className="text-xl font-bold font-mono text-[var(--color-brand-primary)]">
                    {submittedTicket}
                  </span>
                  <button
                    onClick={handleCopyTicket}
                    className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[var(--color-brand-border)] text-xs font-semibold text-[var(--color-brand-heading)] hover:bg-gray-50 shadow-xs"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? "Tersalin!" : "Salin Kode Tiket"}</span>
                  </button>
                </div>

                <p className="text-[11px] text-[var(--color-brand-body)]">
                  Simpan kode tiket ini untuk memantau status berkas Anda melalui menu <strong>Lacak Status</strong>.
                </p>

                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <a
                    href={`/layanan/status?ticket=${submittedTicket}`}
                    className="flex-1 h-10 rounded-xl bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white text-xs font-semibold flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Lacak Status Sekarang</span>
                  </a>
                  <button
                    onClick={() => {
                      setShowApplyModal(false);
                      setSubmittedTicket(null);
                    }}
                    className="h-10 px-4 rounded-xl border border-[var(--color-brand-border)] text-xs font-semibold hover:bg-gray-100"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

