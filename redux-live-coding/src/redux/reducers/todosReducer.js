const InitialState = [
    { id: 1, todoName: "eat", completed: false },
    { id: 2, todoName: "sleep", completed: false },
];
export default function todosReducer(state = InitialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "ADD_TODO":
            return [...state, payload];
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== payload);
        case "EDIT_TODO":
            return state.map((todo) => {
                if (todo.id === payload.id) {
                    return { ...todo, todoName: payload.todoName }
                } else {
                    return todo
                }
            })
        default:
            return state;
    }
}
