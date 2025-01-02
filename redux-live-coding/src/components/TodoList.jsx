import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
export default function TodoList() {
    const todos=useSelector((state)=>state.todo)
    const dispatch =useDispatch()
  return (
    <div>
      {todos?.map((todo)=>{todo.todoName})}
    </div>
  )
}
