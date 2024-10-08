import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import InteractiveLogo from "./InteractiveLogo";
// import ParticleEffect from "./ParticleEffect";
import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="relative">
      {/* <ParticleEffect /> */}
      <Helmet>
        <title>Y&Z Ventures</title>
        <meta name="description" content="Where capital investment has community impact" />
        <meta name="keywords" content="Y&Z, ventures, venture capital, investment" />
      </Helmet>
      <div className="bg-gradient-gray-blue relative">
        <div className="relative">
          <Navbar />
          <InteractiveLogo />
          <section id="home">
            <Header />
          </section>
          <section id="about" className="">
            <About />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
        <Footer />
      </div>
      <div className="absolute top-0 bottom-0 left-4 sm:left-8 md:left-16 lg:left-20 w-px bg-gray-300 opacity-30"></div>
      <div className="absolute top-0 bottom-0 right-4 sm:right-8 md:right-16 lg:right-20 w-px bg-gray-300 opacity-30"></div>
    </div>
  );
}

export default App;
