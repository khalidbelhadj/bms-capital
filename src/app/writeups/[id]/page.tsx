import DocumentComp from "@/components/document";
import Main from "@/components/main";
import { Separator } from "@/components/ui/separator";
import { getArticle, getFileUrl } from "@/lib/actions";
import { Download } from "lucide-react";
import Link from "next/link";
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
      <div className="flex flex-col max-w-screen-md mx-auto gap-5">
        <h1>{article?.title}</h1>

        <div className="flex items-center">
          <p className="text-neutral-400">
            {new Date(article.created_at)
              .toString()
              .split(" ")
              .slice(0, 4)
              .join(" ")}
          </p>
          <Link
            className="bg-primary text-primary-foreground w-fit py-2 px-4 rounded-full flex items-center gap-1 ml-auto "
            href={url}
            download
            target="_blank"
          >
            <Download size={15} />
            Download
          </Link>
        </div>

        <Separator />
        <DocumentComp data={url} />
      </div>
    </Main>
  );
}
