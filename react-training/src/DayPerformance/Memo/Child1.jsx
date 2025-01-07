import React from "react";
import { useState } from "react";

export default function Child1() {
  const [count, setCount] = useState(0);

  console.log("Child 1 rendering");

  return (
    <div
      style={{ border: "1px solid red", padding: "20px", marginTop: "10px" }}
    >
      <h2>Child 1: {count}</h2>
      <div>has its own count state</div>
      <button onClick={() => setCount(count + 1)}>Render Child</button>
    </div>
  );
}
