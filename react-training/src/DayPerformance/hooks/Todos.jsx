import React, { useState } from "react";
import { useMemo } from "react";

const mockTodos = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Learn JavaScript" },
  { id: 3, text: "Learn TypeScript" },
  { id: 4, text: "Learn Node.js" },
  { id: 5, text: "Learn Express" },
  { id: 6, text: "Learn MongoDB" },
  { id: 7, text: "Learn SQL" },
];

// this is not complete
function TodoApp() {
  const [todos, setTodos] = useState(mockTodos);
  const [sortCategory, setSortCategory] = useState("asc");

  const sortedTodos = useMemo(() => {
    return todos.sort((a, b) => {
      return 0;
    });
  }, [todos, sortCategory]);

  return (
    <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Todo List</h1>
      {mockTodos.map((todo) => (
        <div key={todo.id} style={{ margin: "5px" }}>
          {todo.text}
        </div>
      ))}
      <button onClick={()=>setSortCategory()}>Sort it</button>
    </div>
  );
}

export default TodoApp;
