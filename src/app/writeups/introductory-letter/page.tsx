import React from "react";
import Image from "next/image";
import image from "@/../public/introductory.jpg";
import Main from "@/components/main";

export default function IntroductoryLetter() {
  return (
    <Main>
      <div className="max-w-screen-md flex flex-col gap-5">
        <h1>Introductory Letter.</h1>
        <Image
          priority
          className="border"
          src={image}
          alt="Introductory Letter"
        />
        <p>
          “Analysis connotes the careful study of available facts with the
          attempt to draw conclusions therefrom based on established principles
          and sound logic.” Almost a century after Mr Benjamin Graham and Mr
          David Dodds first published their guiding ideas on “value investing,”
          their principles remain necessarily relevant. Disciples of the
          two&apos;s strategy reaped rewards, not by blindly following their
          principles, but by adapting the underlying reasoning to the dynamic
          conditions of the markets. Mr Bill Ackman described himself as an
          “activist investor,” successful by taking an active approach in his
          “value investing.” The late centenarian Mr Irving Kahn adopted a
          contrarian approach and viewed “value investing” as an art. And
          perhaps most famously, Mr Warren Buffett approached “value investing
          “sensibly, patiently, and with the idea of an infinite investment
          horizon, thereby beautifully connotating the term “value investing” to
          himself.
        </p>

        <p>
          We too view the market as similar to the founding fathers in the long
          run, the market is a weighing machine. Why do we know this? We are
          lucky in that there has been enough time since Security Analysis was
          written in 1934, for others before to try and most have succeeded. We
          are also embarking on this journey with the view that investing should
          be simple, clear, and concentrated. We should be able to close our
          eyes and know with certainty, that in the future decades, our
          investment is safe. This means investing in a handful of companies
          with minimal disruption; those in favourable geographies, with a clear
          business, led by management that is genuine, bought without debt at a
          margin of safety.
        </p>

        <p>
          What we have therefore is time. Mr Ackman began his hedge fund at the
          age of 25, Mr Kahn became Mr Graham&apos;s teaching assistant at the
          age of 25, and Mr Buffett first met Mr Graham at the age of 18. All
          three of us are still studying at university, albeit not under the
          late Mr Graham. Ordinarily, youth does not necessitate returns of the
          magnitude of the aforementioned names. To say that would mean the
          greatest investor should start once born. However, we are confident
          our simple investment philosophy coupled with our long-term investment
          horizon will afford us returns we hope will beat the benchmark alike
          our predecessors.
        </p>

        <p>
          To the top right of this letter is a table showing the weekly returns
          of BMS Capital alongside global indices. It may sound hypocritical to
          tout long-term investing while showing weekly returns. You would be
          right. This is merely for reference. Like with any other fund, we
          encourage you not to base performance decisions upon our weekly
          returns, but from a holistic perspective. Instead, the use of the
          table will be to show the weekly performance of the global markets as
          part of our weekly commentaries. Covering niche goods to local
          markets, we aim to become thought leaders in an industry so
          concentrated as finance. From us three, we hope at the very least you
          take away something new from these commentaries.
        </p>

        <p>
          The current date we write this is the 11th of March 2024. The S&P500
          has hit historic highs, gold is more valuable than ever, the TOPIX is
          near its peak it set 20 years ago, and Bitcoin recently tipped over
          its previous peak. The bears are striving, investor confidence is
          increasing, and so is our scepticism.
        </p>

        <p>
          When investors are concerned, we prefer to be optimistic. For now, the
          % next to “BMS Capital” remains empty for we wait until a golden
          opportunity to enter. Once that opportunity presents itself, we will
          enter, but for now, we wait. The future is exciting. From us three, we
          sincerely thank you for reading our introductory letter, and we hope
          you stick around!
        </p>
      </div>
    </Main>
  );
}
