import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const MobileLinks = () => {
  const mobileLinks = [
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
      to: "/public/Currículo-Gabriel-Fellipe.pdf",
      download: true,
    },
  ];

  return (
    <div className="lg:hidden flex items-center mt-4">
      <ul className="flex space-x-2">
        {mobileLinks.map(({ id, child, to, style, download }) => (
          <li key={id} className="px-2 hover:rounded-md duration-300">
            <Link
              to={to}
              className="flex items-center text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
