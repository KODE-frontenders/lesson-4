import { connect, ConnectedProps } from "react-redux";
import { addTodoAsync } from "features/todos/thunks";
import { TodoAddForm } from "./todo-add-form";

const mapDispatchToProps = {
  addTodoAction: addTodoAsync,
};

const connector = connect(null, mapDispatchToProps);

type OwnProps = {
  closeModal: any;
  addTodoAction: any;
};

export type ContainerProps = ConnectedProps<typeof connector> & OwnProps;

export const TodoAddFormContainer = connector(TodoAddForm);
