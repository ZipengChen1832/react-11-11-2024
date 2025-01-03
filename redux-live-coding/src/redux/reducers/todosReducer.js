const InitialState = [
  { id: 1, todoName: "eat", completed: false },
  { id: 2, todoName: "sleep", completed: false },
];
export default function todosReducer(state = InitialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO" :
      return [...state, payload];

    default:
      return state;
  }
}
