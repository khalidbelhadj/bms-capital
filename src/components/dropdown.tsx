"use client";

import { cn } from "@/lib/utils";
import React, { PropsWithChildren, useState } from "react";

export default function Dropdown({
  children,
  href,
  title,
}: PropsWithChildren<{
  href: string;
  title: string;
}>) {
  const [show, setShow] = useState(false);

  return (
    <li
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
      className="relative h-full flex items-center"
    >
      <a href={href}>{title}</a>
      <div
        className={cn(
          "absolute top-3/4 pl-4 flex-col gap-2 text-nowrap flex border-l invisible opacity-0 not-active bg-white transition-all",
          show && "visible opacity-100"
        )}
      >
        {children}
      </div>
    </li>
  );
}
