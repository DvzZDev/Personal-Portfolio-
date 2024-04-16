import React from "react";

const Header = () => {
  return (
    <>
      <nav class="space-x-1 backdrop-blur flex items-center rounded-md bg-black/10 px-3 py-1  animate-fade-in animate-delay-100 mt-6 animate-fade">
        {" "}
        <a
          class="rounded-md capitalize px-3 py-0.5 transition-all ease-in-out hover:bg-white/10"
          href="#sec-1"
        >
          {" "}
          DvzZ<b className="to-blue-400">Dev</b>{" "}
        </a>
        <a
          class="rounded-md capitalize px-3 py-0.5 transition-all ease-in-out hover:bg-white/10"
          href="#skills"
        >
          {" "}
          Habilidades{" "}
        </a>
        <a
          class="rounded-md capitalize px-3 py-0.5 transition-all ease-in-out hover:bg-white/10"
          href="#abt"
        >
          {" "}
          Sobre Mi{" "}
        </a>
      </nav>{" "}
    </>
  );
};

export default Header;
