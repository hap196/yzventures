import React, { useEffect, useRef, useState } from "react";
import Counter from "./Counter";
import "./index.css";
import InteractiveLogo from "./InteractiveLogo";

const Header = () => {
  const headersRef = useRef([]);
  const statsRef = useRef([]);
  const commonDuration = 2000; // Common duration for all counters in milliseconds

  const phrases = [
    "Representing HNWI",
    "Unique Expertise in M&A",
    "Consistent Deal Flow",
  ];

  const subPhrases = [
    "Our investors consist of influential families and private foundations.",
    "Y&Z is dedicated to supporting investments to the final stages, or Y&Z",
    "We have an established deal flow through our investor network",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-floatUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    headersRef.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    statsRef.current.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          observer.observe(el);
        }, index * 200); // delay to make them appear one after the other
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsFading(false);
      }, 1000);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="h-full mb-48">
      <InteractiveLogo />
      <div className="mt-10 mb-6 mx-10 md:mt-10 md:mb-4 md:mx-20">
        <h1
          ref={(el) => (headersRef.current[0] = el)}
          className="font-lora text-gray-200 text-center text-4xl md:text-6xl opacity-0 mb-4"
          id="mission"
        >
          Where capital investment
        </h1>
        <h1
          ref={(el) => (headersRef.current[1] = el)}
          className="font-lora text-gray-200 text-center text-4xl md:text-6xl opacity-0 mb-24"
        >
          has <span className="text-accent-blue">community impact</span>.
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-20 mb-24 mx-10 md:mx-20">
        <div className="w-full max-w-48 text-center">
          <div ref={(el) => (statsRef.current[0] = el)} className="opacity-0">
            <h2 className="font-lora text-gray-200 text-5xl md:text-7xl mb-4">
              <Counter target={20} duration={commonDuration} />
            </h2>
            <h2 className="font-lora text-gray-400 text-md">
              industry-leading operators in our fund
            </h2>
          </div>
        </div>
        <div className="w-full max-w-48 text-center">
          <div ref={(el) => (statsRef.current[1] = el)} className="opacity-0">
            <h2 className="font-lora text-gray-200 text-5xl md:text-7xl mb-4">
              <Counter target={300} duration={commonDuration} />
            </h2>
            <h2 className="font-lora text-gray-400 text-md">
              people employed by our investor companies
            </h2>
          </div>
        </div>
        <div className="w-full max-w-48 text-center">
          <div ref={(el) => (statsRef.current[2] = el)} className="opacity-0">
            <h2 className="font-lora text-gray-200 text-5xl md:text-7xl mb-4">
              <Counter target={70000} duration={commonDuration} />
            </h2>
            <h2 className="font-lora text-gray-400 text-md">
              newsletter audience through Gen She
            </h2>
          </div>
        </div>
      </div>
      <div
        ref={(el) => (statsRef.current[3] = el)}
        className={`text-center w-full px-4 ${
          isFading ? "fade-out" : "fade-in"
        }`}
      >
        <h2 className="font-lora text-gray-400 text-3xl mb-4">
          {phrases[currentPhraseIndex]}
        </h2>
        <hr className="border-gray-500 w-1/2 mx-auto my-2" />
        <h3 className="font-lora text-gray-500 text-2xl">
          {subPhrases[currentPhraseIndex]}
        </h3>
      </div>
    </div>
  );
};

export default Header;
