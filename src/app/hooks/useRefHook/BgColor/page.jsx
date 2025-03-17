"use client";

import React, { useRef } from "react";
import "../hook.css";

const BgColor = () => {
  const pageRef = useRef(); // Create a ref 

  const changeColor = () => {
    if (pageRef.current) {
      let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      pageRef.current.style.backgroundColor = color;
    }
  };

  return (
    <div ref={pageRef} className="page">
      <button onClick={changeColor}>Change Background</button>
    </div>
  );
};

export default BgColor;
