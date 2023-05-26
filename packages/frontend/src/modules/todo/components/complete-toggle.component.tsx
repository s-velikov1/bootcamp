import React from 'react';
import { ToggleButton } from './toggle.component';
import { TodoProps } from '../types/todo.types';
import { useUpdateTodo } from '../../../utils/useUpdateTodo';

export const CompleteToggle = ({ todo }: TodoProps) => {
  const { updateTodoMutation } = useUpdateTodo();
  const completeToggle = async () => {
    const { id } = todo;
    todo.isCompleted = !todo.isCompleted;
    updateTodoMutation.mutate({ todoId: id, data: todo });
  };

  return <ToggleButton isOn={todo.isCompleted} onToggle={completeToggle} />;
};
