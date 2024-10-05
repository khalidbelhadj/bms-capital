import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

export default function Main({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <main
      className={cn(
        "relative p-5 max-lg:p-md flex-grow max-sm:min-h-[calc(100dvh-5rem)] flex items-center justify-center",
        className
      )}
    >
      {children}

      <div
        id="grid"
        className="-z-10 absolute w-full h-[calc(100vh-10rem)] top-0 max-sm:h-[calc(100dvh-5rem)]"
      ></div>
    </main>
  );
}
