import React from "react";

const Header = () => {
  return (
    <>
      <nav className="space-x-1 backdrop-blur flex items-center rounded-md bg-black/10 px-3 py-2  animate-fade-in animate-delay-100 mt-6 animate-fade text-xl">
        {" "}
        <a
          className="rounded-md capitalize px-3 py-0.5 transition-all ease-in-out hover:bg-white/10"
          href="#sec-1"
        >
          {" "}
          DvzZ<b className="text-blue-400">Dev</b>{" "}
        </a>
        <a
          className="rounded-md capitalize px-3 py-0.5 transition-all ease-in-out hover:bg-white/10"
          href="#skills"
        >
          {" "}
          Habilidades{" "}
        </a>
        <a
          className="rounded-md capitalize px-3 py-0.5 transition-all ease-in-out hover:bg-white/10"
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
