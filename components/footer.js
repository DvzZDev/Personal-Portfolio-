import React from "react";
import { Edu_TAS_Beginner } from "next/font/google";
import { Rubik } from "next/font/google";
import Tecnologies from "./tecnologies";
import Link from "next/link";
import Section1 from "./Section1";

const edu_TAS_Beginner = Edu_TAS_Beginner({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-work",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-work",
});
const rubik2 = Rubik({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-work",
});

function Footer() {
  return (
    <>
      <div className="flex items-center justify-center pb-4 ml-9 mr-9">
        <div>
          <a
            className={
              rubik.className + " text-2xl text-white-400 italic md:text-2xl"
            }
            href="#sec-1"
          >
            DvzZ<b className="text-blue-400">Dev</b>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
