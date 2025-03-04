import React from "react";
import { useState } from "react";

function Count() {
  const [count, setcount] = useState(0);

  const inc = () => {
    setcount(count + 1);
  };

  const dec = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };

  const reset = () => {
    setcount(0);
  };

  return (
    <div
      style={{
        border: "1px solid white",
        borderRadius: "10px",
        padding: "50px",
      }}
    >
      <h1>{count}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Count;
