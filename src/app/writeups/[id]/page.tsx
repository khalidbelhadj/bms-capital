import ArticlePDF from "@/components/article-pdf";
import DownloadButton from "@/components/download-button";
import Main from "@/components/main";
import { Separator } from "@/components/ui/separator";
import { getArticle, getFileUrl } from "@/lib/actions";
import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default async function ArticlePage({
  params: { id },
}: {
  params: { id: number };
}) {
  const article = await getArticle(id);
  const url = await getFileUrl(id);

  if (!article || !url) {
    return <ArticleNotFound />;
  }

  return (
    <Main className="items-start">
      <div className="flex flex-col mx-auto gap-5 w-[1024px]">
        <h1>{article?.title}</h1>

        <div className="flex items-center">
          <p className="text-neutral-400">
            {new Date(article.date ?? Date.now())
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

function ArticleNotFound() {
  return (
    <Main>
      <Card className="rounded-none w-[20rem]">
        <CardHeader>
          <CardTitle>Article not found.</CardTitle>
        </CardHeader>
        <CardContent className="w-full">
          <div className="flex flex-row bg-white gap-2 w-full">
            <Link href="/writeups/commentaries" className="flex-1">
              <Button className="w-full" variant="outline">
                Commentaries
              </Button>
            </Link>

            <Link href="/" className="flex-1">
              <Button className="w-full">Home</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </Main>
  );
}
