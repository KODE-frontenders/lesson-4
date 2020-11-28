import {
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  TOGGLE_TODO_SUCCESS,
  TOGGLE_TODO_FAILURE,
  TOGGLE_TODO_REQUEST,
} from "./actions";

export const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST,
});
export const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});
export const fetchTodosFailure = (e) => ({
  type: FETCH_TODOS_FAILURE,
  payload: e,
});

export const addTodoRequest = () => ({
  type: ADD_TODO_REQUEST,
});
export const addTodoSuccess = (id) => ({
  type: ADD_TODO_SUCCESS,
  payload: id,
});
export const addTodoFailure = (e) => ({
  type: ADD_TODO_FAILURE,
  payload: e,
});

export const deleteTodoRequest = (id) => ({
  type: DELETE_TODO_REQUEST,
  payload: id,
});
export const deleteTodoSuccess = (todos) => ({
  type: DELETE_TODO_SUCCESS,
  payload: todos,
});
export const deleteTodoFailure = (e) => ({
  type: DELETE_TODO_FAILURE,
  payload: e,
});

export const toggleTodoRequest = (id) => ({
  type: TOGGLE_TODO_REQUEST,
  payload: id,
});
export const toggleTodoSuccess = (todos) => ({
  type: TOGGLE_TODO_SUCCESS,
  payload: todos,
});
export const toggleTodoFailure = (e) => ({
  type: TOGGLE_TODO_FAILURE,
  payload: e,
});
