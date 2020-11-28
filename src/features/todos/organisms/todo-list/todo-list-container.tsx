import { connect, ConnectedProps } from "react-redux";
import { TodoList } from "./todo-list";
import { initTodos } from "features/todos/thunks";
import {
  getTodosItems,
  getTodosLoadingStatus,
  getLoadingToggledTodoIds,
} from "features/todos/selectors";

const mapStateToProps = (state: any) => ({
  todos: getTodosItems(state),
  isLoading: getTodosLoadingStatus(state),
  loadingToggledTodoIds: getLoadingToggledTodoIds(state),
});

const mapDispatchToProps = {
  initTodos,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type OwnProps = {
  initTodos: any;
  isLoading?: any;
  todos?: any;
};

export type ContainerProps = ConnectedProps<typeof connector> & OwnProps;

export const TodoListContainer = connector(TodoList);
