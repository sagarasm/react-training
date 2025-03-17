"use client";

import React, { useState } from "react";
import "../Hooks.css";

export default function Toggle() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`hook-container ${isDark ? "dark-mode" : "light-mode"}`}>
      <h2>{isDark ? "Dark Mode 🌙" : "Light Mode ☀️"}</h2>
      <button onClick={handleToggle}>Toggle Mode</button>
    </div>
  );
}
