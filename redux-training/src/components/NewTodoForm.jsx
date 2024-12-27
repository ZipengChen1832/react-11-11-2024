import React from "react";
import { useDispatch } from "react-redux";
import todoAPI from "../api/todosAPI";
import { addTodoAsync } from "../redux/reducers/todosReducer";

export default function NewTodoForm() {
  const [newTodo, setNewTodo] = React.useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTodoAsync({
        title: newTodo,
        completed: false,
      })
    );
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
