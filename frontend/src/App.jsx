import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
// import InteractiveLogo from "./InteractiveLogo";
// import ParticleEffect from "./ParticleEffect";
import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="relative bg-gradient-gray-blue">
      {/* <ParticleEffect /> */}
      <div className="text-gray-300 relative z-10">
        <div className="absolute top-0 bottom-0 left-24 w-px bg-gray-400 opacity-30"></div>
        <div className="absolute top-0 bottom-0 right-24 w-px bg-gray-400 opacity-30"></div>
        <div className="relative">
        <Navbar />
          <section id="home">
            <Header />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
