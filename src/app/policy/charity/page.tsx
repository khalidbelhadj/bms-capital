import Main from "@/components/main";
import React from "react";

export default function Charity() {
  return (
    <Main>
      <div className="max-w-screen-md flex flex-col gap-5">
        <h1>Charity.</h1>
        <p>
          Every December, 1% of the capital gains we generate from our portfolio
          goes straight to a charity we support. This will remain in place for
          the lifetime of BMS Capital. Why are we doing this? Because we believe
          incentives and motivations must align for investors and stock pickers
          to do well. Being motivated solely by profit is unsustainable and
          unhealthy. It gives room for ill-thought and ill-advised investing.
          Doing this means we have a seperate incentive - to give back and
          support those that need it most. Those not in the priviledged postion
          we are to worry about our investments.
        </p>
      </div>
    </Main>
  );
}