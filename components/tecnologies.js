import React from "react";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["700", "400"],
  variable: "--font-work",
});

function Tecnologies({ href, alt, title, desc, desc2, bgColor }) {
  const bgColorClass = bgColor ? `bg-${bgColor}-400 bg-opacity-20` : "";

  return (
    <div
      className={
        rubik.className +
        " w-60 h-56 flex flex-col justify-center items-center rounded-lg m-4 bg-gradient-to-r from-slate-900 to-slate-700 "
      }
    >
      <div className="flex  flex-row overflow-hidden">
        <img
          src={href}
          className={`h-20 m-2 rounded-xl   ${bgColorClass} p-2`}
          alt={alt}
        />
        <div className="flex flex-col overflow-hidden">
          <h3 className={rubik.className + " text-2xl mt-3 font-bold "}>
            {title}
          </h3>
          <p className="">{desc}</p>
        </div>
      </div>
      <div>
        <p className="m-2 ml-4 italic">{desc2}</p>
      </div>
    </div>
  );
}

export default Tecnologies;
