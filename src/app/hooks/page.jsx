"use client";

import Link from "next/link";

export default function Hooks() {
  return (
    <>
      <h1>What Are Hooks in React?​</h1>
      <p>
        React Hooks are functions that let you use React features like state and
        lifecycle methods without writing a class component.{" "}
      </p>
      <h2>Benefits of React Hooks​</h2>
      <ul>
        <li>Simplifies state management​</li>
        <li>Reuses logic​</li>
        <li>Enhances performance​</li>
        <li>Makes code easier to read and write​</li>
      </ul>
      <h2>Types of Hooks</h2>
      <ul>
        
        <li><Link href="/hooks/useStateHook">useState</Link></li>
        <li><Link href="/hooks/useEffectHook">useEffect​</Link></li>
        <li><Link href="/hooks/useRefHook">useRef​</Link></li>
      </ul>
    </>
  );
}
