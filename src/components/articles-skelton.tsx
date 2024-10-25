import ArticleSkelton from "@/components/article-skelaton";
import React from "react";

export default function ArticlesSkelton() {
  return (
    <div className="flex flex-col gap-5 w-full">
      {Array.from({ length: 10 }).map((_, i) => (
        <ArticleSkelton key={"article-skelton-" + i} />
      ))}
    </div>
  );
}
