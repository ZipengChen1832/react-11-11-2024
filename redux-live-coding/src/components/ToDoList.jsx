import { useSelector } from "react-redux";
import React, { useState } from "react";

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);
  const [content, setContent] = useState("");
  return (
    <div>
      <input
        type="text"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      {todos.map((todo) => {
        const { id, todoName, completed } = todo;

        return (
          <React.Fragment key={id}>
            <div>id: {id}</div>
            <div>name: {todoName}</div>
            <div>
              status: status: {completed ? "completed" : "not completed"}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ToDoList;
