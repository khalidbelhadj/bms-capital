"use client";

import React from "react";

import useArticles from "@/hooks/use-articles";
import Article from "@/components/article";

export default function Articles() {
  const { data: articles } = useArticles();

  return (
    <div className="flex flex-col gap-5 w-full">
      {articles?.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
}
