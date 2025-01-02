import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncIncrement, increment } from "../redux/reducers/countReducer";

export default function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleAdd = () => dispatch(increment());
  const handleAsyncAdd = () => dispatch(asyncIncrement());

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleAsyncAdd}>Async Add</button>
    </div>
  );
}
