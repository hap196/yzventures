
import React, { useEffect, useState } from "react";
import Particle from "./Particle";

const colors = ["#003cc1", "#001e5e", "#01319d", "#002880"];

const ParticleEffect = () => {
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const createParticles = () => {
      const particlesArray = [];
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 5 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const animationDuration = Math.random() * 3 + 2; 
        particlesArray.push({ x, y, size, color, animationDuration });
      }
      setParticles(particlesArray);
    };

    createParticles();
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="fixed inset-0 overflow-hidden z-0" onMouseMove={handleMouseMove}>
      {particles.map((particle, index) => (
        <Particle key={index} {...particle} mouseX={mousePosition.x} mouseY={mousePosition.y} />
      ))}
    </div>
  );
};

export default ParticleEffect;
