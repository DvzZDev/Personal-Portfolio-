import React from "react";
import BtnRedes from "../components/buttonRedes";
import { Edu_TAS_Beginner } from "next/font/google";
import Header from "../components/header";
import Link from "next/link";

const edu_TAS_Beginner = Edu_TAS_Beginner({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-work",
});

function Section1() {
  return (
    <>
      <section
        id="sec-1"
        className="inset-1 flex items-center justify-center h-screen pl-20 pr-20 animate-fade "
      >
        <div className="flex flex-col">
          <span
            className={
              edu_TAS_Beginner.className + " ml-1 text-2xl text-blue-400 italic"
            }
          >
            DVZZ|DEV 👋
          </span>

          <h1 className="text-7xl font-bold text-blue-400 md:text-8xl  ">
            DAVID ESTEBAN
          </h1>
          <h2 className="text-2xl mt-1 md:text-4xl">
            Estudiante de Desarrollo de Aplicaciones Web 📌 España
          </h2>

          <div className="flex flex-row mt-2">
            <BtnRedes
              href="https://www.twitter.com/_DvzZ_"
              nombre="Twitter"
              imagen="/twitter.svg"
            />
            <BtnRedes
              href="https://www.linkedin.com/in/david-esteban-garcia-bba029221/"
              nombre="Linkedin"
              imagen="/linkedin.svg"
            />
            <BtnRedes
              href="https://github.com/DvzZDev"
              nombre="Github"
              imagen="/github.svg"
            />
          </div>
        </div>
        <div className="flex items-center justify-center absolute bottom-1">
          <div>
            <img
              src="/down.svg"
              className="animate-bounce w-16 text-cyan-600"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;
