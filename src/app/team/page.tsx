import Main from "@/components/main";
import Link from "next/link";
import React from "react";

export default function Team() {
  return (
    <Main>
      <div className="max-w-screen-lg flex flex-col gap-5">
        <h1 className="text-center pb-5">Our Team.</h1>
        <div className="flex [&>*]:flex-1 gap-7 max-md:flex-col max-sm:max-w-screen-sm">
          <div className="flex flex-col">
            <h2>Keon Bruce</h2>
            <p className="pb-2">
              One of the co-founders, currently in his fourth year at the
              University of Edinburgh, Keon is pursuing an undergraduate degree
              in Economics with Environmental Studies. His interest in
              investments stems from his work at an equity research firm in
              Tokyo for 4 years and his internship at Morgan Stanley. These
              experiences give Keon a well-rounded approach to his investing,
              building a special interest in Japanese markets. Keon comes from a
              Japanese-Scottish family and became interested in investments at a
              young age. A wide international appreciation and continued
              curiosity for value investing sits at the core of his values. Keon
              is also a fan of rugby having competed at the national level in
              Japan.
            </p>
            <Link
              className="mt-auto underline hover:cursor-pointer"
              href="https://www.linkedin.com/in/keonbruce/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>
          <div className="flex flex-col">
            <h2>Abhey Malhotra</h2>
            <p className="pb-2">
              An active partner at BMS Capital, Abhey is currently in his final
              year at the University of Edinburgh pursuing an undergraduate
              degree in Economics with Finance. He is an integral part of the
              team, bringing forward his experiences at the university
              investment club and his experience as an intern at Nomura. He is
              of Indian background, having grown up in SEA, Abhey brings the
              necessary skills and concepts of finance to the forefront of our
              investment ideas. He is particularly interested in emerging
              markets and is an avid Arsenal fan.
            </p>
            <Link
              className="mt-auto underline hover:cursor-pointer"
              href="https://www.linkedin.com/in/abhey-malhotra-563ba9208/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>
          <div className="flex flex-col">
            <h2>Koby Szeszko</h2>
            <p className="pb-2">
              The final piece to the partnership, Koby is taking a year out of
              university for a year in industry at Amazon. After the sabbatical,
              Koby will be back at the University of Edinburgh where he is
              pursuing an undergraduate degree in Mechanical Engineering. Born
              and raised in Scotland with a family heritage in Poland, he offers
              a differentiated perspective to investing, often helping easily
              digest complex engineering processes. His passion for investments
              stems from the university&apos;s investment club. Koby is an
              ardent runner, running within the city and out in the highlands
              when he gets the chance.
            </p>

            <Link
              className="mt-auto underline hover:cursor-pointer"
              href="https://www.linkedin.com/in/kobyszeszko/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </Main>
  );
}
