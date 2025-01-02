import { useSelector } from "react-redux";
import React from "react";

const ToDoList = () => {

    const todos = useSelector((state) => state.todos);

    return (
        <div>
            {todos.map((todo) => {

                const { id, todoName, completed } = todo;

                return (
                    <React.Fragment key={id}>                       
                        <div>id: {id}</div>
                        <div>name: {todoName}</div>
                        <div>status: status: {completed? "completed" : "not completed"}</div>
                    </React.Fragment>
                )
            })}
        </div>
    )

}

export default ToDoList;
