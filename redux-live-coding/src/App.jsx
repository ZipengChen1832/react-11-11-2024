import { useState } from "react";
import TodoList from './components/TodoList'
import "./App.css";
import Counter from "./components/Counter";
import React from 'react'

function App() {
  return (
    <div>
      <h1>Redux</h1>
      <Counter />
      <TodoList/>
    </div>
  );
}

export default App;
