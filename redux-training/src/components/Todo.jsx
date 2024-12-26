import React from "react";
import { useDispatch } from "react-redux";
import todoAPI from "../api/todosAPI";
import "./Todo.css";

export default function Todo({ todo }) {
  const { id, title, completed } = todo;

  const dispatch = useDispatch();

  const deleteById = (id) => {
    todoAPI.deleteTodo(id).then(() => {
      dispatch({ type: "DELETE_TODO", payload: id });
    });
  };

  const toggleById = (id, completed) => {
    todoAPI.toggleTodo(id, completed).then(() => {
      dispatch({ type: "TOGGLE_TODO", payload: id });
    });
  };
  return (
    <div>
      {/* <input type="checkbox" checked={completed} /> */}
      <div className={"todo " + `${completed ? "todo--completed" : ""}`}>
        {title}
      </div>

      <button>Edit</button>
      <button onClick={() => deleteById(id)}>Delete</button>
      <button onClick={() => toggleById(id, !completed)}>
        {completed ? "Undo" : "Complete"}
      </button>
    </div>
  );
}
