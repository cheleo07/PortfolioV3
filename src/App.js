import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Parcours from "./components/Parcours";
import 'tailwindcss/tailwind.css';
import Experiences from "./components/Experiences";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Parcours />
      <Experiences />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
