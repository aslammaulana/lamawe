import type { Metadata } from "next";
import { articlesData } from "@/features/informasi/data/articlesData";
import {
  InformasiBreadcrumb,
  ArticleDetailHeader,
  ArticleDetailContent,
  ArticleDetailSidebar,
} from "@/features/informasi/components";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData[slug];
  if (!article) {
    return {
      title: "Warta Gampong - Desa Lam Awe",
    };
  }
  return {
    title: `${article.title} - Gampong Lam Awe`,
    description: article.leadParagraph.substring(0, 160),
  };
}

export default async function DetailBeritaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articlesData[slug] || articlesData["saluran-irigasi-jurong-cot-meurak"];

  return (
    <div className="flex flex-col gap-8 pb-16">
      <InformasiBreadcrumb
        items={[
          { label: "Warta Gampong", href: "/berita" },
          { label: "Detail Berita" },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <article className="lg:col-span-8 bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col gap-6">
          <ArticleDetailHeader article={article} />
          <ArticleDetailContent article={article} />
        </article>

        <ArticleDetailSidebar />
      </div>
    </div>
  );
}
