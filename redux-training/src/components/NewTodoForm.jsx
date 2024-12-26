import React from "react";
import { useDispatch } from "react-redux";
import todoAPI from "../api/todosAPI";

export default function NewTodoForm() {
  const [newTodo, setNewTodo] = React.useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    todoAPI
      .addTodo({
        title: newTodo,
        completed: false,
      })
      .then((data) => {
        dispatch({
          type: "ADD_TODO",
          payload: data,
        });
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
