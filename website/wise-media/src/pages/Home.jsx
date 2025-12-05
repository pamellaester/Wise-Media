import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Founders from "../components/ Founders";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 -mt-20">
        <About />
        <Founders />
        <Services />
        <Benefits />
        <Contact />
      </div>
    </>
  );
}
