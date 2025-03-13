"use client";
import React, { useState } from "react";

export default function Events() {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setSubmittedValue(inputValue);
  };

  return (
    <div className="card">
      <div className="card-body">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-md"
          placeholder="Enter text..."
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 text-white rounded-md btn btn-primary"
        >
          Submit
        </button>
        {submittedValue && (
          <p className="mt-4 text-lg font-semibold text-gray-700">
            You entered: {submittedValue}
          </p>
        )}
      </div>
    </div>
  );
}
