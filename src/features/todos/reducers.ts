import { combineReducers } from "redux";
import {
  FETCH_TODOS_SUCCESS,
  ADD_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  TOGGLE_TODO_SUCCESS,
  FETCH_TODOS_FAILURE,
  ADD_TODO_FAILURE,
  DELETE_TODO_FAILURE,
  TOGGLE_TODO_FAILURE,
  FETCH_TODOS_REQUEST,
  DELETE_TODO_REQUEST,
  TOGGLE_TODO_REQUEST,
} from "./actions";

const errorsReducer: any = (state = "", action) => {
  switch (action.type) {
    case FETCH_TODOS_FAILURE:
    case DELETE_TODO_FAILURE:
    case TOGGLE_TODO_FAILURE:
    case ADD_TODO_FAILURE: {
      const errorMessage = action.payload.message;
      return errorMessage;
    }

    default:
      return state;
  }
};

const itemsReducer: any = (state = [], action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
    case ADD_TODO_SUCCESS:
    case DELETE_TODO_SUCCESS:
    case TOGGLE_TODO_SUCCESS: {
      const items = action.payload;
      return items;
    }

    default:
      return state;
  }
};

const isLoadingReducer: any = (state = false, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return true;
    case FETCH_TODOS_SUCCESS:
    case FETCH_TODOS_FAILURE:
      return false;
    default:
      return state;
  }
};

const loadingToggledTodoIdsReducer: any = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_TODO_REQUEST:
      const todoId = action.payload;
      return [...state, todoId];
    case TOGGLE_TODO_SUCCESS:
    case TOGGLE_TODO_FAILURE:
      return [];
    default:
      return state;
  }
};

const loadingDeletedTodoIdsReducer: any = (state = [], action) => {
  switch (action.type) {
    case DELETE_TODO_REQUEST:
      const todoId = action.payload;
      return [...state, todoId];
    case DELETE_TODO_SUCCESS:
    case DELETE_TODO_FAILURE:
      return [];
    default:
      return state;
  }
};

export const todosReducer = combineReducers({
  items: itemsReducer,
  error: errorsReducer,
  isLoading: isLoadingReducer,
  loadingToggledTodoIds: loadingToggledTodoIdsReducer,
  loadingDeletedTodoIds: loadingDeletedTodoIdsReducer,
});
