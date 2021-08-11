import { Todo } from "@common/types/types";
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "@store/actions/actionTypes";
import { initialState } from "@store/initialState";

export const todosReducer = (state: Todo[] = initialState.todos, action: any) => {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          {
            id: action.todo.id,
            text: action.todo.text,
            completed: false
          }
        ]
      case TOGGLE_TODO:
        return state.map((todo: any) => {
          if (todo.id === action.id) {
            return { ...todo, completed: !todo.completed }
          }
          return todo;
        })
      case DELETE_TODO:
        return state.filter(t => t.id !== action.id)
      default:
        return state;
    }
  }