import React from "react";
import { useDispatch } from "react-redux";

const TodoItem = ({ id, todoName, completed }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  return (
    <div>
      <div>id: {id}</div>
      <div>name: {todoName}</div>
      <div>status: status: {completed ? "completed" : "not completed"}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
