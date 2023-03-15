import Heading from "components/Heading/Heading";
import React, { FC } from "react";
import NcImage from "shared/NcImage/NcImage";
import HIW1img from "images/HIW1.png";
import HIW2img from "images/HIW2.png";
import HIW3img from "images/HIW3.png";
import VectorImg from "images/VectorHIW.svg";
import { motion } from "framer-motion";

export interface SectionHowItWorkProps {
  className?: string;
  data?: {
    id: number;
    title: string;
    desc: string;
    img: string;
    imgDark?: string;
  }[];
}

const DEMO_DATA: SectionHowItWorkProps["data"] = [
  {
    id: 1,
    img: HIW1img,
    title: "Browse and Select",
    desc: "Browse our extensive inventory of vehicles online from the comfort of your own home or office. Choose the make and model that best fits your needs and budget",
  },
  {
    id: 2,
    img: HIW2img,
    title: "Get Financing",
    desc: "Apply for financing through our secure online platform. Our team of experts will work with you to find the best financing options to suit your individual needs and budget.",
  },
  {
    id: 3,
    img: HIW3img,
    title: "Enjoy Delivery",
    desc: "Once you have completed the financing process, sit back and relax. Your brand new vehicle will be delivered directly to your doorstep, ready for you to enjoy.",
  },
];

const SectionHowItWork: FC<SectionHowItWorkProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  return (
    <div
    
      className={`nc-SectionHowItWork  ${className}`}
      data-nc-id="SectionHowItWork"
    >
      <Heading isCenter desc="Keep calm & travel on">
        How it works
      </Heading>
      <div className="mt-20 relative grid md:grid-cols-3 gap-20">
        <img
          className="hidden md:block absolute inset-x-0 top-10"
          src={VectorImg}
          alt=""
        />
        {data.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center max-w-xs mx-auto"
          >
            {item.imgDark ? (
              <>
                <NcImage
                  containerClassName="dark:hidden block mb-8 max-w-[200px] mx-auto"
                  src={item.img}
                />
                <NcImage
                  containerClassName="hidden dark:block mb-8 max-w-[200px] mx-auto"
                  src={item.imgDark}
                />
              </>
            ) : (
              <NcImage
                containerClassName="mb-8 max-w-[200px] mx-auto"
                src={item.img}
              />
            )}
            <div className="text-center mt-auto">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionHowItWork;
