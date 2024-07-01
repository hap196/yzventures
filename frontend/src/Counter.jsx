import React, { useEffect, useState } from "react";

const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    const increment = end / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end.toLocaleString());
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start).toLocaleString());
      }
    }, 10);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count}</>;
};

export default Counter;
