import React, { useEffect, useRef, useState } from "react";
import Counter from "./Counter";

const Stats = () => {
  const statsRef = useRef([]);
  const [isVisible, setIsVisible] = useState([false, false, false]);
  const commonDuration = 2000; // Common duration for all counters in milliseconds

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
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
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-20 mb-24 mx-10 md:mx-32">
      <div className="w-full max-w-48 text-center">
        <div ref={(el) => (statsRef.current[0] = el)} className={`transition-opacity duration-500 ${isVisible[0] ? "opacity-100" : "opacity-0"}`}>
          <h2 className="font-lora text-gray-800 text-5xl md:text-7xl mb-4">
            {isVisible[0] && <Counter target={20} duration={commonDuration} />}
          </h2>
          <h2 className="font-lora text-gray-600 text-md">
            industry-leading operators in our fund
          </h2>
        </div>
      </div>
      <div className="w-full max-w-48 text-center">
        <div ref={(el) => (statsRef.current[1] = el)} className={`transition-opacity duration-500 ${isVisible[1] ? "opacity-100" : "opacity-0"}`}>
          <h2 className="font-lora text-gray-800 text-5xl md:text-7xl mb-4">
            {isVisible[1] && <Counter target={300} duration={commonDuration} />}
          </h2>
          <h2 className="font-lora text-gray-600 text-md">
            people employed by our investor companies
          </h2>
        </div>
      </div>
      <div className="w-full max-w-48 text-center">
        <div ref={(el) => (statsRef.current[2] = el)} className={`transition-opacity duration-500 ${isVisible[2] ? "opacity-100" : "opacity-0"}`}>
          <h2 className="font-lora text-gray-800 text-5xl md:text-7xl mb-4">
            {isVisible[2] && <Counter target={70000} duration={commonDuration} />}
          </h2>
          <h2 className="font-lora text-gray-600 text-md">
            newsletter audience through Gen She
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Stats;
