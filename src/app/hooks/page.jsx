'use client'
import MyProps from '../components/Props'

export default function Hooks() {
    return (
        <>
        <h1>Props in React?</h1>
        <p>In React, props (short for "properties") are a way to pass data from a parent component to a child component. They allow components to be dynamic and reusable by making them configurable.</p>
        <ul>
            <li>Props are read-only (immutable) and cannot be modified by the child component.</li>
            <li>They are passed as attributes to a component in JSX</li>
            <li>The child component receives them as an argument in the function....</li>
        </ul>
        <MyProps />
        </>
    );
  }
  