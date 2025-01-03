import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";

import TodoItem from "./TodoItem";

export const genId = (() => {
  let id = 3;
  return () => id++;
})();

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = { id: genId(), todoName: inputValue, completed: false };


    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} />
        <button type="submit">Add newTodo</button>
      </form>
      {todos.map((todo) => {
        const { id, todoName, completed } = todo;

        return (

          <TodoItem key={id} id={id} todoName={todoName} completed={completed}/>

        );
      })}
    </div>
  );
};

export default ToDoList;
