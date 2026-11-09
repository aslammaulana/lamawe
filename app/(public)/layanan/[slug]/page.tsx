import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LayananDetailClient from "@/components/layanan/LayananDetailClient";
import { servicesDirectory } from "@/features/layanan/data/layananDirectory";
import {
  LayananBreadcrumb,
  LayananDetailHeader,
  LayananQuickFacts,
  LayananSopTimeline,
  LayananDownloadBlangko,
  LayananSyariatNotice,
  LayananDetailSidebar,
} from "@/features/layanan/components";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const srv = servicesDirectory[slug];
  if (!srv) {
    return {
      title: "Layanan Desa - Gampong Lam Awe",
    };
  }
  return {
    title: `${srv.nama} - Layanan Gampong Lam Awe`,
    description: srv.deskripsi,
  };
}

export default async function DetailLayananPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesDirectory[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8 pb-16">
      <LayananBreadcrumb items={[{ label: service.nama }]} />

      <LayananDetailHeader service={service} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 flex flex-col gap-8">
          <LayananQuickFacts waktu={service.waktu} biaya={service.biaya} />

          <section id="persyaratan-berkas">
            <LayananDetailClient
              slug={slug}
              namaLayanan={service.nama}
              kodeSOP={service.kodeSOP}
              requirements={service.requirements}
            />
          </section>

          <LayananSopTimeline steps={service.steps} />
          <LayananDownloadBlangko namaLayanan={service.nama} />
          <LayananSyariatNotice />
        </div>

        <LayananDetailSidebar />
      </div>
    </div>
  );
}
