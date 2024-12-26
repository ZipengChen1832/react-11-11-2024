import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TodoList from "./components/TodoList";
import NewTodoForm from "./components/NewTodoForm";
import { useEffect } from "react";
import todoAPI from "./api/todosAPI";

function App() {
  const theme = useSelector((state) => state.theme);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    todoAPI.fetchTodos().then((data) => {
      dispatch({ type: "SET_TODOS", payload: data });
    });
  }, []);

  function toggleTheme() {
    dispatch({ type: "TOGGLE_THEME" });
  }

  const remainingTodo = todos.filter((todo) => !todo.completed).length;

  return (
    <div className={theme === "light" ? "app--light" : "app--dark"}>
      <h1>Redux</h1>
      {/* <div>Count: {count.value}</div> */}
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Remaining todos: {remainingTodo}</h1>
      <NewTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
