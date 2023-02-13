import React from "react";
import { FC } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";

export interface CommonLayoutProps {
  index?: string;
  nextHref?: string;
  backtHref?: string;
  nextBtnText?: string;
  children: React.ReactNode;
}

const CommonLayout: FC<CommonLayoutProps> = ({
  index,
  children,
  nextHref,
  nextBtnText,
  backtHref,
}) => {
  return (
    <div
      className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}
      data-nc-id="PageAddListing1"
    >
      <div className="space-y-11">
        {index && <div>
          <span className="text-4xl font-semibold">{index}</span>{" "}
          <span className="text-lg text-neutral-500 dark:text-neutral-400">
            / 10
          </span>
        </div>}

        {/* --------------------- */}
        <div className="listingSection__wrap ">{children}</div>

        {/* --------------------- */}
        <div className="flex justify-center space-x-5">
          {backtHref && <ButtonSecondary href={backtHref}>Go back</ButtonSecondary>}
          {nextHref && <ButtonPrimary href={nextHref}>
            {nextBtnText || "Continue"}
          </ButtonPrimary>}
          {true && 
          <ButtonPrimary className="w-full md:w-9/12 -mt-6 justify-self-center" href={nextHref}>
            {nextBtnText || "Submit"}
          </ButtonPrimary>}
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
