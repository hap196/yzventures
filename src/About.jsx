import React, { useEffect, useRef, useState } from "react";
import Counter from "./Counter";
import map from "./assets/map.png";

const About = () => {
  const [showCounters, setShowCounters] = useState(false);
  const [showIndustries, setShowIndustries] = useState([false, false, false]);
  const countersRef = useRef(null);
  const industriesRef = useRef(null);
  const commonDuration = 2000;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === countersRef.current) {
              setTimeout(() => {
                setShowCounters(true);
              }, 100);
            }

            if (entry.target === industriesRef.current) {
              const industryDelays = [700, 1100, 1600];
              industryDelays.forEach((delay, index) => {
                setTimeout(() => {
                  setShowIndustries((prev) => {
                    const newState = [...prev];
                    newState[index] = true;
                    return newState;
                  });
                }, delay);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }
    if (industriesRef.current) {
      observer.observe(industriesRef.current);
    }

    return () => {
      if (countersRef.current) {
        observer.unobserve(countersRef.current);
      }
      if (industriesRef.current) {
        observer.unobserve(industriesRef.current);
      }
    };
  }, []);

  return (
    <div className="h-full pt-24">
      <h2 className="text-center font-lora text-gray-200 text-2xl md:text-3xl mb-16">
        About us
      </h2>
      {/* <div ref={countersRef}>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-20 mb-24 mx-10 md:mx-32">
          <div className="w-full max-w-48 text-center">
            <div className="transition-opacity transform duration-700 opacity-100 translate-y-0">
              <h2 className="font-lora text-gray-200 text-5xl md:text-7xl mb-4">
                {showCounters ? (
                  <Counter target={20} duration={commonDuration} />
                ) : (
                  0
                )}
              </h2>
              <h2 className="font-poppins text-gray-400 text-md">
                industry-leading operators in our fund
              </h2>
            </div>
          </div>
          <div className="w-full max-w-48 text-center">
            <div className="transition-opacity transform duration-700 opacity-100 translate-y-0">
              <h2 className="font-lora text-gray-200 text-5xl md:text-7xl mb-4">
                {showCounters ? (
                  <Counter target={300} duration={commonDuration} />
                ) : (
                  0
                )}
              </h2>
              <h2 className="font-poppins text-gray-400 text-md">
                people employed by our investor companies
              </h2>
            </div>
          </div>
          <div className="w-full max-w-48 text-center">
            <div className="transition-opacity transform duration-700 opacity-100 translate-y-0">
              <h2 className="font-lora text-gray-200 text-5xl md:text-7xl mb-4">
                {showCounters ? (
                  <Counter target={70000} duration={commonDuration} />
                ) : (
                  0
                )}
              </h2>
              <h2 className="font-poppins text-gray-400 text-md">
                newsletter audience through Gen She
              </h2>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col lg:flex-row justify-center items-center max-w-3xl lg:mx-auto mx-10 mb-20 mt-4 md:mt-2 mb-4 md:mb-40">
        <p className="font-lora text-gray-300 md:text-xl text-lg text-center lg:text-left lg:mb-0 md:mb-20 mb-20 max-w-xl lg:mr-10">
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
          .
        </p>
        <img src={map} className="lg:w-80 w-72 md:w-64 lg:ml-10" />
      </div>
      <div className="relative mt-20 mb-20">
        <h2 className="text-center font-lora text-gray-200 text-2xl md:text-3xl mb-12">
          Partner Industries
        </h2>
        <div ref={industriesRef} className="relative">
          <div className="absolute top-0 left-0 w-full border-t border-gray-300 border-opacity-30"></div>
          <div className="font-poppins text-xl mx-4 sm:mx-8 md:mx-16 lg:mx-20 grid grid-cols-1 text-gray-300 md:grid-cols-3">
            <div className="text-center md:border-r border-gray-300 border-opacity-30 py-10 relative">
              <ul
                className={`${
                  showIndustries[0] ? "animate-floatUp" : "opacity-0"
                }`}
              >
                <li>Agriculture</li>
                <li>Education</li>
                <li>Healthcare</li>
                <li>Home Services</li>
              </ul>
            </div>
            <div className="text-center md:border-r border-gray-300 border-opacity-30 py-10 relative">
              <ul
                className={` ${
                  showIndustries[1] ? "animate-floatUp" : "opacity-0"
                }`}
              >
                <li>Legal</li>
                <li>Logistics</li>
                <li>Manufacturing</li>
                <li>Marketplaces</li>
              </ul>
            </div>
            <div className="text-center py-10 relative">
              <ul
                className={`${
                  showIndustries[2] ? "animate-floatUp" : "opacity-0"
                }`}
              >
                <li>Mobility</li>
                <li>Production</li>
                <li>Real Estate</li>
                <li>Supply Chain</li>
              </ul>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full border-b border-gray-300 border-opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
