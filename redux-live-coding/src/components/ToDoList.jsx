import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import Todo from "./Todo";

export const genId = (()=>{
    let id = 0;
    return ()=> id = id+1;
})()

const ToDoList = () => {

    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const todo_complete = todos.filter((todo)=>todo.completed)
    const total_todos = todos.length;
    const progress = total_todos ? (todo_complete.length/total_todos)*100 : 0;


    const handleRemove = ()=>{
        if(todo_complete.length){
            const ids = todo_complete.map((todo)=>todo.id)
        dispatch({
            type:"REMOVE_ALL",
            payload: ids
        })}
        return;
    }


    return (
        <div className="todos">
            
            {todos.map((todo) => {
                return (
                    <Todo key={todo.id} todo={todo} />
                )
            })}
            <div className="bottom-section">
           <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}>{todo_complete.length} of {total_todos} tasks done</div>
           </div>
            <button onClick={handleRemove}>Remove Checked x</button>
            </div>
        </div>
    )

}

export default ToDoList;
