import React from "react";
import styled from "styled-components";
import { ReactComponent as TodosSkeleton } from "shared/icons/todos-skeleton.svg";
import { TodoItemContainer } from "../todo-item/todo-item-container";
import { ContainerProps } from "./todo-list-container";

const StyledSkeleton = styled(TodosSkeleton)`
  color: ${({ theme }) => theme.colors.gray};
`;

const StyledUnorderedList = styled.ul`
  padding-left: 0;
`;

const renderTodoItem = (t) => <TodoItemContainer todo={t} key={t._id} />;

/**
 * @param todos {todo[]} список тудушек
 * @param isLoading {boolean} состояние загрузки тудушек
 * @param ititTodos {func} thunk action для инициализации тудушек
 */

export const TodoList: React.FC<ContainerProps> = ({
  todos = [],
  isLoading = false,
  initTodos,
}) => {
  React.useEffect(() => {
    initTodos();
  }, [initTodos]);

  if (isLoading) {
    return <StyledSkeleton />;
  }

  if (todos.length === 0) {
    return <p>Nothing here 🤷‍♂️</p>;
  }

  return <StyledUnorderedList>{todos.map(renderTodoItem)}</StyledUnorderedList>;
};
