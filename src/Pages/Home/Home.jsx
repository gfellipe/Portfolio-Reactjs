import React from "react";
import { Hero } from "../../Components/Hero/Hero";
import { SocialLinks } from "../../Components/SociaLinks/SocialLinks";
import {About} from "../About/About";
import { Projetos } from "../Projetos/Projetos";
import { Experience } from "../Experience/Experience";
import { Contact } from "../Contact/Contact";

export const Home = () => {
  return (
    <div>
      <Hero />
      <SocialLinks />
      <About />
      <Projetos />
      <Experience />
      <Contact />
    </div>
  );
};
