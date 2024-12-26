// const initState = [
//   { id: 1, title: "Learn React", completed: false },
//   { id: 2, title: "Learn Redux", completed: false },
//   { id: 3, title: "Learn React Native", completed: false },
// ];

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
