import React from "react";
import ParentCounter from "./Memo/ParentCounter";
import UseMemoDemo from "./hooks/UseMemoDemo";
import TodoApp from "./hooks/Todos";
import UseCallbackDemo from "./hooks/UseCallbackDemo";

export default function DayPerformance() {
  return (
    <div>
      <h1>Performance</h1>
      {/* <ParentCounter /> */}
      {/* <UseMemoDemo /> */}
      {/* <TodoApp /> */}
      <UseCallbackDemo />
    </div>
  );
}
