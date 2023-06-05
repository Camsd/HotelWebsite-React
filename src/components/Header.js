import React, { useState, useEffect } from "react";
//logo
import LogoWhite from "../assets/img/logo-white.svg";
import LogoDark from "../assets/img/logo-dark.svg";

const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    })
  })
  return (
    <div
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-300`}
    >
      Header
    </div>
  );
};

export default Header;
