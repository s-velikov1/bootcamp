import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTER_KEYS } from '../../../common/consts/app-keys.const';
import DeleteTodo from '../deleteTodo.component';
import { TodoProps } from '../../types/todo.types';
import { StyledViewButton } from '../view-todo.styled';
import { CompleteToggle } from '../complete-toggle.component';

export default function TodoElement({ todo }: TodoProps) {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(ROUTER_KEYS.TODO, { state: { todoId: todo.id } });
  };

  return (
    <tr>
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td className="actions">
        <StyledViewButton onClick={handleViewClick}>View</StyledViewButton>
        <DeleteTodo todoId={todo.id} />
        <CompleteToggle todo={todo} />
      </td>
    </tr>
  );
}
