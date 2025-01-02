const InitialState = [{ id: 1, todoName: 'eat', completed: false }];
export default function todosReducer(state = InitialState, action) {
    const { type, payload } = action;
    switch (type) {
        default:
            return state;
    }
}

