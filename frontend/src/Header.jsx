import React, { useEffect, useRef } from "react";

const Header = () => {
  const headersRef = useRef([]);
  const statsRef = useRef([]);

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
          className="font-lora text-gray-300 text-center text-4xl md:text-5xl opacity-0"
        >
          Where capital investment
        </h1>
        <h1
          ref={(el) => (headersRef.current[1] = el)}
          className="font-lora text-gray-300 text-center text-4xl md:text-5xl opacity-0"
        >
          has community impact.
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10 mb-24 mx-10 md:mx-20">
        <div className="w-full max-w-48 text-center">
          <div ref={(el) => (statsRef.current[0] = el)} className="opacity-0">
            <h2 className="font-lora text-gray-300 text-5xl md:text-7xl mb-4">
              37
            </h2>
            <h2 className="font-lora text-gray-400 text-md">
              countries our investors are based in
            </h2>
          </div>
        </div>
        <div className="w-full max-w-48 text-center">
          <div ref={(el) => (statsRef.current[1] = el)} className="opacity-0">
            <h2 className="font-lora text-gray-300 text-5xl md:text-7xl mb-4">
              240
            </h2>
            <h2 className="font-lora text-gray-400 text-md">
              industry-leading investors in our funds
            </h2>
          </div>
        </div>
        <div className="w-full max-w-48 text-center">
          <div ref={(el) => (statsRef.current[2] = el)} className="opacity-0">
            <h2 className="font-lora text-gray-300 text-5xl md:text-7xl mb-4">
              1.2M
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
