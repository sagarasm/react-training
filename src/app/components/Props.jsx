"use client";
import React, { useState } from "react";
import Childprops from './Childprops'

export default function MyProps() {
  

  return (
    <div className="card">
      <div className="card-body">
        <h2>I am inside parent component !</h2>
       <Childprops message="I am inside Child but came from Parent!"/>
      </div>
    </div>
  );
}
