import React from "react";
import Child from "./Child";
import { useMemo, useState } from "react";

// purpose of useMemo:
// 1. memoize expensive calculations

export default function UseMemoDemo() {
  return (
    <>
      {/* <Example1 /> */}
      <Example2 />
    </>
  );
}

function getFib(num) {
  if (num <= 1) {
    return num;
  }

  return getFib(num - 1) + getFib(num - 2);
}

function Example1() {
  const [theme, setTheme] = useState("light");
  const [n, setN] = useState(40);

  // (everything does not include useState, useEffect, etc.)
  // everything in the function will be re-run on every render
  // which means this expensive calculation will be re-run on every render
  // const fib = getFib(n);

  // solution is to use useMemo
  // 1st argument: a callback that returns the value to memoize
  // 2nd argument: dependencies array, only re-calculate if dep arr changes
  const fib = useMemo(() => {
    console.log("Calculating fibonacci number...");
    return getFib(n);
  }, [n]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div>
      <h3>useMemo Demo</h3>
      <div>Theme: {theme}</div>
      <div>N: {n}</div>
      <div>Nth fibonacci number: {fib}</div>
      <button onClick={toggleTheme}>Change Theme</button>
      <button onClick={() => setN((prev) => prev + 1)}>Add N</button>
    </div>
  );
}

function Example2() {
  const [count, setCount] = useState(0);

  // every time component re-renders, a new object is created
  // by default, React.memo compares props by reference

  const childInfo = useMemo(() => {
    return {
      name: "Child",
      age: 10,
    };
  }, []);

  return (
    <div>
      <div>Count: {count} </div>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      <Child info={childInfo} />
    </div>
  );
}
