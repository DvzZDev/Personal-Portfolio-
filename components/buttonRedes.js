import React from "react";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-work",
});

function BtnRedes({ href, nombre, imagen }) {
  return (
    <button
      className={`${rubik.className} items-center bg-transparent hover:bg-blue-400 text-white font-semibold hover:text-white  px-2 border border-blue-400 hover:border-transparent rounded-lg mt-1 flex flex-row transform active:scale-y-75 transition-trans form mr-2 md:p-1 `}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {nombre}
      </a>
      <img src={imagen} alt={nombre} className="ml-1 h-4 md:h-6"></img>
    </button>
  );
}

export default BtnRedes;
