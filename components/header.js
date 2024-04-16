import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav class="space-x-1 backdrop-blur flex items-center rounded-md bg-black/10 px-3 py-1  animate-fade-in animate-delay-100 mt-6 animate-fade">
        {" "}
        <a
          class="rounded-md capitalize px-3 py-0.5 transition-all ease-in-out hover:bg-white/10"
          href="/#inicio"
        >
          {" "}
          inicio{" "}
        </a>
        <a
          class="rounded-md capitalize px-3 py-0.5 transition-all ease-in-out hover:bg-white/10"
          href="/#h"
        >
          {" "}
          Habilidades{" "}
        </a>
        <a
          class="rounded-md capitalize px-3 py-0.5 transition-all ease-in-out hover:bg-white/10"
          href="/#proyectos"
        >
          {" "}
          Sobre Mi{" "}
        </a>
      </nav>{" "}
    </>
  );
};

export default Header;
