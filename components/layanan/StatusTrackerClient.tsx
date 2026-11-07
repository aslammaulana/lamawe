"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  CheckCircle2,
  Clock,
  HardHat,
  FileText,
  Download,
  AlertCircle,
  MessageSquare,
  ShieldCheck,
  UserCheck,
  Calendar,
  Layers,
  ArrowRight,
} from "lucide-react";

interface TicketDetails {
  code: string;
  category: string;
  status: "Diterima" | "Diproses" | "Selesai";
  statusText: string;
  title: string;
  registeredAt: string;
  applicantMasked: string;
  currentStep: number;
  officerName: string;
  officerRole: string;
  officerNote: string;
  noteDate: string;
  attachmentName?: string;
  attachmentSize?: string;
  attachmentUrl?: string;
}

const mockTickets: Record<string, TicketDetails> = {
  "#LMA-2026-001": {
    code: "#LMA-2026-001",
    category: "Infrastruktur & Lingkungan",
    status: "Diproses",
    statusText: "Sedang Dalam Penanganan",
    title: "Pengaduan Perbaikan Saluran Drainase Jurong Cot Meurak",
    registeredAt: "14 Maret 2026, 09:15 WIB",
    applicantMasked: "M******* F*****",
    currentStep: 2,
    officerName: "Teuku Ridwan",
    officerRole: "Kaur Pembangunan & Tata Ruang Gampong Lam Awe",
    officerNote:
      "Laporan pengaduan telah kami terima dan ditinjau langsung bersama Kepala Dusun Cot Meurak pada Selasa pagi. Tim logistik gampong telah menjadwalkan perbaikan gorong-gorong serta pengerukan endapan lumpur pada hari Jumat mendatang. Dokumen usulan perbaikan sudah disetujui dan diteruskan ke Keuchik untuk alokasi tanggap darurat APBG.",
    noteDate: "15 Maret 2026, 11:30 WIB",
    attachmentName: "BA-Inspeksi-CotMeurak-01.pdf",
    attachmentSize: "1.2 MB",
    attachmentUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7UtRfaAMSMGhH66QEDHCIaXXyP65u9T0-FA1lUib5WvMb9fri-y9BWWMO2qtZ_9UKUMm_g7efC5Z2-7mkByhVg_DAraa8Ci2hYaaLWPs4oKDabIKS2aSMmj5HeET5oLdDXF15oRuCCnLC3xZeXUHI3iSq_AiSfcNtxybOR3WbpyCM-2fknns1zEA_XLwQRVDI3xOZtpZ4SVrVLJaxqTNVm4q9YrhA76xfsxluOayx",
  },
  "#LMA-2026-SKU-0149": {
    code: "#LMA-2026-SKU-0149",
    category: "Usaha & Perekonomian",
    status: "Diproses",
    statusText: "Menunggu Pengesahan TTE Keuchik",
    title: "Permohonan Surat Keterangan Usaha (SKU) Kios Kelontong",
    registeredAt: "16 Maret 2026, 08:30 WIB",
    applicantMasked: "S***** A****",
    currentStep: 2,
    officerName: "M. Ridwan, S.Sos",
    officerRole: "Sekretaris Gampong Lam Awe",
    officerNote:
      "Berkas identitas e-KTP, KK, dan foto tempat usaha telah diverifikasi lengkap dan valid oleh Kaur Tata Usaha. Saat ini draf naskah dinas sedang menunggu pembubuhan tanda tangan elektronik (TTE) Keuchik Lam Awe.",
    noteDate: "16 Maret 2026, 14:10 WIB",
    attachmentName: "Draf-SKU-0149.pdf",
    attachmentSize: "280 KB",
  },
};

