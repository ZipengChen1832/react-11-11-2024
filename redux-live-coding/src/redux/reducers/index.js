import { combineReducers } from "redux";
import countReducer from "./countReducer";
import todosReducer from "./todosReducer";

const rootReducer = combineReducers({
  count: countReducer,
  todos: todosReducer,
});

export default rootReducer;
