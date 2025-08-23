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
        setCount(formatCount(end));
        clearInterval(timer);
      } else {
        setCount(formatCount(Math.ceil(start)));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [target, duration]);

  const formatCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(count % 1000 === 0 ? 0 : 1)}k`;
    }
    return count.toLocaleString();
  };

  return <>{count}</>;
};

export default Counter;
