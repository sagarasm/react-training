'use client'
import Events from '../components/Events'

export default function event() {
    return (
        <>
        <h1>Events in React?</h1>
        <p>React events work similarly to DOM events, but instead of using the traditional addEventListener, you attach event handlers directly to elements using camelCase syntax.</p>
        <ul>
            <li>Mouse Events - (onClick, onDoubleClick, onMouseEnter, onMouseLeave)</li>
            <li>Keyboard Events - (onKeyDown, onKeyUp, onKeyPress)</li>
            <li>Form Events - (onChange, onSubmit, onFocus, onBlur)</li>
        </ul>
        <Events />
        </>
    );
  }
  