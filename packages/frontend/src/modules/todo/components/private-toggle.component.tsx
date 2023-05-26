import React from 'react';
import { ToggleButton } from './toggle.component';
import { TodoProps } from '../types/todo.types';
import { useUpdateTodo } from '../../../utils/useUpdateTodo';

export const PrivateToggle = ({ todo }: TodoProps) => {
  const { updateTodoMutation } = useUpdateTodo();
  const completeToggle = async () => {
    const { id } = todo;
    todo.isPrivate = !todo.isPrivate;
    updateTodoMutation.mutate({ todoId: id, data: todo });
  };

  return <ToggleButton isOn={todo.isPrivate} onToggle={completeToggle} />;
};
