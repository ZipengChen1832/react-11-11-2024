
import { useState } from "react";
import TodoList from './components/TodoList'
import "./App.css";
import Counter from "./components/Counter";
import React from 'react'


function App() {
  return (
    <React.Fragment> 
    <div>
      <h1>Redux</h1>

      <TodoList/>

    </div>
    </React.Fragment>
  );
}

export default App;
