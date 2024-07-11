import React, { useEffect, useRef, useState } from "react";
import Counter from "./Counter";
import map from "./assets/map.png";

const About = () => {
  const elementsRef = useRef([]);
  const statsRef = useRef([]);
  const [isVisible, setIsVisible] = useState([false, false, false]);
  const commonDuration = 2000; // Common duration for all counters in milliseconds
  const animationDelays = [0, 300, 600, 900, 1200, 1500, 1800, 2100];
  const statsDelays = [0, 300, 600];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = elementsRef.current.indexOf(entry.target);
          if (entry.isIntersecting && index !== -1) {
            setTimeout(() => {
              entry.target.classList.add("animate-floatUp");
              observer.unobserve(entry.target);
            }, animationDelays[index]);
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
  }, [animationDelays]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, statsDelays[index]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    statsRef.current.forEach((el, index) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      statsRef.current.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, [statsDelays]);

  return (
    <div className="h-full">
      <h2
        ref={(el) => elementsRef.current.push(el)}
        className="text-center font-lora text-gray-200 text-2xl md:text-3xl mb-16 opacity-0"
      >
        About us
      </h2>
      <div ref={(el) => elementsRef.current.push(el)} className="opacity-0">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-20 mb-24 mx-10 md:mx-32">
          <div className="w-full max-w-48 text-center">
            <div
              ref={(el) => (statsRef.current[0] = el)}
              className={`transition-opacity transform duration-700 ${
                isVisible[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="font-lora text-gray-200 text-5xl md:text-7xl mb-4">
                {isVisible[0] && <Counter target={20} duration={commonDuration} />}
              </h2>
              <h2 className="font-poppins text-gray-400 text-md">
                industry-leading operators in our fund
              </h2>
            </div>
          </div>
          <div className="w-full max-w-48 text-center">
            <div
              ref={(el) => (statsRef.current[1] = el)}
              className={`transition-opacity transform duration-700 ${
                isVisible[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="font-lora text-gray-200 text-5xl md:text-7xl mb-4">
                {isVisible[1] && <Counter target={300} duration={commonDuration} />}
              </h2>
              <h2 className="font-poppins text-gray-400 text-md">
                people employed by our investor companies
              </h2>
            </div>
          </div>
          <div className="w-full max-w-48 text-center">
            <div
              ref={(el) => (statsRef.current[2] = el)}
              className={`transition-opacity transform duration-700 ${
                isVisible[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="font-lora text-gray-200 text-5xl md:text-7xl mb-4">
                {isVisible[2] && <Counter target={70000} duration={commonDuration} />}
              </h2>
              <h2 className="font-poppins text-gray-400 text-md">
                newsletter audience through Gen She
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center max-w-3xl lg:mx-auto mx-10 mb-20 mt-4 md:mt-2 mb-4 md:mb-40">
        <p
          ref={(el) => elementsRef.current.push(el)}
          className="font-lora text-gray-300 md:text-xl text-lg text-center lg:text-left lg:mb-0 md:mb-20 mb-20 max-w-xl opacity-0 lg:mr-10"
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
        <img
          ref={(el) => elementsRef.current.push(el)}
          src={map}
          className="lg:w-80 w-72 md:w-64 opacity-0 lg:ml-10 animate-floatUp"
        />
      </div>
      <div className="mt-20 mb-20">
        <h2
          ref={(el) => elementsRef.current.push(el)}
          className="text-center font-lora text-gray-200 text-2xl md:text-3xl mb-12 opacity-0"
        >
          Partner Industries
        </h2>
        <div className="font-poppins text-xl mx-4 sm:mx-8 md:mx-16 lg:mx-20 grid grid-cols-1 text-gray-300 border-gray-500 border-t border-b md:grid-cols-3">
          <div
            ref={(el) => elementsRef.current.push(el)}
            className="text-center md:border-r border-gray-300 border-opacity-30 py-10 opacity-0"
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
            className="text-center md:border-r border-gray-300 border-opacity-30 py-10 opacity-0"
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
