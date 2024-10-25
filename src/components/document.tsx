"use client";

import React, { useRef, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

export default function DocumentComp({ data }) {
  const docRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState<number>();
  const [width, setWidth] = useState<number>();
  return (
    <Document
      loading={<></>}
      className="flex w-full flex-col gap-2"
      file={data}
      onLoadSuccess={({ numPages: nextNumPages }) => {
        if (docRef.current) setWidth(docRef.current.clientWidth);
        setNumPages(nextNumPages);
      }}
      options={options}
    >
      {Array.from(new Array(numPages), (_, index) => (
        <Page
          loading={<></>}
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          className="w-full border shadow-sm"
          width={width ?? 0}
        ></Page>
      ))}
    </Document>
  );
}
