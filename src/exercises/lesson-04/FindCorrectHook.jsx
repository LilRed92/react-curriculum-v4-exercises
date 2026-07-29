import { useState } from 'react';

// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
export default function FindCorrectHook() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount((prev) => prev + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}

// Explanation:
// I used useState because I needed the click counter to update in the UI.
// Using useRef would store the count but would not trigger a re-render,
// meaning the button text would remain "0 Clicks". Since updating the visible
// UI counter requires a re-render, useState is the correct hook for this.
