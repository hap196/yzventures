import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import image1 from "./assets/company_logos/aster_logo.svg";
import image2 from "./assets/company_logos/daisy_logo.png";
import image3 from "./assets/company_logos/livvy_logo.svg";
import image4 from "./assets/company_logos/odynn_logo.svg";
import image5 from "./assets/company_logos/splash_logo.png";
import LogoBox from "./LogoBox";

const Header = () => {
  const headersRef = useRef([]);

  const phrases = [
    "Unique Expertise and Network in M&A",
    "Represent Successful Operators",
    "Support Community",
    "Ensure Investors Create Value",
  ];

  const subPhrases = [
    "Y&Z is dedicated to supporting investments to the final stages, or the Y&Z",
    "Y&Z invests on behalf of successful operators across legacy sectors",
    "Y&Z invests on behalf of first generation and immigrant entrepreneurial families",
    "Y&Z invests in industries where our investors offer a unique expertise (see partner industries)",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [showLogos, setShowLogos] = useState(false);

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

  useEffect(() => {
    if (!isFading && currentPhraseIndex === 0) {
      setTimeout(() => {
        setShowLogos(true);
      }, 1000);
    }
  }, [isFading, currentPhraseIndex]);

  const logos = [
    {
      src: image1,
      alt: "Image 1",
      href: "https://www.astercare.com/",
      height: "h-8",
    },
    {
      src: image2,
      alt: "Image 2",
      href: "https://daisyco.com/",
      height: "h-16",
    },
    {
      src: image3,
      alt: "Image 3",
      href: "https://www.bylivvy.com/",
      height: "h-14",
    },
    {
      src: image4,
      alt: "Image 4",
      href: "https://www.odynn.com/",
      height: "h-16",
    },
    {
      src: image5,
      alt: "Image 5",
      href: "https://splashventures.com/",
      height: "h-14",
    },
  ];

  return (
    <div className="h-full">
      <div className="mx-10 md:mt-10 md:mb-4 md:mx-20">
        {/* <InteractiveLogo /> */}
        <h1
          ref={(el) => (headersRef.current[0] = el)}
          className="font-lora text-gray-300 text-center text-4xl md:mx-10 mx-5 md:text-5xl opacity-0 mb-28 pt-14 animate-floatUp"
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
          className="font-poppins border-t border-gray-300 border-opacity-30 lg:mx-72 md:mx-36 mx-10 text-gray-400 text-xl pt-4 opacity-0 animate-floatUp"
          style={{ animationDelay: "0.5s" }}
        >
          {subPhrases[currentPhraseIndex]}
        </h3>
      </div>
      <div className="border-t border-b border-gray-300 border-opacity-30">
        <div
          className={`overflow-x-auto mx-4 sm:mx-8 md:mx-16 lg:mx-20 flex items-center transition-opacity duration-1000 ${
            showLogos ? "opacity-100" : "opacity-0"
          }`}
          id="portfolio"
        >
          <div className="flex">
            {logos.map((logo, index) => (
              <LogoBox
                key={index}
                href={logo.href}
                src={logo.src}
                alt={logo.alt}
                height={logo.height}
                className={index === logos.length - 1 ? "" : "border-r border-gray-300 border-opacity-30"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
