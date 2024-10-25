import ArticlePDF from "@/components/article-pdf";
import DownloadButton from "@/components/download-button";
import Main from "@/components/main";
import { Separator } from "@/components/ui/separator";
import { getArticle, getFileUrl } from "@/lib/actions";
import React from "react";

export default async function ArticlePage({
  params: { id },
}: {
  params: { id: number };
}) {
  const article = await getArticle(id);
  if (!article) return <div>Article not found</div>;

  const url = await getFileUrl(id);
  if (!url) return <div>Article not found</div>;

  return (
    <Main className="items-start">
      <div className="flex flex-col mx-auto gap-5 w-[1024px]">
        <h1>{article?.title}</h1>

        <div className="flex items-center">
          <p className="text-neutral-400">
            {new Date(article.created_at)
              .toString()
              .split(" ")
              .slice(0, 4)
              .join(" ")}
          </p>
          <div className="ml-auto">
            <DownloadButton url={url} title={article.title} />
          </div>
        </div>

        <Separator />
        <ArticlePDF url={url} />
      </div>
    </Main>
  );
}
