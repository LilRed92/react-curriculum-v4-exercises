import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      <Child onIncrement={increment} />
    </div>
  );
}

// Explanation:
// In React, data flows downward (parent to child) via props.
// To allow a child to trigger a state update in the parent, I passed a callback
// function (increment) as a prop to the child component.
