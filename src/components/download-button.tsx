"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import React from "react";

export default function DownloadButton({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const downloadFile = async () => {
    const res = await fetch(url);
    const blob = await res.blob();
    const objUrl = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = objUrl;
    link.setAttribute("download", title + ".pdf");
    document.body.appendChild(link);
    link.click();
    link.parentNode!.removeChild(link);
  };

  return (
    <Button onClick={downloadFile} className="flex items-center gap-2">
      <Download size={15} />
      Download
    </Button>
  );
}
