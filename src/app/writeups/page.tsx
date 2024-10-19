import Main from "@/components/main";
import Link from "next/link";
import React from "react";

export default function Writeups() {
  return (
    <Main>
      <div className="max-w-screen-md flex flex-col gap-5">
        <h1>BMS Capital Commentaries.</h1>
        <div className="flex gap-2 flex-col">
          <p>
            At BMS Capital, our mission is to explore the complex world of
            finance. To do that, we offer weekly commentaries that aim to
            eliminate jargon, raise topics that fascinate us, and be casual
            reads. The commentaries explore anything from earnings highlights to
            the case of Japan and catastrophe bonds.
          </p>
          <p>
            The weekly commentaries are released weekly on Monday. To get them
            directly to your inbox, subscribe below. Any proceeds generated from
            the commentaries are fed back into our fund. We thank you for your
            support.
          </p>
        </div>
        <div className="flex gap-5">
          <Link className="underline" href="/writeups/commentaries">
            Commentaries
          </Link>
        </div>
      </div>
    </Main>
  );
}
