import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const IncompleteTodos = () => {
  const todos = useSelector((state) => state.todos);
  const incompleteTodos = todos.filter((todo) => !todo.completed);

  return (
    <div>
      {incompleteTodos.length > 0 ? (
        incompleteTodos.map((todo) => <Todo key={todo.id} todo={todo} />)
      ) : (
        <p>No incomplete todos!</p>
      )}
    </div>
  );
};

export default IncompleteTodos;
