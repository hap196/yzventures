import React, { useEffect, useRef } from "react";
import circle1 from "./assets/circle1.png";
import circle2 from "./assets/circle2.png";
import circle3 from "./assets/circle3.png";
import Points from "./Points.jsx";

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
    <>
      <div className="flex justify-center items-center max-w-4xl h-full mx-auto mt-20 md:mt-24 mb-20 md:mb-40">
        <p
          ref={(el) => elementsRef.current.push(el)}
          className="font-lora text-gray-400 text-md text-center max-w-96 opacity-0"
        >
          Y&Z Ventures is a Los Angeles based multi-family office, operating as
          a direct investment vehicle + fund of funds. We are dedicated to
          supporting investments to the final stages, or the end game. Through
          our established network of M&A professionals across finance, tax, and
          legal, we support our portfolio investments through buy-side and
          sell-side exploration.
        </p>
      </div>
      <div className="mx-10 md:mx-20 mt-20 mb-20">
        <h2
          ref={(el) => elementsRef.current.push(el)}
          className="text-center font-lora text-gray-300 text-2xl md:text-4xl mb-10 opacity-0"
        >
          Partner Industries
        </h2>
        <div className="max-w-3xl font-lora text-lg mx-auto grid grid-cols-1 gap-10 text-gray-300 border-gray-400 border-t border-b pt-10 pb-10 md:grid-cols-2 mb-20">
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
    </>
  );
};

export default About;
