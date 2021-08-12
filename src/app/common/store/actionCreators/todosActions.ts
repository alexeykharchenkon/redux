import axios from 'axios';
import { Todo } from "@common/types/types";
import { ADD_TODO_FAILURE, ADD_TODO_STARTED, ADD_TODO_SUCCESS, 
  DELETE_ALL_TODOS, DELETE_TODO, LOAD_TODOS_FAILURE, LOAD_TODOS_STARTED, 
  LOAD_TODOS_SUCCESS, TOGGLE_TODO } from "@store/actions/actionTypes";

export const addTodo = (todo: Todo) => {
    return (dispatch : any) => {
        dispatch(addTodoSuccess(todo)); 
    /*  dispatch(addTodoStarted());

      axios.post(`https://jsonplaceholder.typicode.com/todos`, {
        userId: 1,
        id: todo.id,
        title: todo.text,
        completed: false
      })
      .then(res => {dispatch(addTodoSuccess(res.data))})
      .catch(err => {dispatch(addTodoFailure(err.message))});*/
    }
}
const addTodoSuccess = (todo: Todo) => ({type: ADD_TODO_SUCCESS, todo});
const addTodoStarted = () => ({type: ADD_TODO_STARTED});
const addTodoFailure = (error: any) => ({type: ADD_TODO_FAILURE, error});

export const toggleTodo = (id: string) => ({ type: TOGGLE_TODO, id });
export const deleteTodo = (id: string) => ({ type: DELETE_TODO, id });
export const deleteAllTodos = () => ({ type: DELETE_ALL_TODOS });

export const loadTodos = (from: number, limit: number) => {
    return (dispatch : any) => {
      dispatch(loadTodosStarted());

      axios.get(`https://jsonplaceholder.typicode.com/todos?_start=${from}&_limit=${limit}`)
      .then(res => { dispatch(loadTodosSuccess(res.data)) })
      .catch(err => { dispatch(loadTodosFailure(err.message)) });
    }
}
const loadTodosSuccess = (todos: Todo[]) => ({type: LOAD_TODOS_SUCCESS, todos});
const loadTodosStarted = () => ({type: LOAD_TODOS_STARTED});
const loadTodosFailure = (error: any) => ({type: LOAD_TODOS_FAILURE, error});