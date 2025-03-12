"use client";
import React, { useState } from "react";

export default function MyState() {
  const [message, setMessage] = useState("Initial State!!");

  const handleChange = () => {
    setMessage("Changed text!");
  };

  return (
    <div className="card">
      <div className="card-body">
        <h1>{message}</h1>
        <button className="btn btn-primary btn-sm" onClick={handleChange}>
          Change Text
        </button>
      </div>
    </div>
  );
}
