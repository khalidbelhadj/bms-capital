import ArticleSkelton from "@/components/article-skelaton";
import React from "react";

export default function AdminArticlesSkelton() {
  return (
    <div className="flex flex-col gap-5 w-full">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={"admin-articles-skelton-" + i} className="bg-white">
          <div className="border-b-0 border p-2 flex gap-2">
            <div className="bg-accent animate-pulse h-9 w-20"></div>
            <div className="bg-accent animate-pulse ml-auto h-9 w-20"></div>
          </div>
          <ArticleSkelton />
        </div>
      ))}
    </div>
  );
}
