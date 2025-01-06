import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Todo({ todo }) {
  const { id, todoName, completed } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todoName);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  const handleToggle = (id) => {
    dispatch({
      type: "TOGGLE_COMPLETE",
      payload: id,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setNewText(e.target.value);
  };

  const handleSave = (id) => {
    dispatch({
      type: "SAVE_TODO",
      payload: { id, todoName: newText, completed },
    });
    setIsEditing(false);
  };

  return (
    <div key={id} className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={()=>handleToggle(id)}
        className="todo-checkbox"
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={handleChange}
            className="todo-edit-input"
          />
          <button onClick={() => handleSave(id)} className="todo-save-btn">
            Save
          </button>
        </>
      ) : (
        <>
          <div className={completed ? "completed" : "none"}>
          {typeof todoName === "string" ? todoName : "Invalid Todo Name"}

          </div>
          <button onClick={handleEdit} className="todo-edit-btn">
            ✎
          </button>
        </>
      )}

      <button onClick={() => handleDelete(id)} className="todo-delete-btn">
        ✖
      </button>
    </div>
  );
}

export default Todo;
