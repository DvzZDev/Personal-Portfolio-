import React from "react";
import { Edu_TAS_Beginner } from "next/font/google";
import { Rubik } from "next/font/google";

import Tecnologies from "./tecnologies";
import Link from "next/link";
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

function Skills() {
  return (
    <>
      <div className="animate-fade">
        <Link href="#habilidades"></Link>
        <div className="inset-1 flex items-center justify-center border-cian">
          <div className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_6px] bg-no-repeat bg-bottom flex flex-row animate-fade">
            <h1
              className={
                rubik.className + " text-5xl text-white italic md:text-6xl"
              }
            >
              Habilidades
            </h1>
            <img src="/code.svg" className="h-16"></img>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-7 md:flex-row mb-20  ">
          <div className="transition duration-300 ease-in-out hover:scale-110">
            <Tecnologies
              alt={"html5"}
              href={"/html5.svg"}
              title={"HTML5"}
              desc={"Front-End"}
              desc2={'"HTML: Donde cada etiqueta cuenta una historia."'}
              bgColor={"orange"}
            />
          </div>
          <div className="transition duration-300 ease-in-out hover:scale-110">
            <Tecnologies
              alt={"CSS"}
              href={"/css.svg"}
              title={"CSS3"}
              desc={"Front-End"}
              desc2={'"Un trazo único que da forma a la experiencia visual"'}
              bgColor={"cyan"}
            />
          </div>
          <div className="transition duration-300 ease-in-out hover:scale-110">
            <Tecnologies
              alt={"JavaScript"}
              href={"/jsn.svg"}
              title={"JavaScript"}
              desc={"Front-Back"}
              desc2={'"JavaScript: el corazón de la web moderna."'}
              bgColor={"yellow"}
            />
          </div>
        </div>
        <div className="inset-1 flex items-center justify-center border-cian">
          <div className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_6px] bg-no-repeat bg-bottom flex flex-row">
            <h1
              className={
                rubik.className + " text-5xl text-white-400 italic md:text-6xl"
              }
            >
              Aprendiendo...
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-7 md:flex-row ">
          <div className="transition duration-300 ease-in-out hover:scale-110">
            <Tecnologies
              alt={"NetxJs"}
              href={"/nextjs-svgrepo-com.svg"}
              title={"NetxJs"}
              desc={"Front-Back"}
              desc2={'"NextJs: Aplicaciones web fluidas y eficientes"'}
              bgColor={"slate"}
            />
          </div>
          <div className="transition duration-300 ease-in-out hover:scale-110">
            <Tecnologies
              alt={"CSS"}
              href={"/mongo-svgrepo-com.svg"}
              title={"Mongo DB"}
              desc={"Back-End"}
              desc2={'"MongoDB: Almacenamiento  ágil y escalable."'}
              bgColor={"green"}
            />
          </div>
          <div className="transition duration-300 ease-in-out hover:scale-110 ">
            <Tecnologies
              alt={"Astro"}
              href={"/astro.png"}
              title={"Astro"}
              desc={"Front-Back"}
              desc2={'"ASTRO: ❤️"'}
              bgColor={"purple"}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:flex-row mb-20 ">
          <div className="transition duration-300 ease-in-out hover:scale-110">
            <Tecnologies
              alt={"React"}
              href={"/react.svg"}
              title={"React"}
              desc={"Front-Back"}
              desc2={'"React: Padre de todos los FrameWorks"'}
              bgColor={"blue"}
            />
          </div>
          <div className="transition duration-300 ease-in-out hover:scale-110">
            <Tecnologies
              alt={"TypeScript"}
              href={"/ts.svg"}
              title={"TypeScript"}
              desc={"Back-End"}
              desc2={
                '"TypeScript: JavaScript tipado para un desarrollo más seguro."'
              }
              bgColor={"cyan"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
