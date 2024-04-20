import React from "react";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["700", "400"],
  variable: "--font-work",
});

function Tecnologies({ href, alt, title, desc, desc2, bgColor }) {
  return (
    <div
      className={
        rubik.className +
        " w-60 h-56 flex flex-col justify-center items-center rounded-lg m-4 backdrop-blur-3xl  py-4  border border-purple-600 border-t-0 border-l-0 rounded-br-xl  "
      }
    >
      <div className="flex  flex-row overflow-hidden">
        <img
          src={href}
          className={`h-20 m-2 w-20 rounded-xl p-2 bg-fuchsia-400 bg-opacity-15 `}
          alt={alt}
        />
        <div className="flex flex-col overflow-hidden">
          <h3 className={rubik.className + " text-lg mt-3 font-bold "}>
            {title}
          </h3>
          <p className="">{desc}</p>
        </div>
      </div>
      <div className="">
        <p className="w-56 text-balance flex justify-center items-center text-center h-20  mt-2 italic bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_3px] bg-no-repeat bg- ">
          {desc2}
        </p>
      </div>
    </div>
  );
}

export default Tecnologies;
