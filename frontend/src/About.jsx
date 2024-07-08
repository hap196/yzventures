import React, { useEffect, useRef } from "react";
import Stats from "./Stats";
// import map from "./assets/us_dot_map.png";
import map from "./assets/map.png";

const About = () => {
  const elementsRef = useRef([]);
  const animationDelay = 800;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-floatUp");
              observer.unobserve(entry.target);
            }, animationDelay);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="h-full">
      <h2
        ref={(el) => elementsRef.current.push(el)}
        className="text-center font-lora text-gray-800 text-2xl md:text-3xl mb-24 opacity-0"
      >
        About us
      </h2>
      <Stats />
      <div className="flex justify-center items-center max-w-3xl mx-auto mt-4 md:mt-2 mb-4 md:mb-40">
        <p
          ref={(el) => elementsRef.current.push(el)}
          className="font-lora text-gray-800 text-xl text-left mr-6 max-w-xl opacity-0"
        >
          Y&Z Ventures is a Los Angeles based{" "}
          <span className="text-custom-blue-3 font-bold">
            multi-family office
          </span>
          , operating as a direct investment vehicle + fund of funds. We are
          dedicated to
          <span className="text-custom-blue-3 font-bold">
            {" "}
            supporting investments to the final stages
          </span>
          , or the end game.
        </p>
        <img src={map} className="w-72 ml-6 fade-in-longer" />
      </div>
      <div className="mt-20 mb-20">
        <h2
          ref={(el) => elementsRef.current.push(el)}
          className="text-center font-lora text-gray-800 text-2xl md:text-3xl mb-10 opacity-0"
        >
          Partner Industries
        </h2>
        <div className="font-poppins text-lg mx-24 grid grid-cols-1 text-gray-800 border-gray-300 border-t border-b md:grid-cols-3">
          <div
            ref={(el) => elementsRef.current.push(el)}
            className="text-center md:border-r border-gray-300 opacity-0 py-10"
          >
            <ul>
              <li>Agriculture</li>
              <li>Education</li>
              <li>Healthcare</li>
              <li>Home Services</li>
            </ul>
          </div>
          <div
            ref={(el) => elementsRef.current.push(el)}
            className="text-center md:border-r border-gray-300 opacity-0 py-10"
          >
            <ul>
              <li>Legal</li>
              <li>Logistics</li>
              <li>Manufacturing</li>
              <li>Marketplaces</li>
            </ul>
          </div>
          <div
            ref={(el) => elementsRef.current.push(el)}
            className="text-center opacity-0 py-10"
          >
            <ul>
              <li>Mobility</li>
              <li>Production</li>
              <li>Real Estate</li>
              <li>Supply Chain</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
