import React from "react";

import { useState, useEffect } from "react";

export default function AddToCart() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect has run");
  }, []);

  function onIncrementCounter() {
    setCounter(counter + 1);
  }

  function onDecrementCounter() {
    setCounter(counter - 1);
  }
  if (counter < 0) {
    setCounter(0);
  }

  console.log("Component has rendered");
  return (
    <div>
      <button onClick={onIncrementCounter}>+</button>
      <button onClick={onDecrementCounter}>-</button>
    </div>
  );
}