export default function StatusTrackerClient() {
  const searchParams = useSearchParams();
  const queryTicket = searchParams.get("ticket");

  const [inputCode, setInputCode] = useState(queryTicket || "#LMA-2026-001");
  const [activeTicket, setActiveTicket] = useState<TicketDetails | null>(
    mockTickets["#LMA-2026-001"]
  );
  const [searched, setSearched] = useState(true);

  useEffect(() => {
    if (queryTicket) {
      const formatted = queryTicket.startsWith("#")
        ? queryTicket.toUpperCase()
        : `#${queryTicket.toUpperCase()}`;
      setInputCode(formatted);
      handleSearchTicket(formatted);
    }
  }, [queryTicket]);

  const handleSearchTicket = (codeToSearch: string) => {
    const cleanCode = codeToSearch.trim().toUpperCase();
    if (!cleanCode) return;

    if (mockTickets[cleanCode]) {
      setActiveTicket(mockTickets[cleanCode]);
    } else {
      // Dynamic fallback for generated tickets
      setActiveTicket({
        code: cleanCode,
        category: "Pelayanan Administrasi Digital",
        status: "Diproses",
        statusText: "Dalam Verifikasi Petugas",
        title: `Layanan Permohonan Registrasi (${cleanCode})`,
        registeredAt: "Hari ini, Baru saja",
        applicantMasked: "Warga Gampong Lam Awe",
        currentStep: 1,
        officerName: "Petugas Loket Pelayanan",
        officerRole: "Kaur Tata Usaha Gampong Lam Awe",
        officerNote:
          "Berkas digital Anda telah masuk ke sistem antrean pelayanan online Gampong Lam Awe dan sedang diverifikasi kelengkapan persyaratannya.",
        noteDate: "Hari ini",
        attachmentName: `Registrasi-${cleanCode}.pdf`,
        attachmentSize: "185 KB",
      });
    }
    setSearched(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearchTicket(inputCode);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Search Input Box */}
      <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm">
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="ticketInput"
              className="text-sm font-bold text-[var(--color-brand-heading)] block"
            >
              Masukkan Nomor Tiket Registrasi
            </label>
            <span className="text-xs text-[var(--color-brand-body)]">
              Format resmi diawali dengan tanda pagar dan kode gampong (contoh:{" "}
              <strong className="text-[var(--color-brand-primary)]">#LMA-2026-001</strong> atau{" "}
              <strong className="text-[var(--color-brand-primary)]">#LMA-2026-SKU-0149</strong>)
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-gray-400 font-bold">
                #
              </span>
              <input
                id="ticketInput"
                type="text"
                required
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="#LMA-2026-001"
                className="w-full h-12 pl-9 pr-4 rounded-xl border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] text-[var(--color-brand-heading)] font-mono text-sm uppercase focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:bg-white transition-all"
              />
            </div>
            <button
              type="submit"
              className="h-12 px-6 rounded-xl bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors shrink-0"
            >
              <Search className="w-4 h-4" />
              <span>Cek Status Sekarang</span>
            </button>
          </div>

          <div className="flex items-start gap-2 pt-1 text-xs text-[var(--color-brand-body)]">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <p>
              Lupa atau kehilangan nomor tiket? Silakan hubungi meja layanan via{" "}
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-brand-accent)] font-semibold hover:underline"
              >
                WhatsApp Petugas Loket
              </a>{" "}
              dengan menyebutkan nama dan NIK pemohon.
            </p>
          </div>
        </form>
      </section>

      {/* Ticket Result Details Card */}
      {searched && activeTicket && (
        <section className="bg-white border border-[var(--color-brand-border)] rounded-2xl shadow-sm overflow-hidden flex flex-col">
          {/* Header Bar */}
          <div className="p-6 lg:p-8 bg-[var(--color-brand-surface)] border-b border-[var(--color-brand-border)] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono font-bold text-xs px-3 py-1 rounded-lg bg-[var(--color-brand-primary)] text-white">
                  {activeTicket.code}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-[var(--color-brand-primary)]">
                  {activeTicket.category}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {activeTicket.statusText}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-[var(--color-brand-heading)]">
                {activeTicket.title}
              </h2>
            </div>

            <div className="flex flex-col md:items-end text-xs text-[var(--color-brand-body)] gap-1 shrink-0">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                Registrasi: <strong className="text-[var(--color-brand-heading)] font-mono">{activeTicket.registeredAt}</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-gray-400" />
                Pemohon: <strong className="text-[var(--color-brand-heading)] font-mono">{activeTicket.applicantMasked}</strong>
                <span className="text-[10px] text-gray-400">(Disamarkan demi privasi)</span>
              </span>
            </div>
          </div>

          {/* Stepper Timeline Section */}
          <div className="p-6 lg:p-8 flex flex-col gap-6">
            <h3 className="text-sm font-bold text-[var(--color-brand-heading)] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[var(--color-brand-accent)]" />
              Tahapan Penanganan Berkas (SOP Gampong)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Step 1 */}
              <div
                className={`p-5 rounded-2xl border flex flex-col gap-2 ${
                  activeTicket.currentStep >= 1
                    ? "bg-blue-50/50 border-blue-200"
                    : "bg-gray-50 border-gray-200 opacity-60"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                      activeTicket.currentStep >= 1
                        ? "bg-[var(--color-brand-primary)] text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    1
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Selesai Diverifikasi
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[var(--color-brand-heading)] mt-1">
                  Permohonan Diterima
                </h4>
                <p className="text-xs text-[var(--color-brand-body)] leading-relaxed">
                  Berkas terverifikasi lengkap di sistem gampong dan diteruskan ke bidang teknis.
                </p>
                <span className="font-mono text-[11px] text-gray-400 mt-auto pt-2">
                  14 Mar 2026, 10:20 WIB
                </span>
              </div>

              {/* Step 2 */}
              <div
                className={`p-5 rounded-2xl border flex flex-col gap-2 ${
                  activeTicket.currentStep >= 2
                    ? "bg-amber-50/60 border-amber-300 ring-2 ring-amber-400/20 shadow-xs"
                    : "bg-gray-50 border-gray-200 opacity-60"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                      activeTicket.currentStep >= 2
                        ? "bg-amber-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    2
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                    Sedang Berlangsung
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[var(--color-brand-heading)] mt-1">
                  Diproses & Peninjauan
                </h4>
                <p className="text-xs text-[var(--color-brand-body)] leading-relaxed">
                  Petugas lapangan bersama kaur teknis melakukan peninjauan lokasi atau pencocokan data kependudukan.
                </p>
                <span className="font-mono text-[11px] text-amber-700 font-semibold mt-auto pt-2">
                  15 Mar 2026, 11:30 WIB
                </span>
              </div>

              {/* Step 3 */}
              <div
                className={`p-5 rounded-2xl border flex flex-col gap-2 ${
                  activeTicket.currentStep >= 3
                    ? "bg-emerald-50/50 border-emerald-300"
                    : "bg-[var(--color-brand-surface)] border-[var(--color-brand-border)] opacity-70"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                      activeTicket.currentStep >= 3
                        ? "bg-emerald-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    3
                  </div>
                  <span className="text-[11px] font-semibold text-gray-500">
                    Tahap Akhir
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[var(--color-brand-heading)] mt-1">
                  Eksekusi & Dokumen Sah
                </h4>
                <p className="text-xs text-[var(--color-brand-body)] leading-relaxed">
                  Penerbitan surat keterangan atau tuntasnya perbaikan sarana fisik di lapangan.
                </p>
                <span className="font-mono text-[11px] text-gray-400 mt-auto pt-2">
                  Estimasi: 18 Maret 2026
                </span>
              </div>
            </div>

            {/* Officer Note Bento Box */}
            <div className="bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] rounded-2xl p-6 flex flex-col gap-4 mt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[var(--color-brand-border)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-brand-primary)] text-white flex items-center justify-center shrink-0 font-bold text-xs">
                    TR
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-brand-heading)]">
                      {activeTicket.officerName}
                    </h4>
                    <span className="text-xs text-[var(--color-brand-body)]">
                      {activeTicket.officerRole}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs text-gray-400 bg-white px-2.5 py-1 rounded-lg border border-[var(--color-brand-border)] self-start sm:self-auto">
                  {activeTicket.noteDate}
                </span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[var(--color-brand-border)] text-xs sm:text-sm text-[var(--color-brand-heading)] leading-relaxed italic">
                &ldquo;{activeTicket.officerNote}&rdquo;
              </div>

              {/* Attachments if any */}
              {activeTicket.attachmentName && (
                <div className="flex flex-col gap-2 pt-2">
                  <span className="text-xs font-bold text-[var(--color-brand-heading)]">
                    Dokumentasi Lapangan & Lampiran Berkas:
                  </span>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    {activeTicket.attachmentUrl && (
                      <div className="relative w-full sm:w-44 h-24 rounded-xl overflow-hidden shrink-0 border border-[var(--color-brand-border)]">
                        <Image
                          src={activeTicket.attachmentUrl}
                          alt="Dokumentasi Berkas"
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[var(--color-brand-border)] flex-1">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-red-500 shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-[var(--color-brand-heading)] block">
                            {activeTicket.attachmentName}
                          </span>
                          <span className="text-[11px] font-mono text-gray-400">
                            {activeTicket.attachmentSize} • Terverifikasi
                          </span>
                        </div>
                      </div>
                      <a
                        href="#unduh"
                        className="h-8 px-3 rounded-lg bg-[var(--color-brand-surface)] hover:bg-gray-100 text-[var(--color-brand-accent)] text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Unduh</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

