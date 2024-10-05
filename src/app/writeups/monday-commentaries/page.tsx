import Main from "@/components/main";
import { Suspense } from "react";
import ArticlesHydration from "@/components/articles-hydration";
import Articles from "@/components/articles";
import ArticlesSkelton from "@/components/articles-skelton";

export default function MondayCommentaries() {
  return (
    <Main className="items-start pt-10">
      <div
        className="max-w-screen-lg w-[1024px] text-center items-center flex flex-col prose gap-10"
        id="feed"
      >
        <h1>Monday Commentaries.</h1>
        <Suspense fallback={<ArticlesSkelton />}>
          <ArticlesHydration>
            <Articles />
          </ArticlesHydration>
        </Suspense>
      </div>
    </Main>
  );
}
