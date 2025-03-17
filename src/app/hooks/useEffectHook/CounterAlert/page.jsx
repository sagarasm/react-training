"use client";

import React, { useEffect, useState } from "react";
import "../../useStateHook/Hooks.css";

export default function CounterAlert() {
  const [count, setCount] = useState(0);

  //first--> side-effect function
  //second --> clean up function
  //third --> comma separated dependency

  // useEffect(() => {
  //   first

  //   return () =>{
  //     second
  //   }
  // }, [third]); 

  useEffect(() => {
     alert("Count is changed");
    
  }, [count]); 

  // useEffect(() => {
  //   alert("Count is changed");
  // }, []); // Runs on first render

  return (
    <div className="hook-container counter-container">
      <h2>Counter: {count}</h2>
      <div className="counter-buttons">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
};


  