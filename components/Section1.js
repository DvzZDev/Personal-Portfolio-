import React from "react";
import { Edu_TAS_Beginner } from "next/font/google";
import Head from "next/head";
import BtnRedes from "@/components/buttonRedes";
import { Rubik } from "next/font/google";
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

function Section1() {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Hi you👋, Welcome to my personal portfolio"
        />
        <meta
          name="image"
          property="og:image"
          content="https://i.imgur.com/ril8Lee.png"
        />
        <meta
          property="og:url"
          content="https://example.com/tech-innovations"
        />
        <meta property="og:description" content="DvzZ Portfolio" />
        <meta property="og:site_name" content="Tech World Daily" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content="2023-11-22T10:00:00+00:00" />
      </Head>

      <section
        id="sec-1"
        className="inset-1 flex items-center justify-center h-screen pl-20 pr-20 animate-fade relative "
      >
        <div className="flex flex-col absolute">
          <span
            className={
              edu_TAS_Beginner.className + " ml-1 text-2xl text-blue-400 italic"
            }
          >
            DVZZ|DEV 👋
          </span>
          <div className={rubik.className}>
            <h1 className="text-7xl font-bold text-blue-400 md:text-8xl">
              DAVID ESTEBAN
            </h1>
            <h2 className="text-2xl mt-1 md:text-4xl">
              Estudiante de Desarrollo de Aplicaciones Web 📌 España
            </h2>
          </div>

          <div className="flex flex-row mt-2 flex-wrap items-center gap-1">
            <BtnRedes
              href="https://github.com/DvzZDev"
              nombre="Github"
              imagen="/github.svg"
            />
            <BtnRedes
              href="https://www.linkedin.com/in/david-esteban-garcia-bba029221/"
              nombre="Linkedin"
              imagen="/linkedin.svg"
            />
            <BtnRedes
              href="https://www.twitter.com/_DvzZ_"
              nombre="Twitter"
              imagen="/twitter.svg"
            />
            <BtnRedes
              href="https://www.instagram.com/dvz_z_z/"
              nombre="Instagram"
              imagen="/instagram.svg"
            />
          </div>
        </div>
        <div className="flex items-center justify-center absolute bottom-1">
          <div>
            <a href="#skills" className="hidden md:inline-block">
              <img
                src="/down.svg"
                className="animate-bounce w-16 text-cyan-600"
              ></img>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;
