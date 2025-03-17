"use client";

import Link from "next/link";
export default function useStateHook() {
  return (
    <>
        <h1>useState Hooks</h1>
        <ul>
            <li>Allows you to manage state within functional components ​</li>
            <li>const [stateName, setStateName] = useState(initialValue);​</li>
        </ul>
        <h4>Below are the examples of useState Hook. </h4>
         <div className="useState">
         <ul>
          <li>
            <Link href="/hooks/useStateHook/Counter">Counter</Link>
          </li>
          <li>
            <Link href="/hooks/useStateHook/Toggle">Toggle light and dark mode</Link>
          </li>
          
        </ul>
        </div>
    </>
  );
}
