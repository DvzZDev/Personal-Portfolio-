// BotonRed.js
import React from "react";

function btnredes({ href, nombre, imagen }) {
  return (
    <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded-2xl mt-1 flex flex-row transform active:scale-y-75 transition-transform mr-2 md:text-lg">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {nombre}
      </a>
      <img src={imagen} alt={nombre} className="h-6 ml-1"></img>
    </button>
  );
}

export default btnredes;
