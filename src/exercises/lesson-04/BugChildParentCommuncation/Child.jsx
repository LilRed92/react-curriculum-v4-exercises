export default function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Counter</button>;
}

// Explanation:
// The Child component receives the callback function via the onIncrement prop.
// When the button is clicked, it invokes this function, which runs in the context
// of the Parent component to update its state.
