import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import React from "react";
import ToDoList from "./components/ToDoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <>
      <div className="todo-wrapper">
        <div className="todo-list">
        <h1>TODOLIST</h1>
        <TodoForm />
        <ToDoList />
        </div>
      </div>
    </>
  );
}

export default App;
