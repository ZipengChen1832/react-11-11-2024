import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
export default function TodoList() {
    const todos=useSelector((state)=>state.todo)
    const dispatch =useDispatch()
    console.log(todos)
    const [newTodo, setNewTodo]=useState('')
  return (
    <div>
    <h1>Todo Component</h1>
    <input type="text" onChange={(e)=>{setNewTodo(e.target.value)}}/> 
    <button>Add Todo</button>

    <div>
      {todos?.map((todo)=>{todo.todoName})}
    </div>
    </div>
  )
}
