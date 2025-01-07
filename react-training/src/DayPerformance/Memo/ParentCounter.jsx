import React from "react";
import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import ClassChild from "./ClassChild";

// 1. render is the process of calculating the difference between 2 copies of virtual DOM
// and update the real DOM

// 2. when does a component re-render?
// - when the state changes with setState
// - when the parent component re-renders
// - (some may say) when the props change, but props change only when the parent re-renders
// - (you can do more research) when the context changes, the consumer component re-renders

export default function ParentCounter() {
  // every time setState is called, the component re-renders
  const [count, setCount] = useState(0);

  // a useless state
  const [bool, toggle] = useState(true);

  // every time the component re-renders, this function is called
  //   console.log("ParentCounter rendering");

  // everything in this function is executed every time the component re-renders
  // any variables, functions, or objects in this function are re-created every time
  //   let num = 0;
  //   num++;
  //   console.log(num);
  return (
    <div style={{ border: "1px solid red", padding: "20px" }}>
      <div>Parent Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Add Parent Count</button>
      <button onClick={() => toggle(!bool)}>Useless re-render</button>
      <ClassChild count={count} a="a" b="b" c={{ d: "d" }} />
      {/* <Child1 /> 
      <Child2 count={count} /> */}
    </div>
  );
}

// Old Virtual DOM
// <div>Count: 0</div>

// call setState

// New Virtual DOM
// <div>Count: 1</div>

// compare old and new virtual DOM
// update the real DOM (from 0 to 1)
