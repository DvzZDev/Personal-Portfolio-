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
const rubik2 = Rubik({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-work",
});

function Aboutme() {
  return (
    <>
      <div id="abt" className="animate-fade">
        <div className="inset-1 flex items-center justify-center border-cian">
          <div className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_6px] bg-no-repeat bg-bottom flex flex-row">
            <h1
              className={
                rubik.className + " text-5xl text-white-400 italic md:text-6xl"
              }
            >
              Sobre Mi
            </h1>
            <img src="/about.svg" className="h-12 ml-4 mt-2 md:mt-4 "></img>
          </div>
        </div>
        <div className="ml-14 mr-12 mt h-2/3 w-auto flex flex-col-reverse object-center justify-center items-center mt-10 mb-20">
          <div className="max-w-4xl font-light ">
            <p
              className={
                rubik2.className +
                " text-1xl text-white-400 italic  md:text-2xl  "
              }
            >
              <b className="text-pink-400 font-bold">Hola!</b> Soy David tambien
              conocido como <b className="text-pink-400 font-bold">"DvzZ"</b>,
              tengo <b className="text-pink-400 font-bold">19 años</b> y estoy
              estudiando un{" "}
              <b className="text-pink-400 font-bold">
                Módulo de Grado Superior en Desarrollo de Aplicaciones Web 👨‍💻
              </b>
              . En <b className="text-pink-400 font-bold">2023</b>, tuve mi
              primer contacto con la programación cuando la incluyeron en mis
              clases.{" "}
              <b className="text-pink-400 font-bold">
                Al principio, no sabía si me iba a gustar
              </b>
              , pero conforme fui aprendiendo, descubrí que era algo que
              realmente disfrutaba😊. Ahora, dedico la mayor parte de mi tiempo
              a <b className="text-pink-400 font-bold">explorar y aprender </b>
              nuevas tecnologías 📚 para seguir{" "}
              <b className="text-pink-400 font-bold">aprendiendo</b> en este
              apasionante mundo de la programación.
            </p>
          </div>
          <div>
            <img
              className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl w-72 mb-10 transition duration-300 ease-in-out hover:scale-110"
              src="/yo.png"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
