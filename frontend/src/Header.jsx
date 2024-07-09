import React, { useEffect, useRef, useState } from "react";
import Counter from "./Counter";
import "./index.css";
import InteractiveLogo from "./InteractiveLogo";
import PortfolioScroll from "./PortfolioScroll";

const Header = () => {
  const headersRef = useRef([]);

  const phrases = [
    "Unique Expertise and Network in M&A",
    "Represent Successful Operators",
    "Support Community",
    "Ensure Investors Create Value",
  ];

  const subPhrases = [
    "Y&Z is dedicated to supporting investments to the final stages, or the Y&Z.",
    "Y&Z invests on behalf of successful operators across legacy sectors.",
    "Y&Z invests on behalf of first generation and immigrant entrepreneurial families",
    "Y&Z invests in industries where our investors offer a unique expertise (see partner industries)",
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
      {/* <InteractiveLogo /> */}
      <div className="mx-10 md:mt-10 md:mb-4 md:mx-20">
        <h1
          ref={(el) => (headersRef.current[0] = el)}
          className="font-lora text-gray-800 text-center text-4xl md:mx-10 mx-5 md:text-5xl opacity-0 mb-28 pt-64"
          id="mission"
        >
          Where capital investment has community impact.
        </h1>
      </div>
      <div
        className={`text-center w-full px-4 mb-40 ${
          isFading ? "fade-out" : "fade-in"
        }`}
      >
        <h2 className="font-poppins text-gray-800 text-2xl md:mx-10 mx-5 mb-4">
          {phrases[currentPhraseIndex]}
        </h2>
        <h3 className="font-poppins border-t border-gray-300 lg:mx-72 md:mx-36 mx-10 text-gray-600 text-xl pt-4">
          {subPhrases[currentPhraseIndex]}
        </h3>
      </div>
      <PortfolioScroll />
    </div>
  );
};

export default Header;
