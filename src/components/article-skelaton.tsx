import React from "react";

export default function ArticleSkelton() {
  return (
    <div className="bg-white p-5 w-full border gap-5 h-72 max-sm:h-96 shadow-sm flex max-sm:flex-col-reverse text-left prose-p:my-0">
      <div className="flex flex-col gap-5 w-full flex-[2]">
        <div className="h-10 bg-accent animate-pulse"></div>
        <div className="bg-accent flex-grow w-full animate-pulse"></div>
      </div>
      <div className="h-full flex-1 bg-accent animate-pulse"></div>
    </div>
  );
}
