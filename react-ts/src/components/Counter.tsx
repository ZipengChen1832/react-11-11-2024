import { useState } from "react";

export interface CounterProps {
  name: string;
}

export default function Counter({ name }: CounterProps) {
  const [count, setCount] = useState<number>(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>{name}</h2>
      <div>Count: {count}</div>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
