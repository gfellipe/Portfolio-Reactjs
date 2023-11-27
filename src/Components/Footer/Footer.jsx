import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const Footer = () => {
  const footer = [
    {
      id: 5,
      child: (
        <>
          <FaLinkedin size={30} color="#0A66C2" />
        </>
      ),
      to: "https://www.linkedin.com/in/gabriel-fellipe/",
    },
    {
      id: 6,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      to: "https://github.com/gfellipe",
    },
    {
      id: 7,
      child: (
        <>
          <HiOutlineMail size={30} color="#D14836" />
        </>
      ),
      to: "mailto:gfillipe@gmail.com",
    },
    {
      id: 8,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      to: "/Currículo-Gabriel-Fellipe.pdf",
      download: true,
    },
  ];

  return (
    <div className="bg-gradient-to-b to-black from-gray-700 flex flex-col items-center py-4">
      <ul className="flex m-auto">
        {footer.map(({ id, child, to, download }) => (
          <li key={id} className="px-3 hover:rounded-md duration-300">
            {download ? (
              <a
                href={to}
                className="flex justify-between items-center w-full text-white"
                download
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            ) : (
              <a
                href={to}
                className="flex justify-between items-center w-full text-white"
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            )}
          </li>
        ))}
      </ul>
      <div className="text-white text-center mt-4">
        &copy; 2023 Gabriel Fellipe. Todos os direitos reservados.
      </div>
    </div>
  );
};
