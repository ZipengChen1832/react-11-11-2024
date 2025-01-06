import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <React.Fragment>
      <div>
        <h1>Redux</h1>

        <TodoList />
      </div>
    </React.Fragment>
  );
}

export default App;
