import React from 'react';
import { StyledDeleteButton } from './delete-todo.styled';
import { useDeleteTodo } from '../../../utils/useDeleteTodo';

type Props = {
  todoId: string;
};

const DeleteTodo = ({ todoId }: Props) => {
  const { deleteTodoMutation } = useDeleteTodo();
  function deleteHandler(id: string) {
    deleteTodoMutation.mutate(id);
  }

  return (
    <StyledDeleteButton id={todoId} onClick={(e) => deleteHandler(e.currentTarget.id)}>
      Delete
    </StyledDeleteButton>
  );
};

export default DeleteTodo;
