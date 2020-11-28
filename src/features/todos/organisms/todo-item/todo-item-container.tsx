import { connect, ConnectedProps } from "react-redux";
import { toggleTodoAsync, deleteTodoAsync } from "features/todos/thunks";
import { TodoItem } from "./todo-item";
import {
  getLoadingToggledTodoIds,
  getLoadingDeletedTodoIds,
} from "features/todos/selectors";

const mapStateToProps = (state) => ({
  loadingToggledTodoIds: getLoadingToggledTodoIds(state),
  loadingDeletedTodoIds: getLoadingDeletedTodoIds(state),
});

const mapDispatchToProps = {
  toggleTodoAction: toggleTodoAsync,
  deleteTodoAction: deleteTodoAsync,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type OwnProps = {
  todo: any;
  toggleTodoAction: any;
  deleteTodoAction: any;
};

export type ContainerProps = ConnectedProps<typeof connector> & OwnProps;
export const TodoItemContainer = connector(TodoItem);
