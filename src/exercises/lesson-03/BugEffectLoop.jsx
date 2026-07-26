//src/exercises/lesson-03/BugEffectLoop.jsx

/*
  BUG #1 — Effect Issue

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
//Just needed to add an empty array to useEffect as a dependency. This way state isn't constantly re-ran on every render. Every time setCount is called and +1 is added to count, the component re-renders. Thus, an infinite loop is created unless an empty array is used as a dependency to useEffect.
