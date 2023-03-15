import Glide from "@glidejs/glide";
import Heading from "components/Heading/Heading";
import React, { FC } from "react";
import { useEffect } from "react";
import clientSayMain from "images/clientSayMain.png";
import clientSay1 from "images/clientSay1.png";
import clientSay2 from "images/clientSay2.png";
import clientSay3 from "images/clientSay3.png";
import clientSay4 from "images/clientSay4.png";
import clientSay5 from "images/clientSay5.png";
import clientSay6 from "images/clientSay6.png";
import quotationImg from "images/quotation.png";
import quotationImg2 from "images/quotation2.png";
import useNcId from "hooks/useNcId";

export interface SectionClientSayProps {
  className?: string;
  uniqueClassName: string;
}

const DEMO_DATA = [
  {
    id: 1,
    clientName: "Tiana Abie",
    clientAddress: "Malaysia",
    content:
      "From start to finish, the entire leasing process was smooth and stress-free. The team was incredibly helpful and always available to answer any questions I had.",
  },
  {
    id: 2,
    clientName: "Lennie Swiffan",
    clientAddress: "London",
    content:
      "I'm so happy with my new car, and I would highly recommend Premier Auto Group to anyone in the market for a new vehicle.",
  },
  {
    id: 3,
    clientName: "Berta Emili",
    clientAddress: "Tokyo",
    content:
      "Premier Auto Group truly exceeded my expectations. The financing process was straightforward, and I was able to get a great deal on my lease.",
  },
];

const SectionClientSay: FC<SectionClientSayProps> = ({
  className = "",
  uniqueClassName = "",
}) => {
  const UNIQUE_CLASS = `SectionClientSay_glide_${uniqueClassName}` + useNcId();

  useEffect(() => {
    if (document.querySelector(`.${UNIQUE_CLASS}`)) {
      setTimeout(() => {
        new Glide(`.${UNIQUE_CLASS}`, {
          perView: 1,
        }).mount();
      }, 10);
    }
  }, []);

  const renderBg = () => {
    return (
      <div className="hidden md:block">
        <img className="absolute top-9 -left-20" src={clientSay1} alt="" />
        <img
          className="absolute bottom-[100px] right-full mr-40"
          src={clientSay2}
          alt=""
        />
        <img
          className="absolute top-full left-[140px]"
          src={clientSay3}
          alt=""
        />
        <img
          className="absolute -bottom-10 right-[140px]"
          src={clientSay4}
          alt=""
        />
        <img
          className="absolute left-full ml-32 bottom-[80px]"
          src={clientSay5}
          alt=""
        />
        <img className="absolute -right-10 top-10 " src={clientSay6} alt="" />
      </div>
    );
  };

  return (
    <div
      className={`nc-SectionClientSay relative ${className} `}
      data-nc-id="SectionClientSay"
    >
      <Heading desc="Let's see what people think of Premier Auto Leasing" isCenter>
        Good news from our clients
      </Heading>
      <div className="relative md:mb-16 max-w-2xl mx-auto">
        {renderBg()}
        <img className="mx-auto" src={clientSayMain} alt="" />
        <div className={`mt-12 lg:mt-16 relative ${UNIQUE_CLASS}`}>
          <img
            className="opacity-50 md:opacity-100 absolute -mr-16 lg:mr-3 right-full top-1"
            src={quotationImg}
            alt=""
          />
          <img
            className="opacity-50 md:opacity-100 absolute -ml-16 lg:ml-3 left-full top-1"
            src={quotationImg2}
            alt=""
          />
          <div className="glide__track " data-glide-el="track">
            <ul className="glide__slides ">
              {DEMO_DATA.map((item) => (
                <li
                  key={item.id}
                  className="glide__slide flex flex-col items-center text-center"
                >
                  <span className="block text-2xl">{item.content}</span>
                  <span className="block mt-8 text-2xl font-semibold">
                    {item.clientName}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="mt-10 glide__bullets flex items-center justify-center"
            data-glide-el="controls[nav]"
          >
            {DEMO_DATA.map((item, index) => (
              <button
                key={item.id}
                className="glide__bullet w-2 h-2 rounded-full bg-neutral-300 mx-1 focus:outline-none"
                data-glide-dir={`=${index}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionClientSay;
