import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import TodoForm from "./components/TodoForm";
import IncompleteTodos from "./components/IncompleteTodos";
import CompletedTodos from "./components/CompletedTodos";
import "./App.css";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <BrowserRouter>
      <div className="todo-wrapper">
        <div className="todo-list">
        <NavBar />
          <h1>TODOLIST</h1>
          <TodoForm />
          <Routes>
            <Route path="/" element={<ToDoList />} />
            <Route path="/todos" element={<IncompleteTodos />} />
            <Route path="/todos/completed" element={<CompletedTodos />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
