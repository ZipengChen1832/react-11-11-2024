import React from "react";
import { useCallback } from "react";

const limiterFn = (callbackFn, limit = 3) => {
  let count = 0;

  return () => {
    if (count >= limit) {
      console.log("You have reached the limit");
      return;
    }
    callbackFn();
    count++;
    // console.log("count:", count);
  };
};

export default function UseCallbackDemo() {
  const [count, setCount] = React.useState(0);

  const sayHi = useCallback(
    limiterFn(() => console.log("hi")),
    []
  );

  return (
    <div>
      <h2>Use Callback Demo</h2>
      <button onClick={sayHi}>Limited Say Hi</button>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Add Count: {count}
      </button>
    </div>
  );
}
