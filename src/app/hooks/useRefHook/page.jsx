"use client";
import Link from "next/link";
export default function useRefHook() {
  return (
    <>
        <h1>useRef Hooks</h1>
        <ul>
            <li>Allows access to global state ​and change DOM elements directly​</li>
            <li>const ref = useRef(initialValue);​​</li>
        </ul>
        <h4>Below are the examples of useRef Hook. </h4>
         <div className="useRef">
         <ul>
          <li>
            <Link href="/hooks/useRefHook/BgColor">Background Color</Link>
          </li>
          <li>
            <Link href="/hooks/useRefHook/InputFocus">Input Focus</Link>
          </li>
        </ul>
        </div>
    </>
  );
}
