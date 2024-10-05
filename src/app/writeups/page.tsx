import Main from "@/components/main";
import React from "react";

export default function Writeups() {
  return (
    <Main>
      <div className="max-w-screen-md flex flex-col gap-5">
        <h1>BMS Capital Blogs.</h1>
        <div className="flex gap-2 flex-col">
          <p>
            At BMS Capital, we offer two distinct written products: a Monday
            Commentary, and a Thursday Insight. This is part of our mission to
            make finanical intelligence easier to read and understand. No
            jargon, but a casual read. Our Monday Commentaries offer our
            thoughts on happenings in the markets during that week, while
            updating the reader with weekly changes in our portfolio and the
            major indicies. The Thursday Insights offer perception on niche
            topics.
          </p>
          <p>
            Both the Commentaries, and Insights, are released on Tuesdays and
            Fridays. To get them direct to your inbox free of advertisement on
            Mondays and Thursdays, subscribe here. BMS Capital Blogs utilises
            ads on our website. All revenue from ads seen on this website goes
            straight to reinvestment into our portfolio. We thank you for your
            support.
          </p>
        </div>
        <div className="flex gap-5">
          <a className="underline" href="/writeups/monday-commentaries">
            Monday Commentaries
          </a>
        </div>
      </div>
    </Main>
  );
}
