import { genId } from "../../components/ToDoList";

const InitialState = [
  {
    id: genId(),
    todoName: 'read the book (at least 5 pages',
    completed: false,
  },
  { id: genId(), todoName: 'buy dog food', completed: true },
  { id: genId(), todoName: 'call my parents', completed: false },
  { id: genId(), todoName: 'clean my working place', completed: true },
  { id: genId(), todoName: 'kill Bill', completed: true },
];

export default function todosReducer(state = InitialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return [...state, payload];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== payload);
    case "TOGGLE_COMPLETE":
      return state.map((todo) =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      );
    case "SAVE_TODO":
      return state.map((todo) =>
        todo.id === payload.id ? { ...todo, todoName: payload.todoName } : todo
      );

    case "REMOVE_ALL":
      return state.filter((todo) => !payload.includes(todo.id));
    default:
      return state;
  }
}
