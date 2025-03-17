"use client";
// import {CounterAlert,UserList, WindowSize} from './index';
import Link from "next/link";

export default function useEffectHook() {
  return (
    <>
      <h1>useEffect Hooks</h1>
      <ul>
        <li>Handles side effects (API calls, subscriptions, etc.)​​</li>
        <li>Runs after render by default​​​</li>
      </ul>
      <h4>Below are the examples of useEffect Hook. </h4>
      <div className="useRef">
        <ul>
          <li>
            <Link href="/hooks/useEffectHook/CounterAlert">Counter Alert</Link>
          </li>
          <li>
            <Link href="/hooks/useEffectHook/UserList">User List</Link>
          </li>
          <li>
            <Link href="/hooks/useEffectHook/WindowSize">Window Size</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
