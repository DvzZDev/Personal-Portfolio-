import React from "react";
import { Edu_TAS_Beginner } from "next/font/google";
import { Rubik } from "next/font/google";
import Tecnologies from "./tecnologies";
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
      <div id="skills" className="animate-fade">
        <div className="inset-1 flex items-center justify-center border-cian">
          <div className=" flex flex-row animate-fade mt-9 mb-8">
            <h1
              className={
                rubik.className + " text-5xl text-white pt-2 italic md:text-6xl"
              }
            >
              Habilidades
            </h1>
            <img src="/code.svg" className="h-16"></img>
          </div>
        </div>

        <article className=" flex flex-row items-center justify-center  ">
          <div className="md:grid gap-4 justify-center items-center content-center md:grid-cols-3 xl:grid-cols-4 ">
            <div className="transition duration-300 ease-in-out hover:scale-110">
              <Tecnologies
                alt={"html5"}
                href={"/html5.svg"}
                title={"HTML5"}
                desc={"Front-End"}
                desc2={'"HTML: Donde cada etiqueta cuenta una historia."'}
              />
            </div>
            <div className="transition duration-300 ease-in-out hover:scale-110">
              <Tecnologies
                alt={"CSS"}
                href={"/css.svg"}
                title={"CSS3"}
                desc={"Front-End"}
                desc2={'"Un trazo único que da forma a la experiencia visual"'}
              />
            </div>
            <div className="transition duration-300 ease-in-out hover:scale-110">
              <Tecnologies
                alt={"JavaScript"}
                href={"/jsn.svg"}
                title={"JavaScript"}
                desc={"Front-Back"}
                desc2={'"JavaScript: el corazón de la web moderna."'}
              />
            </div>
            <div className="transition duration-300 ease-in-out hover:scale-110 md:col-start-2 xl:col-span-1 ">
              <Tecnologies
                alt={"TailWind"}
                href={"/tw.svg"}
                title={"TailWind"}
                desc={"Front-End"}
                desc2={'"TailWind: Uno de los mejores frameworks de CSS"'}
              />
            </div>
          </div>
        </article>
        <div className="inset-1 flex items-center justify-center border-cian">
          <div className="bg-gradient-to-r flex flex-row mt-8 mb-8">
            <h1
              className={
                rubik.className +
                " text-5xl text-white-400 italic md:text-6xl animate-typing"
              }
            >
              Aprendiendo...
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center  md:flex-row ">
          <div className="transition duration-300 ease-in-out hover:scale-110">
            <Tecnologies
              alt={"NetxJs"}
              href={"/nextjs-svgrepo-com.svg"}
              title={"NetxJs"}
              desc={"Front-Back"}
              desc2={'"NextJs: Aplicaciones web fluidas y eficientes"'}
            />
          </div>
          <div className="transition duration-300 ease-in-out hover:scale-110">
            <Tecnologies
              alt={"CSS"}
              href={"/mongo-svgrepo-com.svg"}
              title={"Mongo DB"}
              desc={"Back-End"}
              desc2={'"MongoDB: Almacenamiento  ágil y escalable."'}
            />
          </div>
          <div className="transition duration-300 ease-in-out hover:scale-110 ">
            <Tecnologies
              alt={"Astro"}
              href={"/astro.png"}
              title={"Astro"}
              desc={"Front-Back"}
              desc2={'"ASTRO: ❤️"'}
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
              desc2={
                '"React: Elevando el desarollo web con interfaces dinámicas"'
              }
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
