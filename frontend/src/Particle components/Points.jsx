import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import circle1 from '../assets/circle1.png';
import circle2 from '../assets/circle2.png';
import circle3 from '../assets/circle3.png';

const Points = () => {
  const [visibleSection, setVisibleSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSection(parseInt(entry.target.dataset.index, 10));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex max-h-64 m-40 overflow-hidden">
      {/* Left Side with Circle Images */}
      <div className="w-1/2 bg-blue-800 text-white flex flex-col justify-center items-center p-10">
        {visibleSection === 0 && (
          <div className="flex flex-col items-center">
            <img src={circle1} alt="Representing HNWI" className="h-20 mb-3" />
            <h2 className="text-lg font-bold">Representing HNWI</h2>
          </div>
        )}
        {visibleSection === 1 && (
          <div className="flex flex-col items-center">
            <img src={circle2} alt="Unique Expertise in M&A" className="h-20 mb-3" />
            <h2 className="text-lg font-bold">Unique Expertise in M&A</h2>
          </div>
        )}
        {visibleSection === 2 && (
          <div className="flex flex-col items-center">
            <img src={circle3} alt="Consistent Deal Flow" className="h-20 mb-3" />
            <h2 className="text-lg font-bold">Consistent Deal Flow</h2>
          </div>
        )}
      </div>

      {/* Right Side with Details */}
      <div className="w-1/2 bg-gray-100 text-gray-800 overflow-y-scroll p-10">
        <div className="h-screen flex flex-col justify-center items-start space-y-5 section" data-index="0">
          <h2 className="text-2xl font-bold">Representing HNWI</h2>
          <p>Our investors consist of influential families and private foundations.</p>
        </div>
        <div className="h-screen flex flex-col justify-center items-start space-y-5 section" data-index="1">
          <h2 className="text-2xl font-bold">Unique Expertise in M&A</h2>
          <p>Y&Z is dedicated to supporting investments to the final stages, or Y&Z.</p>
        </div>
        <div className="h-screen flex flex-col justify-center items-start space-y-5 section" data-index="2">
          <h2 className="text-2xl font-bold">Consistent Deal Flow</h2>
          <p>We have an established deal flow through our investor network.</p>
        </div>
      </div>
    </div>
  );
};

export default Points;
