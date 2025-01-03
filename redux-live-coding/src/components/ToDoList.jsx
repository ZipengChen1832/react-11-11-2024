import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: 3, todoName: inputValue, completed: false };
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
          <React.Fragment key={id}>
            <div>id: {id}</div>
            <div>name: {todoName}</div>
            <div>
              status: status: {completed ? "completed" : "not completed"}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ToDoList;
