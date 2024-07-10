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
    <div className="relative">
      {/* <ParticleEffect /> */}
      <div className="bg-gradient-gray-blue relative">
        <div className="absolute top-0 bottom-0 left-4 sm:left-8 md:left-16 lg:left-20 w-px bg-gray-800 opacity-30"></div>
        <div className="absolute top-0 bottom-0 right-4 sm:right-8 md:right-16 lg:right-20 w-px bg-gray-800 opacity-30"></div>
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
