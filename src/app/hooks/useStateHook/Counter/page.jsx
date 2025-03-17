"use client";

import React, { useState } from "react";
import "../Hooks.css";

export default function Counter() {
  const [count, setCount] = useState(100);

  const handleIncrement = () => {
    // setCount(count + 1); //2
    // setCount(count + 1); //2
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
  };

  const handleDecrement = () => {
    setCount(count - 1); //2-1=1
  };
  return (
    <div className="hook-container counter-container">
      <h2>Counter: {count}</h2>
      <div className="counter-buttons">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        {/* <button >Increment</button>
        <button >Decrement</button> */}
      </div>
    </div>
  );
}
