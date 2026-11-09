import { Suspense } from "react";
import type { Metadata } from "next";
import StatusTrackerClient from "@/components/layanan/StatusTrackerClient";
import {
  LayananBreadcrumb,
  LayananNavTabs,
  StatusHeaderSection,
} from "@/features/layanan/components";

export const metadata: Metadata = {
  title: "Lacak Status Permohonan & Pengaduan - Gampong Lam Awe",
  description:
    "Periksa perkembangan berkas administrasi surat atau tindak lanjut pengaduan Anda secara real-time menggunakan kode tiket resmi gampong.",
};

export default function LacakStatusPage() {
  return (
    <div className="flex flex-col gap-8 pb-16">
      <LayananBreadcrumb items={[{ label: "Lacak Status Tiket" }]} />

      <section className="flex flex-col gap-6">
        <StatusHeaderSection />
        <LayananNavTabs activeTab="status" />
      </section>

      <Suspense
        fallback={
          <div className="p-12 text-center text-xs text-[var(--color-brand-body)] bg-white rounded-2xl border border-[var(--color-brand-border)]">
            Memuat sistem pelacakan tiket...
          </div>
        }
      >
        <StatusTrackerClient />
      </Suspense>
    </div>
  );
}
