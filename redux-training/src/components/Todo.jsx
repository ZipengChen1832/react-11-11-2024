import React from "react";
import { useDispatch } from "react-redux";
import todoAPI from "../api/todosAPI";
import "./Todo.css";
import {
  deleteTodoAsync,
  toggleTodoAsync,
} from "../redux/reducers/todosReducer";

export default function Todo({ todo }) {
  const { id, title, completed } = todo;

  const dispatch = useDispatch();

  const deleteById = (id) => {
    dispatch(deleteTodoAsync(id));
  };

  const toggleById = (id, completed) => {
    dispatch(toggleTodoAsync(id, completed));
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
