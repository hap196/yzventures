import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import InteractiveLogo from "./InteractiveLogo";
import ParticleEffect from "./ParticleEffect";
import "./App.css";

function App() {
  return (
    <div className="relative bg-gradient-gray-blue">
      <ParticleEffect />
      <div className="text-gray-300 p-4 relative z-10">
        <Navbar />
        <section id="home">
          <InteractiveLogo />
        </section>
        <section id="mission">
          <Header />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
