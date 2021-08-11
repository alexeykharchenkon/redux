import { Todo } from "@common/types/types";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "@store/actions/actionTypes";

export const addTodo = (todo: Todo) => ({ type: ADD_TODO, todo });
export const toggleTodo = (id: string) => ({ type: TOGGLE_TODO, id });
export const deleteTodo = (id: string) => ({ type: DELETE_TODO, id });