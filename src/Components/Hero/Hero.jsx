import React from "react";
import MyPersonalImg from "../../assets/myimg.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link as Scroll } from "react-scroll";
import { MobileLinks } from "../MobileLinks/MobileLinks";

export const Hero = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center  h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white pt-36">
          Hey, I'm Gabriel Fellipe -- Front-end Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Tenho 1 ano de experiência em desenvolvimento de software.
            Unindo design e código, sigo criando projetos únicos.
          </p>

          <div>
            <Scroll
              to="Projetos"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projetos
              <span className="group-hover:rotate-90 duration-300">
                <FaLongArrowAltRight size={18} className="ml-1" />
              </span>
            </Scroll>

          </div>
            <MobileLinks/>
        </div>

        <div className="pt-8">
          <img
            src={MyPersonalImg}
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};
