"use client";
import React, { useState } from "react";

export default function Childprops({message}) {

  return (
    <div className="card">
      <div className="card-body">
        <h2>{message}</h2>
      </div>
    </div>
  );
}