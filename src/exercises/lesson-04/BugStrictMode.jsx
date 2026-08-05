// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Explanation:
// React StrictMode double-mounts components in development to detect side-effects.
// Since the original useEffect had no cleanup function, a new interval was created
// on every mount without clearing the previous one. This led to multiple active
// intervals running at the same time, causing the count to increment by 2.
// Adding a cleanup function to clear the interval on unmount solves this issue.
