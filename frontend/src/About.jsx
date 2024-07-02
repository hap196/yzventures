import React, { useEffect, useRef } from "react";
import circle1 from "./assets/circle1.png";
import circle2 from "./assets/circle2.png";
import circle3 from "./assets/circle3.png";
import Points from "./Points.jsx";
import map from "./assets/us_dot_map.png";

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
      <div className="flex justify-center items-center max-w-3xl mx-auto mt-4 md:mt-2 mb-4 md:mb-40">
        <p
          ref={(el) => elementsRef.current.push(el)}
          className="font-lora text-gray-400 text-lg text-left mr-6 max-w-xl opacity-0"
        >
          Y&Z Ventures is a Los Angeles based{" "}
          <span className="text-accent-blue font-bold">
            multi-family office
          </span>
          , operating as a direct investment vehicle + fund of funds. We are
          dedicated to
          <span className="text-accent-blue font-bold">
            {" "}
            supporting investments to the final stages
          </span>
          , or the end game.
        </p>
        <img src={map} className="w-64 ml-6 fade-in-longer" />
      </div>
      <div className="mx-10 md:mx-20 mt-20 mb-20">
        <h2
          ref={(el) => elementsRef.current.push(el)}
          className="text-center font-lora text-gray-300 text-2xl md:text-3xl mb-10 opacity-0"
        >
          Partner Industries
        </h2>
        <div className="max-w-6xl font-lora text-lg mx-auto grid grid-cols-1 gap-10 text-gray-300 border-gray-400 border-t border-b pt-10 pb-10 md:grid-cols-2 mb-20">
          <div
            ref={(el) => elementsRef.current.push(el)}
            className="text-center md:border-r border-gray-400 opacity-0"
          >
            <ul>
              <li>Agriculture</li>
              <li>Education</li>
              <li>Healthcare</li>
              <li>Logistics</li>
            </ul>
          </div>
          <div
            ref={(el) => elementsRef.current.push(el)}
            className="text-center opacity-0"
          >
            <ul>
              <li>Real Estate</li>
              <li>Supply Chain</li>
              <li>Transportation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
