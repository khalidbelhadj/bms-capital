"use client";

import useArticles from "@/hooks/use-articles";
import Article from "@/components/article";
import AdminArticlesSkelton from "@/components/admin-articles-skelton";
import DeleteArticleButton from "@/components/delete-article-button";
import EditArticleButton from "@/components/edit-article-button";

export default function AdminArticles() {
  const { data: articles, isPending } = useArticles();

  if (isPending) {
    return <AdminArticlesSkelton />;
  }

  return (
    <div className="flex flex-col gap-5 w-full">
      {articles?.map((article) => (
        <div key={"admin-" + article.id} className="bg-white">
          <div className="border-b-0 border p-2 flex gap-2">
            <EditArticleButton article={article} />
            <DeleteArticleButton articleId={article.id} />
          </div>
          <Article article={article} />
        </div>
      ))}
    </div>
  );
}
