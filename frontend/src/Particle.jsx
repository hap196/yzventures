
import React from "react";

const Particle = ({ x, y, size, color, animationDuration, mouseX, mouseY }) => {
  const styles = {
    left: `${x}px`,
    top: `${y}px`,
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    transform: "rotate(45deg)",
    position: "absolute",
    animation: `float ${animationDuration}s ease-in-out infinite`,
    opacity: 0.7, 
    filter: "blur(2px)", 
  };

  return <div style={styles}></div>;
};

export default Particle;
