import { useRef } from 'react';

// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
export default function FillRefFocus() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input ref={inputRef} type="text" placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// Explanation:
// I used useRef to create a reference to the DOM input element.
// In React, imperatively focusing an element is done by accessing the underlying
// DOM node through the ref's current property (inputRef.current) and calling
// its native .focus() method. This allows direct interaction with the DOM.
