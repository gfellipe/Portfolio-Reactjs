import React, { useState } from "react";
import LogoImg from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as Scroll } from "react-scroll";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Sobre",
    },
    {
      id: 3,
      link: "Projetos",
    },
    {
      id: 4,
      link: "Experiência",
    },
    {
      id: 5,
      link: "Contato",
    },
  ];

  return (
    <div className="flex justify-between items-center px-4 w-full h-20 fixed bg-black">
      <div>
        <img src={LogoImg} alt="Logo iniciais do meu nome em azul" />
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-medium text-gray-300 hover:scale-105 duration-200"
          >
            <Scroll to={link} smooth duration={500}>
              {link}
            </Scroll>
          </li>
        ))}
      </ul>

      {/* Menu Mobile */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li key={id} className="px4 cursor-pointer py-6 text-4xl">
              <Scroll
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Scroll>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
