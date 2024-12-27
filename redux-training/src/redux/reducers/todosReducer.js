// const initState = [
//   { id: 1, title: "Learn React", completed: false },
//   { id: 2, title: "Learn Redux", completed: false },
//   { id: 3, title: "Learn React Native", completed: false },
// ];

import todoAPI from "../../api/todosAPI";

export default function todosReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return [...state, payload];
    case "SET_TODOS":
      return payload;
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== payload);
    case "TOGGLE_TODO":
      // payload here will be the id
      return state.map((todo) => {
        if (todo.id === payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

    default:
      return state;
  }
}

export function fetchTodosAsync() {
  return async (dispatch) => {
    const todos = await todoAPI.fetchTodos();
    dispatch({ type: "SET_TODOS", payload: todos });
  };
}

export function addTodoAsync(newTodo) {
  return async (dispatch) => {
    const data = await todoAPI.addTodo(newTodo);
    dispatch({
      type: "ADD_TODO",
      payload: data,
    });
  };
}

export function deleteTodoAsync(id) {
  return async (dispatch) => {
    await todoAPI.deleteTodo(id);
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };
}

export function toggleTodoAsync(id, completed) {
  return async (dispatch) => {
    await todoAPI.toggleTodo(id, completed);
    dispatch({
      type: "TOGGLE_TODO",
      payload: id,
    });
  };
}
