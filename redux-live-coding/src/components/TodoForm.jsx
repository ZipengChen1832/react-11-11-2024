import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { genId } from './ToDoList';

export default function TodoForm() {
    const [newTodo, setNewTodo] = useState("");
    const dispatch = useDispatch();


    const handleSubmit = (e)=>{
        e.preventDefault();
        if(newTodo.trim()){
        dispatch({
            type: "ADD_TODO",
            payload: {
                id: genId(),
                todoName: newTodo,
                completed:false,

            }
        })
        setNewTodo("");}
        return;

    }
  return (
    <form onSubmit={handleSubmit} className="add-form">
                <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} placeholder='what needs to be done?' className="add-input"/>
                <button className="add-button">+</button>
            </form>
  )
}
