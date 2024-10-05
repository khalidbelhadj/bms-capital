import { Database } from "@/utils/supabase/supabase-types";
import React from "react";
import Image from "next/image";

type ArticleType = Database["public"]["Tables"]["articles"]["Row"] & {
  fileUrl: string;
  coverImageUrl: string;
};

export default function Article({ article }: { article: ArticleType }) {
  return (
    <a
      key={"user-" + article.id}
      target="_blank"
      href={article.fileUrl}
      className="bg-white p-5 w-full border gap-5 h-72 max-sm:h-fit shadow-sm flex max-sm:flex-col-reverse text-left prose-p:my-0 group min-w-0 hover:text-muted-foreground transition-all"
    >
      <div className="flex-[2] flex flex-col min-h-0 gap-1 min-w-0">
        <h2 className="font-bold text-2xl pb-2">{article.title}</h2>

        <div className="text-sm text-foreground/70 overflow-clip flex-grow min-h-0 relative overflow-ellipsis">
          {article.description}
          <div className="bg-gradient-to-t from-white to-transparent absolute top-0 left-0 w-full h-full" />
        </div>

        <p className="text-xs text-neutral-400 mt-auto">
          {new Date(article.created_at)
            .toString()
            .split(" ")
            .slice(0, 4)
            .join(" ")}
        </p>
      </div>

      <div className="h-full flex-1 overflow-hidden flex items-center justify-center border">
        <Image
          priority
          width={500}
          height={500}
          alt="Cover Image"
          src={article.coverImageUrl ?? ""}
          className="object-cover bg-cover w-full h-full group-hover:brightness-90 transition-all"
        />
      </div>
    </a>
  );
}
