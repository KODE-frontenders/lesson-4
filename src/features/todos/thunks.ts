import { fetchTodos, addTodo, deleteTodo, updateTodo } from "api";
import { INIT } from "./actions";
import {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosFailure,
  addTodoRequest,
  addTodoSuccess,
  addTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoFailure,
  toggleTodoRequest,
  toggleTodoSuccess,
  toggleTodoFailure,
} from "./action-creators";

export const initTodos = () => (dispatch) => {
  dispatch(fetchTodosAsync());

  return {
    type: INIT,
  };
};

export const fetchTodosAsync = () => async (dispatch): Promise<any> => {
  dispatch(fetchTodosRequest());

  try {
    const todos = await fetchTodos();
    dispatch(fetchTodosSuccess(todos));
  } catch (e) {
    console.error(e);
    dispatch(fetchTodosFailure(e));
  }
};

export const addTodoAsync = (description) => async (dispatch): Promise<any> => {
  dispatch(addTodoRequest());

  try {
    await addTodo(description);
    const todos = await fetchTodos();
    dispatch(addTodoSuccess(todos));
  } catch (e) {
    dispatch(addTodoFailure(e));
  }
};

export const deleteTodoAsync = (id) => async (dispatch): Promise<any> => {
  dispatch(deleteTodoRequest(id));

  try {
    await deleteTodo(id);
    const todos = await fetchTodos();
    dispatch(deleteTodoSuccess(todos));
  } catch (e) {
    dispatch(deleteTodoFailure(e));
  }
};

export const toggleTodoAsync = (id, newTodoStatus) => async (
  dispatch
): Promise<any> => {
  dispatch(toggleTodoRequest(id));

  try {
    const newTodoBody = { completed: newTodoStatus };
    await updateTodo(id, newTodoBody);

    const todos = await fetchTodos();
    dispatch(toggleTodoSuccess(todos));
  } catch (e) {
    dispatch(toggleTodoFailure(e));
  }
};
