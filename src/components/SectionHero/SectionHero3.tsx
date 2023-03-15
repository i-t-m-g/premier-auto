import React, { FC } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import imagePng from "images/nikita-kachanovsky.jpg";
import { motion } from "framer-motion";
import { Link, NavLink, useHref, useLocation, useNavigate } from "react-router-dom";

export interface SectionHero3Props {
  className?: string;
}

const SectionHero3: FC<SectionHero3Props> = ({ className = "" }) => {
  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("https://eform.pandadoc.com/?eform=1bad74cc-821a-4477-b2de-66c8b60bbf70")
  // }

  return (
    <div
      className={`nc-SectionHero3 relative ${className}`}
      data-nc-id="SectionHero3"
    >
      <div className="absolute z-10 inset-x-0 top-[10%] sm:top-[15%] text-center flex flex-col items-center max-w-2xl mx-auto space-y-4 lg:space-y-5 xl:space-y-8">
        <span className="sm:text-lg md:text-xl font-semibold text-neutral-900">
          Simplifying Car Leasing, One Mile at a Time
        </span>
        <h2 className="font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl !leading-[115%] ">
          Lease Smarter with Premier Auto Group
        </h2>

        <a
        href="https://eform.pandadoc.com/?eform=1bad74cc-821a-4477-b2de-66c8b60bbf70"
        >
          <ButtonPrimary
            sizeClass="px-6 py-3 lg:px-8 lg:py-4 rounded-xl"
            fontSize="text-sm sm:text-base lg:text-lg font-medium"
          >

            Start Your Application
          </ButtonPrimary>
        </a>

      </div>
      <div className="relative aspect-w-1 aspect-h-1 sm:aspect-w-4 sm:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9 xl:aspect-h-8 ">
        <motion.img

          animate={{
            scale: [1, 1.1, 1.1, 1, 1],
            rotate: [0, 0, 4, -4, 0],
            // borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}

          className="absolute inset-0 object-cover rounded-xl"
          src={imagePng}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default SectionHero3;
