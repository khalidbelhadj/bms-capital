"use client";

import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ArticlePDFDynamic({ url }: { url: string }) {
  const docRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState<number>();
  const [width, setWidth] = useState<number>();

  return (
    <div ref={docRef}>
      <Document
        loading={<></>}
        className="flex flex-col gap-2"
        file={url}
        onLoadSuccess={({ numPages: nextNumPages }) => {
          if (docRef.current) setWidth(docRef.current.clientWidth);
          setNumPages(nextNumPages);
        }}
      >
        {Array.from(new Array(numPages), (_, index) => (
          <Page
            loading={<></>}
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            className="border drop-shadow-md"
            width={width}
          />
        ))}
      </Document>
    </div>
  );
}

const ArticlePDF = dynamic(() => Promise.resolve(ArticlePDFDynamic), {
  ssr: false,
});

export default ArticlePDF;
