import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";

export const reducer = combineReducers({
    todosState: todosReducer,
  });