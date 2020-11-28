import { createSelector } from "reselect";

const getTodosState = (state) => {
  return state.todos;
};

export const getTodosItems = createSelector(
  getTodosState,
  (todos) => todos.items
);

export const getTodosLoadingStatus = createSelector(
  getTodosState,
  (todos) => todos.isLoading
);

export const getLoadingToggledTodoIds = createSelector(
  getTodosState,
  (todos) => todos.loadingToggledTodoIds
);

export const getLoadingDeletedTodoIds = createSelector(
  getTodosState,
  (todos) => todos.loadingDeletedTodoIds
);
