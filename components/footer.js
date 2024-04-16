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
      <div className="flex flex-row justify-between ml-9 mr-9">
        <div>
          <a
            className={
              rubik.className + " text-2xl text-white-400 italic md:text-2xl"
            }
            href="#inicio"
          >
            DvzZ<b className="text-blue-400">Dev</b>
          </a>
        </div>
        <div>
          <a
            className={
              rubik.className +
              " text-2xl text-white-400 italic m-5 md:text-2xl"
            }
            href="#inicio"
            id="es"
          >
            ES
          </a>
          {"/"}
          <a
            className={
              rubik.className +
              " text-2xl text-white-400 italic m-5 md:text-2xl"
            }
            href="#inicio"
            id="en"
          >
            EN
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
