import React, { useEffect, useRef } from 'react';
import './InteractiveLogo.css';

const InteractiveLogo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      const xTilt = ((innerHeight / 2 - clientY) / innerHeight) * 30;
      const yTilt = ((clientX - innerWidth / 2) / innerWidth) * 30;

      logoRef.current.style.transform = `rotateX(${xTilt}deg) rotateY(${yTilt}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="logo-wrapper flex justify-center items-center pt-28 pb-6">
      <div ref={logoRef} className="logo-container">
        <div className="logo-square top-left custom-blue-1">
          <div className="side side-top"></div>
          <div className="side side-right"></div>
          <div className="side side-bottom"></div>
          <div className="side side-left"></div>
        </div>
        <div className="logo-square top-right custom-blue-2">
          <div className="side side-top"></div>
          <div className="side side-right"></div>
          <div className="side side-bottom"></div>
          <div className="side side-left"></div>
        </div>
        <div className="logo-square bottom-left custom-blue-3">
          <div className="side side-top"></div>
          <div className="side side-right"></div>
          <div className="side side-bottom"></div>
          <div className="side side-left"></div>
        </div>
        <div className="logo-square bottom-right custom-blue-4">
          <div className="side side-top"></div>
          <div className="side side-right"></div>
          <div className="side side-bottom"></div>
          <div className="side side-left"></div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveLogo;
