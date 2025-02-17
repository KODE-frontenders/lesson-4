import { Spinner } from "features/todos/atoms/spinner/spinner";
import React from "react";
import { Checkbox } from "features/todos/atoms/checkbox/checkbox";
import styled from "styled-components";

interface LabelProps {
  completed: any;
  theme: any;
}

type Props = {
  todo: any;
  onToggleHandler: any;
  loadingToggledTodoIds: any;
};

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledSpan = styled.span<LabelProps>`
  margin-left: ${({ theme }) => theme.sizeGrid.base}px;
  text-decoration: ${({ completed }) => completed && "line-through"};
  color: ${({ completed, theme }) => completed && theme.colors.gray};
`;

export const Todo: React.FC<Props> = ({
  todo,
  onToggleHandler,
  loadingToggledTodoIds,
}) => {
  const { _id: id, completed, description } = todo;

  return (
    <StyledLabel>
      {loadingToggledTodoIds.includes(id) ? (
        <Spinner />
      ) : (
        <Checkbox completed={completed} onToggle={onToggleHandler} />
      )}

      <StyledSpan completed={completed}>{description}</StyledSpan>
    </StyledLabel>
  );
};
