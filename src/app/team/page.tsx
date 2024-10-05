import Main from "@/components/main";
import React from "react";

export default function Team() {
  return (
    <Main>
      <div className="max-w-screen-lg flex flex-col gap-5">
        <h1 className="text-center pb-5">Our Team.</h1>
        <div className="flex [&>*]:flex-1 gap-7 max-sm:flex-col max-sm:max-w-screen-sm">
          <div className="flex flex-col">
            <h2>Keon Bruce</h2>
            <p className="pb-2">
              One of the co-founders, currently in his third year at the
              University of Edinburgh, studying Economics with Environmental
              Studies. Having worked at an Equity Research firm in Tokyo for 3
              years, his experience has grounded his approach to investment,
              combining his academic studies with practical market insights.
            </p>
            <a
              className="mt-auto underline hover:cursor-pointer"
              href="https://www.linkedin.com/in/keonbruce/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex flex-col">
            <h2>Abhey Malhotra</h2>
            <p className="pb-2">
              Another co-founder, currently in his third year at the University
              of Edinburgh, studying Economics with Finance. His journey in
              finance includes active involvement in the university&apos;s
              Trading and Investment Club over the past three years and an
              internship at a financial firm last summer. These experiences have
              given Abhey a practical grounding in equity research and
              investment strategies.
            </p>
            <a
              className="mt-auto underline hover:cursor-pointer"
              href="https://www.linkedin.com/in/abhey-malhotra-563ba9208/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex flex-col">
            <h2>Koby Szeszko</h2>
            <p className="pb-2">
              The final co-founder, in his third year at the University of
              Edinburgh, studying Mechanical Engineering. Over the past year,
              Koby has expanded his interests in finance by participating in the
              university&apos;s Trading and Investment Club. This experience has
              provided him with a solid foundation in trading and investment
              strategies, enhancing our team.
            </p>

            <a
              className="mt-auto underline hover:cursor-pointer"
              href="https://www.linkedin.com/in/kobyszeszko/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Main>
  );
}
