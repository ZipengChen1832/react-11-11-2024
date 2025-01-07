import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const CompletedTodos = () => {
  const todos = useSelector((state) => state.todos);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div>
      {completedTodos.length > 0 ? (
        completedTodos.map((todo) => <Todo key={todo.id} todo={todo} />)
      ) : (
        <p>No completed todos yet!</p>
      )}
    </div>
  );
};

export default CompletedTodos;
