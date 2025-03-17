"use client";

import React, { useState, useEffect } from "react";

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup, remove event listner
  }, []);

  return <h1>Window Width: {width}px</h1>;
}

export default WindowSize;
