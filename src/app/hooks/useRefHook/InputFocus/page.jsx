"use client";

import React, { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef(""); // Create a ref

  const handleFocus = () => {
    inputRef.current.focus(); // Focus the input field, current--> current is a property that holds the value of current DOM
  };

  return (
    <div className="hook-container">
      <h2>Focus on Input</h2>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default InputFocus;
