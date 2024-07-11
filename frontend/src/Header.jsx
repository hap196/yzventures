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
      <div className="mx-10 md:mt-10 md:mb-4 md:mx-20">
        <h1
          ref={(el) => (headersRef.current[0] = el)}
          className="font-lora text-gray-200 text-center text-4xl md:mx-10 mx-5 md:text-5xl opacity-0 mb-28 pt-64 animate-floatUp"
          id="mission"
          style={{ animationDelay: "0s" }}
        >
          Where capital investment has community impact.
        </h1>
      </div>
      <div
        className={`text-center w-full px-4 mb-40 ${
          isFading ? "fade-out" : "fade-in"
        }`}
      >
        <h2
          ref={(el) => (headersRef.current[1] = el)}
          className="font-poppins text-gray-200 text-2xl md:mx-10 mx-5 mb-4 opacity-0 animate-floatUp"
          style={{ animationDelay: "0.5s" }}
        >
          {phrases[currentPhraseIndex]}
        </h2>
        <h3
          ref={(el) => (headersRef.current[2] = el)}
          className="font-poppins border-t border-gray-300 lg:mx-72 md:mx-36 mx-10 text-gray-400 text-xl pt-4 opacity-0 animate-floatUp"
          style={{ animationDelay: "1s" }}
        >
          {subPhrases[currentPhraseIndex]}
        </h3>
      </div>
      <PortfolioScroll />
    </div>
  );
};

export default Header;
