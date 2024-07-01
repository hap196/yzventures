import React, { useEffect, useRef } from "react";
import Counter from "./Counter";

const Header = () => {
  const headersRef = useRef([]);
  const statsRef = useRef([]);
  const commonDuration = 2000; // Common duration for all counters in milliseconds

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

  return (
    <>
      <div className="mt-20 mb-20 mx-10 md:mt-20 md:mb-20 md:mx-20">
        <h1
          ref={(el) => (headersRef.current[0] = el)}
          className="font-lora text-gray-200 text-center text-4xl md:text-5xl opacity-0 mb-4"
        >
          Where capital investment
        </h1>
        <h1
          ref={(el) => (headersRef.current[1] = el)}
          className="font-lora text-gray-200 text-center text-4xl md:text-5xl opacity-0 mb-24"
        >
          has <span className="text-accent-blue">community impact</span>.
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-28 mb-10 mx-10 md:mx-20">
        <div className="w-full max-w-48 text-center">
          <div ref={(el) => (statsRef.current[0] = el)} className="opacity-0">
            <h2 className="font-lora text-gray-200 text-5xl md:text-7xl mb-4">
              <Counter target={25} duration={commonDuration} />
            </h2>
            <h2 className="font-lora text-gray-400 text-md">
              countries our investors are based in
            </h2>
          </div>
        </div>
        <div className="w-full max-w-48 text-center">
          <div ref={(el) => (statsRef.current[1] = el)} className="opacity-0">
            <h2 className="font-lora text-gray-200 text-5xl md:text-7xl mb-4">
              <Counter target={30} duration={commonDuration} />
            </h2>
            <h2 className="font-lora text-gray-400 text-md">
              industry-leading investors in our funds
            </h2>
          </div>
        </div>
        <div className="w-full max-w-48 text-center">
          <div ref={(el) => (statsRef.current[2] = el)} className="opacity-0">
            <h2 className="font-lora text-gray-200 text-5xl md:text-7xl mb-4">
              <Counter target={200} duration={commonDuration} />
            </h2>
            <h2 className="font-lora text-gray-400 text-md">
              people employed by our investors' brands
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
