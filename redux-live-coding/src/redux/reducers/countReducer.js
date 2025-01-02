const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};

export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const asyncIncrement = () => async (dispatch) => {
  setTimeout(() => {
    dispatch(increment());
  }, 1000);
};

export default countReducer;
