'use client'
import MyState from '../components/State'

export default function State() {
    return (
        <>
        <h1>State in React?</h1>
        <p>In React, state is an object that holds dynamic data and determines how a component behaves and renders. Unlike props, which are read-only, state is mutable and can be updated within the component.</p>
        <ul>
            <li>State makes React components dynamic</li>
            <li>Can be changed inside component only</li>
            <li>Component re-renders when there is change in state</li>
            <li>Use useState in functional components to manage state</li>
        </ul>
        <MyState />
        </>
    );
  }
  